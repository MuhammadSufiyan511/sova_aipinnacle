import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, Globe, Menu, X } from 'lucide-react'
import US from 'country-flag-icons/react/3x2/US'
import PK from 'country-flag-icons/react/3x2/PK'
import SA from 'country-flag-icons/react/3x2/SA'
import IN from 'country-flag-icons/react/3x2/IN'
import BD from 'country-flag-icons/react/3x2/BD'
import DE from 'country-flag-icons/react/3x2/DE'
import sovaLogo from '../../assets/logos/sova.png'
import { ROUTES } from '../../utils/routes'

const languageOptions = [
  { lng: 'en', Flag: US },
  { lng: 'ur', Flag: PK },
  { lng: 'ar', Flag: SA },
  { lng: 'hi', Flag: IN },
  { lng: 'bn', Flag: BD },
  { lng: 'de', Flag: DE },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const activeLanguage = useMemo(() => {
    const language = i18n.resolvedLanguage?.split('-')[0] || 'en'
    return languageOptions.find((option) => option.lng === language) || languageOptions[0]
  }, [i18n.resolvedLanguage])

  const navItems = [
    { label: t('nav.industries'), to: ROUTES.industries },
    { label: t('nav.pricing'), to: ROUTES.pricing },
    { label: t('nav.caseStudies'), to: ROUTES.caseStudies },
    { label: t('nav.about'), to: ROUTES.about },
    // { label: t('nav.privacy'), to: ROUTES.privacyPolicy },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function isItemActive(item) {
    if (item.to === ROUTES.pricing) {
      return location.pathname === ROUTES.home && location.hash === '#pricing'
    }
    return location.pathname === item.to
  }

  function changeLanguage(language) {
    i18n.changeLanguage(language)
    setLanguageOpen(false)
    setMenuOpen(false)
  }

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-[70] flex justify-center px-4 pt-4 sm:pt-6">
      <div className="relative flex w-full max-w-[1340px] items-center justify-center">
        <div
          className={`pointer-events-auto w-full max-w-[1040px] rounded-full border transition-all duration-300 ${
            scrolled
              ? 'border-black/10 bg-white/88 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl'
              : 'border-black/8 bg-white/78 shadow-[0_4px_24px_rgba(0,0,0,0.07)] backdrop-blur-lg'
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-2.5">
            <Link to={ROUTES.home} className="flex shrink-0 items-center gap-2.5">
              <img src={sovaLogo} alt={t('common.brand')} className="h-8 w-8 rounded-xl object-cover" />
              <span className="font-display text-[1.05rem] font-bold tracking-[-0.03em] text-[#1D1D1F]">
                {t('common.brand')}
              </span>
            </Link>

            <div className="hidden items-center gap-3 md:flex">
              <nav className="flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`rounded-full px-3.5 py-1.5 text-[0.86rem] font-medium transition-all ${
                      isItemActive(item)
                        ? 'bg-[#EEF3FF] text-[#0061FF]'
                        : 'text-[#475569] hover:bg-black/5 hover:text-[#1D1D1F]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <Link
                to={ROUTES.auth}
                className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[0.86rem] font-semibold text-[#0061FF] transition hover:bg-[#EEF3FF]"
              >
                {t('common.login')} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <div className="flex flex-col items-center">
                <Link
                  to={ROUTES.auth}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0061FF] px-4 py-1.5 text-[0.86rem] font-semibold text-white shadow-[0_4px_14px_rgba(0,97,255,0.35)] transition hover:bg-[#004FD4] hover:scale-[1.02]"
                >
                  {t('common.startFreeTrial')} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <p className="mt-1 text-[0.62rem] font-medium text-[#9AA4B2]">{t('common.noCardRequired')}</p>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLanguageOpen((prev) => !prev)}
                  className="flex h-10 items-center gap-2 rounded-[12px] border border-[#EEF3FF] bg-white/80 px-3 text-[0.8rem] font-semibold text-[#1D1D1F]"
                >
                  <Globe className="h-4 w-4 text-[#0061FF]" />
                  <activeLanguage.Flag className="h-4 w-5 rounded-sm" />
                  <span>{t(`languages.${activeLanguage.lng}.short`)}</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {languageOpen && (
                  <div className="absolute right-0 top-[118%] z-20 w-[220px] rounded-[14px] border border-[#E6EEFF] bg-white py-2 shadow-[0_24px_60px_rgba(0,97,255,0.14)]">
                    <div className="absolute -top-2 right-6 h-4 w-4 rotate-45 border-l border-t border-[#E6EEFF] bg-white" />
                    {languageOptions.map((option) => (
                      <button
                        key={option.lng}
                        type="button"
                        onClick={() => changeLanguage(option.lng)}
                        className={`relative flex w-full items-center gap-3 px-4 py-2.5 text-left transition hover:bg-[#F5F9FF] ${
                          activeLanguage.lng === option.lng ? 'bg-[#EEF5FF]' : ''
                        }`}
                      >
                        <span className="w-9 text-[0.8rem] font-semibold uppercase text-[#475569]">
                          {t(`languages.${option.lng}.short`)}
                        </span>
                        <option.Flag className="h-4 w-5 rounded-sm" />
                        <span className="text-[0.92rem] text-[#1D1D1F]">{t(`languages.${option.lng}.label`)}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              className="rounded-full p-2 text-[#475569] hover:bg-black/5 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-black/6 px-5 pb-4 pt-3 md:hidden">
              <div className="mb-3 grid gap-2 sm:grid-cols-2">
                {languageOptions.map((option) => (
                  <button
                    key={option.lng}
                    type="button"
                    onClick={() => changeLanguage(option.lng)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ${
                      activeLanguage.lng === option.lng
                        ? 'bg-[#EEF3FF] text-[#0061FF]'
                        : 'bg-[#F8FAFF] text-[#374151]'
                    }`}
                  >
                    <option.Flag className="h-4 w-5 rounded-sm" />
                    <span>{t(`languages.${option.lng}.short`)}</span>
                  </button>
                ))}
              </div>

              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`rounded-xl px-3 py-2 text-sm font-medium ${
                      isItemActive(item)
                        ? 'bg-[#EEF3FF] text-[#0061FF]'
                        : 'text-[#475569] hover:bg-black/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
