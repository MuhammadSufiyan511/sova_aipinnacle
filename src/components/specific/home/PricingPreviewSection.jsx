import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { pricingPlans } from '../../../data'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'

const MotionDiv = motion.div

export function PricingPreviewSection() {
  const { t } = useTranslation()
  const localizedPlans = t('content.pricing.plans', { returnObjects: true }) || pricingPlans

  return (
    <section id="pricing" className="w-full bg-white py-16 scroll-mt-28">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#10B981]">{t('sections.pricingEyebrow')}</p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.8rem]">
            {t('sections.pricingTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-[380px] text-[0.96rem] leading-[1.75] text-[#5a9e88]">
            {t('sections.pricingDescription')}
          </p>
        </MotionDiv>

        <div className="mx-auto grid max-w-[1100px] gap-5 lg:grid-cols-3">
          {localizedPlans.map((plan, index) => {
            const isPopular = index === 1
            return (
              <MotionDiv
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-[28px] border p-7 transition-all ${
                  isPopular
                    ? 'border-[#10B981] bg-[#ECFDF5] shadow-[0_16px_60px_rgba(16,185,129,0.18)]'
                    : 'border-[#DCEEE7] bg-white shadow-[0_8px_36px_rgba(16,185,129,0.08)] hover:border-[#10B981]/50 hover:shadow-[0_12px_48px_rgba(16,185,129,0.12)]'
                }`}
              >
                {isPopular && <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#10B981] to-[#F59E0B]" />}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-[1.35rem] font-extrabold tracking-[-0.03em] text-[#1E293B]">
                      {plan.name}
                    </h3>
                    <p className="mt-1.5 text-[0.82rem] leading-[1.6] text-[#1E293B]">{plan.blurb}</p>
                  </div>
                  {plan.badge && (
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[0.7rem] font-bold tracking-wide ${
                        isPopular ? 'bg-[#10B981] text-white' : 'bg-[#ECFDF5] text-[#10B981]'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className={`${plan.price.length > 5 ? 'text-[2.2rem]' : 'text-[2.8rem]'} font-display font-extrabold tracking-[-0.05em] text-[#1E293B]`}>
                    {plan.price}
                  </span>
                  {plan.price.includes('$') && (
                    <span className="mb-2 text-[0.82rem] font-medium text-[#F59E0B]">{t('common.monthSuffix')}</span>
                  )}
                </div>

                <div className="my-5 h-px bg-[#DCEEE7]" />

                <div className="space-y-3.5">
                  {plan.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-[0.875rem] text-[#1E293B]">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          isPopular ? 'bg-[#10B981]' : 'bg-[#ECFDF5]'
                        }`}
                      >
                        <Check className={`h-3 w-3 ${isPopular ? 'text-white' : 'text-[#10B981]'}`} />
                      </span>
                      {point}
                    </div>
                  ))}
                </div>

                <Link
                  to={plan.cta ? ROUTES.about : ROUTES.auth}
                  className={`mt-7 flex w-full items-center justify-center gap-2 rounded-full py-3 text-[0.88rem] font-bold transition hover:scale-[1.02] ${
                    isPopular
                      ? 'bg-[#10B981] text-white shadow-[0_6px_20px_rgba(16,185,129,0.28)] hover:bg-[#0F8F72]'
                      : 'border border-[#10B981] text-[#10B981] hover:bg-[#ECFDF5]'
                  }`}
                >
                  {plan.cta || t('common.startFreeTrial')} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>

                {index === 0 ? (
                  <p className="mt-2.5 text-center text-[0.72rem] text-[#F1990A]">{t('common.noCardRequired')}</p>
                ) : null}
              </MotionDiv>
            )
          })}
        </div>
      </div>
    </section>
  )
}
