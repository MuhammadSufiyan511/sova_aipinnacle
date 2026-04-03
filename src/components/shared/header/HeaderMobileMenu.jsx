import { Link } from 'react-router-dom'
import { languageOptions } from '../../../hooks/useHeaderUi'

export function HeaderMobileMenu({ activeLanguage, changeLanguage, isItemActive, navItems, t }) {
  return (
    <div className="border-t border-[#E2EFEA] bg-white px-5 pb-8 pt-5 md:hidden">
      <div className="mb-6">
        <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#648E89]">{t('common.selectLanguage')}</p>
        <div className="grid grid-cols-2 gap-2.5">
          {languageOptions.map((option) => (
            <button
              key={option.lng}
              type="button"
              onClick={() => changeLanguage(option.lng)}
              className={`flex items-center justify-center gap-2.5 rounded-xl border py-3 text-[0.82rem] font-bold transition-all active:scale-[0.97] ${
                activeLanguage.lng === option.lng ? 'border-emerald-200 bg-[#ECFDF5] text-[#10B981] shadow-sm' : 'border-slate-100 bg-[#F8FAFC] text-[#48617A] hover:border-emerald-100'
              }`}
            >
              <option.Flag className="h-4 w-5 shrink-0 rounded-sm" />
              <span>{t(`languages.${option.lng}.short`)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-2">
        <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#648E89]">{t('common.navigation')}</p>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[0.95rem] font-bold transition-all active:scale-[0.98] ${
                isItemActive(item) ? 'bg-[#ECFDF5] text-[#10B981]' : 'bg-[#F8FAFC] text-[#1E293B] hover:bg-[#F1F5F9]'
              }`}
            >
              <span>{item.label}</span>
              <span className={`h-1.5 w-1.5 rounded-full ${isItemActive(item) ? 'bg-[#10B981]' : 'bg-transparent'}`} />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
