import { useTranslation } from 'react-i18next'

export function CaseStudyCard({ study }) {
  const { t } = useTranslation()

  return (
    <article className="rounded-[36px] border border-[#E2EFEA] bg-white p-5 shadow-[0_12px_44px_rgba(0,0,0,0.03)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_2.2fr]">
        <div className="overflow-hidden rounded-[28px] border border-[#E2EFEA] bg-[#F8FAFC]">
          <img
            src={study.image}
            alt={`${study.company} case study`}
            loading="lazy"
            decoding="async"
            className="h-64 w-full object-cover sm:h-72 lg:h-full"
          />
        </div>

        <div className="rounded-[28px] border border-[#E2EFEA] bg-[#f0faf6] p-7 sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#10B981]">{study.businessType}</p>
          <h2 className="mt-4 font-display text-[2rem] font-bold tracking-[-0.04em] text-[#0F172A] sm:text-[2.3rem]">
            {study.company}
          </h2>
          <p className="mt-3 text-[1.08rem] font-medium leading-[1.6] text-[#10B981]">{study.headline}</p>
          <p className="mt-4 text-[0.98rem] leading-[1.75] text-[#1E293B]">{study.summary}</p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {study.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-[#DCEEE7] bg-white px-4 py-2 text-[0.78rem] font-bold text-[#10B981] shadow-sm"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-5 lg:grid-cols-3">
        <div className="rounded-[24px] border border-[#E2EFEA] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.problem')}</p>
          <p className="mt-3 text-[0.98rem] leading-[1.75] text-[#1E293B]">{study.problem}</p>
        </div>

        <div className="rounded-[24px] border border-[#E2EFEA] bg-white p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.solution')}</p>
          <p className="mt-3 text-[0.98rem] leading-[1.75] text-[#1E293B]">{study.solution}</p>
        </div>

        <div className="rounded-[24px] border border-[#E2EFEA] bg-[linear-gradient(135deg,#ECFDF5_0%,#F5F3FF_100%)] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.results')}</p>
          <p className="mt-3 text-[0.98rem] font-medium leading-[1.75] text-[#10B981]">{study.result}</p>
        </div>
      </div>
    </article>
  )
}
