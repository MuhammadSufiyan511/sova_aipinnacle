import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { industries } from '../data'
import { FinalCta, InternalLinksGrid, SectionHeading, SeoHead } from '../components'
import { IndustryCard } from '../components/specific/industries/IndustryCard'
import { ROUTES } from '../utils/routes'
import { createBreadcrumbSchema } from '../seo/schemas'
const MotionSection = motion.section
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

  const handleSwitchTab = (direction) => {
    const nextIndex = (currentTabIndex + direction + tabs.length) % tabs.length
    setActiveTab(tabs[nextIndex].key)
    setPage(1)
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
      <SectionHeading
        eyebrow={t('sections.industriesPageEyebrow')}
        title={t('sections.industriesPageTitle')}
        description={t('sections.industriesPageDescription')}
        centered
        as="h1"
      />

      <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10 sm:gap-3">
        <button
          type="button"
          onClick={() => handleSwitchTab(-1)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition enabled:hover:-translate-x-0.5 enabled:hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45 lg:inline-flex"
          aria-label={t('common.previousIndustryTab')}
        >
          {isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>

        <div className="no-scrollbar flex max-w-full flex-nowrap justify-start gap-2 overflow-x-auto px-1 pb-2 sm:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key)
                setPage(1)
              }}
              className={`min-w-[120px] rounded-full px-3 py-2 text-center text-[0.7rem] font-semibold whitespace-nowrap transition ${
                activeTab === tab.key
                  ? 'bg-[#10B981] text-white shadow-[0_8px_20px_rgba(16,185,129,0.2)]'
                  : 'bg-[#F8FAFC] text-[#10B981] hover:bg-[#ECFDF5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="no-scrollbar hidden max-w-full flex-wrap justify-center gap-2 sm:flex lg:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key)
                setPage(1)
              }}
              className={`min-w-[140px] rounded-full px-4 py-2.5 text-center text-[0.78rem] font-semibold whitespace-nowrap transition sm:min-w-[168px] sm:px-5 sm:text-sm ${
                activeTab === tab.key
                  ? 'bg-[#10B981] text-white shadow-[0_8px_20px_rgba(16,185,129,0.2)]'
                  : 'bg-[#F8FAFC] text-[#10B981] hover:bg-[#ECFDF5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="no-scrollbar hidden max-w-full flex-nowrap justify-start gap-2 overflow-x-auto px-1 pb-2 lg:flex lg:max-w-[900px] lg:justify-center lg:px-0">
          {visibleTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key)
                setPage(1)
              }}
              className={`min-w-[160px] rounded-full px-4 py-2.5 text-center text-[0.82rem] font-semibold whitespace-nowrap transition sm:min-w-[178px] sm:px-5 sm:text-sm ${
                activeTab === tab.key
                  ? 'bg-[#10B981] text-white shadow-[0_8px_20px_rgba(16,185,129,0.2)]'
                  : 'bg-[#F8FAFC] text-[#10B981] hover:bg-[#ECFDF5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleSwitchTab(1)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition enabled:hover:translate-x-0.5 enabled:hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45 lg:inline-flex"
          aria-label={t('common.nextIndustryTab')}
        >
          {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
      </div>

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

      {activeTab === 'all' && totalPages > 1 ? (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            className="inline-flex items-center gap-1 rounded-full border border-[#D1FAE5] bg-white px-4 py-2 text-sm font-semibold text-[#10B981] transition hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45"
          >
            {isRtl ? (
              <>
                {t('common.previous')} <ChevronRight className="h-4 w-4" />
              </>
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" /> {t('common.previous')}
              </>
            )}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              type="button"
              onClick={() => setPage(index + 1)}
              className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold transition ${
                page === index + 1 ? 'bg-[#10B981] text-white' : 'border border-[#D1FAE5] bg-white text-[#10B981] hover:bg-[#ECFDF5]'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={page === totalPages}
            className="inline-flex items-center gap-1 rounded-full border border-[#D1FAE5] bg-white px-4 py-2 text-sm font-semibold text-[#10B981] transition hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45"
          >
            {isRtl ? (
              <>
                <ChevronLeft className="h-4 w-4" /> {t('common.next')}
              </>
            ) : (
              <>
                {t('common.next')} <ChevronRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      ) : null}

      <InternalLinksGrid links={relatedLinks} className="mt-10 sm:mt-12" />

      <div className="mt-10 sm:mt-14">
        <FinalCta />
      </div>
    </div>
  )
}
