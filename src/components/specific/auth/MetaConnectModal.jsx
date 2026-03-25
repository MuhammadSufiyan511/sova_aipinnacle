import { Check, X } from 'lucide-react'

const successItems = [
  'Meta business account verified',
  'WhatsApp number ready for automation',
  'Sova workspace created for your team',
]

export function MetaConnectModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[32px] border border-white/10 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.28)] sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Meta connection</p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">Account connected successfully</h3>
          </div>
          <button type="button" onClick={onClose} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50" aria-label="Close Meta connection modal">
            <X className="h-5 w-5 text-slate-700" />
          </button>
        </div>
        <div className="mt-6 space-y-3">
          {successItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-4 w-4" /></span>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[24px] border border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#eef2ff_100%)] p-5">
          <p className="text-sm font-semibold text-slate-900">Next step</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">You can now continue to your dashboard and start setting replies, lead filters, and follow-up flows.</p>
        </div>
        <button type="button" onClick={onClose} className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#10b981_0%,#06b6d4_100%)] px-5 text-sm font-semibold text-white">
          Continue to Dashboard
        </button>
      </div>
    </div>
  )
}
