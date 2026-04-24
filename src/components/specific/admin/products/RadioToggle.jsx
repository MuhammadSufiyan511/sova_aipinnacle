import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const RadioToggle = ({ id, active, onChange, activeColor = 'bg-[#ECFDF5]' }) => {
  const { t } = useTranslation()

  return (
    <div className="admin-radio-toggle-track relative flex h-[34px] w-full rounded-full border border-slate-200/50 bg-slate-100/80 p-0.5 transition-all duration-300 dark:border-white/70 dark:bg-white/5">
      <div className="z-10 grid h-full w-full grid-cols-2">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            if (!active) onChange()
          }}
          className={`admin-radio-toggle-btn relative flex items-center justify-center text-[0.65rem] font-extrabold transition-colors duration-300 ${active ? 'text-emerald-700 is-active' : 'text-[#648E89] is-inactive dark:text-slate-400'}`}
        >
          <span className="relative z-10">{t('admin.common.active')}</span>
          {active && (
            <Motion.div
              layoutId={`highlight-${id}`}
              className={`absolute inset-0 rounded-full shadow-sm ${activeColor}`}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
            />
          )}
        </button>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            if (active) onChange()
          }}
          className={`admin-radio-toggle-btn relative flex items-center justify-center text-[0.65rem] font-extrabold transition-colors duration-300 ${!active ? 'text-emerald-700 is-active' : 'text-[#648E89] is-inactive dark:text-slate-400'}`}
        >
          <span className="relative z-10">{t('admin.common.inactive')}</span>
          {!active && (
            <Motion.div
              layoutId={`highlight-${id}`}
              className={`absolute inset-0 rounded-full shadow-sm ${activeColor}`}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
            />
          )}
        </button>
      </div>
    </div>
  )
}
