import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CircleHelp } from 'lucide-react'

const MotionDiv = motion.div

export function AboutFaqSection({ faqPage, isRtl, onNext, onPrev, t, totalFaqPages, visibleFaqs, actions = null }) {
  return (
    <section className="mx-auto max-w-[1160px] px-5 py-14 lg:py-24 2xl:max-w-[1440px] 3xl:max-w-[1600px] 2xl:py-32 3xl:py-40">
      <div className="mb-16 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
        <div className="text-center sm:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981]">{t('common.faq')}</p>
          <h2 className="font-display text-[2.5rem] font-bold tracking-[-0.03em] text-[#1E293B]">
            {t('sections.faqTitle')}
          </h2>
          {actions ? <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">{actions}</div> : null}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            disabled={faqPage === 1}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCEEE7] bg-white text-[#10B981] transition hover:bg-emerald-50 disabled:opacity-40"
          >
            {isRtl ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          </button>
          <span className="text-sm font-bold text-[#1E293B]">
            {faqPage} / {totalFaqPages}
          </span>
          <button
            type="button"
            onClick={onNext}
            disabled={faqPage === totalFaqPages}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCEEE7] bg-white text-[#10B981] transition hover:bg-emerald-50 disabled:opacity-40"
          >
            {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <MotionDiv
          key={faqPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {visibleFaqs.map((item, index) => (
            <div key={index} className="rounded-[28px] border border-[#E2EFEA] bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#10B981]">
                  <CircleHelp size={16} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">{item.question}</h3>
                  <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#1E293B]">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </MotionDiv>
      </AnimatePresence>
    </section>
  )
}
