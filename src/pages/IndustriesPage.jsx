import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { industries } from '../data'
import { FinalCta, SectionHeading } from '../components'

const MotionSection = motion.section
const MotionDiv = motion.div
const ITEMS_PER_PAGE = 6

export function IndustriesPage() {
  const { t } = useTranslation()
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

  const handleSwitchTab = (direction) => {
    const nextIndex = (currentTabIndex + direction + tabs.length) % tabs.length
    setActiveTab(tabs[nextIndex].key)
    setPage(1)
  }

  return (
    <div className="mx-auto max-w-[1160px] px-5 pb-10 pt-30">
      <SectionHeading
        eyebrow={t('sections.industriesPageEyebrow')}
        title={t('sections.industriesPageTitle')}
        description={t('sections.industriesPageDescription')}
        centered
      />

      <div className="mt-10 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => handleSwitchTab(-1)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition enabled:hover:-translate-x-0.5 enabled:hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45 lg:inline-flex"
          aria-label="Previous industry tab"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex max-w-[900px] flex-nowrap justify-center gap-3 overflow-hidden">
          {visibleTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key)
                setPage(1)
              }}
              className={`min-w-[158px] rounded-full px-5 py-2.5 text-center text-sm font-semibold whitespace-nowrap transition ${
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
          aria-label="Next industry tab"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <MotionDiv
          key={`${activeTab}-${page}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="mt-16 space-y-12"
        >
          {visibleIndustries.map((industry, index) => {
            const reverse = index % 2 === 1

            return (
              <MotionSection
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`grid items-center gap-8 rounded-[32px] border border-[#E2EFEA] bg-white p-8 shadow-[0_12px_44px_rgba(0,0,0,0.03)] lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="overflow-hidden rounded-[24px] bg-[#F8FAFC]">
                  <img src={industry.image} alt={industry.label} className="h-72 w-full object-cover sm:h-80" />
                </div>
                <div className="rounded-[24px] bg-white p-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F1990A]">{industry.label}</p>
                  <h2 className="mt-4 font-display text-[2.4rem] font-bold tracking-[-0.04em] text-[#10B981]">
                    {industry.title}
                  </h2>
                  <p className="mt-4 text-[1.1rem] leading-[1.7] text-[#1E293B]">{industry.description}</p>
                  <div className="mt-8 rounded-[24px] border border-[#E2EFEA] bg-[#F8FAFC] p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#10B981]">{t('common.useCase')}</p>
                    <p className="mt-3 text-[1rem] leading-[1.6] text-[#1E293B]">{industry.useCase}</p>
                  </div>
                </div>
              </MotionSection>
            )
          })}
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
            <ChevronLeft className="h-4 w-4" /> Prev
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
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      <div className="mt-14">
        <FinalCta />
      </div>
    </div>
  )
}
