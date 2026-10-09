import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/site'
import { translations } from '../data/translations'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { useIsScrolling } from '../hooks/useIsScrolling'
import { scrollToId, smoothScrollTo } from '../utils/smoothScroll'

// Hoisted so useActiveSection gets a stable array reference — building
// this inline in the component body would create a new array every
// render, and since it's the effect's dependency, that would tear down
// and re-attach the scroll listener on every render instead of once.
const navIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLanguage } = useLanguage()
  const t = translations[lang]
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])
  const active = useActiveSection(navIds)
  const scrolling = useIsScrolling()
  const [nearTop, setNearTop] = useState(true)

  // Rubber-band overscroll past the top (flicking up past y=0 on trackpad/
  // touch) keeps firing scroll events the whole time it's bouncing back,
  // which kept the navbar hidden through the bounce and then sliding in
  // right as the page was still settling — reads as the navbar itself
  // "bouncing". Forcing it visible near the top sidesteps that boundary
  // entirely instead of trying to out-time the bounce.
  useEffect(() => {
    const handleScroll = () => setNearTop(window.scrollY < 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Never hide while the mobile menu is open — the user is reading it,
  // not scrolling past it.
  const hidden = scrolling && !open && !nearTop

  const closeMenu = () => setOpen(false)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    // 'home' always goes to the true top (y=0), same as the back-to-top
    // button — at y=0 the sticky navbar is still in normal document flow
    // (not pinned yet), so it never overlaps the Hero content beneath it.
    if (id === 'home') {
      smoothScrollTo(0)
      history.pushState(null, '', '#home')
    } else {
      scrollToId(id, 0)
    }
    closeMenu()
  }

  return (
    <header
      className={`sticky top-0 z-[100] transition-transform duration-300 ease-out
        ${hidden ? '-translate-y-[calc(100%+1rem)]' : 'translate-y-0'}`}
    >
      <div className="wrap pt-3.5">
        <nav className="site-nav" aria-label={lang === 'id' ? 'Navigasi utama' : 'Main navigation'}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="font-display font-semibold text-sm sm:text-lg flex items-center gap-1 sm:gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            {profile.shortName}
            <span className="text-primary">{profile.handle}</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-lg bg-[var(--primary-tint)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  aria-current={active === link.id ? 'location' : undefined}
                  className={`nav-link relative z-10 rounded-lg block transition-colors
                    ${active === link.id ? 'text-primary' : 'text-muted hover:text-primary hover:bg-[var(--primary-tint)]'}`}
                >
                  {link.label[lang]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2.5">
            <motion.button
              onClick={toggleTheme}
              aria-label={t.nav.themeToggle}
              whileTap={{ scale: 0.88 }}
              className="nav-control overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
            <motion.button
              onClick={toggleLanguage}
              aria-label={t.nav.langToggle}
              whileTap={{ scale: 0.88 }}
              className="nav-control overflow-hidden text-[11px] font-bold"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={lang}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center"
                >
                  {lang.toUpperCase()}
                </motion.span>
              </AnimatePresence>
            </motion.button>
            <motion.button
              onClick={() => setOpen((o) => !o)}
              ref={menuButton}
              aria-label={t.nav.menu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              whileTap={{ scale: 0.88 }}
              className="nav-control lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile nav — absolute supaya overlay di atas konten, tidak mendorong layout saat dibuka */}
      <div
        id="mobile-navigation"
        inert={open ? undefined : ''}
        className={`lg:hidden absolute inset-x-0 top-full transition-all duration-300 ease-out origin-top
          ${open ? 'opacity-100 scale-y-100 pointer-events-auto mt-3' : 'opacity-0 scale-y-95 pointer-events-none mt-0'}`}
      >
        <div className="wrap">
          <ul className="mobile-nav flex flex-col gap-2 p-3 bg-surface rounded-[var(--radius-md)] list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  aria-current={active === link.id ? 'location' : undefined}
                  className={`block text-[13.5px] font-bold px-4 py-3 rounded-lg transition-colors
                    ${active === link.id ? 'text-primary bg-[var(--primary-tint)]' : 'text-muted hover:text-primary hover:bg-[var(--primary-tint)]'}`}
                >
                  {link.label[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
