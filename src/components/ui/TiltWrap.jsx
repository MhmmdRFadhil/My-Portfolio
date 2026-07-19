import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { supportsHover } from '../../utils/pointer'

/**
 * Cursor-driven 3D tilt (same technique as Hero's photo tilt), on its own
 * wrapper element so the rotateX/rotateY transform never fights a child's
 * own CSS hover transform (e.g. card-chunky's hover:-translate-y-1) — the
 * two live on different elements instead of both writing to the same
 * `transform` property.
 */
export default function TiltWrap({ children, max = 8, className = '' }) {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const springConfig = { stiffness: 180, damping: 20, mass: 0.4 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springConfig)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springConfig)

  const handlePointerMove = (e) => {
    if (prefersReduced || e.pointerType !== 'mouse' || !supportsHover() || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }
  const reset = () => { px.set(0.5); py.set(0.5) }

  return (
    <div ref={ref} onPointerMove={handlePointerMove} onPointerLeave={reset} style={{ perspective: 900 }} className={className}>
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="h-full">
        {children}
      </motion.div>
    </div>
  )
}
