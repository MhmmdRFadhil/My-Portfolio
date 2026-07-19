import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { translations } from './data/translations'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

// Wraps a chunky-shape with a scroll-linked parallax drift on top of its
// own CSS `drift-chunky` idle animation — `speed` sets how many px it
// travels per 1000px scrolled (negative = drifts up as you scroll down).
// Two nested elements so the two transforms (parallax here, idle drift on
// the CSS class) never fight over the same `transform` property.
function ParallaxShape({ className, box, borderColor, animationDelay, speed }) {
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 3000], [0, speed * 3])

  return (
    <motion.span
      aria-hidden="true"
      style={{ position: 'absolute', ...box, y: prefersReduced ? 0 : y }}
    >
      <span className={`${className} block w-full h-full`} style={{ borderColor, animationDelay }} />
    </motion.span>
  )
}

function AppContent() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <>
      <a href="#main" className="skip-link">{t.app.skipToContent}</a>
      <ScrollProgress />
      <CursorGlow />

      {/* Bentuk solid mengambang di background — pengganti aurora gradient lama */}
      <div className="chunky-field" aria-hidden="true">
        <ParallaxShape className="chunky-shape square" box={{ width: 160, height: 160, top: -70, left: -90 }} borderColor="var(--primary)" speed={-40} />
        <ParallaxShape className="chunky-shape square" box={{ width: 140, height: 140, bottom: -80, left: '20%' }} borderColor="var(--accent)" animationDelay="-8s" speed={60} />
        <ParallaxShape className="chunky-shape circle" box={{ width: 130, height: 130, bottom: -70, right: -80 }} borderColor="var(--accent2)" animationDelay="-14s" speed={80} />
        <ParallaxShape className="chunky-shape circle" box={{ width: 120, height: 120, top: -60, right: -70 }} borderColor="var(--primary)" animationDelay="-20s" speed={-55} />
        <ParallaxShape className="chunky-shape circle" box={{ width: 80, height: 80, top: '45%', left: -55 }} borderColor="var(--accent2)" animationDelay="-26s" speed={35} />
        <ParallaxShape className="chunky-shape square" box={{ width: 100, height: 100, bottom: '10%', right: -55 }} borderColor="var(--accent)" animationDelay="-32s" speed={-70} />
      </div>

      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
