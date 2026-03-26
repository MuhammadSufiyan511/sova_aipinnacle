import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { pricingPlans } from '../../../data'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'

const MotionDiv = motion.div

export function PricingPreviewSection() {
  const { t, i18n } = useTranslation()
  const isUrdu = i18n.resolvedLanguage?.startsWith('ur')
  const localizedPlans = isUrdu
    ? [
        {
          name: 'فری',
          price: '$0',
          blurb: 'ان کاروباروں کے لیے جو پہلی بار WhatsApp آٹومیشن شروع کر رہے ہیں۔',
          points: ['بنیادی فیچرز', 'محدود استعمال', 'سادہ آٹو ریپلائیز', 'کارڈ درکار نہیں'],
          badge: 'ابتدائی پلان',
        },
        {
          name: 'پرو',
          price: '$49',
          blurb: 'ان بڑھتی ہوئی ٹیموں کے لیے جو روزانہ سیلز اور فالو اپ سنبھالتی ہیں۔',
          points: ['ایڈوانس آٹومیشن', 'سمارٹ لیڈ فلٹرنگ', 'فالو اپ فلو', 'ترجیحی سپورٹ'],
          badge: 'مقبول',
        },
      ]
    : pricingPlans

  return (
    <section id="pricing" className="w-full bg-white py-24 scroll-mt-28">
      <div className="mx-auto max-w-[1160px] px-5">
        {/* Heading */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0061FF]">{t('sections.pricingEyebrow')}</p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1D1D1F] sm:text-[2.8rem]">
            {t('sections.pricingTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-[380px] text-[0.96rem] leading-[1.75] text-[#6E6E73]">
            {t('sections.pricingDescription')}
          </p>
        </MotionDiv>

        <div className="mx-auto grid max-w-[860px] gap-5 lg:grid-cols-2">
          {localizedPlans.map((plan, index) => {
            const isPopular = plan.badge === 'Popular' || plan.badge === 'مقبول'
            return (
              <MotionDiv
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-[28px] border p-7 transition-all ${
                  isPopular
                    ? 'border-[#0061FF] bg-[#EEF3FF] shadow-[0_16px_60px_rgba(0,97,255,0.18)]'
                    : 'border-[#E4EAFF] bg-white shadow-[0_8px_36px_rgba(0,97,255,0.06)] hover:border-[#0061FF]/50 hover:shadow-[0_12px_48px_rgba(0,97,255,0.10)]'
                }`}
              >
                {/* Popular top bar */}
                {isPopular && (
                  <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#0061FF] to-[#00C6FF]" />
                )}

                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-[1.35rem] font-extrabold tracking-[-0.03em] text-[#1D1D1F]">
                      {plan.name}
                    </h3>
                    <p className="mt-1.5 text-[0.82rem] leading-[1.6] text-[#6E6E73]">{plan.blurb}</p>
                  </div>
                  {plan.badge && (
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[0.7rem] font-bold tracking-wide ${
                        isPopular ? 'bg-[#0061FF] text-white' : 'bg-[#EEF3FF] text-[#0061FF]'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-6 flex items-end gap-1.5">
                  <span className="font-display text-[2.8rem] font-extrabold tracking-[-0.05em] text-[#1D1D1F]">
                    {plan.price}
                  </span>
                  <span className="mb-2 text-[0.82rem] font-medium text-[#6E6E73]">{t('common.monthSuffix')}</span>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-[#E4EAFF]" />

                {/* Feature list */}
                <div className="space-y-3.5">
                  {plan.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-[0.875rem] text-[#374151]">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          isPopular ? 'bg-[#0061FF]' : 'bg-[#EEF3FF]'
                        }`}
                      >
                        <Check className={`h-3 w-3 ${isPopular ? 'text-white' : 'text-[#0061FF]'}`} />
                      </span>
                      {point}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={ROUTES.auth}
                  className={`mt-7 flex w-full items-center justify-center gap-2 rounded-full py-3 text-[0.88rem] font-bold transition hover:scale-[1.02] ${
                    isPopular
                      ? 'bg-[#0061FF] text-white shadow-[0_6px_20px_rgba(0,97,255,0.35)] hover:bg-[#004FD4]'
                      : 'border border-[#0061FF] text-[#0061FF] hover:bg-[#EEF3FF]'
                  }`}
                >
                  {t('common.startFreeTrial')} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>

                {/* No card note */}
                <p className="mt-2.5 text-center text-[0.72rem] text-[#9AA4B2]">{t('common.noCardRequired')}</p>
              </MotionDiv>
            )
          })}
        </div>
      </div>
    </section>
  )
}
