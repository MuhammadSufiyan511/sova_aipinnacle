import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState, useRef } from 'react'

import { useTranslation } from 'react-i18next'
import { industries } from '../../../data'
import { IndustriesPreviewTabs } from './industries-preview/IndustriesPreviewTabs'
import { IndustryPreviewCard } from './industries-preview/IndustryPreviewCard'

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
    <section className="home-industries-preview-section relative w-full py-10 2xl:py-16 3xl:py-20 dark:bg-[#0B1220]">
      <div className="mx-auto max-w-[1160px] px-5 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#10B981]">{t('sections.industriesEyebrow')}</p>
          <h2 className="font-display text-[1.7rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.5rem] 2xl:text-[3.4rem] 3xl:text-[4rem]">
            {t('sections.industriesTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-[420px] text-[0.9rem] leading-[1.6] text-[#5a9e88] sm:text-[0.96rem] sm:leading-[1.75] 2xl:mt-5 2xl:max-w-[600px] 2xl:text-[1.2rem] 3xl:max-w-[800px] 3xl:text-[1.4rem]">
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

        <IndustriesPreviewTabs
          activeIndustry={activeIndustry}
          isRtl={isRtl}
          onSelectIndustry={onSelectIndustry}
          onSwitchIndustry={handleSwitchIndustry}
          t={t}
          tabsContainerRef={tabsContainerRef}
          tabsToRender={tabsToRender}
        />

        <div className="flex items-center gap-3 lg:gap-5">
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <IndustryPreviewCard onSwitchIndustry={handleSwitchIndustry} selectedIndustry={selectedIndustry} t={t} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
