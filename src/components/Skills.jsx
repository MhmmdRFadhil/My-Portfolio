import { useEffect, useRef, useState } from 'react'
import { skillSet1, skillSet2 } from '../data/site'
import Reveal from './ui/Reveal'
import {
  Layers, Zap, GitBranch, Cpu, Database, Globe, GitMerge, Flame, LayoutGrid,
} from 'lucide-react'

const iconMap = {
  compose: Layers, zap: Zap, branch: GitBranch, cpu: Cpu, db: Database,
  globe: Globe, git: GitMerge, flame: Flame, layout: LayoutGrid,
}

// WebKit (iOS Safari and anything built on it) fires a synthetic
// pointerenter with pointerType "mouse" ~300ms after a tap, for :hover
// compatibility — with no real pointer, no leave event ever follows, so
// filtering on pointerType alone still leaves the marquee stuck on after
// a tap. `(hover: hover)` reflects the primary input's real capability
// and isn't fooled by that synthetic event, unlike pointerType.
const supportsHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

// Kotlin's official brand mark (simple-icons, MIT licensed), not a generic
// icon-set glyph — this banner is specifically about the language.
function KotlinLogo({ size = 26, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 24H0V0h24L12 12Z" />
    </svg>
  )
}

/**
 * Renders `text` truncated by default. If the text is actually wider than
 * its container (i.e. it would be cut off with an ellipsis), it switches
 * to a marquee instead, so the full text is still readable. Whether it's
 * scrolling is driven by the parent card's hover/press state (`active`),
 * not by hovering the text itself.
 */
function MarqueeText({ text, as: Tag = 'span', className = '', active = false }) {
  const textRef = useRef(null)
  const [overflowing, setOverflowing] = useState(false)

  useEffect(() => {
    const check = () => {
      const el = textRef.current
      if (el) setOverflowing(el.scrollWidth > el.clientWidth + 1)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [text])

  if (!overflowing) {
    return <Tag ref={textRef} className={`${className} truncate block`}>{text}</Tag>
  }

  return (
    <Tag className={`${className} block overflow-hidden whitespace-nowrap`}>
      <span className={`marquee-text-track${active ? ' marquee-text-track--active' : ''}`}>
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
      </span>
    </Tag>
  )
}

function Pill({ s }) {
  const Icon = iconMap[s.icon]
  const [hovering, setHovering] = useState(false)
  const [clicked, setClicked] = useState(false)
  const active = hovering || clicked

  // Scrolling moves the card out from under the cursor/finger without
  // firing a leave event, so an active marquee needs its own reset on
  // scroll — otherwise scrolling away from a clicked card leaves it
  // stuck mid-animation.
  useEffect(() => {
    if (!active) return
    const reset = () => { setHovering(false); setClicked(false) }
    window.addEventListener('scroll', reset, { passive: true, capture: true })
    return () => window.removeEventListener('scroll', reset, { capture: true })
  }, [active])

  return (
    <div
      className="skill-pill h-full"
      onPointerEnter={(e) => { if (e.pointerType === 'mouse' && supportsHover()) setHovering(true) }}
      // On a hover-capable (mouse) device, leaving the card should always
      // stop the marquee — including a click-toggled one, since a mouse
      // user has no other way to "leave" a click-on state. Touch devices
      // don't get a real leave here, so the tap toggle stays in charge.
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') { setHovering(false); setClicked(false) } }}
      // click is the browser's unified tap/click event — it fires
      // reliably on both desktop and mobile (unlike raw pointer/touch
      // events, which have all sorts of device-specific edge cases), so
      // toggling here is the simplest reliable way to start/stop the
      // marquee on tap.
      onClick={() => setClicked((v) => !v)}
    >
      <div className="w-8 h-8 rounded-lg bg-surfaceAlt border-2 border-line flex items-center justify-center flex-shrink-0 text-primary">
        <Icon size={16} />
      </div>
      <div className="min-w-0 flex-1">
        <MarqueeText
          as="h4"
          text={s.name}
          className="text-[12.5px] sm:text-[13.5px] font-bold leading-tight tracking-tight"
          active={active}
        />
        <MarqueeText
          as="span"
          text={s.tag}
          className="text-[10.5px] sm:text-[11px] text-muted"
          active={active}
        />
      </div>
    </div>
  )
}

const allSkills = [...skillSet1, ...skillSet2]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-[130px]">
      <div className="wrap">
        <Reveal className="max-w-xl mb-12">
          <span className="eyebrow">Skills</span>
          <h2 className="text-3xl md:text-[40px]">Tools I reach for daily</h2>
          <p className="text-muted mt-3">A curated toolkit for building, testing, and shipping production-ready Android applications end-to-end.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-center gap-5 bg-[var(--primary-fill)] text-white rounded-3xl p-7 mb-9
            shadow-[0_6px_0_0_var(--primary-fill-shadow)] relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white/15 border-2 border-white/30 flex items-center justify-center flex-shrink-0">
              <KotlinLogo size={26} />
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl mb-1">Kotlin-first, Compose-native</h3>
              <p className="text-white/80 text-sm">Every application I build starts from a single source of truth, built on a declarative UI layer for predictable, maintainable state.</p>
            </div>
          </div>
        </Reveal>

        {/* 2 columns from mobile up (instead of 1) so 10 pills only take
            5 rows, not 10. Names that don't fit their column become a
            looping marquee (see MarqueeText) instead of wrapping or
            being cut off with an ellipsis. Each pill reveals individually
            on a short per-index delay instead of the whole grid fading in
            as one block, for a cascading entrance. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {allSkills.map((s, i) => (
            <Reveal key={s.name} delay={0.15 + (i % 8) * 0.05} y={16}>
              <Pill s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
