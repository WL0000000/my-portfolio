import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume">

        <header className="resume-header">
          <h1>William Li</h1>
          <div className="contact">
            <span>604-367-1673</span>
            <span> | </span>
            <span>wla230@sfu.ca</span>
            <span> | </span>
            <a href="https://www.linkedin.com/in/william-li-6283aa333/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span> | </span>
            <a href="https://github.com/WL0000000" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span> | </span>
            <span>Website</span>
          </div>
        </header>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="divider" />

          <div className="skills-block">
            <p><strong>Languages:</strong> TypeScript, JavaScript, Python, Java, C, C++, SQL, Bash, HTML, CSS</p>
            <p><strong>Frameworks:</strong> React, Next.js, Express, Node.js, React Native, FastAPI</p>
            <p><strong>Technologies:</strong> Git, Docker, Roblox Studio, Linux (Ubuntu), PostgreSQL, MySQL, MongoDB, SQLite</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>
          <div className="divider" />

          <div className="entry">
            <div className="entry-header">
              <h3>Escape From Windows</h3>
              <span className="award">
                🏆 SystemHacks 2026 – Most Outstanding Project
              </span>
            </div>
            <ul>
              <li>
                Built a browser-based interactive narrative puzzle game inspired by classic Windows XP UI, using React and modern web technologies.
              </li>
              <li>
                Crafted a simulated desktop environment featuring clickable icons, system dialogs, popups, and puzzles requiring logical deductions to escape.
              </li>
              <li>
                Engineered responsive user interface components that emulate OS behavior and integrate game state, user progression, and event triggers.
              </li>
              <li>
                Incorporated puzzle mechanics such as metadata analysis, hidden clues, and timed events to create depth and replayability.
              </li>
              <li>
                Demonstrated rapid full-stack design and implementation during a 24-hour hackathon, emphasizing UX polish, accessibility, and cross-browser compatibility.
              </li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Volunteer Experience</h2>
          <div className="divider" />

          <div className="entry">
            <div className="entry-header">
              <h3>STEM Tutor – RoboKids</h3>
              <span>May 2023 – Jun 2024</span>
            </div>
            <ul>
              <li>
                Delivered instruction in Scratch, Python, Java, robotics, and 3D design.
              </li>
              <li>
                Guided students through computational thinking and project-based learning.
              </li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-header">
              <h3>Peer Tutor – Simon Fraser University</h3>
              <span>Jan 2025 – Mar 2025</span>
            </div>
            <ul>
              <li>
                Led review sessions before midterms and finals for computing science courses.
              </li>
              <li>
                Assisted peers with debugging strategies and algorithmic problem solving.
              </li>
            </ul>
          </div>

          <div className="entry">
            <div className="entry-header">
              <h3>Roblox Volunteer Debugger</h3>
              <span>Jul 2025 – Present</span>
            </div>
            <ul>
              <li>
                Identified and resolved gameplay bugs in community-developed Roblox games.
              </li>
              <li>
                Collaborated with developers to improve stability and user experience.
              </li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="divider" />

          <div className="entry">
            <div className="entry-header">
              <h3>Simon Fraser University</h3>
              <span>BSc in Computing Science</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Resume;
