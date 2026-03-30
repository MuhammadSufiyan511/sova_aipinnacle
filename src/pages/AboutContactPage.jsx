import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, CircleHelp, Sparkles, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { faqs } from '../data'

export function AboutContactPage() {
  const { t } = useTranslation()
  const localizedFaqs = t('content.faq.items', { returnObjects: true }) || faqs
  const missionParagraphs = t('content.about.mission', { returnObjects: true }) || []
  const focusCards = t('content.about.focusCards', { returnObjects: true }) || []
  const calendly = t('content.about.calendly', { returnObjects: true }) || {}
  const cardIcons = [Sparkles, TrendingUp, CalendarDays]

  // FAQ Pagination
  const [faqPage, setFaqPage] = useState(1)
  const FAQs_PER_PAGE = 4
  const totalFaqPages = Math.ceil(localizedFaqs.length / FAQs_PER_PAGE)
  const visibleFaqs = localizedFaqs.slice((faqPage - 1) * FAQs_PER_PAGE, faqPage * FAQs_PER_PAGE)

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* ── HERO SECTION WITH CALENDLY ── */}
      <section className="relative overflow-hidden bg-white pb-8 pt-32 lg:pb-12 lg:pt-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-50/50 blur-[120px]" />
          <div className="absolute right-[-5%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-indigo-50/40 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1160px] px-5">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#10B981]">
                {t('sections.aboutEyebrow')}
              </p>
              <h1 className="font-display text-[3rem] font-extrabold leading-[1.1] tracking-[-0.05em] text-[#1E293B] sm:text-[4rem] lg:text-[4.2rem]">
                {t('sections.aboutTitle')}
              </h1>
              <p className="mt-8 text-[1.15rem] leading-[1.8] text-[#48617A] lg:text-[1.2rem]">
                {t('sections.aboutDescription')}
              </p>
            </div>

            <div className="overflow-hidden rounded-[40px] bg-[#0F172A] p-8 text-white shadow-2xl sm:p-10">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#10B981]">
                GET IN TOUCH
              </p>
              <h2 className="font-display text-[1.8rem] font-bold tracking-[-0.03em] leading-tight">
                {calendly.title}
              </h2>
              <p className="mt-4 text-[0.95rem] leading-[1.6] text-slate-400">
                {calendly.description}
              </p>

              <a
                href={calendly.url || 'https://calendly.com/'}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#10B981] py-4 text-[1rem] font-bold text-white transition-all hover:bg-[#0F9D6E] hover:scale-[1.02]"
              >
                {calendly.button}
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-[#10B981]">
                    <CalendarDays size={16} />
                  </div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-white">{calendly.cardTitle}</p>
                    <p className="text-[0.8rem] text-slate-400">{calendly.cardText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION SECTION ── */}
      <section className="mx-auto max-w-[1160px] px-5 pt-16 pb-3 lg:pt-20 lg:pb-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <h2 className="font-display text-[2.2rem] font-bold tracking-[-0.03em] text-[#1E293B]">
              {t('common.ourMission')}
            </h2>
            <div className="space-y-6">
              {missionParagraphs.map((paragraph, index) => (
                <p key={index} className="text-[1.1rem] leading-[1.8] text-[#36556A]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {focusCards.slice(0, 2).map((card, index) => {
              const Icon = cardIcons[index] || Sparkles
              return (
                <div key={index} className="rounded-[32px] border border-[#E2EFEA] bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#10B981]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1E293B]">{card.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[#48617A]">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION WITH PAGINATION ── */}
      <section className="mx-auto max-w-[1160px] px-5 py-14 lg:py-24">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981]">{t('common.faq')}</p>
            <h2 className="font-display text-[2.5rem] font-bold tracking-[-0.03em] text-[#1E293B]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFaqPage((p) => Math.max(1, p - 1))}
              disabled={faqPage === 1}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCEEE7] bg-white text-[#10B981] transition hover:bg-emerald-50 disabled:opacity-40"
            >
              <ArrowLeft size={20} />
            </button>
            <span className="text-sm font-bold text-[#1E293B]">
              {faqPage} / {totalFaqPages}
            </span>
            <button
              type="button"
              onClick={() => setFaqPage((p) => Math.min(totalFaqPages, p + 1))}
              disabled={faqPage === totalFaqPages}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCEEE7] bg-white text-[#10B981] transition hover:bg-emerald-50 disabled:opacity-40"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
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
                    <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#48617A]">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  )
}
