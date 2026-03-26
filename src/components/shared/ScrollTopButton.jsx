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
      className="fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-[20px] border border-[#bde5de] bg-white/92 text-[#0061FF] shadow-[0_18px_40px_rgba(15,159,143,0.18)] outline-none backdrop-blur transition hover:translate-y-[-2px] hover:border-[#0f9f8f] focus:outline-none focus:ring-0 active:scale-100 active:translate-y-0"
      aria-label="Scroll to top"
    >
      <span
        className="absolute inset-x-0 bottom-0 bg-[#5DA2FA] transition-[height] duration-150 ease-out"
        style={{ height: `${scrollProgress * 100}%` }}
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/60" />
      <ArrowUp className="relative z-10 h-5 w-5" />
    </button>
  )
}
