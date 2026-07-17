import { useEffect, useState } from 'react'

/**
 * Mengembalikan id section yang sedang aktif di viewport,
 * dipakai untuk highlight link navbar saat user scroll.
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop - 120
        if (window.scrollY >= top) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return active
}
