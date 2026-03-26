import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { heroVideoUrl } from '../../data'

export function DemoModal({ onClose }) {
  const { t } = useTranslation()
  const autoplayVideoUrl = `${heroVideoUrl}?autoplay=1&rel=0`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#090E1A]/60 px-4 backdrop-blur-md">
      <div className="w-full max-w-4xl rounded-[40px] border border-white/10 bg-[#090E1A] p-6 text-white shadow-[0_32px_120px_rgba(0,0,0,0.5)] sm:p-8 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-32 -right-32 h-64 w-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex items-center justify-between gap-4 relative z-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">2-minute demo</p>
            <h3 className="mt-2 font-display text-[2.2rem] font-bold tracking-[-0.04em]">{t('common.seeDemo')}</h3>
          </div>
          <button type="button" onClick={onClose} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10" aria-label="Close demo modal">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-8 rounded-[32px] bg-gradient-to-br from-[#111827] via-[#090E1A] to-[#1E3A8A] p-1.5 shadow-2xl">
          <div className="aspect-video overflow-hidden rounded-[28px] bg-black/40">
            <iframe className="h-full w-full" src={autoplayVideoUrl} title="Sova product demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  )
}
