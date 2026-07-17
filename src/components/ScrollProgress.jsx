import { motion, useScroll, useSpring } from 'framer-motion'

// Thin bar pinned above the navbar that fills left-to-right with scroll
// position — spring-smoothed so it doesn't just snap to the raw scroll
// fraction on every frame.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[110] bg-[var(--primary-fill)]"
      style={{ scaleX }}
    />
  )
}
