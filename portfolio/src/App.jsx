import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import resumePdf from './assets/William_Li_Resume.pdf'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa'
import { Analytics } from '@vercel/analytics/react'
import CommandPalette from './CommandPalette'
import ThemeToggle from './ThemeToggle'
import ContactForm from './components/ContactForm'
import SkillsSection from './components/SkillsSection'
import Reveal, { HeroReveal } from './components/Reveal'
import SpotlightCard from './components/SpotlightCard'

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

function SectionHead({ title, meta }) {
  return (
    <Reveal className="section-head">
      <h2>{title}</h2>
      <span className="section-rule" aria-hidden="true" />
      {meta && <span className="section-meta">{meta}</span>}
    </Reveal>
  )
}

function App() {
  const [cmdOpen, setCmdOpen] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
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
              <button className="cmd-trigger" onClick={() => setCmdOpen(true)} aria-label="Open command palette">
                <kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="top">
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-glow" aria-hidden="true" />
            <div className="container">
              <HeroReveal order={0}>
                <p className="hero-status">
                  <span className="status-dot" aria-hidden="true" />
                  SWE Intern @ Vici Learning · Summer 2026
                </p>
              </HeroReveal>
              <HeroReveal order={1}>
                <h1>William Li</h1>
              </HeroReveal>
              <HeroReveal order={2}>
                <p className="lead">
                  Software Systems student at <strong>SFU</strong>, solving problems in{' '}
                  <strong>C++</strong> and shipping full-stack apps with React, Docker, and the cloud.
                </p>
              </HeroReveal>
              <HeroReveal order={3}>
                <div className="hero-actions">
                  <a className="btn primary" href="#contact">Get in touch</a>
                  <a className="btn ghost" href={resumePdf} target="_blank" rel="noopener noreferrer">
                    Resume ↗
                  </a>
                </div>
              </HeroReveal>
              <HeroReveal order={4}>
                <div className="hero-socials">
                  <a href="https://github.com/WL0000000" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/william-li-6283aa333/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href="https://www.instagram.com/hugeburgerbigcrunch/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram"><FaInstagram /></a>
                  <a href="https://www.youtube.com/@williamli8565" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube"><FaYoutube /></a>
                  <a href="https://discordapp.com/users/389859838378770432" target="_blank" rel="noopener noreferrer" title="Discord" aria-label="Discord"><FaDiscord /></a>
                </div>
              </HeroReveal>
            </div>
            <span className="scroll-hint" aria-hidden="true">scroll</span>
          </section>

          <section className="section" id="about">
            <div className="container">
              <SectionHead title="About" meta="Coquitlam, BC" />
              <Reveal delay={0.1}>
                <div className="about-grid">
                  <div className="about-prose">
                    <p>
                      Second year Software Systems student at SFU, building applications and solving
                      problems primarily in <strong>C++</strong>, with experience across React,
                      TypeScript, Java, Python and more.
                    </p>
                    <p>
                      I have designed and shipped scalable web apps, REST APIs and AI-backed systems,
                      with hands-on experience using Docker, CI/CD pipelines and cloud platforms like
                      AWS and GCP.
                    </p>
                    <p>
                      Currently getting deeper into DevOps and cloud computing, and always looking for
                      projects that push me to learn something new.
                    </p>
                  </div>
                  <ul className="facts">
                    <li>
                      <span className="fact-label">Now</span>
                      <span className="fact-value">SWE Intern @ Vici Learning</span>
                    </li>
                    <li>
                      <span className="fact-label">Focus</span>
                      <span className="fact-value">DevOps &amp; cloud computing</span>
                    </li>
                    <li>
                      <span className="fact-label">Location</span>
                      <span className="fact-value">Coquitlam, BC</span>
                    </li>
                    <li>
                      <span className="fact-label">Off hours</span>
                      <span className="fact-value">Competitive gaming, doomscrolling, grinding LeetCode</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="section" id="skills">
            <div className="container">
              <SectionHead title="Skills" meta="04 areas" />
              <SkillsSection />
            </div>
          </section>

          <section className="section" id="experience">
            <div className="container">
              <SectionHead title="Experience" meta="2024 — present" />
              <div className="experience-timeline">
                <Reveal delay={0.05}>
                  <div className="experience-item">
                    <img src="/vici.png" alt="Vici Learning" className="experience-icon" />
                    <div className="experience-text">
                      <div className="experience-header">
                        <h3>Software Engineering Intern</h3>
                        <span className="experience-date">Jun 2026 — Aug 2026</span>
                      </div>
                      <p className="experience-company">Vici Learning</p>
                      <p className="experience-description">
                        Built client-facing automation to streamline data pipelines across multiple
                        SaaS platforms.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="experience-item">
                    <img src="/image.png" alt="Freelance Software Developer" className="experience-icon" />
                    <div className="experience-text">
                      <div className="experience-header">
                        <h3>Freelance Software Developer</h3>
                        <span className="experience-date">Jul 2025 — present</span>
                      </div>
                      <p className="experience-company">Independent Developer</p>
                      <p className="experience-description">
                        Developed software and web applications for clients on commission.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.19}>
                  <div className="experience-item">
                    <img src="/software-systems-logo.png" alt="SFU Software Systems logo" className="experience-icon" />
                    <div className="experience-text">
                      <div className="experience-header">
                        <h3>Software Systems</h3>
                        <span className="experience-date">Sep 2024 — present</span>
                      </div>
                      <p className="experience-company">Simon Fraser University</p>
                      <p className="experience-description">
                        Studying Software Systems, focusing on systems programming, full-stack
                        development, and software design.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="section" id="projects">
            <div className="container">
              <SectionHead title="Projects" meta="02 selected" />
              <div className="cards">
                <Reveal delay={0.05}>
                  <SpotlightCard
                    as="a"
                    href="https://devpost.com/software/escape-from-windows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                  >
                    <div className="project-media">
                      <img src="/escape-from-windows.png" alt="Escape From Windows gameplay" loading="lazy" />
                    </div>
                    <div className="project-body">
                      <div className="project-meta">
                        <span className="project-tag project-tag--win">Winner — SystemHacks 2026</span>
                        <span className="project-arrow" aria-hidden="true">↗</span>
                      </div>
                      <h3>Escape From Windows</h3>
                      <p>A point-and-click puzzle game built in 24 hours.</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
                <Reveal delay={0.12}>
                  <SpotlightCard
                    as="a"
                    href="https://github.com/WL0000000/python-automaton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                  >
                    <div className="project-media project-media--code" aria-hidden="true">
                      <span>$ automaton run --headless</span>
                      <span className="code-line-accent">→ scraping 128 pages…</span>
                      <span>✓ done in 4.2s</span>
                    </div>
                    <div className="project-body">
                      <div className="project-meta">
                        <span className="project-tag">In development</span>
                        <span className="project-arrow" aria-hidden="true">↗</span>
                      </div>
                      <h3>Automaton</h3>
                      <p>Python-powered web scraping and browser automation.</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="section" id="contact">
            <div className="container">
              <SectionHead title="Contact" meta="wla230@sfu.ca" />
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-left">
              <div className="footer-name">William Li</div>
              <p className="footer-email">wla230@sfu.ca</p>
              <div className="footer-icons">
                <a href="https://github.com/WL0000000" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/william-li-6283aa333/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://discordapp.com/users/389859838378770432" target="_blank" rel="noopener noreferrer" title="Discord" aria-label="Discord"><FaDiscord /></a>
              </div>
              <p className="footer-copyright">© 2026 William Li</p>
            </div>
            <div className="footer-right">
              <div className="footer-nav-section">
                <div className="footer-nav">
                  <p className="footer-nav-heading">Sections</p>
                  <a href="#about">About</a>
                  <a href="#skills">Skills</a>
                  <a href="#experience">Experience</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </div>
                <div className="footer-nav">
                  <p className="footer-nav-heading">Pages</p>
                  <a href="/">Home</a>
                  <Link to="/blog">Blog</Link>
                  <a href={resumePdf} target="_blank" rel="noopener noreferrer">Resume</a>
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
          </div>
        </footer>

        <Analytics />
        <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
      </div>
    </MotionConfig>
  )
}

export default App
