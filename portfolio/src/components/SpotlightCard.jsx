import { useRef } from 'react'

/** Wraps content in an element whose hover glow follows the cursor (via --mx/--my). */
export default function SpotlightCard({ as: Comp = 'div', className = '', children, ...props }) {
  const ref = useRef(null)

  const handleMouseMove = (event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <Comp ref={ref} onMouseMove={handleMouseMove} className={`spotlight ${className}`} {...props}>
      {children}
    </Comp>
  )
}
