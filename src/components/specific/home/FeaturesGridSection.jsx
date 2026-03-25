import { motion } from 'framer-motion'
import { features } from '../../../data'
import { SectionHeading } from '../../ui'

const MotionDiv = motion.div

export function FeaturesGridSection() {
  return (
    <section className="mx-auto max-w-[1280px] py-8">
      <SectionHeading eyebrow="Core Features" title="Simple tools that protect your time and grow your sales." description="Only the essentials, kept clear and easy for non-technical teams." />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <MotionDiv key={feature.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.35, delay: index * 0.08 }} className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ccfbf1_0%,#e0e7ff_100%)] text-slate-900">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}
