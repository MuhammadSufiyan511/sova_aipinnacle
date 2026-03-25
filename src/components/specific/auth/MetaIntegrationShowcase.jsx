import { Globe } from 'lucide-react'

const steps = [
  'Choose your Meta business account',
  'Select the WhatsApp number to connect',
  'Approve permissions and start automation',
]

export function MetaIntegrationShowcase({ onOpenModal }) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#ffffff_52%,#eef2ff_100%)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:col-span-2">
      <div className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Meta integration mockup</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Connect WhatsApp through Meta in a few simple steps.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">This mockup shows how Sova can guide business owners through a clean Meta connection flow without extra confusion.</p>
          <div className="mt-6 space-y-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 text-sm text-slate-700 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">0{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[30px] border border-slate-200 bg-slate-950 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
          <div className="rounded-[24px] bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-4 text-white">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-sm font-semibold">Meta Business Connection</p>
                <p className="text-xs text-white/60">Mockup flow for onboarding</p>
              </div>
              <div className="rounded-full bg-[#1877F2] px-3 py-1 text-xs font-semibold text-white">Meta</div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Business account</p>
                <div className="mt-3 flex items-center justify-between rounded-xl bg-white/6 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">Sova Commerce Demo</p>
                    <p className="text-xs text-white/55">Business Manager ID: 4921 8820</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">Connected</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">WhatsApp number</p>
                <div className="mt-3 rounded-xl bg-white/6 px-4 py-3">
                  <p className="text-sm font-medium">+92 300 1234567</p>
                  <p className="text-xs text-white/55">Ready for message automation</p>
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Permissions approved</p>
                <p className="mt-2 text-sm text-white/85">Manage messages, sync leads, and trigger automated replies through Sova.</p>
              </div>
              <button type="button" onClick={onOpenModal} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#1877F2_0%,#10b981_100%)] px-5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(24,119,242,0.28)]">
                <Globe className="h-4 w-4" />
                Continue to Sova Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
