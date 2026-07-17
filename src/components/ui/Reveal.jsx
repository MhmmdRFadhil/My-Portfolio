import { motion, useReducedMotion } from 'framer-motion'

/**
 * Membungkus konten dengan animasi "muncul" saat elemen masuk viewport
 * saat di-scroll. Otomatis nonaktif jika user mengaktifkan
 * "reduced motion" di OS mereka.
 */
export default function Reveal({ children, delay = 0, y = 26, className = '', as = 'div' }) {
  const prefersReduced = useReducedMotion()
  const Comp = motion[as] || motion.div

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}
