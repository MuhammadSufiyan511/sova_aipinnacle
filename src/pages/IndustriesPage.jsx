import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { industries } from '../data'
import { FinalCta, InternalLinksGrid, SectionHeading, SeoHead } from '../components'
import { IndustryCard } from '../components/specific/industries/IndustryCard'
import { ROUTES } from '../utils/routes'
import { createBreadcrumbSchema } from '../seo/schemas'
import { IndustriesPagination } from './industries/IndustriesPagination'
import { IndustriesTabs } from './industries/IndustriesTabs'

const MotionDiv = motion.div
const ITEMS_PER_PAGE = 6

export function IndustriesPage() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'
  const [activeTab, setActiveTab] = useState('all')
  const [page, setPage] = useState(1)
  const localizedIndustryItems = t('content.industries.items', { returnObjects: true }) || {}
  const enrichedIndustries = industries.map((industry) => ({ ...industry, ...(localizedIndustryItems[industry.id] || {}) }))
  const tabs = [{ key: 'all', label: t('common.all') }, ...enrichedIndustries.map((industry) => ({ key: industry.id, label: industry.label }))]
  const activeTabIndex = tabs.findIndex((tab) => tab.key === activeTab)
  const currentTabIndex = activeTabIndex >= 0 ? activeTabIndex : 0
  const visibleTabStart = Math.max(0, Math.min(currentTabIndex - 2, Math.max(tabs.length - 5, 0)))
  const visibleTabs = tabs.slice(visibleTabStart, visibleTabStart + 5)
  const filteredIndustries = activeTab === 'all' ? enrichedIndustries : enrichedIndustries.filter((industry) => industry.id === activeTab)
  const totalPages = activeTab === 'all' ? Math.ceil(filteredIndustries.length / ITEMS_PER_PAGE) : 1
  const visibleIndustries = useMemo(() => {
    if (activeTab !== 'all') return filteredIndustries
    const startIndex = (page - 1) * ITEMS_PER_PAGE
    return filteredIndustries.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [activeTab, filteredIndustries, page])
  const relatedLinks = [
    { to: ROUTES.caseStudies, label: t('nav.caseStudies'), description: t('sections.caseDescription') },
    { to: ROUTES.pricing, label: t('nav.pricing'), description: t('sections.pricingDescription') },
    { to: ROUTES.about, label: t('nav.about'), description: t('sections.aboutDescription') },
    { to: ROUTES.auth, label: t('common.continueWithMeta'), description: t('sections.authDescription') },
  ]

  const handleSelectTab = (key) => {
    setActiveTab(key)
    setPage(1)
  }

  const handleSwitchTab = (direction) => {
    const nextIndex = (currentTabIndex + direction + tabs.length) % tabs.length
    handleSelectTab(tabs[nextIndex].key)
  }

  return (
    <div className="page-top-spacing w-full px-0 pb-12 sm:px-6 sm:pb-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pb-32 2xl:max-w-[1440px] 3xl:max-w-[1600px] 2xl:pb-40 3xl:pb-48">
      <SeoHead
        title="Industries | SOVA WhatsApp Automation"
        description="See how SOVA supports clothing, electronics, toys, dry fruits, and other businesses that sell through high-volume WhatsApp conversations."
        schema={[
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
          ]),
        ]}
      />

       <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#10B981] 2xl:text-base 3xl:text-lg">{t('sections.industriesPageEyebrow')}</p>
        <h1 className="mt-3 font-display text-[1.45rem] font-extrabold leading-tight tracking-[-0.05em] text-[#1E293B] sm:mt-4 sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl">
        {t('sections.industriesPageTitle')}
        </h1>
        <p className="mt-3 text-[0.96rem] leading-6 text-[#5a9e88] sm:text-[1.1rem] sm:leading-7 2xl:mt-6 2xl:text-[1.3rem] 2xl:leading-8 3xl:text-[1.5rem] 3xl:leading-9">
         {t('sections.industriesPageDescription')}
        </p>
      </div>

      <IndustriesTabs
        activeTab={activeTab}
        isRtl={isRtl}
        onSelectTab={handleSelectTab}
        onSwitchTab={handleSwitchTab}
        t={t}
        tabs={tabs}
        visibleTabs={visibleTabs}
      />

      <div className="sr-only">
        <h2>{t('sections.industrySummaries')}</h2>
        <ul>
          {enrichedIndustries.map((industry) => (
            <li key={industry.id}>
              {industry.label}: {industry.title}. {industry.useCase}
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence mode="wait">
        <MotionDiv
          key={`${activeTab}-${page}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="mt-10 space-y-10 sm:mt-16 sm:space-y-16 lg:mt-24 lg:space-y-24"
        >
          {visibleIndustries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </MotionDiv>
      </AnimatePresence>

      <IndustriesPagination
        isRtl={isRtl}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        t={t}
      />

      <InternalLinksGrid links={relatedLinks} className="mt-10 sm:mt-12" />

      <div className="mt-10 sm:mt-14">
        <FinalCta />
      </div>
    </div>
  )
}