import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { FloatingWhatsApp, ScrollTopButton, SiteFooter, SiteHeader } from '../components/shared'
import { rtlLanguages } from '../i18n'

const MotionMain = motion.main

const pageAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.28, ease: 'easeOut' },
}

export function AppShell({ children }) {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        const target = document.querySelector(location.hash)
        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'smooth' })
          return
        }

        window.scrollTo({ top: 0, behavior: 'auto' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    const language = i18n.resolvedLanguage?.split('-')[0] || 'en'
    const direction = rtlLanguages.includes(language) ? 'rtl' : 'ltr'

    document.documentElement.lang = language
    document.documentElement.dir = direction
    document.body.dir = direction
  }, [i18n.resolvedLanguage])

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F]">
      <SiteHeader />
      <AnimatePresence mode="wait">
        <MotionMain key={location.pathname} {...pageAnimation} className="flex-1 w-full">
          {children}
        </MotionMain>
      </AnimatePresence>
      <SiteFooter />
      <ScrollTopButton />
      <FloatingWhatsApp />
    </div>
  )
}
