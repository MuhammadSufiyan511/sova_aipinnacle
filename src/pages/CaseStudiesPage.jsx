import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { caseStudies } from '../data'
import { FinalCta, InternalLinksGrid, SeoHead } from '../components'
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
    <section className="mx-auto max-w-[1160px] px-5 pb-8 pt-30 ">
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
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#10B981]">{t('sections.caseEyebrow')}</p>
         <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.05em] text-[#1E293B] sm:text-4xl">
          {t('sections.caseTitle')}
        </h1>
        <p className="mt-3 text-[1.1rem] leading-7 text-[#5a9e88]">
          {t('sections.caseDescription')}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => handleSwitchTab(-1)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition enabled:hover:-translate-x-0.5 enabled:hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45 lg:inline-flex"
          aria-label="Previous case study tab"
        >
          {isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>

        <div className="flex max-w-[950px] flex-wrap justify-center gap-1">
          {visibleTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key)
                setPage(1)
              }}
              className={`min-w-[138px] rounded-full px-4 py-2.5 text-center text-sm font-semibold whitespace-nowrap transition ${
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
          aria-label="Next case study tab"
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
          className="mt-12 space-y-8"
        >
          {visibleStudies.map((study) => (
            <article
              key={study.slug}
              className="rounded-[36px] border border-[#E2EFEA] bg-white p-5 shadow-[0_12px_44px_rgba(0,0,0,0.03)] sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.95fr_2.2fr]">
                <div className="overflow-hidden rounded-[28px] border border-[#E2EFEA] bg-[#F8FAFC]">
                  <img
                    src={study.image}
                    alt={`${study.company} case study`}
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover sm:h-72 lg:h-full"
                  />
                </div>

                <div className="rounded-[28px] border border-[#E2EFEA] bg-[#f0faf6] p-7 sm:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#10B981]">{study.businessType}</p>
                  <h2 className="mt-4 font-display text-[2rem] font-bold tracking-[-0.04em] text-[#0F172A] sm:text-[2.3rem]">
                    {study.company}
                  </h2>
                  <p className="mt-3 text-[1.08rem] font-medium leading-[1.6] text-[#10B981]">{study.headline}</p>
                  <p className="mt-4 text-[0.98rem] leading-[1.75] text-[#1E293B]">{study.summary}</p>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {study.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-[#DCEEE7] bg-white px-4 py-2 text-[0.78rem] font-bold text-[#10B981] shadow-sm"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-5 lg:grid-cols-3">
                <div className="rounded-[24px] border border-[#E2EFEA] bg-white p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.problem')}</p>
                  <p className="mt-3 text-[0.98rem] leading-[1.75] text-[#1E293B]">{study.problem}</p>
                </div>

                <div className="rounded-[24px] border border-[#E2EFEA] bg-white p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.solution')}</p>
                  <p className="mt-3 text-[0.98rem] leading-[1.75] text-[#1E293B]">{study.solution}</p>
                </div>

                <div className="rounded-[24px] border border-[#E2EFEA] bg-[linear-gradient(135deg,#ECFDF5_0%,#F5F3FF_100%)] p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.results')}</p>
                  <p className="mt-3 text-[0.98rem] font-medium leading-[1.75] text-[#10B981]">{study.result}</p>
                </div>
              </div>
            </article>
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

      <InternalLinksGrid links={relatedLinks} className="mt-10" />

      <div className="mt-10">
        <FinalCta />
      </div>
    </section>
  )
}
