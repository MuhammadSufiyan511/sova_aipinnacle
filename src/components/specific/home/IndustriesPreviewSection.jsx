import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { industries } from '../../../data'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

const MotionDiv = motion.div

export function IndustriesPreviewSection({ activeIndustry, onSelectIndustry }) {
  const { t } = useTranslation()
  const localizedIndustryItems = t('content.industries.items', { returnObjects: true }) || {}
  const enrichedIndustries = industries.map((industry) => ({
    ...industry,
    ...(localizedIndustryItems[industry.id] || {}),
  }))
  const activeIndex = enrichedIndustries.findIndex((industry) => industry.id === activeIndustry)
  const currentIndex = activeIndex >= 0 ? activeIndex : 0
  const selectedIndustry = enrichedIndustries[currentIndex] ?? enrichedIndustries[0]
 const visibleTabStart = Math.max(0, Math.min(currentIndex - 1, Math.max(enrichedIndustries.length - 4, 0)))
  const visibleTabs = enrichedIndustries.slice(visibleTabStart, visibleTabStart + 4)
  const handleSwitchIndustry = (direction) => {
    const nextIndex = (currentIndex + direction + enrichedIndustries.length) % enrichedIndustries.length
    onSelectIndustry(enrichedIndustries[nextIndex].id)
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-[#F4F8FF] py-14">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#10B981]">{t('sections.industriesEyebrow')}</p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.8rem]">
            {t('sections.industriesTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-[420px] text-[0.96rem] leading-[1.75] text-[#48617A]">
            {t('sections.industriesDescription')}
          </p>
        </MotionDiv>

        <div className="mb-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => handleSwitchIndustry(-1)}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition hover:-translate-x-0.5 hover:bg-[#ECFDF5] lg:inline-flex"
            aria-label="Previous industry tab"
          >
            <ArrowLeft className="h-4.5 w-4.5" />
          </button>

          <div className="flex max-w-[820px] flex-nowrap justify-center gap-2.5 overflow-hidden">
            {visibleTabs.map((industry) => (
              <button
                key={industry.id}
                type="button"
                onClick={() => onSelectIndustry(industry.id)}
                className={`min-w-[132px] rounded-full px-5 py-2 text-center text-[0.865rem] font-semibold whitespace-nowrap transition-all ${
                  activeIndustry === industry.id
                    ? 'bg-[#10B981] text-white shadow-[0_4px_14px_rgba(16,185,129,0.28)]'
                    : 'border border-[#D1FAE5] bg-white text-[#1E293B] hover:border-[#10B981] hover:text-[#10B981]'
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleSwitchIndustry(1)}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition hover:translate-x-0.5 hover:bg-[#ECFDF5] lg:inline-flex"
            aria-label="Next industry tab"
          >
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </div>

        <div className="flex items-center gap-3 lg:gap-5">
          

          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={selectedIndustry.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.26, ease: 'easeOut' }}
                className="overflow-hidden rounded-[32px] border border-[#D1FAE5] bg-white shadow-[0_16px_60px_rgba(16,185,129,0.1)]"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="overflow-hidden">
                    <img
                      src={selectedIndustry.image}
                      alt={selectedIndustry.label}
                      className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-full lg:min-h-[360px]"
                    />
                  </div>

                  <div className="flex flex-col justify-between p-8">
                    <div>
                      <span className="inline-block rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#10B981]">
                        {t('common.useCase')}
                      </span>
                      <h3 className="mt-4 font-display text-[1.6rem] font-bold tracking-[-0.03em] text-[#10B981]">
                        {selectedIndustry.label}
                      </h3>
                      <p className="mt-3 text-[1rem] leading-[1.75] text-[#1E293B]">{selectedIndustry.title}</p>
                      <p className="mt-2 text-[0.9rem] leading-[1.7] text-[#1E293B]">{selectedIndustry.useCase}</p>
                    </div>

                    <div className="mt-7 flex flex-wrap items-start gap-3">
                      <div className="flex flex-col items-center">
                        <Link
                          to={ROUTES.auth}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981] px-5 py-2.5 text-[0.875rem] font-bold text-white shadow-[0_4px_14px_rgba(16,185,129,0.26)] transition hover:bg-[#0F8F72] hover:scale-[1.02]"
                        >
                          {t('common.startFreeTrial')} <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                        <p className="mt-2 text-[0.68rem] font-medium text-[#F1990A]">{t('common.noCardRequired')}</p>
                      </div>
                      <Link
                        to={ROUTES.industries}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#F1990A] px-5 py-2.5 text-[0.875rem] font-semibold text-[#F1990A] transition hover:border-[#10B981] hover:text-[#10B981]"
                      >
                        {t('common.seeAllIndustries')}
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
