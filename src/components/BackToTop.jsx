import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
        <motion.button
          onClick={scrollTop}
          aria-label={t.backToTop.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.88 }}
          className="fixed bottom-6 right-6 z-[90] w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--primary-fill)] text-white
            flex items-center justify-center shadow-[0_4px_0_0_var(--primary-fill-shadow)]"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
