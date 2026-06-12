import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from './useInView'
import resumePdf from './assets/William_Li_Resume.pdf'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaDiscord, FaBullseye, FaGamepad, FaMapMarkerAlt, FaFileAlt, FaEnvelope, FaCode } from 'react-icons/fa'
import { Analytics } from "@vercel/analytics/react"
import CommandPalette from './CommandPalette'
import ThemeToggle from './ThemeToggle'
import ContactForm from './components/ContactForm'
import TypewriterText from './components/TypewriterText'
import SkillsSection from './components/SkillsSection'
import { GridPattern } from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

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
          <button className="cmd-trigger" onClick={() => setCmdOpen(true)} aria-label="Open command palette">
            Search...
            <kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd>
          </button>
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
            <h1>
              <TypewriterText
                text="William Li"
                className="hero-title-line"
                start={heroStep >= 0}
                onComplete={() => setHeroStep(1)}
              />
              <TypewriterText
                as="span"
                className="hero-subtitle"
                text="Student Software Developer"
                start={heroStep >= 1}
                onComplete={() => setHeroStep(2)}
              />
            </h1>
            <p className="lead">
              <TypewriterText
                text="Software Systems @ SFU"
                start={heroStep >= 2}
                onComplete={() => setHeroStep(3)}
              />
            </p>
            <div className={`hero-actions${heroStep >= 3 ? ' hero-actions--visible' : ''}`}>
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
          </div>
          <div className="about-grid">
            <p>
              Second year Software Systems student at SFU, building applications and solving problems primarily in C++, with experience across React, TypeScript, Java, Python and more.<br/><br/>
              I have designed and shipped scalable web apps, REST APIs and AI-backed systems, with hands-on experience using Docker, CI/CD pipelines and cloud platforms like AWS and GCP.<br/><br/>
              Currently getting deeper into DevOps and cloud computing, and always looking for projects that push me to learn something new.
            </p>
            <ul className="stats">
              <li>
                <span><FaBullseye /> Focus</span>
                <strong>DevOps, Cloud Computing</strong>
              </li>
              <li>
                <span><FaGamepad /> Hobbies</span>
                <strong>Competitive gaming, doomscrolling, grinding LeetCode</strong>
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
          </div>
          <SkillsSection />
        </section>

        <section className={`section ${experienceInView ? 'fade-in' : ''}`} ref={experienceRef} id="experience">
          <div className="section-title">
            <h2>Experience</h2>
          </div>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-item-content">
                <img src="/image.png" alt="Freelance Software Developer" className="experience-icon" />
                <div className="experience-text">
                  <div className="experience-header">
                    <h3>Freelance Software Developer</h3>
                    <span className="experience-date">Jul 2025 - Present</span>
                  </div>
                  <p className="experience-company">Independent Developer</p>
                  <p className="experience-description">Developed software and web applications for clients on commission.</p>
                </div>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-item-content">
                <img src="/software-systems-logo.png" alt="SFU Software Systems logo" className="experience-icon" />
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
          </div>
          <div className="cards">
            <a href="https://devpost.com/software/escape-from-windows" target="_blank" rel="noopener noreferrer" className="project-card project-card-featured" style={{ '--project-image': "url('/escape-from-windows.png')" }}>
              <div className="project-content">
                <div className="project-badge">🏆 SystemHacks 2026 Winner</div>
                <h3>Escape From Windows</h3>
                <p>Point-and-click puzzle game</p>
              </div>
            </a>
            <a href="https://github.com/WL0000000/python-automaton" target="_blank" rel="noopener noreferrer" className="project-card project-card-featured" style={{ '--project-image': 'linear-gradient(135deg, #312e81 0%, #1e1b4b 55%, #0b0b16 100%)' }}>
              <div className="project-content">
                <div className="project-badge">🚧 Work in progress</div>
                <h3>Automaton</h3>
                <p>Python-powered web scraping and browser automation.</p>
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
              <p className="footer-nav-heading">Sections</p>
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
            <a href="https://sfussss.org/" target="_blank" rel="noopener noreferrer" title="Software Systems Student Society">
              <img src="/ssss-logo.png" alt="Software Systems Student Society" className="footer-logo" />
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
