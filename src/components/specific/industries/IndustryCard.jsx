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
      className={`grid items-center gap-8 rounded-[32px] border border-[#E2EFEA] bg-white p-8 shadow-[0_12px_44px_rgba(0,0,0,0.03)] lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="overflow-hidden rounded-[24px] bg-[#F8FAFC]">
        <img
          src={industry.image}
          alt={`${industry.label} WhatsApp automation workflow`}
          loading="lazy"
          decoding="async"
          className="h-72 w-full object-cover sm:h-80"
        />
      </div>
      <div className="rounded-[24px] bg-white p-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F1990A]">{industry.label}</p>
        <h2 className="mt-4 font-display text-[2.4rem] font-bold tracking-[-0.04em] text-[#10B981]">
          {industry.title}
        </h2>
        <p className="mt-4 text-[1.1rem] leading-[1.7] text-[#1E293B]">{industry.description}</p>
        <div className="mt-8 rounded-[24px] border border-[#E2EFEA] bg-[#e6faf3] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#10B981]">{t('common.useCase')}</p>
          <p className="mt-3 text-[1rem] leading-[1.6] text-[#1E293B]">{industry.useCase}</p>
        </div>
      </div>
    </MotionSection>
  )
}
