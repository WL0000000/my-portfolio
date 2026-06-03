import { useRef, useState } from 'react'
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'

const INITIAL_FORM = { name: '', email: '', message: '', website: '' }

function validate({ name, email, message, website }) {
  if (website) return 'Invalid submission.'
  if (!name.trim()) return 'Please enter your name.'
  if (name.trim().length > 100) return 'Name is too long.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email.'
  if (message.trim().length < 10) return 'Message must be at least 10 characters.'
  if (message.trim().length > 2000) return 'Message is too long (max 2000 characters).'
  return null
}

export default function ContactForm() {
  const startedAtRef = useRef(Date.now())
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (status === 'error') {
      setStatus('idle')
      setError('')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationError = validate(form)
    if (validationError) {
      setStatus('error')
      setError(validationError)
      return
    }

    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: form.website,
          startedAt: startedAtRef.current,
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(data.error || 'Too many messages sent recently. Please try again later.')
        }
        throw new Error(data.error || 'Failed to send message. Please try again.')
      }

      setForm(INITIAL_FORM)
      startedAtRef.current = Date.now()
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="contact-card">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-row">
          <label className="contact-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              required
              disabled={status === 'sending'}
            />
          </label>
          <label className="contact-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={status === 'sending'}
            />
          </label>
        </div>

        <label className="contact-field">
          <span>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project, question, or collaboration idea..."
            rows={5}
            required
            disabled={status === 'sending'}
          />
        </label>

        {/* Honeypot — hidden from users, catches bots */}
        <label className="contact-honeypot" aria-hidden="true">
          <span>Website</span>
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>

        <div className="contact-form-actions">
          <button
            type="submit"
            className="btn primary contact-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
            <FaPaperPlane />
          </button>
          <a className="contact-email-link" href="mailto:wla230@sfu.ca">
            <FaEnvelope />
            wla230@sfu.ca
          </a>
        </div>

        {status === 'success' && (
          <p className="contact-feedback contact-feedback--success" role="status">
            Message sent! I&apos;ll get back to you soon.
          </p>
        )}
        {status === 'error' && error && (
          <p className="contact-feedback contact-feedback--error" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  )
}
