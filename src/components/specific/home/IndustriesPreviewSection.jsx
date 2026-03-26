import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { industries } from '../../../data'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const MotionDiv = motion.div

export function IndustriesPreviewSection({ activeIndustry, onSelectIndustry }) {
  const { t, i18n } = useTranslation()
  const isUrdu = i18n.resolvedLanguage?.startsWith('ur')
  const localizedIndustries = isUrdu
    ? {
        clothing: {
          label: 'کپڑے',
          title: 'سائز، رنگ، اور دستیاب اسٹاک کے جواب فوراً دیں۔',
          useCase: 'سائز چارٹ، رنگ، COD، اور ڈلیوری معلومات کے لیے آٹو ریپلائیز۔',
        },
        toys: {
          label: 'کھلونے',
          title: 'بلک بائر اور ری سیلر دلچسپی جلدی پہچانیں۔',
          useCase: 'بلک انکوائری فلٹرنگ، کیٹلاگ جوابات، اور ری سیلر لیڈ روٹنگ۔',
        },
        'dry-fruits': {
          label: 'ڈرائی فروٹس',
          title: 'قیمت، وزن، اور پیکنگ کے سوال خود سنبھالیں۔',
          useCase: 'فی کلو قیمت، پیکنگ سائز، ڈلیوری زون، اور ہول سیل مدد۔',
        },
        electronics: {
          label: 'الیکٹرونکس',
          title: 'پروڈکٹ انکوائریز کو صاف اور تیز انداز میں سنبھالیں۔',
          useCase: 'پروڈکٹ معلومات، فوری لیڈ ٹیگنگ، اور ہائی انٹینٹ چیٹس پر فالو اپ۔',
        },
      }
    : null
  const enrichedIndustries = industries.map((industry) => ({
    ...industry,
    ...(localizedIndustries?.[industry.id] || {}),
  }))
  const selectedIndustry = enrichedIndustries.find((i) => i.id === activeIndustry) ?? enrichedIndustries[0]

  return (
    <>

      {/* === Industries Tab Section === */}
      <section className="relative w-full bg-gradient-to-b from-white to-[#F4F8FF] py-20">
        <div className="mx-auto max-w-[1160px] px-5">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0061FF]">{t('sections.industriesEyebrow')}</p>
            <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1D1D1F] sm:text-[2.8rem]">
              {t('sections.industriesTitle')}
            </h2>
            <p className="mx-auto mt-3 max-w-[420px] text-[0.96rem] leading-[1.75] text-[#6E6E73]">
              {t('sections.industriesDescription')}
            </p>
          </MotionDiv>

          {/* Tab buttons */}
          <div className="mb-8 flex flex-wrap justify-center gap-2.5">
            {enrichedIndustries.map((industry) => (
              <button
                key={industry.id}
                type="button"
                onClick={() => onSelectIndustry(industry.id)}
                className={`rounded-full px-5 py-2 text-[0.865rem] font-semibold transition-all ${
                  activeIndustry === industry.id
                    ? 'bg-[#0061FF] text-white shadow-[0_4px_14px_rgba(0,97,255,0.35)]'
                    : 'border border-[#D6E0FF] bg-white text-[#6E6E73] hover:border-[#0061FF] hover:text-[#0061FF]'
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>

          {/* Industry card */}
          <AnimatePresence mode="wait">
            <MotionDiv
              key={selectedIndustry.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.26, ease: 'easeOut' }}
              className="overflow-hidden rounded-[32px] border border-[#D6E0FF] bg-white shadow-[0_16px_60px_rgba(0,97,255,0.08)]"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={selectedIndustry.image}
                    alt={selectedIndustry.label}
                    className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-full lg:min-h-[360px]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8">
                  <div>
                    <span className="inline-block rounded-full bg-[#EEF3FF] px-3 py-1 text-xs font-semibold text-[#0061FF]">
                      {t('common.useCase')}
                    </span>
                    <h3 className="mt-4 font-display text-[1.6rem] font-bold tracking-[-0.03em] text-[#1D1D1F]">
                      {selectedIndustry.label}
                    </h3>
                    <p className="mt-3 text-[1rem] leading-[1.75] text-[#374151]">{selectedIndustry.title}</p>
                    <p className="mt-2 text-[0.9rem] leading-[1.7] text-[#6E6E73]">{selectedIndustry.useCase}</p>
                  </div>

                  <div className="mt-7 flex flex-wrap items-start gap-3">
                    <div className="flex flex-col items-center">
                      <Link
                        to={ROUTES.auth}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#0061FF] px-5 py-2.5 text-[0.875rem] font-bold text-white shadow-[0_4px_14px_rgba(0,97,255,0.3)] transition hover:bg-[#004FD4] hover:scale-[1.02]"
                      >
                        {t('common.startFreeTrial')} <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <p className="mt-2 text-[0.68rem] font-medium text-[#9AA4B2]">{t('common.noCardRequired')}</p>
                    </div>
                    <Link
                      to={ROUTES.industries}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#D0D5DD] px-5 py-2.5 text-[0.875rem] font-semibold text-[#374151] transition hover:border-[#0061FF] hover:text-[#0061FF]"
                    >
                      {t('common.seeAllIndustries')}
                    </Link>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
