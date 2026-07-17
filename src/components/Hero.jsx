import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { profile, socials } from '../data/site'
import Button from './ui/Button'
import cvFile from '../assets/CV - MUHAMMAD RIZQAN FADHIL.pdf'

const socialIcons = { github: Github, linkedin: Linkedin, instagram: Instagram }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

// Types `text` out one character at a time. Reduced-motion users get the
// full text immediately instead of the animation.
function useTypewriter(text, { speed = 65, startDelay = 500, prefersReduced = false } = {}) {
  const [count, setCount] = useState(prefersReduced ? text.length : 0)

  useEffect(() => {
    if (prefersReduced) { setCount(text.length); return }
    setCount(0)
    let i = 0
    let interval
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= text.length) clearInterval(interval)
      }, speed)
    }, startDelay)
    return () => { clearTimeout(start); clearInterval(interval) }
  }, [text, prefersReduced, speed, startDelay])

  return { count, done: count >= text.length }
}

export default function Hero() {
  const prefersReduced = useReducedMotion()
  const anim = prefersReduced ? {} : { variants: container, initial: 'hidden', animate: 'show' }

  // Highlight only the last word of the name (mirrors the old pattern of
  // highlighting just "Developer" in "Android Developer").
  const nameWords = profile.name.split(' ')
  const nameLast = nameWords.pop()
  const nameLead = nameWords.join(' ')
  const nameFull = `${nameLead} ${nameLast}`

  const { count: typedCount } = useTypewriter(nameFull, { prefersReduced })
  const typedLead = nameFull.slice(0, Math.min(typedCount, nameLead.length))
  const spaceShown = typedCount > nameLead.length
  const typedLast = spaceShown ? nameLast.slice(0, typedCount - nameLead.length - 1) : ''
  const highlightRevealed = typedLast === nameLast

  return (
    <section id="home" className="pt-8 md:pt-16 pb-24 md:pb-32 relative">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <motion.div {...anim}>
          {/* Photo with name/role stacked below it, same on desktop as
              mobile — name (not the role) carries the highlight mark. */}
          <motion.div variants={item} className="flex flex-col gap-6 md:gap-8 mb-5 md:mb-8">
            <div className="relative w-[130px] h-[130px] md:w-[220px] md:h-[220px] flex-shrink-0">
              <div
                className="w-full h-full overflow-hidden shadow-[0_6px_0_0_var(--ghost-shadow)]"
                style={{ borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' }}
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
            </div>

            {/* Socials as a vertical stack, running alongside name, role,
                and the tagline together. */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex flex-col gap-1.5 md:gap-2 flex-shrink-0 mt-1 md:mt-2">
                {socials.map((s) => {
                  const Icon = socialIcons[s.icon]
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-7 h-7 md:w-9 md:h-9 rounded-lg border-2 border-line bg-surface flex items-center justify-center
                        text-ink hover:-translate-y-1 hover:bg-[var(--primary-fill)] hover:text-white transition-transform"
                    >
                      <Icon size={13} className="md:hidden" />
                      <Icon size={15} className="hidden md:block" />
                    </a>
                  )
                })}
              </div>

              <div>
                <h1 className="text-[22px] md:text-[36px] leading-tight whitespace-nowrap" aria-label={nameFull}>
                  <span aria-hidden="true">
                    {typedLead}
                    {spaceShown && ' '}
                    <span className={`highlight${highlightRevealed ? ' highlight--reveal' : ''}`}>{typedLast}</span>
                    <span className="typewriter-cursor" />
                  </span>
                </h1>
                <p className="text-muted font-semibold text-sm md:text-xl mt-1.5 md:mt-2">{profile.role}</p>

                <motion.p variants={item} className="text-muted text-[15px] md:text-[18px] max-w-md md:max-w-lg mt-3 md:mt-4">
                  {profile.tagline}
                </motion.p>

                <motion.div variants={item} className="flex flex-wrap gap-3.5 mt-6 md:mt-8">
                  <Button href="#projects" variant="primary">View Projects</Button>
                  <Button href={cvFile} download="Muhammad Rizqan Fadhil - CV.pdf" variant="ghost">Download CV</Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          {/* Mobile only: "fun main()" tag above the card — offset to the
              left with a slight tilt, echoing the desktop version's
              top-left placement instead of a plain centered chip. */}
          <div className="flex md:hidden justify-start pl-4 mb-3">
            <span className="font-mono text-[11px] font-bold bg-surface
              px-3 py-1.5 rounded-xl shadow-[0_3px_0_0_var(--ghost-shadow)] text-primary rotate-[-3deg] inline-block">
              fun main()
            </span>
          </div>

          <div className="flex md:justify-center relative">
            <div className="w-full md:w-[340px] card-chunky overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3.5 border-b-2 border-line">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6159]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent2" />
                <em className="not-italic font-mono text-[11px] text-muted ml-2">MainActivity.kt</em>
              </div>
              <div className="p-5 font-mono text-[12.5px] leading-[1.9] text-muted">
                <div><span className="text-primary">class</span> <span className="text-accent2">Portfolio</span> : Mvi {'{'}</div>
                <div>&nbsp;&nbsp;val stack = listOf(</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;"Kotlin", "Compose"</div>
                <div>&nbsp;&nbsp;)</div>
                <div>&nbsp;&nbsp;<span className="text-primary">fun</span> <span className="text-accent2">build</span>() {'{'} ship() {'}'}</div>
                <div>{'}'}</div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="font-mono text-[10.5px] bg-[var(--primary-fill)] text-white px-2.5 py-1 rounded-full">✓ build passed</span>
                  <span className="font-mono text-[10.5px] bg-surfaceAlt text-primary px-2.5 py-1 rounded-full">Room DB</span>
                </div>
              </div>
            </div>

            {/* Desktop only: decorative floating stickers — there's margin
                around the fixed-width card for these to overlap into
                without colliding with anything. */}
            <div className="hidden md:block absolute top-[2%] -left-[8%] font-mono text-xs font-bold bg-surface
              px-3.5 py-2 rounded-xl shadow-[0_4px_0_0_var(--ghost-shadow)] text-primary rotate-[-3deg]">
              fun main()
            </div>
            <div className="hidden md:block absolute bottom-[12%] -right-[10%] font-mono text-xs font-bold bg-[var(--primary-fill)]
              px-3.5 py-2 rounded-xl shadow-[0_4px_0_0_var(--primary-fill-shadow)] text-white rotate-[3deg]">
              ✓ Published
            </div>
          </div>

          {/* Mobile only: "✓ Published" tag below the card — offset to the
              right with a slight tilt, echoing the desktop version's
              bottom-right placement instead of a plain centered chip. */}
          <div className="flex md:hidden justify-end pr-4 mt-3">
            <span className="font-mono text-[11px] font-bold bg-[var(--primary-fill)] text-white
              px-3 py-1.5 rounded-xl shadow-[0_3px_0_0_var(--primary-fill-shadow)] rotate-[3deg] inline-block">
              ✓ Published
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
