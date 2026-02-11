import './App.css'
import { Link } from 'react-router-dom'
import { useInView } from './useInView'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaDiscord, FaBullseye, FaGamepad, FaMapMarkerAlt, FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaFileAlt, FaEnvelope, FaDocker, FaGitAlt, FaUbuntu, FaLinux } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiCplusplus, SiLua, SiC, SiClerk, SiFastapi, SiTypescript, SiPostgresql, SiSqlite, SiMongodb, SiRobloxstudio, SiVite } from 'react-icons/si'
import { TbSql, TbApi, TbH2 } from 'react-icons/tb'

function App() {
  const [aboutRef, aboutInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [skillsRef, skillsInView] = useInView()
  const [experienceRef, experienceInView] = useInView()
  const [contactRef, contactInView] = useInView()

  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">William Li</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
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
              <span>Student Software Developer</span>
            </h1>
            <p className="lead">
              Software Systems @ SFU
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/resume">Resume <FaFileAlt /></Link>
              <a className="btn ghost" href="#contact">Get in touch <FaEnvelope /></a>
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
          <div className="skills-boxes">
            <div className="skill-box">
              <h3>Backend & Programming</h3>
              <div className="skill-pills">
                <span className="skill-icon">
                  <FaPython />
                  <span className="skill-name">Python</span>
                </span>
                <span className="skill-icon">
                  <FaJava />
                  <span className="skill-name">Java</span>
                </span>
                <span className="skill-icon">
                  <SiCplusplus />
                  <span className="skill-name">C++</span>
                </span>
                <span className="skill-icon">
                  <SiC />
                  <span className="skill-name">C</span>
                </span>
                <span className="skill-icon">
                  <FaNodeJs />
                  <span className="skill-name">Node.js</span>
                </span>
                <span className="skill-icon">
                  <SiLua />
                  <span className="skill-name">Lua</span>
                </span>
                <span className="skill-icon">
                  <TbSql />
                  <span className="skill-name">DB Design(SQL)</span>
                </span>
                <span className="skill-icon">
                  <SiClerk />
                  <span className="skill-name">Clerk</span>
                </span>
                <span className="skill-icon">
                  <SiFastapi />
                  <span className="skill-name">FastAPI</span>
                </span>
                <span className="skill-icon">
                  <TbApi />
                  <span className="skill-name">RestAPI</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <h3>Frontend & Web</h3>
              <div className="skill-pills">
                <span className="skill-icon">
                  <FaHtml5 />
                  <span className="skill-name">HTML</span>
                </span>
                <span className="skill-icon">
                  <FaCss3Alt />
                  <span className="skill-name">CSS</span>
                </span>
                <span className="skill-icon">
                  <IoLogoJavascript />
                  <span className="skill-name">JavaScript</span>
                </span>
                <span className="skill-icon">
                  <FaReact />
                  <span className="skill-name">React</span>
                </span>
                <span className="skill-icon">
                  <SiTypescript />
                  <span className="skill-name">TypeScript</span>
                </span>
                <span className="skill-icon">
                  <SiVite />
                  <span className="skill-name">Vite</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <h3>Databases</h3>
              <div className="skill-pills">
                <span className="skill-icon">
                  <SiPostgresql />
                  <span className="skill-name">PostgreSQL</span>
                </span>
                <span className="skill-icon">
                  <TbH2 />
                  <span className="skill-name">H2</span>
                </span>
                <span className="skill-icon">
                  <SiMongodb />
                  <span className="skill-name">MongoDB</span>
                </span>
                <span className="skill-icon">
                  <SiSqlite />
                  <span className="skill-name">SQLite</span>
                </span>
              </div>
            </div>
            <div className="skill-box">
              <h3>Developer Tools & Workflow</h3>
              <div className="skill-pills">
                <span className="skill-icon">
                  <FaDocker />
                  <span className="skill-name">Docker</span>
                </span>
                <span className="skill-icon">
                  <FaGitAlt />
                  <span className="skill-name">Git</span>
                </span>
                <span className="skill-icon">
                  <FaUbuntu />
                  <span className="skill-name">Ubuntu</span>
                </span>
                <span className="skill-icon">
                  <FaLinux />
                  <span className="skill-name">Linux</span>
                </span>
                <span className="skill-icon">
                  <FaGithub />
                  <span className="skill-name">GitHub</span>
                </span>
                <span className="skill-icon">
                  <SiRobloxstudio />
                  <span className="skill-name">Roblox Studio</span>
                </span>
              </div>
            </div>
          </div>
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
                  <p className="experience-description">🖥️ Full-stack game development</p>
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
                  <p className="experience-description">🎓 Currently studying Software Systems at Simon Fraser University</p>
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
            <article className="project-card">
              <h3>Project Two</h3>
              <p>Highlight the tools used and a key outcome.</p>
              <a href="#">View details</a>
            </article>
          </div>
        </section>

        <section className={`section contact ${contactInView ? 'fade-in' : ''}`} ref={contactRef} id="contact">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Send a message to collaborate or ask a question.</p>
          </div>
          <div className="contact-card">
            <p></p>
            <a 
              className="btn primary" 
              href="mailto:wla230@sfu.ca"
            >
              wla230@sfu.ca
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
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-nav">
              <p className="footer-nav-heading">Pages</p>
              <a href="/">Home</a>
              <a href="https://drive.google.com/file/d/temp/view" target="_blank" rel="noopener noreferrer">Resume</a>
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
    </div>
  )
}

export default App
