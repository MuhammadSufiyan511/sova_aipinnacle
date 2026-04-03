import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { FloatingWhatsApp, MobileBottomNav, ScrollTopButton, SiteFooter, SiteHeader } from '../components/shared'
import { rtlLanguages } from '../i18n'
import { useApp } from '../context/AppProvider'

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
  const { homeDarkMode, setHomeDarkMode } = useApp()
  const [bgOpacity, setBgOpacity] = useState(1)
  
  const isAppRoute = location.pathname.startsWith('/onboarding') || location.pathname.startsWith('/admin')

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
    <div className={`min-h-screen bg-[#ebf2ff] text-[#1E293B] ${homeDarkMode ? 'home-dark-mode' : ''}`}>
      {!isAppRoute && (
        <SiteHeader
          isHomeDarkMode={homeDarkMode}
          onToggleHomeDarkMode={() => setHomeDarkMode(!homeDarkMode)}
          showThemeToggle={!isAppRoute}
        />
      )}
      <div 
        style={{ opacity: bgOpacity, transition: 'opacity 0.3s ease-in-out' }}
        className={`flex min-h-screen flex-col pb-[112px] sm:pb-[104px] md:pb-0 ${homeDarkMode ? 'home-page-theme' : ''}`}
      >
        <AnimatePresence mode="wait">
          <MotionMain 
            key={isAppRoute ? 'app-shell-main' : location.pathname} 
            {...(isAppRoute ? {} : pageAnimation)} 
            className={`flex-1 w-full flex flex-col ${!isAppRoute ? 'pb-20 md:pb-0' : ''}`}
          >
            {children}
          </MotionMain>
        </AnimatePresence>
        {!isAppRoute && <SiteFooter />}
      </div>
      {!isAppRoute && <ScrollTopButton />}
      {!isAppRoute && <FloatingWhatsApp />}
      {!isAppRoute && <MobileBottomNav />}
    </div>
  )
}
