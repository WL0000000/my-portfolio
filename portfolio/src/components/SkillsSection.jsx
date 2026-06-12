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
  SiNextdotjs,
  SiExpress,
  SiAmazonwebservices,
  SiGooglecloud,
  SiSupabase,
  SiRailway,
  SiResend,
} from 'react-icons/si'
import { TbSql, TbApi, TbH2 } from 'react-icons/tb'

const SKILL_CATEGORIES = [
  {
    title: 'Backend & Programming',
    skills: [
      { icon: FaPython, name: 'Python' },
      { icon: FaJava, name: 'Java' },
      { icon: SiCplusplus, name: 'C++' },
      { icon: SiC, name: 'C' },
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiLua, name: 'Lua' },
      { icon: TbSql, name: 'SQL' },
      { icon: SiClerk, name: 'Clerk' },
      { icon: SiFastapi, name: 'FastAPI' },
      { icon: SiExpress, name: 'Express.js' },
      { icon: SiResend, name: 'Resend' },
      { icon: TbApi, name: 'RestAPI' },
    ],
  },
  {
    title: 'Frontend & Web',
    skills: [
      { icon: FaHtml5, name: 'HTML' },
      { icon: FaCss3Alt, name: 'CSS' },
      { icon: IoLogoJavascript, name: 'JavaScript' },
      { icon: FaReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiVite, name: 'Vite' },
      { icon: SiNextdotjs, name: 'Next.js' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: TbH2, name: 'H2' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiSqlite, name: 'SQLite' },
      { icon: SiSupabase, name: 'Supabase' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { icon: FaDocker, name: 'Docker' },
      { icon: FaGitAlt, name: 'Git' },
      { icon: SiAmazonwebservices, name: 'AWS' },
      { icon: SiGooglecloud, name: 'GCP' },
      { icon: SiRailway, name: 'Railway' },
      { icon: FaUbuntu, name: 'Ubuntu' },
      { icon: FaLinux, name: 'Linux' },
      { icon: FaGithub, name: 'GitHub' },
      { icon: SiRobloxstudio, name: 'Roblox Studio' },
    ],
  },
]

export default function SkillsSection() {
  return (
    <div className="skills-boxes">
      {SKILL_CATEGORIES.map((category) => (
        <div className="skill-box" key={category.title}>
          <h3>{category.title}</h3>
          <div className="skill-pills">
            {category.skills.map(({ icon: SkillIcon, name }) => (
              <span className="skill-icon" key={name}>
                <SkillIcon aria-hidden="true" />
                <span className="skill-name">{name}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
