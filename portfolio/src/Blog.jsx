import './App.css'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import resumePdf from './assets/William_Li_Resume.pdf'

function Blog() {
  return (
    <div className="page">
      <header className="site-header">
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
      </header>

      <main>
        <section className="wip-section">
          <div className="wip-content">
            <h1>Blog</h1>
            <p className="wip-text">Work In Progress</p>
            <p className="wip-description">This page is currently under construction. Check back soon!</p>
            <Link to="/" className="btn primary">Back to Home</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Blog
