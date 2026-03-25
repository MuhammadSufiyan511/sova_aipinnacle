import { motion } from 'framer-motion'
import { trustedBusinesses } from '../../../data'
import { SectionHeading } from '../../ui'

const MotionDiv = motion.div

export function TrustedBusinessesSection() {
  return (
    <section className="mx-auto max-w-[1280px] py-16">
      <SectionHeading eyebrow="Trusted" title="Businesses Already Using Sova" description="Simple setup for sellers, retailers, and wholesalers who want cleaner WhatsApp sales." />
      <div className="mt-8 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/80 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
        <MotionDiv className="flex w-max gap-4" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, ease: 'linear', repeat: Number.POSITIVE_INFINITY }}>
          {[...trustedBusinesses, ...trustedBusinesses].map((business, index) => (
            <div key={`${business}-${index}`} className="min-w-[190px] rounded-[24px] border border-slate-200 bg-white px-5 py-6 text-center text-sm font-semibold text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
              {business}
            </div>
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}
