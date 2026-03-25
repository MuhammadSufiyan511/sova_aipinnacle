import { useState } from 'react'
import { Check, Globe, ShieldCheck } from 'lucide-react'
import { MetaConnectModal, MetaIntegrationShowcase } from '../components/specific/auth'

const authBenefits = ['Safe Meta connection', 'No email or password needed', 'Start free with no card required']

export function AuthPage() {
  const [showMetaModal, setShowMetaModal] = useState(false)

  return (
    <>
      <section className="mx-auto max-w-[1280px] py-16">
        <div className="grid gap-6 rounded-[40px] border border-slate-200 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.1)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
          <div className="rounded-[32px] bg-[linear-gradient(160deg,#0f172a_0%,#1d4ed8_55%,#10b981_130%)] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Meta only access</p>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Login and signup made simple.</h1>
            <p className="mt-5 max-w-md text-base leading-8 text-white/80">Connect through Meta, keep setup clean, and start managing your WhatsApp conversations faster.</p>
            <div className="mt-8 space-y-4">
              {authBenefits.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10"><Check className="h-4 w-4" /></span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[32px] bg-slate-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Account access</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">Continue with Meta</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Use your Meta-connected business identity to continue. This page combines login and signup in one smooth flow.</p>
              <button type="button" onClick={() => setShowMetaModal(true)} className="mt-8 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#10b981_0%,#06b6d4_100%)] px-6 text-base font-semibold text-white shadow-[0_22px_45px_rgba(16,185,129,0.28)] transition hover:translate-y-[-1px]">
                <Globe className="h-5 w-5" />
                Continue with Meta
              </button>
              <p className="mt-3 text-center text-sm text-slate-500">No card required</p>
              <button type="button" className="mt-6 text-sm font-semibold text-slate-600 transition hover:text-slate-900">Forgot Password</button>
              <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-900"><ShieldCheck className="h-5 w-5 text-teal-600" />Meta-first login only</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">We keep the access flow clear and low-friction for business owners who mainly work from mobile.</p>
              </div>
            </div>
          </div>

          <MetaIntegrationShowcase onOpenModal={() => setShowMetaModal(true)} />
        </div>
      </section>

      {showMetaModal ? <MetaConnectModal onClose={() => setShowMetaModal(false)} /> : null}
    </>
  )
}
