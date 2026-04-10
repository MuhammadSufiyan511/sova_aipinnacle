import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../utils/routes'

const MotionDiv = motion.div

export function IndustryPreviewCard({ onSwitchIndustry, selectedIndustry, t, isRtl }) {
  return (
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
        // In RTL: swipe left = prev, swipe right = next
        if (info.offset.x < -50) onSwitchIndustry(isRtl ? -1 : 1)
        else if (info.offset.x > 50) onSwitchIndustry(isRtl ? 1 : -1)
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
  )
}
