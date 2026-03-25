import { motion } from 'framer-motion'
import { industries } from '../data'
import { FinalCta, SectionHeading } from '../components'

const MotionSection = motion.section

export function IndustriesPage() {
  return (
    <div className="mx-auto max-w-[1280px] py-14">
      <SectionHeading
        eyebrow="Industries"
        title="Industry flows designed for the way businesses sell on WhatsApp."
        description="Each section below shows how Sova keeps replies simple, fast, and focused on real buyers."
      />

      <div className="mt-10 space-y-8">
        {industries.map((industry, index) => {
          const reverse = index % 2 === 1

          return (
            <MotionSection
              key={industry.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`grid items-center gap-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="overflow-hidden rounded-[28px] bg-slate-100">
                <img src={industry.image} alt={industry.label} className="h-72 w-full object-cover sm:h-80" />
              </div>
              <div className="rounded-[28px] bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{industry.label}</p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950">
                  {industry.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">{industry.description}</p>
                <div className="mt-6 rounded-[24px] border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Use case</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{industry.useCase}</p>
                </div>
              </div>
            </MotionSection>
          )
        })}
      </div>

      <div className="mt-14">
        <FinalCta />
      </div>
    </div>
  )
}
