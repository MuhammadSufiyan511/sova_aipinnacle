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
      className={`industry-card-shell w-full grid gap-6 rounded-[24px] border border-[#E2EFEA] bg-white p-4 shadow-[0_12px_44px_rgba(0,0,0,0.03)] sm:rounded-[28px] sm:p-6 md:grid-cols-2 md:items-center md:gap-8 md:p-8 lg:gap-12 lg:rounded-[40px] lg:p-12 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="industry-image-wrapper overflow-hidden rounded-[16px] bg-[#F8FAFC] sm:rounded-[20px] lg:rounded-[24px]">
        <img
          src={industry.image}
          alt={`${industry.label} WhatsApp automation workflow`}
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover sm:h-64 md:h-72 lg:h-96"
        />
      </div>
      <div className="flex w-full flex-col justify-center sm:px-3 md:px-8 lg:px-12 industry-content-box">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F1990A]">{industry.label}</p>
        <h2 className="mt-3 font-display text-[1.25rem] font-bold tracking-[-0.04em] text-[#10B981] sm:mt-4 sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2.2rem]">
          {industry.title}
        </h2>
        <p className="mt-3 text-[0.92rem] leading-relax text-[#1E293B] sm:mt-4 sm:text-[1rem] sm:leading-[1.7] md:text-[1.05rem] lg:text-[1.1rem]">
          {industry.description}
        </p>
        <div className="industry-usecase-box mt-4 rounded-[16px] border border-[#E2EFEA] bg-[#e6faf3] p-3 sm:mt-6 sm:rounded-[20px] sm:p-4 lg:mt-8 lg:rounded-[24px] lg:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#10B981] sm:text-[10px]">{t('common.useCase')}</p>
          <p className="mt-2 text-[0.86rem] leading-6 text-[#1E293B] sm:mt-3 sm:text-[0.95rem] md:text-[0.98rem] lg:text-[1rem] lg:leading-[1.6]">
            {industry.useCase}
          </p>
        </div>
      </div>
    </MotionSection>
  )
}
