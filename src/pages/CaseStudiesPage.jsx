import { caseStudies } from '../data'
import { FinalCta } from '../components'

export function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-[1280px] py-14">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f9f8f]">Case Studies</p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[#173247] sm:text-5xl">
          Six real Sova stories in a simple, scan-friendly format.
        </h1>
        <p className="mt-4 text-base leading-8 text-gray-700 sm:text-lg">
          Explore how retailers, wholesalers, and growing teams use Sova to save time, improve follow-ups, and close more buyers on WhatsApp.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {caseStudies.map((study, index) => {
          const reverse = index % 2 === 1

          return (
            <article
              key={study.slug}
              className={`grid items-center gap-6 rounded-[36px] border border-[#cfe6e9] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:grid-cols-[1.02fr_0.98fr] ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="overflow-hidden rounded-[28px] bg-[#ebf7f8]">
                <img src={study.image} alt={study.company} className="h-72 w-full object-cover sm:h-80" />
              </div>

              <div className="rounded-[28px] bg-[#f4fbfb] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f9f8f]">{study.businessType}</p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[#173247]">
                  {study.company}
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#305365]">{study.headline}</p>
                <p className="mt-4 text-sm leading-7 text-[#f59e0b]">{study.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <span key={metric} className="rounded-full bg-[linear-gradient(135deg,#ecfeff_0%,#eef2ff_100%)] px-4 py-2 text-xs font-semibold text-[#173247]">
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[22px] border border-[#cfe6e9] bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f9f8f]">Problem</p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{study.problem}</p>
                  </div>
                  <div className="rounded-[22px] border border-[#cfe6e9] bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f9f8f]">Solution</p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{study.solution}</p>
                  </div>
                  <div className="rounded-[22px] bg-[linear-gradient(135deg,#ecfeff_0%,#f8fafc_100%)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f9f8f]">Result</p>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{study.result}</p>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-14">
        <FinalCta />
      </div>
    </section>
  )
}
