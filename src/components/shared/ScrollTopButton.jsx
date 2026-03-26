import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0

      setIsVisible(scrollTop > 260)
      setScrollProgress(progress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#cfe6e9] bg-white/95 text-[#12373D] shadow-[0_16px_36px_rgba(15,23,42,0.12)] transition hover:translate-y-[-2px] hover:border-[#0f9f8f]"
      aria-label="Scroll to top"
    >
      <span
        className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,#9ff3e8_0%,#0f9f8f_100%)] transition-[height] duration-150 ease-out"
        style={{ height: `${scrollProgress * 100}%` }}
        aria-hidden="true"
      />
      <ArrowUp className="relative z-10 h-5 w-5" />
    </button>
  )
}
