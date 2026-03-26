import { Check, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pricingPlans } from '../data'
import { CTAButton, FinalCta, SectionHeading } from '../components'

export function PricingPage() {
  return (
    <section className="mx-auto max-w-[1160px] py-20 px-5">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing for growing WhatsApp sales teams."
        description="Choose the plan that matches your message volume today and upgrade when your business grows."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-[32px] border p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)] transition-all hover:y-[-4px] ${
              index === 1
                ? 'border-[#0061FF]/30 bg-white ring-1 ring-[#0061FF]/10'
                : 'border-[#F0F0F0] bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-[2.2rem] font-bold tracking-[-0.04em] text-[#1D1D1F]">
                  {plan.name}
                </h2>
                <p className="mt-2 text-[1rem] leading-[1.6] text-[#6E6E73]">{plan.blurb}</p>
              </div>
              {plan.badge ? (
                <span className="rounded-full bg-[#0061FF] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">{plan.badge}</span>
              ) : null}
            </div>
            <div className="mt-8 flex items-end gap-2">
              <span className="font-display text-5xl font-extrabold tracking-[-0.05em] text-[#1D1D1F]">{plan.price}</span>
              <span className="pb-2 text-[1rem] font-medium text-[#0061FF]">/ month</span>
            </div>
            <div className="mt-8 space-y-4">
              {plan.points.map((point) => (
                <div key={point} className="flex items-center gap-3 text-[0.95rem] font-medium text-[#111827]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EBF5FF] text-[#0061FF]">
                    <Check className="h-4 w-4" />
                  </span>
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" full />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-[#F0F0F0] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0061FF]">Included in every plan</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'WhatsApp automation',
              'Buyer intent filtering',
              'Auto replies',
              'Follow-up reminders',
              'Spam control',
              'Mobile-friendly setup',
            ].map((item) => (
              <div key={item} className="rounded-[20px] bg-[#F8FAFF] px-6 py-4 text-[0.9rem] font-bold text-[#111827]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-gradient-to-br from-[#0061FF] via-[#3B82F6] to-[#60A5FA] p-10 text-white shadow-xl relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="20" cy="20" r="40" fill="white" />
             </svg>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              <Sparkles className="h-4 w-4" />
              Need help choosing?
            </div>
            <h3 className="mt-6 font-display text-[2.2rem] font-bold tracking-[-0.04em] leading-[1.2]">
              Start with Free, then move to Pro as your buyer volume grows.
            </h3>
            <p className="mt-5 text-[1.1rem] leading-[1.7] text-white/90">
              Free is perfect for testing the value. Pro gives growing businesses better filtering, follow-ups, and faster lead handling.
            </p>
            <div className="mt-10">
              <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" full dark />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link to="/terms" className="text-[1rem] font-bold text-[#0061FF] transition hover:opacity-70">
          View terms and conditions
        </Link>
      </div>

      <div className="mt-14">
        <FinalCta />
      </div>
    </section>
  )
}
