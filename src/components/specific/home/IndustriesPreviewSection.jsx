import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState, useRef } from 'react'

import { useTranslation } from 'react-i18next'
import { industries } from '../../../data'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

const MotionDiv = motion.div

export function IndustriesPreviewSection({ activeIndustry, onSelectIndustry }) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'
  const localizedIndustryItems = t('content.industries.items', { returnObjects: true }) || {}
  const enrichedIndustries = industries.map((industry) => ({
    ...industry,
    ...(localizedIndustryItems[industry.id] || {}),
  }))
  const activeIndex = enrichedIndustries.findIndex((industry) => industry.id === activeIndustry)
  const currentIndex = activeIndex >= 0 ? activeIndex : 0
  const selectedIndustry = enrichedIndustries[currentIndex] ?? enrichedIndustries[0]
  const visibleTabStart = Math.max(0, Math.min(currentIndex - 2, Math.max(enrichedIndustries.length - 5, 0)))
  const visibleTabs = enrichedIndustries.slice(visibleTabStart, visibleTabStart + 5)
  const [isMobileTabs, setIsMobileTabs] = useState(false)
  const tabsContainerRef = useRef(null)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 639px)')
    const update = () => setIsMobileTabs(media.matches)
    update()
    if (media.addEventListener) {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    }
    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  const tabsToRender = useMemo(() => (isMobileTabs ? enrichedIndustries : visibleTabs), [isMobileTabs, enrichedIndustries, visibleTabs])

  useEffect(() => {
    if (!tabsContainerRef.current) return
    const activeEl = tabsContainerRef.current.querySelector('.is-active')
    if (activeEl) {
      const container = tabsContainerRef.current
      const scrollLeft = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [activeIndustry, tabsToRender])

  const handleSwitchIndustry = (direction) => {
    const nextIndex = (currentIndex + direction + enrichedIndustries.length) % enrichedIndustries.length
    onSelectIndustry(enrichedIndustries[nextIndex].id)
  }

  return (
    <section className="home-industries-preview-section relative w-full py-10">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#10B981]">{t('sections.industriesEyebrow')}</p>
          <h2 className="font-display text-[1.7rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.5rem]">
            {t('sections.industriesTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-[420px] text-[0.9rem] leading-[1.6] text-[#5a9e88] sm:text-[0.96rem] sm:leading-[1.75]">
            {t('sections.industriesDescription')}
          </p>
        </MotionDiv>

        <div className="sr-only">
          <h3>{t('sections.industryUseCases')}</h3>
          <ul>
            {enrichedIndustries.map((industry) => (
              <li key={industry.id}>
                {industry.label}: {industry.title}. {industry.useCase}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 flex items-center justify-center gap-4 lg:gap-8">
          <button
            type="button"
            onClick={() => handleSwitchIndustry(-1)}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition hover:-translate-x-0.5 hover:bg-[#ECFDF5] lg:inline-flex"
            aria-label={t('common.previousIndustryTab')}
          >
            {isRtl ? <ArrowRight className="h-4.5 w-4.5" /> : <ArrowLeft className="h-4.5 w-4.5" />}
          </button>

          <MotionDiv
            ref={tabsContainerRef}
            className="no-scrollbar flex w-full flex-nowrap justify-start gap-2.5 overflow-x-auto px-10 pb-4 snap-x snap-mandatory touch-pan-x select-none lg:max-w-5xl lg:px-12 lg:pb-0"
            layout
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onPanEnd={(_, info) => {
              if (info.offset.x < -40) handleSwitchIndustry(1)
              else if (info.offset.x > 40) handleSwitchIndustry(-1)
            }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {tabsToRender.map((industry) => (
                <motion.button
                  key={industry.id}
                  type="button"
                  onClick={() => onSelectIndustry(industry.id)}
                  className={`industry-tab-btn shrink-0 min-w-[120px] rounded-full px-4 py-2 text-center text-[0.72rem] font-bold whitespace-nowrap transition-all sm:min-w-[180px] sm:px-5 sm:py-2.5 sm:text-[0.865rem] ${activeIndustry === industry.id
                      ? 'is-active bg-[#10B981] text-white shadow-[0_4px_14px_rgba(16,185,129,0.28)]'
                      : 'border border-[#D1FAE5] bg-white text-[#1E293B] hover:border-[#10B981] hover:text-[#10B981]'
                    }`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  {industry.label}
                </motion.button>
              ))}
            </AnimatePresence>
          </MotionDiv>

          <button
            type="button"
            onClick={() => handleSwitchIndustry(1)}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition hover:translate-x-0.5 hover:bg-[#ECFDF5] lg:inline-flex"
            aria-label={t('common.nextIndustryTab')}
          >
            {isRtl ? <ArrowLeft className="h-4.5 w-4.5" /> : <ArrowRight className="h-4.5 w-4.5" />}
          </button>
        </div>

        <div className="flex items-center gap-3 lg:gap-5">
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={selectedIndustry.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="industry-card-shell overflow-hidden rounded-[24px] border border-[#D1FAE5] bg-white shadow-[0_16px_60px_rgba(16,185,129,0.1)] sm:rounded-[32px]"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) handleSwitchIndustry(1)
                  else if (info.offset.x > 50) handleSwitchIndustry(-1)
                }}
              >
                <div className="flex flex-col lg:grid lg:grid-cols-2">
                  <div className="overflow-hidden">
                    <img
                      src={selectedIndustry.image}
                      alt={`${selectedIndustry.label} business using SOVA on WhatsApp`}
                      loading="lazy"
                      decoding="async"
                      className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-72 lg:h-full lg:min-h-[360px]"
                    />
                  </div>

                  <div className="flex flex-col justify-between p-4 sm:p-8">
                    <div>
                      <span className="inline-block rounded-full bg-[#ECFDF5] px-3 py-1 text-[0.62rem] font-semibold text-[#10B981] sm:text-xs">
                        {t('common.useCase')}
                      </span>
                      <h3 className="industry-card-title mt-3 font-display text-[1.2rem] font-bold tracking-[-0.03em] text-[#10B981] sm:mt-4 sm:text-[1.6rem]">
                        {selectedIndustry.label}
                      </h3>
                      <p className="industry-card-desc mt-3 text-[0.88rem] leading-[1.6] text-[#1E293B] sm:text-[1rem] sm:leading-[1.75]">
                        {selectedIndustry.title}
                      </p>
                      <p className="industry-card-desc mt-2 text-[0.82rem] leading-[1.55] text-[#1E293B] sm:text-[0.9rem] sm:leading-[1.7]">
                        {selectedIndustry.useCase}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-row items-center gap-2.5 sm:mt-7 sm:gap-3">
                      <div className="flex flex-col items-center">
                        <Link
                          to={ROUTES.auth}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981] px-3.5 py-2 text-[0.72rem] font-bold text-white shadow-[0_4px_14px_rgba(16,185,129,0.26)] transition hover:bg-[#0F8F72] hover:scale-[1.02] sm:px-5 sm:py-2.5 sm:text-[0.875rem]"
                        >
                          {t('common.startFreeTrial')} <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                        <p className="mt-2 hidden text-[0.68rem] font-medium text-[#F1990A] sm:block">
                          {t('common.noCardRequired')}
                        </p>
                      </div>
                      <Link
                        to={ROUTES.industries}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#F1990A] px-3.5 py-2 text-[0.72rem] font-bold text-[#F1990A] transition hover:border-[#10B981] hover:text-[#10B981] sm:px-5 sm:py-2.5 sm:text-[0.875rem]"
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
