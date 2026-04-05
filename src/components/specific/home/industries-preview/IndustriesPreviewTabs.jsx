import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const MotionDiv = motion.div

export function IndustriesPreviewTabs({
  activeIndustry,
  isRtl,
  onSelectIndustry,
  onSwitchIndustry,
  t,
  tabsContainerRef,
  tabsToRender,
}) {
  return (
    <div className="mb-8 flex items-center justify-center gap-4 lg:gap-8">
      <button
        type="button"
        onClick={() => onSwitchIndustry(-1)}
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
          if (info.offset.x < -40) onSwitchIndustry(1)
          else if (info.offset.x > 40) onSwitchIndustry(-1)
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
        onClick={() => onSwitchIndustry(1)}
        className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#D1FAE5] bg-white text-[#10B981] shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition hover:translate-x-0.5 hover:bg-[#ECFDF5] lg:inline-flex"
        aria-label={t('common.nextIndustryTab')}
      >
        {isRtl ? <ArrowLeft className="h-4.5 w-4.5" /> : <ArrowRight className="h-4.5 w-4.5" />}
      </button>
    </div>
  )
}
