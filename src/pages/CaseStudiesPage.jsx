import { caseStudies } from '../data'
import { FinalCta } from '../components'

export function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-[1280px] py-14">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f9f8f]">Case Studies</p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[#173247] sm:text-5xl">
          Six real Sova stories in a cleaner, more visual format.
        </h1>
        <p className="mt-4 text-base leading-8 text-[#4e6b79] sm:text-lg">
          Explore how retailers, wholesalers, and growing teams use Sova to save time, improve follow-ups, and close more buyers on WhatsApp.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            className="rounded-[36px] border border-[#cfe6e9] bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6"
          >
            <div>
              <div className="rounded-[26px] border border-[#d8ece7] bg-[linear-gradient(145deg,#f5fffd_0%,#eefbf8_55%,#f6f1ff_100%)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f9f8f]">{study.businessType}</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-[#173247] sm:text-[2.2rem]">
                  {study.company}
                </h2>
                <p className="mt-3 text-lg leading-8 text-[#305365]">{study.headline}</p>
                <p className="mt-4 text-sm leading-7 text-[#4e6b79]">{study.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0f9f8f] shadow-[0_10px_20px_rgba(15,23,42,0.05)]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[0.46fr_0.54fr]">
              <div className="overflow-hidden rounded-[28px] border border-[#d8ece7] bg-[#eefbf8]">
                <img src={study.image} alt={study.company} className="h-72 w-full object-cover sm:h-80" />
              </div>

              <div className="grid gap-4">
                <div className="rounded-[24px] border border-[#d8ece7] bg-[#f8fffe] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f9f8f]">Problem</p>
                  <p className="mt-3 text-sm leading-7 text-[#305365]">{study.problem}</p>
                </div>

                <div className="rounded-[24px] border border-[#d8ece7] bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f9f8f]">Solution</p>
                  <p className="mt-3 text-sm leading-7 text-[#305365]">{study.solution}</p>
                </div>

                <div className="rounded-[24px] border border-[#d8ece7] bg-[linear-gradient(135deg,#ecfeff_0%,#f5f3ff_100%)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f9f8f]">Results</p>
                  <p className="mt-3 text-sm leading-7 text-[#305365]">{study.result}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <FinalCta />
      </div>
    </section>
  )
}
