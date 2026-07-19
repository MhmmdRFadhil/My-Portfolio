import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const supportsHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/**
 * Pulls its child a few px toward the cursor within its own bounds, then
 * springs back on leave. Kept as a separate wrapper element (not merged
 * into the child's own transform) so it never fights a child's own
 * hover/press transform — e.g. .btn-chunky's `:active` press-flatten.
 * Only for simple inline content with no width/disabled contract to
 * preserve (see Hero's CTA buttons); not used on Contact's submit button.
 *
 * `maxOffset` hard-clamps the pull in px regardless of the child's size —
 * without it, a wide button's proportional (size * strength) offset can
 * travel far enough to visually overlap a neighboring button sitting just
 * a small gap away (e.g. Hero's View Projects / Download CV row).
 *
 * `axis="y"` drops the x pull entirely (forced to 0) — for elements
 * sitting side by side in a row, even a clamped x pull can still close
 * enough of the gap between them to visually collide (the moving one's
 * clamped max plus the still one's own width), so horizontally-adjacent
 * buttons should only ever get vertical magnetic movement.
 */
export default function Magnetic({ children, strength = 0.3, maxOffset = 10, axis = 'both', className = '' }) {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 })
  const clamp = (v) => Math.max(-maxOffset, Math.min(maxOffset, v))

  const handlePointerMove = (e) => {
    if (prefersReduced || e.pointerType !== 'mouse' || !supportsHover() || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    if (axis !== 'y') x.set(clamp((e.clientX - rect.left - rect.width / 2) * strength))
    if (axis !== 'x') y.set(clamp((e.clientY - rect.top - rect.height / 2) * strength))
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <motion.span
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      className={`inline-block ${className}`}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.span>
  )
}
