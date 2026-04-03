import { useTranslation } from 'react-i18next'

export function CaseStudyCard({ study }) {
  const { t } = useTranslation()

  return (
    <article className="case-study-shell rounded-[28px] border border-[#E2EFEA] bg-white p-4 shadow-[0_12px_44px_rgba(0,0,0,0.03)] sm:rounded-[36px] sm:p-8">
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.95fr_2.2fr]">
        <div className="case-study-image-wrapper overflow-hidden rounded-[22px] border border-[#E2EFEA] bg-[#F8FAFC] sm:rounded-[28px]">
          <img
            src={study.image}
            alt={`${study.company} case study`}
            loading="lazy"
            decoding="async"
            className="h-52 w-full object-cover sm:h-72 lg:h-full"
          />
        </div>

        <div className="case-study-content-wrapper rounded-[22px] border border-[#E2EFEA] bg-[#f0faf6] p-4 sm:rounded-[28px] sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#10B981]">{study.businessType}</p>
          <h2 className="mt-3 font-display text-[1.5rem] font-bold tracking-[-0.04em] text-[#0F172A] sm:mt-4 sm:text-[2.3rem]">
            {study.company}
          </h2>
          <p className="mt-2.5 text-[0.95rem] font-medium leading-6 text-[#10B981] sm:mt-3 sm:text-[1.08rem] sm:leading-[1.6]">{study.headline}</p>
          <p className="mt-3 text-[0.92rem] leading-6 text-[#1E293B] sm:mt-4 sm:text-[0.98rem] sm:leading-[1.75]">{study.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
            {study.metrics.map((metric) => (
              <span
                key={metric}
                className="case-study-metric-tag rounded-full border border-[#DCEEE7] bg-white px-3 py-1.5 text-[0.7rem] font-bold text-[#10B981] shadow-sm sm:px-4 sm:py-2 sm:text-[0.78rem]"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:gap-5 lg:grid-cols-3">
        <div className="case-study-detail-box rounded-[20px] border border-[#E2EFEA] bg-white p-4 sm:rounded-[24px] sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.problem')}</p>
          <p className="mt-2.5 text-[0.92rem] leading-6 text-[#1E293B] sm:mt-3 sm:text-[0.98rem] sm:leading-[1.75]">{study.problem}</p>
        </div>

        <div className="case-study-detail-box rounded-[20px] border border-[#E2EFEA] bg-white p-4 sm:rounded-[24px] sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.solution')}</p>
          <p className="mt-2.5 text-[0.92rem] leading-6 text-[#1E293B] sm:mt-3 sm:text-[0.98rem] sm:leading-[1.75]">{study.solution}</p>
        </div>

        <div className="case-study-result-box rounded-[20px] border border-[#E2EFEA] bg-[linear-gradient(135deg,#ECFDF5_0%,#F5F3FF_100%)] p-4 sm:rounded-[24px] sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.results')}</p>
          <p className="mt-2.5 text-[0.92rem] font-medium leading-6 text-[#10B981] sm:mt-3 sm:text-[0.98rem] sm:leading-[1.75]">{study.result}</p>
        </div>
      </div>
    </article>
  )
}
