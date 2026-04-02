import { Link } from 'react-router-dom'
import { languageOptions } from '../../../hooks/useHeaderUi'

export function HeaderMobileMenu({ activeLanguage, changeLanguage, isItemActive, navItems, t }) {
  return (
    <div className="border-t border-[#E2EFEA] px-5 pb-6 pt-4 md:hidden">
      <div className="mb-4 grid grid-cols-2 gap-2.5">
        {languageOptions.map((option) => (
          <button
            key={option.lng}
            type="button"
            onClick={() => changeLanguage(option.lng)}
            className={`flex items-center justify-center gap-2.5 rounded-xl border py-2.5 text-[0.82rem] font-bold transition-all active:scale-[0.97] ${
              activeLanguage.lng === option.lng ? 'border-emerald-200 bg-[#ECFDF5] text-[#10B981] shadow-sm' : 'border-slate-100 bg-[#F8FAFC] text-[#48617A] hover:border-emerald-100'
            }`}
          >
            <option.Flag className="h-4 w-5 shrink-0 rounded-sm" />
            <span>{t(`languages.${option.lng}.short`)}</span>
          </button>
        ))}
      </div>

      <nav className="flex flex-col gap-1.5">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`rounded-xl px-4 py-3 text-[0.88rem] font-bold transition-all active:scale-[0.98] ${
              isItemActive(item) ? 'bg-[#ECFDF5] text-[#10B981]' : 'text-[#476977] hover:bg-[#F8FAFC]'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
