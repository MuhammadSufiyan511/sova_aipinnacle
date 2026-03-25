import { caseStudies } from '../../../data'
import { SectionHeading, TextLink } from '../../ui'
import { ROUTES } from '../../../utils/routes'

export function CaseStudiesPreviewSection() {
  return (
    <section className="mx-auto max-w-[1280px] py-16">
      <SectionHeading eyebrow="Case Studies" title="Real businesses, real WhatsApp results." description="A quick look at how sellers are saving time and improving lead quality with Sova." />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {caseStudies.slice(0, 3).map((study) => (
          <div key={study.slug} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{study.businessType}</p>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">{study.company}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600"><span className="font-semibold text-slate-900">Problem:</span> {study.problem}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600"><span className="font-semibold text-slate-900">Result:</span> {study.result}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <TextLink to={ROUTES.caseStudies}>See all case studies</TextLink>
      </div>
    </section>
  )
}
