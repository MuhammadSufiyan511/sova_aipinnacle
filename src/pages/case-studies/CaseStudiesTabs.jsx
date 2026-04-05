import { ChevronLeft, ChevronRight } from 'lucide-react'

export function CaseStudiesTabs({
  activeTab,
  isRtl,
  onSelectTab,
  onSwitchTab,
  t,
  uniqueTabs,
  visibleTabs,
}) {
  return (
    <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
      <button
        type="button"
        onClick={() => onSwitchTab(-1)}
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
            onClick={() => onSelectTab(tab.key)}
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
            onClick={() => onSelectTab(tab.key)}
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
            onClick={() => onSelectTab(tab.key)}
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
        onClick={() => onSwitchTab(1)}
        className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition enabled:hover:translate-x-0.5 enabled:hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45 lg:inline-flex"
        aria-label={t('common.nextCaseStudyTab')}
      >
        {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>
    </div>
  )
}