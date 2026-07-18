import { useState } from 'react'
import { Briefcase, GraduationCap, ChevronDown } from 'lucide-react'
import { experienceTabs, experienceData } from '../data/site'
import Reveal from './ui/Reveal'
import { AnimatePresence, motion } from 'framer-motion'

const tabIcons = { work: Briefcase, education: GraduationCap }

const EASE = [0.22, 1, 0.36, 1]

// Description starts hidden — tapping the card reveals it, keeping the
// timeline compact by default instead of always showing full paragraphs.
function TimelineCard({ item, index = 0 }) {
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
          {item.year}
        </span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex-shrink-0"
        >
          <ChevronDown size={14} className="text-muted" />
        </motion.span>
      </motion.div>
      <motion.h4 layout="position" className="text-[11.5px] sm:text-[15px] mb-0.5 leading-snug">{item.title}</motion.h4>
      <motion.div layout="position" className="text-muted text-[10px] sm:text-[12.5px] font-semibold">{item.org}</motion.div>
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
            <p className="text-muted text-[10.5px] sm:text-[13.5px] leading-relaxed mt-2">{item.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default function Experience() {
  const [tab, setTab] = useState('work')

  return (
    <section id="experience" className="py-24 md:py-[130px]">
      <div className="wrap">
        <Reveal className="max-w-xl mb-10">
          <span className="eyebrow">Experience</span>
          <h2 className="text-3xl md:text-[40px]">Where I've worked & learned</h2>
          <p className="text-muted mt-3">The roles that shaped my Android development skills, and the education that got me started.</p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap justify-center gap-2.5 mb-10">
          {experienceTabs.map((t) => {
            const Icon = tabIcons[t.key]
            const isActive = tab === t.key
            return (
              <div key={t.key} className="relative group transition-transform duration-150 ease-out active:translate-y-1">
                {isActive && (
                  <motion.span
                    layoutId="exp-tab-pill"
                    className="absolute inset-0 rounded-lg bg-[var(--primary-fill)] shadow-[0_4px_0_0_var(--primary-fill-shadow)] transition-shadow duration-150 ease-out group-active:shadow-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <button
                  onClick={() => setTab(t.key)}
                  className={`relative z-10 flex items-center gap-1.5 sm:gap-2 text-[12.5px] sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-3 rounded-lg transition-colors active:shadow-none
                    ${isActive
                      ? 'text-white'
                      : 'bg-surface text-muted shadow-[0_4px_0_0_var(--ghost-shadow)] hover:text-ink'}`}
                >
                  <Icon size={14} className="sm:hidden" />
                  <Icon size={16} className="hidden sm:block" />
                  {t.label}
                </button>
              </div>
            )
          })}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col gap-1 md:gap-1"
          >
            {/* Center spine — the zigzag alternates cards left/right of it at every size. */}
            <div className="absolute left-1/2 top-2 bottom-2 w-[2px] md:w-[3px] -translate-x-1/2 bg-line" />

            {experienceData[tab].map((item, i) => {
              const isLeft = i % 2 === 0
              const card = <TimelineCard item={item} index={i} />

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
