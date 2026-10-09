import { useState } from 'react'
import { Briefcase, GraduationCap, ChevronDown } from 'lucide-react'
import { experienceTabs, experienceData } from '../data/site'
import { translations } from '../data/translations'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './ui/Reveal'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const tabIcons = { work: Briefcase, education: GraduationCap }

function TimelineCard({ item, lang, tapHint, index }) {
  const [expanded, setExpanded] = useState(false)
  const reduced = useReducedMotion()

  return (
    <Reveal className="timeline-entry" delay={(index % 3) * 0.06} y={14}>
      <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} className="timeline-card card-chunky">
        <div className="flex items-center justify-between gap-4">
          <span className="timeline-date">{item.year[lang]}</span>
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: reduced ? 0 : 0.25 }}>
            <ChevronDown size={16} className="text-muted" />
          </motion.span>
        </div>
        <h3 className="timeline-title">{item.title[lang]}</h3>
        <div className="timeline-org">{item.org}</div>
        {!expanded && <div className="timeline-hint">{tapHint}</div>}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.25 }} className="overflow-hidden">
              <p className="timeline-description">{item.desc[lang]}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </Reveal>
  )
}

export default function Experience() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [tab, setTab] = useState('work')
  const reduced = useReducedMotion()

  return (
    <section id="experience" className="relative bg-band">
      <div className="wrap">
        <Reveal className="max-w-xl mb-10">
          <span className="eyebrow">{t.experience.eyebrow}</span>
          <h2 className="text-3xl md:text-[40px]">{t.experience.heading}</h2>
          <p className="text-muted mt-3">{t.experience.intro}</p>
        </Reveal>
        <Reveal delay={0.05} className="flex flex-wrap gap-2 mb-10">
          {experienceTabs.map((entry) => {
            const Icon = tabIcons[entry.key]
            const active = tab === entry.key
            return (
              <button key={entry.key} type="button" onClick={() => setTab(entry.key)} aria-pressed={active}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${active ? 'text-white' : 'bg-surface text-muted hover:text-primary'}`}>
                {active && <motion.span layoutId="exp-tab-pill" className="absolute inset-0 rounded-xl bg-[var(--primary-fill)]" transition={{ duration: reduced ? 0 : 0.25 }} />}
                <Icon size={15} className="relative" /><span className="relative">{entry.label[lang]}</span>
              </button>
            )
          })}
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : 0.2 }} className="timeline-list">
            {experienceData[tab].map((item, i) => <TimelineCard key={i} index={i} item={item} lang={lang} tapHint={t.experience.tapHint} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
