import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Sun, Moon, X } from 'lucide-react'
import { ROUTES } from '../../../utils/routes'
import { languageOptions } from '../../../hooks/useHeaderUi'

export function HeaderMobileMenu({ 
  activeLanguage, 
  changeLanguage, 
  t, 
  onClose,
  isHomeDarkMode,
  onToggleHomeDarkMode,
  showThemeToggle
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-[#1E293B]/40 md:hidden"
      />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
        className="fixed bottom-0 right-0 top-0 z-[110] flex w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl md:hidden will-change-transform"
      >
        <div className="flex items-center justify-between border-b border-[#E2EFEA] px-5 py-4">
          <span className="font-display font-bold text-[#1E293B]">{t('common.menu') || 'Menu'}</span>
          <button 
            type="button" 
            onClick={onClose}
            className="rounded-full p-2 text-[#48617A] hover:bg-[#F8FAFC] active:scale-95"
            aria-label={t('common.closeMenu')}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-6">
          {showThemeToggle && (
            <div className="mb-8 border-b border-[#E2EFEA] pb-8">
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#648E89]">
                {t('common.theme') || 'Theme'}
              </p>
              <button
                type="button"
                onClick={onToggleHomeDarkMode}
                className="flex w-full items-center justify-between rounded-xl border border-[#E2EFEA] bg-[#F8FAFC] px-4 py-3.5 font-medium text-[#1E293B] transition-all active:scale-[0.98]"
              >
                <span>{isHomeDarkMode ? t('common.lightMode') || 'Light Mode' : t('common.darkMode') || 'Dark Mode'}</span>
                {isHomeDarkMode ? <Sun className="h-4 w-4 text-[#F59E0B]" /> : <Moon className="h-4 w-4 text-[#6366F1]" />}
              </button>
            </div>
          )}

          <div className="pb-8">
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#648E89]">{t('common.selectLanguage')}</p>
            <div className="grid grid-cols-2 gap-3">
              {languageOptions.map((option) => (
                <button
                  key={option.lng}
                  type="button"
                  onClick={() => {
                    changeLanguage(option.lng)
                    onClose()
                  }}
                  className={`flex flex-col items-center justify-center gap-2 rounded-xl border py-4 text-[0.82rem] font-bold transition-all active:scale-[0.97] ${
                    activeLanguage.lng === option.lng 
                      ? 'border-[#10B981] bg-[#ECFDF5] text-[#10B981] shadow-sm' 
                      : 'border-[#E2EFEA] bg-white text-[#48617A] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <option.Flag className="h-6 w-8 shrink-0 rounded-sm shadow-sm" />
                  <span>{t(`languages.${option.lng}.short`)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#E2EFEA] pt-6">
            <Link
              to={ROUTES.auth}
              onClick={onClose}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#10B981] px-4 py-3 text-[0.9rem] font-extrabold text-white shadow-[0_12px_28px_rgba(16,185,129,0.25)] transition-all active:scale-[0.98]"
            >
              {t('common.startFreeTrial')} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-center text-[0.72rem] font-semibold text-[#F1990A]">
              {t('common.noCardRequired')}
            </p>
          </div>
          
        </div>
      </motion.div>
    </>
  )
}
