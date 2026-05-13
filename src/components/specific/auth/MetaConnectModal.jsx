import { Check, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { ROUTES } from '../../../utils/routes'

const successItems = [
  'Meta business account verified',
  'WhatsApp number ready for automation',
  'Sova workspace created for your team',
]

export function MetaConnectModal({ onClose }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const copy = t('content.metaModal', { returnObjects: true }) || {}
  const localizedItems = copy.items || successItems

  const handleContinue = () => {
    onClose()
    navigate(ROUTES.onboarding)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
      {/* Synchronized Backdrop Animation */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-md"
      />

      <Motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 12 }}
        transition={{ 
          duration: 0.35, 
          ease: [0.16, 1, 0.3, 1], // Custom spring-like quintic ease
        }}
        onClick={(e) => e.stopPropagation()}
        style={{ willChange: 'transform, opacity' }} // Hint for the browser
        className="meta-modal-card transform-gpu relative w-full max-w-[460px] overflow-hidden rounded-[26px] border border-white/20 bg-white p-5 shadow-[0_12px_44px_rgba(16,185,129,0.12)] sm:p-6"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl opacity-20" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F1990A] meta-modal-eyebrow">{copy.eyebrow}</p>
            <h3 className="mt-1.5 font-display text-[1.35rem] font-bold tracking-[-0.04em] text-[#0F172A] sm:text-[1.6rem] meta-modal-title">{copy.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="meta-modal-close-btn inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E2EFEA] bg-[#F8FAFC] transition active:scale-95 sm:hover:bg-[#ECFDF5]"
            aria-label={t('common.closeMetaModal')}
          >
            <X className="h-4.5 w-4.5 text-[#F1990A]" />
          </button>
        </div>

        <div className="mt-5 space-y-2.5">
          {localizedItems.map((item, idx) => (
            <Motion.div 
              key={item} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + idx * 0.04, duration: 0.3 }}
              className="meta-modal-item flex items-center gap-2.5 rounded-[16px] border border-[#E2EFEA] bg-[#F8FAFC] px-3.5 py-3 text-[0.84rem] font-medium text-[#0F172A] shadow-sm"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#10B981] text-white shadow-lg shadow-emerald-500/20">
                <Check className="h-3.5 w-3.5" />
              </span>
              {item}
            </Motion.div>
          ))}
        </div>

        <div className="meta-modal-next-step mt-5 rounded-[18px] border border-[#E2EFEA] bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#10B981] meta-modal-next-eyebrow">{copy.nextStep}</p>
          <p className="mt-1.5 text-[0.86rem] font-medium leading-[1.55] text-[#48617A] meta-modal-next-text">{copy.nextStepText}</p>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-[16px] bg-gradient-to-r from-[#10B981] to-[#1E293B] px-5 text-[0.9rem] font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition active:scale-[0.98] sm:hover:scale-[1.01] meta-modal-primary-btn"
        >
          {copy.button}
        </button>
      </Motion.div>
    </div>
  )
}
