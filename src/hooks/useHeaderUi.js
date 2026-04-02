import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import US from 'country-flag-icons/react/3x2/US'
import PK from 'country-flag-icons/react/3x2/PK'
import SA from 'country-flag-icons/react/3x2/SA'
import IN from 'country-flag-icons/react/3x2/IN'
import BD from 'country-flag-icons/react/3x2/BD'
import DE from 'country-flag-icons/react/3x2/DE'
import { ROUTES } from '../utils/routes'

export const languageOptions = [
  { lng: 'en', Flag: US },
  { lng: 'ur', Flag: PK },
  { lng: 'ar', Flag: SA },
  { lng: 'hi', Flag: IN },
  { lng: 'bn', Flag: BD },
  { lng: 'de', Flag: DE },
]

export function useHeaderUi() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const languageMenuRef = useRef(null)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const activeLanguage = useMemo(() => {
    const language = i18n.resolvedLanguage?.split('-')[0] || 'en'
    return languageOptions.find((option) => option.lng === language) || languageOptions[0]
  }, [i18n.resolvedLanguage])

  const navItems = useMemo(
    () => [
      { label: t('nav.industries'), to: ROUTES.industries },
      { label: t('nav.pricing'), to: ROUTES.pricing },
      { label: t('nav.caseStudies'), to: ROUTES.caseStudies },
      { label: t('nav.about'), to: ROUTES.about },
    ],
    [t]
  )

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    function handlePointerDown(event) {
      if (!languageMenuRef.current?.contains(event.target)) {
        setLanguageOpen(false)
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [])

  function isItemActive(item) {
    if (item.to === ROUTES.pricing) {
      return location.pathname === ROUTES.home && location.hash === '#pricing'
    }
    return location.pathname === item.to
  }

  function changeLanguage(language) {
    if (activeLanguage.lng === language) {
      setLanguageOpen(false)
      setMenuOpen(false)
      return
    }
    setIsChangingLanguage(true)
    setLanguageOpen(false)
    setMenuOpen(false)
    window.dispatchEvent(new Event('language-change-start'))
    setTimeout(() => {
      i18n.changeLanguage(language)
      setTimeout(() => {
        setIsChangingLanguage(false)
        window.dispatchEvent(new Event('language-change-end'))
      }, 500)
    }, 300)
  }

  return {
    activeLanguage,
    changeLanguage,
    isChangingLanguage,
    isItemActive,
    languageMenuRef,
    languageOpen,
    menuOpen,
    navItems,
    scrolled,
    setLanguageOpen,
    setMenuOpen,
    t,
  }
}
