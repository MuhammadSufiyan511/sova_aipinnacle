import { Check, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F172A]/40 px-4 backdrop-blur-md">
      <div className="relative w-full max-w-[460px] overflow-hidden rounded-[26px] border border-white/20 bg-white p-5 shadow-[0_20px_70px_rgba(16,185,129,0.18)]">
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F1990A]">{copy.eyebrow}</p>
            <h3 className="mt-1.5 font-display text-[1.45rem] font-bold tracking-[-0.04em] text-[#0F172A] sm:text-[1.6rem]">{copy.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E2EFEA] bg-[#F8FAFC] transition hover:bg-[#ECFDF5]"
            aria-label="Close Meta connection modal"
          >
            <X className="h-4.5 w-4.5 text-[#F1990A]" />
          </button>
        </div>
        <div className="mt-5 space-y-2.5">
          {localizedItems.map((item) => (
            <div key={item} className="flex items-center gap-2.5 rounded-[16px] border border-[#E2EFEA] bg-[#F8FAFC] px-3.5 py-3 text-[0.84rem] font-medium text-[#0F172A] shadow-sm">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#10B981] text-white shadow-lg shadow-emerald-500/20">
                <Check className="h-3.5 w-3.5" />
              </span>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-[18px] border border-[#E2EFEA] bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#10B981]">{copy.nextStep}</p>
          <p className="mt-1.5 text-[0.86rem] font-medium leading-[1.55] text-[#48617A]">{copy.nextStepText}</p>
        </div>
        <button
          type="button"
          onClick={handleContinue}
          className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-[16px] bg-gradient-to-r from-[#10B981] to-[#1E293B] px-5 text-[0.9rem] font-bold text-white shadow-[0_14px_28px_rgba(16,185,129,0.2)] transition hover:scale-[1.01] active:scale-[0.99]"
        >
          {copy.button}
        </button>
      </div>
    </div>
  )
}
