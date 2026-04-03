import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { caseStudies } from '../data'
import { FinalCta, InternalLinksGrid, SeoHead } from '../components'
import { CaseStudyCard } from '../components/specific/case-studies/CaseStudyCard'
import { ROUTES } from '../utils/routes'
import { createBreadcrumbSchema } from '../seo/schemas'

const MotionDiv = motion.div
const ITEMS_PER_PAGE = 3

export function CaseStudiesPage() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'
  const [activeTab, setActiveTab] = useState('all')
  const [page, setPage] = useState(1)
  const localizedStudyItems = t('content.caseStudies.items', { returnObjects: true }) || {}
  const enrichedStudies = caseStudies.map((study) => ({ ...study, ...(localizedStudyItems[study.slug] || {}) }))
  const uniqueTabs = [{ key: 'all', label: t('common.all') }, ...[...new Set(enrichedStudies.map((study) => study.category))].map((category) => ({ key: category, label: category }))]
  const activeTabIndex = uniqueTabs.findIndex((tab) => tab.key === activeTab)
  const currentTabIndex = activeTabIndex >= 0 ? activeTabIndex : 0
  const visibleTabStart = Math.max(0, Math.min(currentTabIndex - 2, Math.max(uniqueTabs.length - 6, 0)))
  const visibleTabs = uniqueTabs.slice(visibleTabStart, visibleTabStart + 6)
  const filteredStudies = activeTab === 'all' ? enrichedStudies : enrichedStudies.filter((study) => study.category === activeTab)
  const totalPages = activeTab === 'all' ? Math.ceil(filteredStudies.length / ITEMS_PER_PAGE) : 1
  const visibleStudies = useMemo(() => {
    if (activeTab !== 'all') return filteredStudies
    const startIndex = (page - 1) * ITEMS_PER_PAGE
    return filteredStudies.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [activeTab, filteredStudies, page])
  const relatedLinks = [
    { to: ROUTES.industries, label: t('nav.industries'), description: t('sections.industriesPageDescription') },
    { to: ROUTES.pricing, label: t('nav.pricing'), description: t('sections.pricingDescription') },
    { to: ROUTES.about, label: t('nav.about'), description: t('sections.aboutDescription') },
    { to: ROUTES.auth, label: t('common.continueWithMeta'), description: t('sections.authDescription') },
  ]

  const handleSwitchTab = (direction) => {
    const nextIndex = (currentTabIndex + direction + uniqueTabs.length) % uniqueTabs.length
    setActiveTab(uniqueTabs[nextIndex].key)
    setPage(1)
  }

  return (
    <section className="page-top-spacing w-full px-0 pb-12 sm:px-6 sm:pb-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pb-32 2xl:max-w-[1440px] 3xl:max-w-[1600px] 2xl:pb-40 3xl:pb-48">
      <SeoHead
        title="Case Studies | SOVA Results on WhatsApp"
        description="Read how businesses use SOVA to automate WhatsApp replies, save team time, filter buyers faster, and improve lead conversion."
        schema={[
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies' },
          ]),
        ]}
      />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#10B981] 2xl:text-base 3xl:text-lg">{t('sections.caseEyebrow')}</p>
         <h1 className="mt-3 font-display text-[1.45rem] font-extrabold leading-tight tracking-[-0.05em] text-[#1E293B] sm:mt-4 sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl">
          {t('sections.caseTitle')}
        </h1>
        <p className="mt-3 text-[0.96rem] leading-6 text-[#5a9e88] sm:text-[1.1rem] sm:leading-7 2xl:mt-6 2xl:text-[1.3rem] 2xl:leading-8 3xl:text-[1.5rem] 3xl:leading-9">
          {t('sections.caseDescription')}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => handleSwitchTab(-1)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition enabled:hover:-translate-x-0.5 enabled:hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45 lg:inline-flex"
          aria-label={t('common.previousCaseStudyTab')}
        >
          {isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>

        <div className="no-scrollbar flex max-w-full flex-nowrap justify-start gap-2 overflow-x-auto px-1 pb-2 sm:hidden">
          {uniqueTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key)
                setPage(1)
              }}
              className={`min-w-[110px] rounded-full px-3 py-2 text-center text-[0.7rem] font-semibold whitespace-nowrap transition ${
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
          {uniqueTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key)
                setPage(1)
              }}
              className={`min-w-[128px] rounded-full px-4 py-2.5 text-center text-[0.78rem] font-semibold whitespace-nowrap transition sm:min-w-[146px] sm:text-sm ${
                activeTab === tab.key
                  ? 'bg-[#10B981] text-white shadow-[0_8px_20px_rgba(16,185,129,0.2)]'
                  : 'bg-[#F8FAFC] text-[#10B981] hover:bg-[#ECFDF5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="no-scrollbar hidden max-w-full flex-nowrap justify-start gap-2 overflow-x-auto px-1 pb-2 lg:flex lg:max-w-[950px] lg:justify-center lg:px-0">
          {visibleTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key)
                setPage(1)
              }}
              className={`min-w-[128px] rounded-full px-4 py-2.5 text-center text-[0.78rem] font-semibold whitespace-nowrap transition sm:min-w-[146px] sm:text-sm ${
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
          aria-label={t('common.nextCaseStudyTab')}
        >
          {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
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
          {visibleStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </MotionDiv>
      </AnimatePresence>

      {activeTab === 'all' && totalPages > 1 ? (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
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

      <InternalLinksGrid links={relatedLinks} className="mt-8 sm:mt-10" />

      <div className="mt-8 sm:mt-10">
        <FinalCta />
      </div>
    </section>
  )
}
