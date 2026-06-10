import { Marquee } from '@/components/ui/marquee'
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaUbuntu,
  FaLinux,
  FaGithub,
} from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import {
  SiCplusplus,
  SiLua,
  SiC,
  SiClerk,
  SiFastapi,
  SiTypescript,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiRobloxstudio,
  SiVite,
} from 'react-icons/si'
import { TbSql, TbApi, TbH2 } from 'react-icons/tb'

const SKILL_CATEGORIES = [
  {
    title: 'Backend & Programming',
    direction: 'left',
    speed: 34,
    skills: [
      { icon: FaPython, name: 'Python' },
      { icon: FaJava, name: 'Java' },
      { icon: SiCplusplus, name: 'C++' },
      { icon: SiC, name: 'C' },
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiLua, name: 'Lua' },
      { icon: TbSql, name: 'DB Design (SQL)' },
      { icon: SiClerk, name: 'Clerk' },
      { icon: SiFastapi, name: 'FastAPI' },
      { icon: TbApi, name: 'RestAPI' },
    ],
  },
  {
    title: 'Frontend & Web',
    direction: 'right',
    speed: 38,
    skills: [
      { icon: FaHtml5, name: 'HTML' },
      { icon: FaCss3Alt, name: 'CSS' },
      { icon: IoLogoJavascript, name: 'JavaScript' },
      { icon: FaReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiVite, name: 'Vite' },
    ],
  },
  {
    title: 'Databases',
    direction: 'left',
    speed: 32,
    skills: [
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: TbH2, name: 'H2' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiSqlite, name: 'SQLite' },
    ],
  },
  {
    title: 'Developer Tools & Workflow',
    direction: 'right',
    speed: 36,
    skills: [
      { icon: FaDocker, name: 'Docker' },
      { icon: FaGitAlt, name: 'Git' },
      { icon: FaUbuntu, name: 'Ubuntu' },
      { icon: FaLinux, name: 'Linux' },
      { icon: FaGithub, name: 'GitHub' },
      { icon: SiRobloxstudio, name: 'Roblox Studio' },
    ],
  },
]

function SkillMarqueeItem({ icon: SkillIcon, name }) {
  return (
    <span className="skill-icon skill-icon--marquee">
      <SkillIcon aria-hidden="true" />
      <span className="skill-name">{name}</span>
    </span>
  )
}

export default function SkillsSection() {
  return (
    <div className="skills-boxes">
      {SKILL_CATEGORIES.map((category) => (
        <div className="skill-box skill-box--marquee" key={category.title}>
          <h3>{category.title}</h3>
          <div className="skill-marquee-track">
            <Marquee
              direction={category.direction}
              speed={category.speed}
              pauseOnHover
              className="skill-marquee"
            >
              {category.skills.map((skill) => (
                <SkillMarqueeItem
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                />
              ))}
            </Marquee>
          </div>
        </div>
      ))}
    </div>
  )
}
