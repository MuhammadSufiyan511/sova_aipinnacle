import { X } from 'lucide-react'
import { heroVideoUrl } from '../../data'

export function DemoModal({ onClose }) {
  const autoplayVideoUrl = `${heroVideoUrl}?autoplay=1&rel=0`

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#10283a]/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-[36px] border border-white/10 bg-[#10283a] p-5 text-white shadow-[0_32px_80px_rgba(15,23,42,0.45)] sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">2-minute demo</p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em]">See Sova in action</h3>
          </div>
          <button type="button" onClick={onClose} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5" aria-label="Close demo modal">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 rounded-[28px] bg-[linear-gradient(135deg,#111827_0%,#0f766e_100%)] p-4">
          <div className="aspect-video overflow-hidden rounded-[24px] border border-white/10 bg-[#10283a]/30">
            <iframe className="h-full w-full" src={autoplayVideoUrl} title="Sova product demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  )
}
