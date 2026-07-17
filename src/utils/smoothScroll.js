/**
 * Native `scroll-behavior: smooth` scales its duration with distance,
 * so a jump across the whole page (e.g. Contact -> Home) crawls through
 * every section in between. This animates over a fixed duration instead,
 * so every jump feels equally snappy regardless of distance.
 */
export function smoothScrollTo(targetY, duration = 500) {
  const startY = window.scrollY
  const diff = targetY - startY
  if (Math.abs(diff) < 1) return

  const startTime = performance.now()

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    // behavior:'auto' is required here — the legacy (x, y) form inherits
    // the CSS `scroll-behavior`, which would smooth-animate *each* of these
    // per-frame calls on top of our own easing and stutter badly.
    window.scrollTo({ top: startY + diff * eased, left: 0, behavior: 'auto' })
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function scrollToId(id, offset = 0, duration = 500) {
  const el = document.getElementById(id)
  if (!el) return
  const targetY = el.getBoundingClientRect().top + window.scrollY - offset
  smoothScrollTo(targetY, duration)
  if (history.pushState) history.pushState(null, '', `#${id}`)
}
