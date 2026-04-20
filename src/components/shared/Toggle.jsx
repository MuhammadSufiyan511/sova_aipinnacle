import { motion as Motion } from 'framer-motion'
import { memo } from 'react'

export const Toggle = memo(function Toggle({ enabled, onChange }) {
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
          enabled ? 'translate-x-5.5' : 'translate-x-1'
        }`}
      />
    </button>
  )
})
