import { Check } from 'lucide-react'
import { pricingPlans } from '../../../data'
import { CTAButton, SectionHeading } from '../../ui'
import { ROUTES } from '../../../utils/routes'

export function PricingPreviewSection() {
  return (
    <section className="mx-auto max-w-[1280px] py-12">
      <SectionHeading eyebrow="Pricing" title="Plans that stay simple" description="Start free and upgrade when volume grows." centered />
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div key={plan.name} className={`rounded-[28px] border p-5 shadow-[0_20px_48px_rgba(15,23,42,0.07)] ${index === 0 ? 'border-teal-300 bg-[linear-gradient(180deg,#ecfeff_0%,#ffffff_60%)]' : 'border-[#cfe6e9] bg-white'}`}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[#173247]">{plan.name}</h3>
                <p className="mt-1.5 text-xs leading-6 text-[#4e6b79] sm:text-sm">{plan.blurb}</p>
              </div>
              {plan.badge ? <span className="rounded-full bg-teal-600 px-2.5 py-1 text-[11px] font-semibold text-white">{plan.badge}</span> : null}
            </div>
            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-4xl font-semibold tracking-[-0.05em] text-[#173247]">{plan.price}</span>
              <span className="pb-1.5 text-xs text-[#0f9f8f] sm:text-sm">/ month</span>
            </div>
            <div className="mt-6 space-y-3">
              {plan.points.map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-xs text-[#305365] sm:text-sm">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-3.5 w-3.5" /></span>
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <CTAButton to={ROUTES.auth} label="Start Free Trial" subtext="No card required" full />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
