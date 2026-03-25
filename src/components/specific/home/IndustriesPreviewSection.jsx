import { AnimatePresence, motion } from 'framer-motion'
import { industries } from '../../../data'
import { CTAButton, SectionHeading, TextLink } from '../../ui'
import { ROUTES } from '../../../utils/routes'

const MotionDiv = motion.div

export function IndustriesPreviewSection({ activeIndustry, onSelectIndustry }) {
  const selectedIndustry = industries.find((industry) => industry.id === activeIndustry) ?? industries[0]

  return (
    <section className="mx-auto max-w-[1280px] py-2">
      <SectionHeading eyebrow="Industries" title="Built for busy businesses that sell on WhatsApp." description="Start with the use case that matches your daily customer questions." />
      <div className="mt-8 rounded-[32px] border border-slate-200/80 bg-white/85 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <button key={industry.id} type="button" onClick={() => onSelectIndustry(industry.id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeIndustry === industry.id ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {industry.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <MotionDiv key={selectedIndustry.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.24, ease: 'easeOut' }} className="mt-6 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50">
              <img src={selectedIndustry.image} alt={selectedIndustry.label} className="h-64 w-full object-cover sm:h-72" />
            </div>
            <div className="flex flex-col justify-between rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div>
                <div className="mb-5 inline-block">
                  <CTAButton to={ROUTES.auth} label="Start Free Trial" subtext="No card required" full />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Use case</p>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">{selectedIndustry.label}</h3>
                <p className="mt-4 max-w-lg text-base leading-8 text-slate-700">{selectedIndustry.title}</p>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">{selectedIndustry.useCase}</p>
              </div>
              <div className="mt-6">
                <TextLink to={ROUTES.industries}>See all industry examples</TextLink>
              </div>
            </div>
          </MotionDiv>
        </AnimatePresence>
      </div>
    </section>
  )
}
