import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { aboutText, stats } from '../data/site'
import { translations } from '../data/translations'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './ui/Reveal'

// Counts up from 0 to the numeric part of `num` (e.g. "10+" -> 10, "100%"
// -> 100) once it scrolls into view, keeping whatever non-numeric prefix/
// suffix the value had (the "+" or "%").
function StatNumber({ num }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const prefersReduced = useReducedMotion()
  const match = num.match(/^(\D*)(\d+)(\D*)$/)
  const [prefix, digits, suffix] = match ? [match[1], match[2], match[3]] : ['', num, '']
  const target = Number(digits)
  const [value, setValue] = useState(prefersReduced ? target : 0)

  useEffect(() => {
    if (!inView || prefersReduced || !Number.isFinite(target)) return
    const duration = 1100
    const start = performance.now()
    let raf
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, prefersReduced, target])

  return (
    <div ref={ref} className="font-display text-[32px] font-extrabold text-primary">
      {prefix}{value}{suffix}
    </div>
  )
}

export default function About() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="about" className="py-24 md:py-[130px]">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <Reveal>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="text-3xl md:text-[40px] mb-6">{t.about.heading}</h2>
          {aboutText.map((p, i) => (
            <p key={i} className="text-muted text-[16px] mb-4">{p[lang]}</p>
          ))}
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <div className="card-chunky p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_9px_0_0_var(--ghost-shadow)]">
                <StatNumber num={s.num} />
                <div className="text-[13.5px] text-muted mt-1">{s.label[lang]}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
