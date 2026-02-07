import './App.css'
import { useInView } from './useInView'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaDiscord, FaBullseye, FaGamepad, FaMapMarkerAlt } from 'react-icons/fa'

function App() {
  const [aboutRef, aboutInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [skillsRef, skillsInView] = useInView()
  const [contactRef, contactInView] = useInView()

  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">William Li</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-content">
            <p className="eyebrow">Portfolio 2026</p>
            <h1>
              William Li
              <span>Software Developer</span>
            </h1>
            <p className="lead">
              Software Systems @ SFU
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="https://drive.google.com/file/d/temp/view" target="_blank" rel="noopener noreferrer">Resume</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-label">Connect</div>
            <h2>Let's Connect</h2>
            <div className="social-links">
              <a href="https://github.com/WL0000000" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/william-li-6283aa333/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /> LinkedIn</a>
              <a href="https://www.instagram.com/hugeburgerbigcrunch/" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /> Instagram</a>
              <a href="https://www.youtube.com/@williamli8565" target="_blank" rel="noopener noreferrer" title="YouTube"><FaYoutube /> YouTube</a>
              <a href="https://discordapp.com/users/389859838378770432" target="_blank" rel="noopener noreferrer" title="Discord"><FaDiscord /> Discord</a>
            </div>
          </div>
        </section>

        <section className={`section ${aboutInView ? 'fade-in' : ''}`} ref={aboutRef} id="about">
          <div className="section-title">
            <h2>About</h2>
            <p>A short intro and what I care about.</p>
          </div>
          <div className="about-grid">
            <p >
              Hi! I'm William Li, a Software Systems student at SFU and aspiring Software Developer.<br/><br/>
              I enjoy building everything from games to secure systems. Currently, my passion lies within game development, where I focus on creating fun and engaging experiences for users on Roblox.<br/><br/>
              I have a background in full-stack development, and I am always eager to learn new technologies and improve my skills!
            </p>
            <ul className="stats">
              <li>
                <span><FaBullseye /> Focus</span>
                <strong>FullStack Development</strong>
              </li>
              <li>
                <span><FaGamepad /> Hobbies</span>
                <strong>Gaming, Gym, Art, Music Production</strong>
              </li>
              <li>
                <span><FaMapMarkerAlt /> Location</span>
                <strong>Coquitlam, BC</strong>
              </li>
            </ul>
          </div>
        </section>

        <section className={`section ${skillsInView ? 'fade-in' : ''}`} ref={skillsRef} id="skills">
          <div className="section-title">
            <h2>Skills</h2>
            <p>Core tools I work with.</p>
          </div>
          <div className="skills-boxes">
            <div className="skill-box">
              <h3>Programming/Development</h3>
            </div>
            <div className="skill-box">
              <h3>Web/Frontend</h3>
            </div>
          </div>
        </section>

        <section className={`section ${projectsInView ? 'fade-in' : ''}`} ref={projectsRef} id="projects">
          <div className="section-title">
            <h2>Projects</h2>
            <p>Replace these with your real work.</p>
          </div>
          <div className="cards">
            <article className="project-card">
              <h3>Project One</h3>
              <p>One-line summary of the problem and the result.</p>
              <a href="#">View details</a>
            </article>
            <article className="project-card">
              <h3>Project Two</h3>
              <p>Highlight the tools used and a key outcome.</p>
              <a href="#">View details</a>
            </article>
            <article className="project-card">
              <h3>Project Three</h3>
              <p>Share what you built and why it matters.</p>
              <a href="#">View details</a>
            </article>
          </div>
        </section>

        <section className={`section contact ${contactInView ? 'fade-in' : ''}`} ref={contactRef} id="contact">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Let us build something useful.</p>
          </div>
          <div className="contact-card">
            <p>Send a message to collaborate or ask a question.</p>
            <a className="btn primary" href="mailto:your-email@example.com">
              your-email@example.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-left">
          <div className="footer-name">William Li</div>
          <p className="footer-email">wla230@sfu.ca</p>
          <div className="footer-icons">
            <a href="https://github.com/WL0000000" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/william-li-6283aa333/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://discordapp.com/users/389859838378770432" target="_blank" rel="noopener noreferrer" title="Discord">
              <FaDiscord />
            </a>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 William Li</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-nav-section">
            <div className="footer-nav">
              <p className="footer-nav-heading">Landing</p>
              <a href="#about">About Me</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-nav">
              <p className="footer-nav-heading">Pages</p>
              <a href="/">Home</a>
              <a href="/resume">Resume</a>
              <a href="/blog">Blog</a>
            </div>
          </div>
          <div className="footer-logos">
            <a href="https://www.sfu.ca/fas/study/future-undergraduates/programs/major/software-systems-bachelor-science.html" target="_blank" rel="noopener noreferrer" title="Simon Fraser University">
              <img src="/sfu-logo.png" alt="Simon Fraser University" className="footer-logo" />
            </a>
            <a href="https://sfussss.org/" target="_blank" rel="noopener noreferrer" title="Software Systems Program">
              <img src="/logo.png" alt="Software Systems Engineering" className="footer-logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
