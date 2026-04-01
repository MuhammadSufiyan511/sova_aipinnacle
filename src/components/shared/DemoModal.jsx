import { X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { heroVideoUrl } from '../../data'

export function DemoModal({ onClose }) {
  const { t } = useTranslation()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const autoplayVideoUrl = `${heroVideoUrl}?autoplay=1&rel=0`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[[#0F172A]/60] px-4 backdrop-blur-md">
      <div className="w-full max-w-4xl rounded-[40px] border border-white/10 p-6 text-white shadow-[0_32px_120px_rgba(0,0,0,0.5)] sm:p-8 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-32 -right-32 h-64 w-64 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex items-center justify-between gap-4 relative z-10">
          <div>
            <h3 className="font-display text-[2.2rem] text-[#10B981] font-bold tracking-[-0.04em]">{t('common.watchDemo')}</h3>
          </div>
          <button type="button" onClick={onClose} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10" aria-label={t('common.close')}>
            <X className="h-6 w-6 text-[#10B981]" />
          </button>
        </div>
        <div className="mt-8 rounded-[32px] bg-[#10B981] p-1.5 shadow-2xl">
          <div className="relative aspect-video overflow-hidden rounded-[28px] bg-black/20">
            {!isVideoLoaded && (
              <div className="absolute inset-0 z-10 overflow-hidden bg-[linear-gradient(135deg,#0f9f8f_0%,#153c5a_55%,#6d52d9_100%)]">
                <div className="absolute inset-0 animate-pulse bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.14)_50%,transparent_100%)]" />
                <div className="absolute left-5 top-5 h-4 w-32 rounded-full bg-white/20" />
                <div className="absolute left-5 top-14 h-[42%] w-[44%] rounded-[22px] bg-white/12" />
                <div className="absolute right-5 top-16 h-4 w-[24%] rounded-full bg-white/20" />
                <div className="absolute right-5 top-24 h-4 w-[32%] rounded-full bg-white/15" />
                <div className="absolute bottom-5 left-5 right-5 h-12 rounded-[18px] bg-white/16" />
              </div>
            )}
            <iframe
              className={`h-full w-full transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              src={autoplayVideoUrl}
              title={`${t('common.brand')} ${t('common.watchDemo')}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={() => setIsVideoLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
