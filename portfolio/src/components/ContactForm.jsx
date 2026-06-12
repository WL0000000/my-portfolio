import { useRef, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

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
  const [status, setStatus] = useState('idle')
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
    <div className="contact-shell">
      <aside className="contact-aside">
        <h3 className="contact-aside-title">Open to new opportunities</h3>
        <p className="contact-aside-text">
          For project inquiries, collaboration, or general questions, send a message
          or reach out through any of the links below.
        </p>
        <div className="contact-direct-links">
          <a className="contact-direct-link" href="mailto:wla230@sfu.ca">
            <FaEnvelope aria-hidden="true" />
            <span className="contact-direct-text">
              <span className="contact-direct-label">Email</span>
              <span className="contact-direct-value">wla230@sfu.ca</span>
            </span>
          </a>
          <a
            className="contact-direct-link"
            href="https://www.linkedin.com/in/william-li-6283aa333/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin aria-hidden="true" />
            <span className="contact-direct-text">
              <span className="contact-direct-label">LinkedIn</span>
              <span className="contact-direct-value">william-li</span>
            </span>
          </a>
          <a
            className="contact-direct-link"
            href="https://github.com/WL0000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub aria-hidden="true" />
            <span className="contact-direct-text">
              <span className="contact-direct-label">GitHub</span>
              <span className="contact-direct-value">WL0000000</span>
            </span>
          </a>
        </div>
      </aside>

      <div className="contact-form-panel">
        {status === 'success' && (
          <div className="contact-status contact-status--success" role="status">
            <p className="contact-status-title">Message sent</p>
            <p className="contact-status-text">
              Thanks for reaching out. I&apos;ll reply to your email as soon as I can.
            </p>
          </div>
        )}

        {status === 'error' && error && (
          <div className="contact-status contact-status--error" role="alert">
            <p className="contact-status-title">Couldn&apos;t send message</p>
            <p className="contact-status-text">{error}</p>
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form-row">
            <label className="contact-field">
              <span className="contact-field-label">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                autoComplete="name"
                required
                disabled={status === 'sending'}
              />
            </label>
            <label className="contact-field">
              <span className="contact-field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                autoComplete="email"
                required
                disabled={status === 'sending'}
              />
            </label>
          </div>

          <label className="contact-field">
            <span className="contact-field-label">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
              rows={6}
              required
              disabled={status === 'sending'}
            />
          </label>

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

          <div className="contact-form-footer">
            <button
              type="submit"
              className="btn primary contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
