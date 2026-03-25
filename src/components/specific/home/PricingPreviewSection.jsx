import { Check } from 'lucide-react'
import { pricingPlans } from '../../../data'
import { CTAButton, SectionHeading } from '../../ui'
import { ROUTES } from '../../../utils/routes'

export function PricingPreviewSection() {
  return (
    <section className="mx-auto max-w-[1280px] py-16">
      <SectionHeading eyebrow="Pricing" title="Clear plans for every growth stage." description="Start free, prove the value, and upgrade when your message volume grows." />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div key={plan.name} className={`rounded-[32px] border p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] ${index === 0 ? 'border-teal-300 bg-[linear-gradient(180deg,#ecfeff_0%,#ffffff_60%)]' : 'border-slate-200 bg-white'}`}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">{plan.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{plan.blurb}</p>
              </div>
              {plan.badge ? <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">{plan.badge}</span> : null}
            </div>
            <div className="mt-8 flex items-end gap-2">
              <span className="font-display text-5xl font-semibold tracking-[-0.05em] text-slate-950">{plan.price}</span>
              <span className="pb-2 text-sm text-slate-500">/ month</span>
            </div>
            <div className="mt-8 space-y-4">
              {plan.points.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-4 w-4" /></span>
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton to={ROUTES.auth} label="Start Free Trial" subtext="No card required" full />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
