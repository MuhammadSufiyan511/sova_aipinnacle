import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Bell, ChevronDown, Menu, Moon, Sun } from 'lucide-react'

export function DashboardHeader({
  activeLabel,
  currentLanguage,
  homeDarkMode,
  isDesktop,
  isRTL,
  langMenuRef,
  langOpen,
  languages,
  onChangeLanguage,
  onOpenMobile,
  onOpenNotifications,
  onToggleDesktopSidebar,
  onToggleLangOpen,
  onToggleTheme,
  onViewProfile,
  t,
  userInitial,
}) {
  const menuButton = (
    <button
      onClick={() => {
        if (isDesktop) {
          onToggleDesktopSidebar()
          return
        }
        onOpenMobile()
      }}
      className="rounded-xl p-1.5 text-slate-500 transition hover:bg-slate-100"
      aria-label={t('common.openMenu')}
    >
      <Menu className="h-4.5 w-4.5" />
    </button>
  )

  return (
    <header className={`dashboard-header sticky top-0 z-30 flex min-h-[3.25rem] items-center justify-between gap-3 border-b border-slate-200/70 bg-white/95 px-3 py-2 shadow-sm backdrop-blur-md sm:px-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
      <div className={`flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
        <div className="lg:hidden">
          {isRTL ? (
            <button
              onClick={onViewProfile}
              className="h-8 w-8 overflow-hidden rounded-full border-2 border-emerald-200 bg-gradient-to-br from-emerald-400 to-teal-600 shadow-sm transition hover:scale-[1.05]"
              aria-label={t('admin.nav.profile')}
            >
              <div className="flex h-full w-full items-center justify-center text-[0.7rem] font-bold text-white">
                {userInitial}
              </div>
            </button>
          ) : (
            menuButton
          )}
        </div>
        {!isRTL && isDesktop && <div>{menuButton}</div>}
        <div className={`min-w-0 ${isRTL ? 'text-right' : ''}`}>
          <p className="text-[0.54rem] font-bold uppercase tracking-[0.2em] text-[#10B981] sm:text-[0.6rem]">
            {t('admin.common.currentView', 'Current View')}
          </p>
          <h1 className="truncate font-display text-[0.92rem] font-bold text-slate-800 sm:text-[0.95rem]">{activeLabel}</h1>
        </div>
      </div>

      <div className={`flex shrink-0 items-center gap-1.5 sm:gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <button
          type="button"
          onClick={onToggleTheme}
          className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-emerald-600 sm:h-9 sm:w-9"
          aria-label={homeDarkMode ? t('common.lightMode') : t('common.darkMode')}
        >
          {homeDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-3 py-1.5 md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_4px_2px_rgba(16,185,129,0.4)]" />
          <span className="text-[0.68rem] font-semibold text-[#10B981]">
            {t('admin.common.automationLive', 'Automation live')}
          </span>
        </div>

        <div ref={langMenuRef} className="relative">
          <button
            onClick={onToggleLangOpen}
            className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 transition hover:bg-slate-100 sm:gap-1.5 sm:px-2.5"
          >
            <span className="text-sm leading-none">{currentLanguage.flag}</span>
            <span className="text-[0.68rem] font-bold text-slate-600">{currentLanguage.short}</span>
            <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {langOpen && (
              <Motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
              className={`language-selector-dropdown absolute mt-2 w-34 overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-2xl ${isRTL ? 'left-0' : 'right-0'}`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onChangeLanguage(lang.code)}
                    className={`language-option-btn flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[0.8rem] transition ${
                      currentLanguage.code === lang.code
                        ? 'is-active bg-emerald-50 font-bold text-emerald-700'
                        : 'font-medium text-slate-600 hover:bg-slate-50'
                    } ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{lang.label}</span>
                    <span className="text-[0.62rem] font-bold uppercase text-slate-400">{lang.short}</span>
                  </button>
                ))}
              </Motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={onOpenNotifications}
          className="relative rounded-full p-1.5 text-slate-500 transition hover:bg-slate-100"
        >
          <Bell className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          <span className={`absolute top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white ${isRTL ? 'left-1.5' : 'right-1.5'}`} />
        </button>

        {isRTL ? (
          <div className="lg:hidden">{menuButton}</div>
        ) : (
          <button
            onClick={onViewProfile}
            className="h-8 w-8 overflow-hidden rounded-full border-2 border-emerald-200 bg-gradient-to-br from-emerald-400 to-teal-600 shadow-sm transition hover:scale-[1.05]"
            aria-label={t('admin.nav.profile')}
          >
            <div className="flex h-full w-full items-center justify-center text-[0.7rem] font-bold text-white">
              {userInitial}
            </div>
          </button>
        )}
        {isRTL && isDesktop && <div>{menuButton}</div>}
      </div>
    </header>
  )
}
