import { useRef, useState } from 'react'
import { Briefcase, GraduationCap, ChevronDown } from 'lucide-react'
import { experienceTabs, experienceData } from '../data/site'
import { translations } from '../data/translations'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './ui/Reveal'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

const tabIcons = { work: Briefcase, education: GraduationCap }

const EASE = [0.22, 1, 0.36, 1]

// Description starts hidden — tapping the card reveals it, keeping the
// timeline compact by default instead of always showing full paragraphs.
function TimelineCard({ item, index = 0, lang, tapHint }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.button
      layout
      type="button"
      onClick={() => setExpanded((v) => !v)}
      aria-expanded={expanded}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ y: 4, transition: { duration: 0.15, ease: EASE } }}
      transition={{
        layout: { duration: 0.35, ease: EASE },
        opacity: { duration: 0.35, ease: EASE, delay: index * 0.05 },
        y: { duration: 0.35, ease: EASE, delay: index * 0.05 },
      }}
      className="card-chunky !rounded-[var(--radius-sm)] !shadow-[0_4px_0_0_var(--ghost-shadow)] p-2.5 sm:p-3.5 md:p-4 text-left w-full max-w-[320px] sm:max-w-sm md:max-w-[380px]
        transition-shadow duration-150 ease-out active:!shadow-[0_0_0_0_var(--ghost-shadow)]"
    >
      <motion.div layout="position" className="flex items-center justify-between gap-2 mb-1 sm:mb-1.5">
        <span className="inline-block text-[8px] sm:text-[11px] font-bold text-primary bg-[var(--primary-tint)] px-1.5 sm:px-2 py-0.5 rounded-lg">
          {item.year[lang]}
        </span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex-shrink-0"
        >
          <ChevronDown size={14} className="text-muted" />
        </motion.span>
      </motion.div>
      <motion.h4 layout="position" className="text-[11.5px] sm:text-[15px] mb-0.5 leading-snug">{item.title[lang]}</motion.h4>
      <motion.div layout="position" className="text-muted text-[10px] sm:text-[12.5px] font-semibold">{item.org}</motion.div>
      <AnimatePresence initial={false}>
        {!expanded && (
          <motion.div
            key="hint"
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.35, ease: EASE }, opacity: { duration: 0.25, ease: EASE } }}
            className="overflow-hidden"
          >
            <div className="text-[9px] sm:text-[11px] text-muted opacity-70 mt-1">{tapHint}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="desc"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.35, ease: EASE }, opacity: { duration: 0.25, ease: EASE } }}
            className="overflow-hidden"
          >
            <p className="text-muted text-[10.5px] sm:text-[13.5px] leading-relaxed mt-2">{item.desc[lang]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default function Experience() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [tab, setTab] = useState('work')
  const prefersReduced = useReducedMotion()

  // The center spine "draws" itself in as the section scrolls through
  // view — 0 at the top of the section, full height once it's mostly
  // scrolled past — instead of being fully drawn from the start.
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const spineScale = useTransform(scrollYProgress, [0.15, 0.85], [0, 1])

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-[130px] relative">
      <div className="wrap">
        <Reveal className="max-w-xl mb-10">
          <span className="eyebrow">{t.experience.eyebrow}</span>
          <h2 className="text-3xl md:text-[40px]">{t.experience.heading}</h2>
          <p className="text-muted mt-3">{t.experience.intro}</p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap justify-center gap-2.5 mb-10">
          {experienceTabs.map((tabItem) => {
            const Icon = tabIcons[tabItem.key]
            const isActive = tab === tabItem.key
            return (
              <div key={tabItem.key} className="relative group transition-transform duration-150 ease-out active:translate-y-1">
                {isActive && (
                  <motion.span
                    layoutId="exp-tab-pill"
                    className="absolute inset-0 rounded-lg bg-[var(--primary-fill)] shadow-[0_4px_0_0_var(--primary-fill-shadow)] transition-shadow duration-150 ease-out group-active:shadow-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <button
                  onClick={() => setTab(tabItem.key)}
                  className={`relative z-10 flex items-center gap-1.5 sm:gap-2 text-[12.5px] sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-3 rounded-lg transition-colors active:shadow-none
                    ${isActive
                      ? 'text-white'
                      : 'bg-surface text-muted shadow-[0_4px_0_0_var(--ghost-shadow)] hover:text-ink'}`}
                >
                  <Icon size={14} className="sm:hidden" />
                  <Icon size={16} className="hidden sm:block" />
                  {tabItem.label[lang]}
                </button>
              </div>
            )
          })}
        </Reveal>

        {/* Overlapping the fades (both tabs' full card lists visible at
            once, mid-crossfade) read as busier/messier than the original
            sequential fade — so back to mode="wait" (only one list ever
            visible). Exit is quick (attention isn't on the outgoing
            content anyway) so the gap before the new tab appears stays
            short; enter keeps the original slower duration so the part
            people actually watch — the new tab settling in — still
            reads as a real animation, not an instant cut. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.15 } }}
            className="relative flex flex-col gap-1 md:gap-1"
          >
            {/* Center spine — the zigzag alternates cards left/right of it at
                every size. Draws itself in with scroll (spineScale) on top
                of a static full-height track, so the line is always there
                but only "fills" with the primary color as you scroll. */}
            <div className="absolute left-1/2 top-2 bottom-2 w-[2px] md:w-[3px] -translate-x-1/2 bg-line" />
            {/* Framer-motion owns this element's whole `transform` once any
                motion value (scaleY) is on its style — the Tailwind
                `-translate-x-1/2` class's translateX would otherwise get
                silently dropped instead of combined, leaving this div
                shifted half its own width off from the static track/dots
                above. `x: '-50%'` folds that same centering into framer's
                own transform so it stays included alongside scaleY. */}
            <motion.div
              style={{ x: '-50%', scaleY: prefersReduced ? 1 : spineScale, transformOrigin: 'top' }}
              className="absolute left-1/2 top-2 bottom-2 w-[2px] md:w-[3px] bg-primary"
            />

            {experienceData[tab].map((item, i) => {
              const isLeft = i % 2 === 0
              const card = <TimelineCard item={item} index={i} lang={lang} tapHint={t.experience.tapHint} />

              return (
                <div key={i} className="relative py-1.5 md:py-1.5">
                  {/* minmax(0, 1fr), not bare 1fr — otherwise a row with a
                      long title/org grows its column past the fair share,
                      so cards end up different widths row to row. */}
                  <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-2 sm:gap-x-6 items-start">
                    <div className="flex justify-end">{isLeft && card}</div>
                    <div className="flex justify-center pt-2">
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary border-2 border-line" />
                    </div>
                    <div className="flex justify-start">{!isLeft && card}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
