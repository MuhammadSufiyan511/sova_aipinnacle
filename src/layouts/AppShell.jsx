import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FloatingWhatsApp, ScrollTopButton, SiteFooter, SiteHeader } from '../components/shared'

const MotionMain = motion.main

const pageAnimation = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.35, ease: 'easeOut' },
}

export function AppShell({ children }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.16),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_24%),linear-gradient(180deg,#f6fdfd_0%,#ffffff_46%,#eefaf9_76%,#f4f0ff_100%)] text-[#173247]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 sm:px-6 lg:px-8">
        <SiteHeader />
        <AnimatePresence mode="wait">
          <MotionMain key={location.pathname} {...pageAnimation} className="flex-1">
            {children}
          </MotionMain>
        </AnimatePresence>
        <SiteFooter />
        <ScrollTopButton />
        <FloatingWhatsApp />
      </div>
    </div>
  )
}
