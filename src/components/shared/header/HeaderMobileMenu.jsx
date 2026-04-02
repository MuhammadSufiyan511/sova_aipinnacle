import { Link } from 'react-router-dom'
import { languageOptions } from '../../../hooks/useHeaderUi'

export function HeaderMobileMenu({ activeLanguage, changeLanguage, isItemActive, navItems, t }) {
  return (
    <div className="border-t border-[#E2EFEA] px-5 pb-4 pt-3 md:hidden">
      <div className="mb-3 grid gap-2 sm:grid-cols-2">
        {languageOptions.map((option) => (
          <button
            key={option.lng}
            type="button"
            onClick={() => changeLanguage(option.lng)}
            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ${
              activeLanguage.lng === option.lng ? 'bg-[#ECFDF5] text-[#10B981]' : 'bg-[#F8FAFC] text-[#48617A]'
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
              isItemActive(item) ? 'bg-[#ECFDF5] text-[#10B981]' : 'text-[#48617A] hover:bg-[#ECFDF5]'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
