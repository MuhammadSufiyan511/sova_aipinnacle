import { motion as Motion } from 'framer-motion'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const RTL_LANGS = ['ur', 'ar', 'hi', 'bn']

export const Toggle = memo(function Toggle({ enabled, onChange }) {
  const { i18n } = useTranslation()
  const isRTL = RTL_LANGS.includes(i18n.language)

  return (
    <button
      onClick={() => onChange(!enabled)}
      type="button"
      className={`relative inline-flex h-5.5 w-10 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ${
        enabled ? 'bg-emerald-500' : 'bg-[#DDEFE7]'
      }`}
    >
      <Motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`h-3.5 w-3.5 rounded-full bg-white shadow-md ${
          enabled 
            ? (isRTL ? '-translate-x-5.5' : 'translate-x-5.5') 
            : (isRTL ? '-translate-x-1' : 'translate-x-1')
        }`}
      />
    </button>
  )
})
