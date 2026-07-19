import { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

// Ambient soft glow that follows the pointer, purely decorative depth for
// an otherwise flat solid-color theme. Mouse-only (touch has no cursor to
// follow) and off entirely under reduced-motion.
export default function CursorGlow() {
  const prefersReduced = useReducedMotion()
  const x = useMotionValue(-999)
  const y = useMotionValue(-999)
  const springX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.5 })
  const background = useMotionTemplate`radial-gradient(420px circle at ${springX}px ${springY}px, var(--primary) 0%, transparent 70%)`

  useEffect(() => {
    if (prefersReduced) return
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!supportsHover) return
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [prefersReduced, x, y])

  if (prefersReduced) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[1] pointer-events-none hidden md:block"
      style={{ background, opacity: 0.08 }}
    />
  )
}
