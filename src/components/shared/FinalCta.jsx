import { CTAButton } from '../ui'
import { ROUTES } from '../../utils/routes'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-[1280px] pb-8">
      <div className="rounded-[40px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_55%,#10b981_120%)] px-6 py-10 text-white shadow-[0_32px_80px_rgba(15,23,42,0.22)] sm:px-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/95">Final CTA</p>
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Stop losing customers on WhatsApp</h2>
            <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">
              Give every buyer a fast reply, keep your team focused, and turn more conversations into orders.
            </p>
          </div>
          <div className="min-w-[240px]">
            <CTAButton to={ROUTES.auth} label="Start Free Trial" subtext="No card required" full dark />
          </div>
        </div>
      </div>
    </section>
  )
}
