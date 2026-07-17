import { useState } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'
import { experienceTabs, experienceData } from '../data/site'
import Reveal from './ui/Reveal'
import { AnimatePresence, motion } from 'framer-motion'

const tabIcons = { work: Briefcase, education: GraduationCap }

export default function Experience() {
  const [tab, setTab] = useState('work')

  return (
    <section id="experience" className="py-24 md:py-[130px]">
      <div className="wrap">
        <Reveal className="max-w-xl mb-10">
          <span className="eyebrow">Experience</span>
          <h2 className="text-3xl md:text-[40px]">Where I've worked & learned</h2>
          <p className="text-muted mt-3">A track record of professional roles and academic foundations in Android and software development.</p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap gap-2.5 mb-10">
          {experienceTabs.map((t) => {
            const Icon = tabIcons[t.key]
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-2xl border-2 transition-colors
                  ${tab === t.key
                    ? 'bg-[var(--primary-fill)] text-white border-[var(--primary-fill)] shadow-[0_4px_0_0_var(--primary-fill-shadow)]'
                    : 'bg-surface text-muted border-line shadow-[0_4px_0_0_var(--ghost-shadow)] hover:text-ink'}`}
              >
                <Icon size={16} /> {t.label}
              </button>
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
            className="relative pl-9"
          >
            <div className="absolute left-[7px] top-1.5 bottom-1.5 w-[3px] bg-line" />
            {experienceData[tab].map((item, i) => (
              <div key={i} className="relative pb-10 last:pb-0">
                <div className="absolute -left-9 top-1 w-4 h-4 rounded-full bg-primary border-2 border-line" />
                <span className="font-mono text-[12.5px] text-primary block mb-1.5">{item.year}</span>
                <h4 className="text-[17px] mb-1">{item.title}</h4>
                <div className="text-muted text-sm mb-2 font-semibold">{item.org}</div>
                <p className="text-muted text-[14.5px]">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
