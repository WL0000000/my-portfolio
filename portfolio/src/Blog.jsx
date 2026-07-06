import './App.css'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import resumePdf from './assets/William_Li_Resume.pdf'

function Blog() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container">
          <div className="header-left">
            <div className="brand">William Li</div>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer">Resume</a>
            </nav>
          </div>
          <div className="header-actions">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="wip-section">
          <div className="container">
            <div className="wip-content">
              <p className="wip-kicker">Under construction</p>
              <h1>Blog</h1>
              <p className="wip-description">
                Writing about systems, DevOps, and things I'm learning. First posts coming soon.
              </p>
              <Link to="/" className="btn ghost">← Back to home</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Blog
