import { useEffect, useCallback } from 'react'
import { Command } from 'cmdk'
import {
  FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaDiscord,
  FaFileAlt, FaEnvelope, FaUser, FaCode, FaBriefcase, FaProjectDiagram
} from 'react-icons/fa'
import resumePdf from './assets/William_Li_Resume.pdf'
import './CommandPalette.css'

const NAV_ITEMS = [
  { label: 'About',      icon: <FaUser />,           id: 'about' },
  { label: 'Skills',     icon: <FaCode />,            id: 'skills' },
  { label: 'Experience', icon: <FaBriefcase />,       id: 'experience' },
  { label: 'Projects',   icon: <FaProjectDiagram />,  id: 'projects' },
  { label: 'Contact',    icon: <FaEnvelope />,        id: 'contact' },
]

const LINK_ITEMS = [
  { label: 'GitHub',    icon: <FaGithub />,   href: 'https://github.com/WL0000000' },
  { label: 'LinkedIn',  icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/william-li-6283aa333/' },
  { label: 'Instagram', icon: <FaInstagram />,href: 'https://www.instagram.com/hugeburgerbigcrunch/' },
  { label: 'YouTube',   icon: <FaYoutube />,  href: 'https://www.youtube.com/@williamli8565' },
  { label: 'Discord',   icon: <FaDiscord />,  href: 'https://discordapp.com/users/389859838378770432' },
]

const ACTION_ITEMS = [
  {
    label: 'Open Resume',
    icon: <FaFileAlt />,
    action: () => window.open(resumePdf, '_blank'),
  },
  {
    label: 'Send Email',
    icon: <FaEnvelope />,
    action: () => { window.location.href = 'mailto:wla230@sfu.ca' },
  },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function CommandPalette({ open, onOpenChange }) {
  const handleKeyDown = useCallback((e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      onOpenChange(prev => !prev)
    }
    if (e.key === 'Escape') {
      onOpenChange(false)
    }
  }, [onOpenChange])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command Palette"
      className="cmd-dialog"
    >
      <div className="cmd-overlay" onClick={() => onOpenChange(false)} />
      <div className="cmd-panel">
        <Command.Input
          className="cmd-input"
          placeholder="Type a command or search..."
          autoFocus
        />
        <Command.List className="cmd-list">
          <Command.Empty className="cmd-empty">No results found.</Command.Empty>

          <Command.Group heading="Navigate" className="cmd-group">
            {NAV_ITEMS.map(({ label, icon, id }) => (
              <Command.Item
                key={id}
                value={label}
                className="cmd-item"
                onSelect={() => {
                  onOpenChange(false)
                  setTimeout(() => scrollTo(id), 80)
                }}
              >
                <span className="cmd-item-icon">{icon}</span>
                {label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Links" className="cmd-group">
            {LINK_ITEMS.map(({ label, icon, href }) => (
              <Command.Item
                key={label}
                value={label}
                className="cmd-item"
                onSelect={() => {
                  onOpenChange(false)
                  window.open(href, '_blank')
                }}
              >
                <span className="cmd-item-icon">{icon}</span>
                {label}
                <span className="cmd-item-hint">↗</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Actions" className="cmd-group">
            {ACTION_ITEMS.map(({ label, icon, action }) => (
              <Command.Item
                key={label}
                value={label}
                className="cmd-item"
                onSelect={() => {
                  onOpenChange(false)
                  action()
                }}
              >
                <span className="cmd-item-icon">{icon}</span>
                {label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  )
}
