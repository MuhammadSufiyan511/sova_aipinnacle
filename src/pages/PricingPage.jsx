import { Check, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../utils/routes'
import { pricingPlans } from '../data'
import { CTAButton, FinalCta, SectionHeading } from '../components'

export function PricingPage() {
  const { t } = useTranslation()
  const localizedPlans = t('content.pricing.plans', { returnObjects: true }) || pricingPlans

  return (
    <section className="mx-auto max-w-[1160px] py-20 px-5">
      <SectionHeading
        eyebrow={t('sections.pricingEyebrow')}
        title={t('sections.pricingTitle')}
        description={t('sections.pricingDescription')}
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {localizedPlans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-[32px] border p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)] transition-all hover:y-[-4px] ${
              index === 1
                ? 'border-[#10B981]/30 bg-white ring-1 ring-[#10B981]/10'
                : 'border-[#E2EFEA] bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-[2.2rem] font-bold tracking-[-0.04em] text-[#1E293B]">
                  {plan.name}
                </h2>
                <p className="mt-2 text-[1rem] leading-[1.6] text-[#48617A]">{plan.blurb}</p>
              </div>
              {plan.badge ? (
                <span className="rounded-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">{plan.badge}</span>
              ) : null}
            </div>
            <div className="mt-8 flex items-end gap-2">
              <span className={`${plan.price.length > 5 ? 'text-4xl' : 'text-5xl'} font-display font-extrabold tracking-[-0.05em] text-[#1E293B]`}>{plan.price}</span>
              {plan.price.includes('$') && <span className="pb-2 text-[1rem] font-medium text-[#10B981]">/ month</span>}
            </div>
            <div className="mt-8 space-y-4">
              {plan.points.map((point) => (
                <div key={point} className="flex items-center gap-3 text-[0.95rem] font-medium text-[#0F172A]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                    <Check className="h-4 w-4" />
                  </span>
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CTAButton 
                to={plan.cta ? ROUTES.about : ROUTES.auth} 
                label={plan.cta || t('common.startFreeTrial')} 
                subtext={!plan.cta && index === 0 ? t('common.noCardRequired') : ''} 
                full 
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#10B981]">Included in every plan</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'WhatsApp automation',
              'Buyer intent filtering',
              'Auto replies',
              'Follow-up reminders',
              'Spam control',
              'Mobile-friendly setup',
            ].map((item) => (
              <div key={item} className="rounded-[20px] bg-[#F8FAFC] px-6 py-4 text-[0.9rem] font-bold text-[#0F172A]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#A78BFA] p-10 text-white shadow-[0_24px_60px_rgba(30,41,59,0.3)] relative overflow-hidden">
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
        <Link to="/terms" className="text-[1rem] font-bold text-[#10B981] transition hover:opacity-70">
          View terms and conditions
        </Link>
      </div>

      <div className="mt-14">
        <FinalCta />
      </div>
    </section>
  )
}

