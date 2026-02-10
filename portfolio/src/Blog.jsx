import './App.css'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">William Li</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </nav>
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
