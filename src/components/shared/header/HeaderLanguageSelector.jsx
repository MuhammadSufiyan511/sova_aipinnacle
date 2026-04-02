import { ChevronDown } from 'lucide-react'
import { languageOptions } from '../../../hooks/useHeaderUi'

export function HeaderLanguageSelector({
  activeLanguage,
  changeLanguage,
  languageMenuRef,
  languageOpen,
  setLanguageOpen,
  t,
}) {
  return (
    <div ref={languageMenuRef} className="relative">
      <button
        type="button"
        onClick={() => setLanguageOpen((prev) => !prev)}
        className="flex h-10 items-center gap-2 rounded-[12px] border border-[#ECFDF5] bg-white/80 px-3 text-[0.8rem] font-semibold text-[#1E293B]"
      >
        <activeLanguage.Flag className="h-4 w-5 rounded-sm" />
        <span>{t(`languages.${activeLanguage.lng}.short`)}</span>
        <ChevronDown className="h-3.5 w-3.5" />
      </button>

      {languageOpen && (
        <div className="absolute right-0 top-[118%] z-20 w-[220px] rounded-[14px] border border-[#E2EFEA] bg-white py-2 shadow-[0_24px_60px_rgba(30,41,59,0.14)]">
          <div className="absolute -top-2 right-6 h-4 w-4 rotate-45 border-l border-t border-[#E2EFEA] bg-white" />
          {languageOptions.map((option) => (
            <button
              key={option.lng}
              type="button"
              onClick={() => changeLanguage(option.lng)}
              className={`relative flex w-full items-center gap-3 px-4 py-2.5 text-left transition hover:bg-[#ECFDF5] ${
                activeLanguage.lng === option.lng ? 'bg-[#ECFDF5]' : ''
              }`}
            >
              <span className="w-9 text-[0.8rem] font-semibold uppercase text-[#1E293B]">
                {t(`languages.${option.lng}.short`)}
              </span>
              <option.Flag className="h-4 w-5 rounded-sm" />
              <span className="text-[0.92rem] text-[#1E293B]">{t(`languages.${option.lng}.label`)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
