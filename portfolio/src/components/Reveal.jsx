import { motion } from 'motion/react'

const MotionDiv = motion.div
const EASE = [0.21, 0.47, 0.32, 0.98]

/** Fade + rise into view on scroll. Used once per content block, not per element. */
export default function Reveal({ children, delay = 0, className }) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </MotionDiv>
  )
}

/** Hero entrance: same movement plus a blur settle, staggered by `order`. */
export function HeroReveal({ children, order = 0, className }) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: 0.1 + order * 0.09, ease: EASE }}
    >
      {children}
    </MotionDiv>
  )
}
