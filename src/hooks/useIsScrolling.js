import { useEffect, useRef, useState } from 'react'

/**
 * Returns true while the page is actively being scrolled, flipping back
 * to false `idleDelay` ms after the last scroll event — used to hide
 * chrome (navbar, back-to-top) during scroll and reveal it once the
 * user settles.
 */
export function useIsScrolling(idleDelay = 200) {
  const [scrolling, setScrolling] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true)
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setScrolling(false), idleDelay)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutRef.current)
    }
  }, [idleDelay])

  return scrolling
}
