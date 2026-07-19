import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { smoothScrollTo } from '../utils/smoothScroll'
import { useIsScrolling } from '../hooks/useIsScrolling'
import { translations } from '../data/translations'
import { useLanguage } from '../context/LanguageContext'

export default function BackToTop() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [pastThreshold, setPastThreshold] = useState(false)
  const scrolling = useIsScrolling()
  // Only show once scrolled past the hero AND scrolling has settled —
  // it hides while actively scrolling and reappears once the user stops.
  const visible = pastThreshold && !scrolling

  const { scrollYProgress } = useScroll()
  const ringProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 })

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home')
      const threshold = home ? home.offsetTop + home.offsetHeight : window.innerHeight
      setPastThreshold(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => smoothScrollTo(0)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.88 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[90] w-12 h-12"
        >
          {/* Ring and button move together as one unit (hover/tap live on
              this wrapper, not the button) so the button always stays
              dead-center in the ring — putting the hover lift on the
              button alone made it drift up out of the (static) ring.
              The button's own chunky bevel shadow (0 4px 0 0) is a solid
              4px extension below its box, not just a soft blur — left
              at a uniform 5px inset, that shadow ate into the bottom gap
              and left almost none. The ring is 4px taller at the bottom
              (bottom: -9px vs. -5px elsewhere) to hug that shadow evenly
              instead of the plain (shadow-less) button box. */}
          <svg className="absolute pointer-events-none" style={{ top: -5, left: -5, right: -5, bottom: -9 }} width="58" height="62" viewBox="0 0 58 62" aria-hidden="true">
            <rect x="2" y="2" width="54" height="58" rx="11" fill="none" stroke="var(--ghost-shadow)" strokeWidth="2.5" opacity="0.4" />
            <motion.rect
              x="2" y="2" width="54" height="58" rx="11" fill="none"
              stroke="var(--primary-fill)" strokeWidth="2.5" strokeLinecap="round"
              style={{ pathLength: ringProgress }}
            />
          </svg>
          <button
            onClick={scrollTop}
            aria-label={t.backToTop.label}
            className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--primary-fill)] text-white
              flex items-center justify-center shadow-[0_4px_0_0_var(--primary-fill-shadow)]"
          >
            <ArrowUp size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
