import { motion, useReducedMotion } from 'framer-motion'

/**
 * Membungkus konten dengan animasi "muncul" saat elemen masuk viewport
 * saat di-scroll. Otomatis nonaktif jika user mengaktifkan
 * "reduced motion" di OS mereka.
 */
export default function Reveal({ children, delay = 0, y = 26, className = '', as = 'div', mount = false }) {
  const prefersReduced = useReducedMotion()
  const Comp = motion[as] || motion.div

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  // mount=true skips the scroll-triggered viewport check and animates in
  // as soon as the element renders instead. Needed for elements that get
  // added/removed by a click rather than by scrolling (e.g. a filtered
  // grid) — whileInView only fires on an intersection *change*, so an
  // item that mounts already sitting below the visibility threshold (a
  // grid reflow from a filter switch) has no future scroll event left to
  // trigger it and stays invisible forever.
  const revealProps = mount
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }

  return (
    <Comp
      initial={{ opacity: 0, y }}
      {...revealProps}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}
