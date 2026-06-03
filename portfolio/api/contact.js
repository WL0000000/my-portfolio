import { getCache } from '@vercel/functions'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_FORM_TIME_MS = 3000
const MAX_FORM_TIME_MS = 24 * 60 * 60 * 1000
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_SEC = 3600

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  if (Array.isArray(forwarded) && forwarded[0]) {
    return forwarded[0].split(',')[0].trim()
  }
  return req.headers['x-real-ip'] || 'unknown'
}

async function checkRateLimit(ip) {
  try {
    const cache = getCache()
    const key = `contact-rate:${ip}`
    const record = await cache.get(key)

    if (!record) {
      await cache.set(key, { count: 1 }, { ttl: RATE_LIMIT_WINDOW_SEC })
      return null
    }

    if (record.count >= RATE_LIMIT_MAX) {
      return 'Too many messages sent recently. Please try again in about an hour.'
    }

    await cache.set(
      key,
      { count: record.count + 1 },
      { ttl: RATE_LIMIT_WINDOW_SEC }
    )
    return null
  } catch (err) {
    console.error('Rate limit check failed:', err)
    return null
  }
}

function validateBody(body) {
  if (!body || typeof body !== 'object') {
    return 'Invalid request body.'
  }

  const { name, email, message, website, startedAt } = body

  if (website) return 'Invalid submission.'

  if (typeof startedAt !== 'number') {
    return 'Invalid submission.'
  }

  const elapsed = Date.now() - startedAt
  if (elapsed < MIN_FORM_TIME_MS || elapsed > MAX_FORM_TIME_MS) {
    return 'Invalid submission.'
  }

  if (!name?.trim()) return 'Name is required.'
  if (name.trim().length > 100) return 'Name is too long.'
  if (!EMAIL_REGEX.test(email || '')) return 'Valid email is required.'
  if (!message?.trim()) return 'Message is required.'
  if (message.trim().length < 10) return 'Message must be at least 10 characters.'
  if (message.trim().length > 2000) return 'Message is too long.'

  return null
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const validationError = validateBody(req.body)
  if (validationError) {
    const status = validationError.startsWith('Too many') ? 429 : 400
    return res.status(status).json({ error: validationError })
  }

  const clientIp = getClientIp(req)
  const rateLimitError = await checkRateLimit(clientIp)
  if (rateLimitError) {
    return res.status(429).json({ error: rateLimitError })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'wla230@sfu.ca'
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured')
    return res.status(500).json({ error: 'Email service is not configured yet.' })
  }

  const { name, email, message } = req.body

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email.trim(),
        subject: `Portfolio message from ${name.trim()}`,
        text: [
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          '',
          message.trim(),
        ].join('\n'),
      }),
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      console.error('Resend API error:', data)
      return res.status(502).json({ error: 'Failed to send email. Please try again later.' })
    }

    return res.status(200).json({ success: true, id: data.id })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Server error. Please try again later.' })
  }
}
