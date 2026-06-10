import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from './useInView'
import resumePdf from './assets/William_Li_Resume.pdf'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaDiscord, FaBullseye, FaGamepad, FaMapMarkerAlt, FaFileAlt, FaEnvelope } from 'react-icons/fa'
import { Analytics } from "@vercel/analytics/react"
import CommandPalette from './CommandPalette'
import ThemeToggle from './ThemeToggle'
import ContactForm from './components/ContactForm'
import TypewriterText from './components/TypewriterText'
import SkillsSection from './components/SkillsSection'
import { BorderBeam } from '@/components/ui/border-beam'
import { GridPattern } from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

function App() {
  const [cmdOpen, setCmdOpen] = useState(false)
  const [heroStep, setHeroStep] = useState(0)
  const [aboutRef, aboutInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [skillsRef, skillsInView] = useInView()
  const [experienceRef, experienceInView] = useInView()
  const [contactRef, contactInView] = useInView()

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
          <div className="cmd-trigger-wrapper">
            <div className="cmd-glow-outer" aria-hidden="true" />
            <div className="cmd-glow-inner" aria-hidden="true" />
            <button className="cmd-trigger" onClick={() => setCmdOpen(true)} aria-label="Open command palette">
              Search...
              <kbd>⌘K</kbd>
            </button>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="hero relative overflow-hidden" id="top">
          <GridPattern
            width={40}
            height={40}
            squares={[
              [4, 3],
              [7, 1],
              [9, 4],
              [12, 2],
              [3, 6],
            ]}
            className={cn(
              "fill-indigo-500/20 stroke-indigo-500/60",
              "mask-[radial-gradient(900px_circle_at_top_right,white,transparent)]",
              "inset-y-[-30%] h-[160%] skew-y-12",
            )}
          />
          <div className="hero-content relative z-10">
            <p className="eyebrow">
              <TypewriterText
                text="Portfolio 2026"
                start={heroStep >= 0}
                onComplete={() => setHeroStep(1)}
              />
            </p>
            <h1>
              <TypewriterText
                text="William Li"
                className="hero-title-line"
                start={heroStep >= 1}
                onComplete={() => setHeroStep(2)}
              />
              <TypewriterText
                as="span"
                className="hero-subtitle"
                text="Student Software Developer"
                start={heroStep >= 2}
                onComplete={() => setHeroStep(3)}
              />
            </h1>
            <p className="lead">
              <TypewriterText
                text="Software Systems @ SFU"
                start={heroStep >= 3}
                onComplete={() => setHeroStep(4)}
              />
            </p>
            <div className={`hero-actions${heroStep >= 4 ? ' hero-actions--visible' : ''}`}>
              <a className="btn primary" href={resumePdf} target="_blank" rel="noopener noreferrer">Resume <FaFileAlt /></a>
              <a className="btn ghost" href="#contact">Get in touch <FaEnvelope /></a>
            </div>
          </div>
          <div className="hero-card relative z-10">
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
            <BorderBeam duration={8} lightWidth={200} lightColor="#818cf8" borderWidth={1} />
            <p >
              Hi! I'm William Li, a Software Systems student at SFU and aspiring Software Developer.<br/><br/>
              I enjoy building everything from games to secure systems. Currently, my passion lies within game development, where I focus on creating fun and engaging experiences for users on Roblox.<br/><br/>
              I have a background in full-stack development, including React, Node.js, Docker, and AWS, and I am always eager to learn new technologies and improve my skills!
            </p>
            <ul className="stats">
              <li>
                <span><FaBullseye /> Focus</span>
                <strong>FullStack Development</strong>
              </li>
              <li>
                <span><FaGamepad /> Hobbies</span>
                <strong>Competitive Gaming, Game Development, Music Production</strong>
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
          <SkillsSection />
        </section>

        <section className={`section ${experienceInView ? 'fade-in' : ''}`} ref={experienceRef} id="experience">
          <div className="section-title">
            <h2>Experience</h2>
            <p>My professional journey and work experience.</p>
          </div>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-item-content">
                <img src="/0eeeb19633422b1241f4306419a0f15f39d58de9.png" alt="Roblox Game Developer" className="experience-icon" />
                <div className="experience-text">
                  <div className="experience-header">
                    <h3>Roblox Game Developer</h3>
                    <span className="experience-date">Jul 2025 - Present</span>
                  </div>
                  <p className="experience-company">Independent Developer</p>
                  <p className="experience-description">Full-stack game development in Lua using Roblox Studio.</p>
                </div>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-item-content">
                <img src="/Adobe Express - file.png" alt="Software Systems" className="experience-icon" />
                <div className="experience-text">
                  <div className="experience-header">
                    <h3>Software Systems</h3>
                    <span className="experience-date">Sept 2024 - Present</span>
                  </div>
                  <p className="experience-company">Simon Fraser University</p>
                  <p className="experience-description">Studying Software Systems, focusing on systems programming, full-stack development, and software design.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${projectsInView ? 'fade-in' : ''}`} ref={projectsRef} id="projects">
          <div className="section-title">
            <h2>Projects</h2>
            <p>Solo and collaborative projects I've worked on.</p>
          </div>
          <div className="cards">
            <a href="https://devpost.com/software/escape-from-windows" target="_blank" rel="noopener noreferrer" className="project-card project-card-featured">
              <div className="project-content">
                <div className="project-badge">🏆 SystemHacks 2026 Winner</div>
                <h3>Escape From Windows</h3>
                <p>Point and click puzzle game</p>
              </div>
            </a>
            <a href="https://github.com/WL0000000/python-automaton" target="_blank" rel="noopener noreferrer" className="project-card project-card-featured" style={{ '--project-image': "url('/Python-Basics-Chapter-on-Web-Scraping_Watermarked.f8d56f56c22c.jpg')" }}>
              <div className="project-content">
                <div className="project-badge">🚧 Work in Progress</div>
                <h3>Automaton</h3>
                <p>Python-powered website scraping and browser automation.</p>
              </div>
            </a>
          </div>
        </section>

        <section className={`section contact ${contactInView ? 'fade-in' : ''}`} ref={contactRef} id="contact">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Have a question or want to work together? Drop me a line.</p>
          </div>
          <ContactForm />
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
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-nav">
              <p className="footer-nav-heading">Pages</p>
              <a href="/">Home</a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer">Resume</a>
              <Link to="/blog">Blog</Link>
            </div>
          </div>
          <div className="footer-logos">
            <a href="https://www.sfu.ca/fas/study/future-undergraduates/programs/major/software-systems-bachelor-science.html" target="_blank" rel="noopener noreferrer" title="Simon Fraser University">
              <img src="/sfu-logo.png" alt="Simon Fraser University" className="footer-logo" />
            </a>
            <a href="https://sfussss.org/" target="_blank" rel="noopener noreferrer" title="Software Systems Program">
              <img src="/Adobe Express - file (1).png" alt="Software Systems Engineering" className="footer-logo" />
            </a>
          </div>
        </div>
      </footer>
      <Analytics />
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
    </div>
  )
}

export default App
