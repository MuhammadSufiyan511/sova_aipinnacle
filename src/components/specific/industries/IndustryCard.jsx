import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const MotionSection = motion.section

export function IndustryCard({ industry, index }) {
  const { t } = useTranslation()
  const reverse = index % 2 === 1

  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`industry-card-shell grid items-center gap-5 rounded-[28px] border border-[#E2EFEA] bg-white p-4 shadow-[0_12px_44px_rgba(0,0,0,0.03)] sm:gap-8 sm:rounded-[32px] sm:p-8 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="industry-image-wrapper overflow-hidden rounded-[22px] bg-[#F8FAFC] sm:rounded-[24px]">
        <img
          src={industry.image}
          alt={`${industry.label} WhatsApp automation workflow`}
          loading="lazy"
          decoding="async"
          className="h-52 w-full object-cover sm:h-80"
        />
      </div>
      <div className="rounded-[20px] bg-white p-1 sm:rounded-[24px] sm:p-2 industry-content-box">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F1990A]">{industry.label}</p>
        <h2 className="mt-3 font-display text-[1.65rem] font-bold tracking-[-0.04em] text-[#10B981] sm:mt-4 sm:text-[2.4rem]">
          {industry.title}
        </h2>
        <p className="mt-3 text-[0.95rem] leading-7 text-[#1E293B] sm:mt-4 sm:text-[1.1rem] sm:leading-[1.7]">{industry.description}</p>
        <div className="industry-usecase-box mt-5 rounded-[20px] border border-[#E2EFEA] bg-[#e6faf3] p-4 sm:mt-8 sm:rounded-[24px] sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#10B981]">{t('common.useCase')}</p>
          <p className="mt-2.5 text-[0.92rem] leading-6 text-[#1E293B] sm:mt-3 sm:text-[1rem] sm:leading-[1.6]">{industry.useCase}</p>
        </div>
      </div>
    </MotionSection>
  )
}
