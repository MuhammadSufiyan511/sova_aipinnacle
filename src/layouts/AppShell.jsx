import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
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
  const [bgOpacity, setBgOpacity] = useState(1)

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

  // Listen for the custom language change events to trigger crossfade
  useEffect(() => {
    const handleStart = () => setBgOpacity(0)
    const handleEnd = () => setBgOpacity(1)
    
    window.addEventListener('language-change-start', handleStart)
    window.addEventListener('language-change-end', handleEnd)
    return () => {
      window.removeEventListener('language-change-start', handleStart)
      window.removeEventListener('language-change-end', handleEnd)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <SiteHeader />
      <div 
        style={{ opacity: bgOpacity, transition: 'opacity 0.3s ease-in-out' }}
        className="flex min-h-screen flex-col"
      >
        <AnimatePresence mode="wait">
          <MotionMain key={location.pathname} {...pageAnimation} className="flex-1 w-full flex flex-col">
            {children}
          </MotionMain>
        </AnimatePresence>
        <SiteFooter />
      </div>
      <ScrollTopButton />
      <FloatingWhatsApp />
    </div>
  )
}

