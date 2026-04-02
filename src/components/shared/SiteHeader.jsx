import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import sovaLogo from '../../assets/logos/sova.png'
import { useHeaderUi } from '../../hooks/useHeaderUi'
import { ROUTES } from '../../utils/routes'
import { HeaderDesktopNav } from './header/HeaderDesktopNav'
import { HeaderLanguageOverlay } from './header/HeaderLanguageOverlay'
import { HeaderLanguageSelector } from './header/HeaderLanguageSelector'
import { HeaderMobileMenu } from './header/HeaderMobileMenu'

export function SiteHeader() {
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
            className={`pointer-events-auto w-full max-w-[1040px] rounded-full border transition-all duration-300 ${
              scrolled
                ? 'border-[#d8e9e3] bg-white/92 shadow-[0_10px_32px_rgba(30,41,59,0.12)] backdrop-blur-xl'
                : 'border-[#e4efeb] bg-white/82 shadow-[0_4px_24px_rgba(30,41,59,0.08)] backdrop-blur-lg'
            }`}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-2.5">
              <Link to={ROUTES.home} className="flex shrink-0 items-center gap-1">
                <img src={sovaLogo} alt={t('common.brand')} decoding="async" className="h-8 w-14 rounded-xl" />
                <span className="font-display text-[1.05rem] font-bold tracking-[-0.03em] text-[#1E293B]">{t('common.brand')}</span>
              </Link>

              <div className="hidden items-center gap-3 md:flex">
                <HeaderDesktopNav navItems={navItems} isItemActive={isItemActive} />
              </div>

              <div className="hidden shrink-0 items-center gap-3 md:flex">
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

              <button
                type="button"
                className="rounded-full p-2 text-[#1E293B] hover:bg-[#F8FAFC] md:hidden"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {menuOpen && (
              <HeaderMobileMenu
                activeLanguage={activeLanguage}
                changeLanguage={changeLanguage}
                isItemActive={isItemActive}
                navItems={navItems}
                t={t}
              />
            )}
          </div>
        </div>
      </header>

      <HeaderLanguageOverlay isChangingLanguage={isChangingLanguage} />
    </>
  )
}
