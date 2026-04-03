import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import sovaLogo from '../../assets/logos/sova.png'
import { useHeaderUi } from '../../hooks/useHeaderUi'
import { ROUTES } from '../../utils/routes'
import { HeaderDesktopNav } from './header/HeaderDesktopNav'
import { HeaderLanguageOverlay } from './header/HeaderLanguageOverlay'
import { HeaderLanguageSelector } from './header/HeaderLanguageSelector'
import { HeaderMobileMenu } from './header/HeaderMobileMenu'

export function SiteHeader({ isHomeDarkMode = false, onToggleHomeDarkMode, showThemeToggle = false }) {
  const {
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
  } = useHeaderUi()

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-[70] flex justify-center px-4 pt-4 sm:pt-6">
        <div className="relative flex w-full max-w-[1340px] items-center justify-center">
          <div
            className={`site-header-shell pointer-events-auto w-full max-w-[1040px] rounded-full border transition-all duration-300 ${
              scrolled
                ? 'border-[#d8e9e3] bg-white/92 shadow-[0_10px_32px_rgba(30,41,59,0.12)] backdrop-blur-xl'
                : 'border-[#e4efeb] bg-white/82 shadow-[0_4px_24px_rgba(30,41,59,0.08)] backdrop-blur-lg'
            }`}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-2.5">
              <Link to={ROUTES.home} className="flex shrink-0 items-center gap-1.5 active:scale-[0.98] transition-transform">
                <img src={sovaLogo} alt={t('common.brand')} decoding="async" className="h-7 w-12 rounded-lg sm:h-8 sm:w-14 sm:rounded-xl shadow-sm" />
                <span className="site-header-brand font-display text-[0.92rem] font-bold tracking-[-0.03em] text-[#1E293B] sm:text-[1.05rem]">{t('common.brand')}</span>
              </Link>

              <div className="hidden items-center gap-3 md:flex">
                <HeaderDesktopNav navItems={navItems} isItemActive={isItemActive} />
              </div>

              <div className="hidden shrink-0 items-center gap-3 md:flex">
                {showThemeToggle ? (
                  <button
                    type="button"
                    onClick={onToggleHomeDarkMode}
                    aria-label={isHomeDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DDEFE7] bg-[#F8FAFC] text-[#1E293B] transition hover:border-[#10B981] hover:text-[#10B981]"
                  >
                    {isHomeDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </button>
                ) : null}

                <Link
                  to={ROUTES.auth}
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[0.86rem] font-semibold text-[#10B981] transition hover:bg-[#F8FAFC]"
                >
                  {t('common.login')} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>

                <div className="flex flex-col items-center">
                  <Link
                    to={ROUTES.auth}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981] px-4 py-1.5 text-[0.86rem] font-semibold text-white shadow-[0_4px_14px_rgba(30,41,59,0.28)] transition hover:scale-[1.02] hover:bg-[#08a672]"
                  >
                    {t('common.startFreeTrial')} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <p className="mt-1 text-[0.62rem] font-medium text-[#F1990A]">{t('common.noCardRequired')}</p>
                </div>

                <HeaderLanguageSelector
                  activeLanguage={activeLanguage}
                  changeLanguage={changeLanguage}
                  languageMenuRef={languageMenuRef}
                  languageOpen={languageOpen}
                  setLanguageOpen={setLanguageOpen}
                  t={t}
                />
              </div>

              <div className="flex items-center gap-1.5 md:hidden">
                <Link
                  to={ROUTES.auth}
                  className="hidden sm:inline-flex items-center rounded-full px-2 py-1.5 text-[0.75rem] font-bold text-[#10B981] transition hover:bg-[#F8FAFC]"
                >
                  {t('common.login')}
                </Link>
                <Link
                  to={ROUTES.auth}
                  className="inline-flex items-center rounded-full bg-[#10B981] px-3 py-1.5 text-[0.72rem] font-bold text-white shadow-sm transition hover:scale-[1.02] hover:bg-[#08a672]"
                >
                  {t('common.startFreeTrial')}
                </Link>
                <button
                  type="button"
                  className="ml-0.5 rounded-full p-1 text-[#1E293B] hover:bg-[#F8FAFC] active:scale-[0.9]"
                  onClick={() => setMenuOpen(true)}
                  aria-label={t('common.openMenu')}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <HeaderMobileMenu
            activeLanguage={activeLanguage}
            changeLanguage={changeLanguage}
            t={t}
            onClose={() => setMenuOpen(false)}
            isHomeDarkMode={isHomeDarkMode}
            onToggleHomeDarkMode={onToggleHomeDarkMode}
            showThemeToggle={showThemeToggle}
          />
        )}
      </AnimatePresence>

      <HeaderLanguageOverlay isChangingLanguage={isChangingLanguage} />
    </>
  )
}
