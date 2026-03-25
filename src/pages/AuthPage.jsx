import { useState } from 'react'
import { Check, Globe, ShieldCheck, X } from 'lucide-react'

export function AuthPage() {
  const [showMetaModal, setShowMetaModal] = useState(false)

  return (
    <>
      <section className="mx-auto max-w-[1280px] py-16">
        <div className="grid gap-6 rounded-[40px] border border-slate-200 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.1)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
          <div className="rounded-[32px] bg-[linear-gradient(160deg,#0f172a_0%,#1d4ed8_55%,#10b981_130%)] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Meta only access</p>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Login and signup made simple.
            </h1>
            <p className="mt-5 max-w-md text-base leading-8 text-white/80">
              Connect through Meta, keep setup clean, and start managing your WhatsApp conversations faster.
            </p>
            <div className="mt-8 space-y-4">
              {['Safe Meta connection', 'No email or password needed', 'Start free with no card required'].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <Check className="h-4 w-4" />
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[32px] bg-slate-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Account access</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">Continue with Meta</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Use your Meta-connected business identity to continue. This page combines login and signup in one smooth flow.
              </p>
              <button
                type="button"
                onClick={() => setShowMetaModal(true)}
                className="mt-8 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#10b981_0%,#06b6d4_100%)] px-6 text-base font-semibold text-white shadow-[0_22px_45px_rgba(16,185,129,0.28)] transition hover:translate-y-[-1px]"
              >
                <Globe className="h-5 w-5" />
                Continue with Meta
              </button>
              <p className="mt-3 text-center text-sm text-slate-500">No card required</p>
              <button type="button" className="mt-6 text-sm font-semibold text-slate-600 transition hover:text-slate-900">
                Forgot Password
              </button>
              <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                  <ShieldCheck className="h-5 w-5 text-teal-600" />
                  Meta-first login only
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We keep the access flow clear and low-friction for business owners who mainly work from mobile.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#ffffff_52%,#eef2ff_100%)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:col-span-2">
            <div className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Meta integration mockup</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  Connect WhatsApp through Meta in a few simple steps.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  This mockup shows how Sova can guide business owners through a clean Meta connection flow without extra confusion.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    'Choose your Meta business account',
                    'Select the WhatsApp number to connect',
                    'Approve permissions and start automation',
                  ].map((step, index) => (
                    <div key={step} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 text-sm text-slate-700 shadow-sm">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                        0{index + 1}
                      </span>
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
                    <div className="rounded-full bg-[#1877F2] px-3 py-1 text-xs font-semibold text-white">
                      Meta
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Business account</p>
                      <div className="mt-3 flex items-center justify-between rounded-xl bg-white/6 px-4 py-3">
                        <div>
                          <p className="text-sm font-medium">Sova Commerce Demo</p>
                          <p className="text-xs text-white/55">Business Manager ID: 4921 8820</p>
                        </div>
                        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                          Connected
                        </span>
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
                      <p className="mt-2 text-sm text-white/85">
                        Manage messages, sync leads, and trigger automated replies through Sova.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowMetaModal(true)}
                      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#1877F2_0%,#10b981_100%)] px-5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(24,119,242,0.28)]"
                    >
                      Continue to Sova Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showMetaModal ? <MetaConnectModal onClose={() => setShowMetaModal(false)} /> : null}
    </>
  )
}

function MetaConnectModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[32px] border border-white/10 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.28)] sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Meta connection</p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">
              Account connected successfully
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50"
            aria-label="Close Meta connection modal"
          >
            <X className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {[
            'Meta business account verified',
            'WhatsApp number ready for automation',
            'Sova workspace created for your team',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Check className="h-4 w-4" />
              </span>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#eef2ff_100%)] p-5">
          <p className="text-sm font-semibold text-slate-900">Next step</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            You can now continue to your dashboard and start setting replies, lead filters, and follow-up flows.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#10b981_0%,#06b6d4_100%)] px-5 text-sm font-semibold text-white"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  )
}
