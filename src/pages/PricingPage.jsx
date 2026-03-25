import { Check, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pricingPlans } from '../content'
import { CTAButton, FinalCta, SectionHeading } from '../components'

export function PricingPage() {
  return (
    <section className="mx-auto max-w-[1280px] py-14">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing for growing WhatsApp sales teams."
        description="Choose the plan that matches your message volume today and upgrade when your business grows."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-[32px] border p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] ${
              index === 0
                ? 'border-teal-300 bg-[linear-gradient(180deg,#ecfeff_0%,#ffffff_60%)]'
                : 'border-slate-200 bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  {plan.name}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{plan.blurb}</p>
              </div>
              {plan.badge ? (
                <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">{plan.badge}</span>
              ) : null}
            </div>
            <div className="mt-8 flex items-end gap-2">
              <span className="font-display text-5xl font-semibold tracking-[-0.05em] text-slate-950">{plan.price}</span>
              <span className="pb-2 text-sm text-slate-500">/ month</span>
            </div>
            <div className="mt-8 space-y-4">
              {plan.points.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="h-4 w-4" />
                  </span>
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" full />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Included in every plan</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'WhatsApp automation',
              'Buyer intent filtering',
              'Auto replies',
              'Follow-up reminders',
              'Spam control',
              'Mobile-friendly setup',
            ].map((item) => (
              <div key={item} className="rounded-[24px] bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_60%,#10b981_120%)] p-7 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            <Sparkles className="h-4 w-4" />
            Need help choosing?
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em]">
            Start with Free, then move to Pro as your buyer volume grows.
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Free is perfect for testing the value. Pro gives growing businesses better filtering, follow-ups, and faster lead handling.
          </p>
          <div className="mt-8">
            <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" full dark />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/terms" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">
          View terms and conditions
        </Link>
      </div>

      <div className="mt-14">
        <FinalCta />
      </div>
    </section>
  )
}
