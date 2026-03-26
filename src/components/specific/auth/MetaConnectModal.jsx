import { Check, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const successItems = [
  'Meta business account verified',
  'WhatsApp number ready for automation',
  'Sova workspace created for your team',
]

export function MetaConnectModal({ onClose }) {
  const { i18n } = useTranslation()
  const isUrdu = i18n.resolvedLanguage?.startsWith('ur')
  const localizedItems = isUrdu
    ? [
        'Meta بزنس اکاؤنٹ ویریفائی ہو گیا',
        'WhatsApp نمبر آٹومیشن کے لیے تیار ہے',
        'آپ کی ٹیم کے لیے Sova ورک اسپیس بن گئی',
      ]
    : successItems

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#090E1A]/40 px-4 backdrop-blur-md">
      <div className="relative w-full max-w-[460px] overflow-hidden rounded-[26px] border border-white/20 bg-white p-5 shadow-[0_20px_70px_rgba(0,97,255,0.18)]">
        {/* Subtle glow */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0061FF]">{isUrdu ? 'Meta کنکشن' : 'Meta connection'}</p>
            <h3 className="mt-1.5 font-display text-[1.45rem] font-bold tracking-[-0.04em] text-[#111827] sm:text-[1.6rem]">{isUrdu ? 'اکاؤنٹ کامیابی سے کنیکٹ ہو گیا' : 'Account connected successfully'}</h3>
          </div>
          <button type="button" onClick={onClose} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#F0F0F0] bg-[#F8FAFF] transition hover:bg-[#EBF5FF]" aria-label="Close Meta connection modal">
            <X className="h-4.5 w-4.5 text-[#0061FF]" />
          </button>
        </div>
        <div className="mt-5 space-y-2.5">
          {localizedItems.map((item) => (
            <div key={item} className="flex items-center gap-2.5 rounded-[16px] border border-black/5 bg-[#F8FAFF] px-3.5 py-3 text-[0.84rem] font-medium text-[#111827] shadow-sm">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0061FF] text-white shadow-lg shadow-blue-500/20"><Check className="h-3.5 w-3.5" /></span>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-[18px] border border-[#F0F0F0] bg-gradient-to-br from-[#F8FAFF] via-white to-[#F0F7FF] p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#0061FF]">{isUrdu ? 'اگلا مرحلہ' : 'Next step'}</p>
          <p className="mt-1.5 text-[0.86rem] font-medium leading-[1.55] text-[#6E6E73]">{isUrdu ? 'اب آپ اپنے ڈیش بورڈ پر جا کر جواب، لیڈ فلٹر، اور فالو اپ فلو سیٹ کر سکتے ہیں۔' : 'You can now continue to your dashboard and start setting replies, lead filters, and follow-up flows.'}</p>
        </div>
        <button type="button" onClick={onClose} className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-[16px] bg-gradient-to-r from-[#0061FF] to-[#3B82F6] px-5 text-[0.9rem] font-bold text-white shadow-[0_14px_28px_rgba(0,97,255,0.2)] transition hover:scale-[1.01] active:scale-[0.99]">
          {isUrdu ? 'ڈیش بورڈ پر جائیں' : 'Continue to Dashboard'}
        </button>
      </div>
    </div>
  )
}
