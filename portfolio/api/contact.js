const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateBody(body) {
  if (!body || typeof body !== 'object') {
    return 'Invalid request body.'
  }

  const { name, email, message, website } = body

  if (website) return 'Invalid submission.'
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
    return res.status(400).json({ error: validationError })
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
