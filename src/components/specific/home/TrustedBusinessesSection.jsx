import { motion } from 'framer-motion'
import { trustedBusinesses } from '../../../data'
import { SectionHeading } from '../../ui'

const MotionSection = motion.section

export function TrustedBusinessesSection() {
  return (
    <MotionSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35 }} className="mx-auto max-w-[1280px] py-16">
      <SectionHeading eyebrow="Trusted" title="Businesses using Sova" description="Trusted by sellers, retailers, and wholesalers." centered />
      <div className="group mt-8 overflow-hidden rounded-[32px] border border-[#cfe6e9]/80 bg-white/86 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
        <div className="flex w-max gap-4 animate-[ticker_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...trustedBusinesses, ...trustedBusinesses].map((business, index) => (
            <div key={`${business}-${index}`} className="min-w-[190px] rounded-[24px] border border-[#cfe6e9] bg-white px-5 py-6 text-center text-sm font-semibold text-[#305365] shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
              {business}
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
