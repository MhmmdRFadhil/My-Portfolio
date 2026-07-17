import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { smoothScrollTo } from '../utils/smoothScroll'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home')
      const threshold = home ? home.offsetTop + home.offsetHeight : window.innerHeight
      setVisible(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => smoothScrollTo(0)

  return (
    <button
      onClick={scrollTop}
      aria-label="Kembali ke atas"
      className={`fixed bottom-6 right-6 z-[90] w-12 h-12 rounded-full bg-[var(--primary-fill)] text-white
        flex items-center justify-center shadow-[0_4px_0_0_var(--primary-fill-shadow)]
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}
    >
      <ArrowUp size={20} />
    </button>
  )
}
