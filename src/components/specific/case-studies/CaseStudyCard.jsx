import { Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { caseStudyPdfDrafts } from '../../../data/caseStudyPdfDrafts'
import { openCaseStudyPdf } from '../../../utils/caseStudyPdf'

export function CaseStudyCard({ study }) {
  const { t } = useTranslation()
  const pdfDraft = caseStudyPdfDrafts[study.slug]
  const hasPdfDraft = Boolean(pdfDraft)
  const translateOr = (key, fallback) => {
    const value = t(key)
    return value === key ? fallback : value
  }

  const handleOpenPdf = () => {
    if (!pdfDraft) return

    openCaseStudyPdf({
      slug: study.slug,
      fileName: pdfDraft.fileName,
      title: pdfDraft.title,
      eyebrow: pdfDraft.eyebrow,
      subtitle: pdfDraft.subtitle,
      category: pdfDraft.category,
      businessType: pdfDraft.businessType,
      headline: pdfDraft.headline,
      highlights: pdfDraft.highlights,
      sections: pdfDraft.sections,
    })
  }

  return (
    <article className="case-study-shell w-full rounded-[24px] border border-[#E2EFEA] bg-white p-4 shadow-[0_12px_44px_rgba(0,0,0,0.03)] sm:rounded-[36px] sm:p-8 md:p-10 lg:p-12">
      <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.95fr_2.2fr] lg:gap-12">
        <div className="case-study-image-wrapper overflow-hidden rounded-[18px] border border-[#E2EFEA] bg-[#F8FAFC] sm:rounded-[28px]">
          <img
            src={study.image}
            alt={`${study.company} case study`}
            loading="lazy"
            decoding="async"
            className="h-44 w-full object-cover sm:h-72 lg:h-full"
          />
        </div>

        <div className="case-study-content-wrapper flex flex-col justify-center rounded-[20px] border border-[#E2EFEA] bg-[#f0faf6] p-4 sm:rounded-[28px] sm:p-8 lg:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#10B981]">{study.businessType}</p>
          <h2 className="mt-3 font-display text-[1.35rem] font-bold tracking-[-0.04em] text-[#0F172A] sm:mt-4 sm:text-[2.1rem]">
            {study.company}
          </h2>
          <p className="mt-2.5 text-[0.9rem] font-medium leading-6 text-[#10B981] sm:mt-3 sm:text-[1.05rem] sm:leading-[1.6]">{study.headline}</p>
          <p className="mt-3 text-[0.9rem] leading-6 text-[#1E293B] sm:mt-4 sm:text-[0.98rem] sm:leading-[1.75]">{study.summary}</p>

          <div className="mt-5 flex flex-col gap-4 sm:mt-7 sm:gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {study.metrics.map((metric) => (
                <span
                  key={metric}
                  className="case-study-metric-tag rounded-full border border-[#DCEEE7] bg-white px-2.5 py-1 text-[0.65rem] font-bold text-[#10B981] shadow-sm sm:px-4 sm:py-2 sm:text-[0.78rem]"
                >
                  {metric}
                </span>
              ))}
            </div>

            {hasPdfDraft ? (
              <button
                type="button"
                onClick={handleOpenPdf}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#10B981] px-4 py-2.5 text-[0.74rem] font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition hover:scale-[1.02] hover:bg-[#0E9F74]"
              >
                <Eye className="h-4 w-4" />
                {translateOr('common.viewCaseStudy', 'View Case Study')}
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="case-study-detail-box rounded-[20px] border border-[#E2EFEA] bg-white p-4 sm:rounded-[24px] sm:p-6 md:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.problem')}</p>
          <p className="mt-2.5 text-[0.9rem] leading-6 text-[#1E293B] sm:mt-3 sm:text-[0.98rem] sm:leading-[1.75]">{study.problem}</p>
        </div>

        <div className="case-study-detail-box rounded-[20px] border border-[#E2EFEA] bg-white p-4 sm:rounded-[24px] sm:p-6 md:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.solution')}</p>
          <p className="mt-2.5 text-[0.9rem] leading-6 text-[#1E293B] sm:mt-3 sm:text-[0.98rem] sm:leading-[1.75]">{study.solution}</p>
        </div>

        <div className="case-study-result-box rounded-[20px] border border-[#E2EFEA] bg-[linear-gradient(135deg,#ECFDF5_0%,#F5F3FF_100%)] p-4 sm:rounded-[24px] sm:p-6 lg:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">{t('common.results')}</p>
          <p className="mt-2.5 text-[0.9rem] font-medium leading-6 text-[#10B981] sm:mt-3 sm:text-[0.98rem] sm:leading-[1.75]">{study.result}</p>
        </div>
      </div>
    </article>
  )
}
