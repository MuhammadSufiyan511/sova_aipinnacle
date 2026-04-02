import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, CalendarDays, CircleHelp, Sparkles, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { InternalLinksGrid, SeoHead } from '../components'
import { AeoOverviewSection } from '../components/specific/home'
import { faqs } from '../data'
import { createBreadcrumbSchema } from '../seo/schemas'
import { ROUTES } from '../utils/routes'

const MotionDiv = motion.div

export function AboutContactPage() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'
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
  const calendlyUrl = calendly.url || 'https://calendly.com/socialsovamy/30min'
  const calendlyEmbedUrl = `${calendlyUrl}${calendlyUrl.includes('?') ? '&' : '?'}embed_domain=localhost&embed_type=Inline&hide_gdpr_banner=1&hide_event_type_details=1`
  const relatedLinks = [
    { to: ROUTES.industries, label: t('nav.industries'), description: t('sections.industriesPageDescription') },
    { to: ROUTES.caseStudies, label: t('nav.caseStudies'), description: t('sections.caseDescription') },
    { to: ROUTES.pricing, label: t('nav.pricing'), description: t('sections.pricingDescription') },
    { to: ROUTES.auth, label: t('common.continueWithMeta'), description: t('sections.authDescription') },
  ]

  return (
    <div className="w-full bg-[#ebf2ff] about-page-shell">
      <SeoHead
        title="About SOVA | WhatsApp Communication Growth"
        description="Learn how SOVA helps businesses improve WhatsApp communication, automate customer replies, and keep sales conversations moving with less manual work."
        schema={[
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />
      {/* ── HERO SECTION WITH CALENDLY ── */}
      <section className="relative overflow-hidden bg-[#ebf2ff] pb-8 pt-24 lg:pt-16 about-hero-section">
        <div className="absolute inset-0 z-0 about-hero-blur-container">
          <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-50/50 blur-[120px] about-blur-1" />
          <div className="absolute right-[-5%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-indigo-50/40 blur-[100px] about-blur-2" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1160px] px-5">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#10B981] about-eyebrow">
                {t('sections.aboutEyebrow')}
              </p>
              <h1 className="font-display text-[2.45rem] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#1E293B] sm:text-[3.15rem] lg:text-[3.35rem] about-title">
                {t('sections.aboutTitle')}
              </h1>
              <p className="mt-6 max-w-[560px] text-[1rem] leading-[1.75] text-[#5a9e88] lg:text-[1.05rem] about-description">
                {t('sections.aboutDescription')}
              </p>
            </div>
   <div className=" rounded-[14px]  p-6 text-wshadow-2xl sm:p-7">
          <div className="rounded-[30px] border border-[#E2EFEA] bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:mt-16 calendly-container-shell">
              <h2 className="font-display p-6 text-[1.45rem] font-bold leading-tight tracking-[-0.03em] sm:text-[1.6rem] text-[#10B981]">
                {calendly.title}
              </h2>
              <div className="overflow-hidden rounded-[24px] border border-[#EEF6F2] bg-white">
                <iframe
                  src={calendlyEmbedUrl}
                  title={calendly.title || 'Calendly booking'}
                  className="h-[420px] w-full bg-white"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── MISSION SECTION ── */}
      <AeoOverviewSection />
      <section className="mx-auto max-w-[1160px] px-5 pt-16 pb-3 lg:pt-20 lg:pb-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <h2 className="font-display text-[2.2rem] font-bold tracking-[-0.03em] text-[#1E293B]">
              {t('common.ourMission')}
            </h2>
            <div className="space-y-6">
              {missionParagraphs.map((paragraph, index) => (
                <p key={index} className="text-[1.1rem] leading-[1.8] text-[#1E293B]">
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
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[#1E293B]">{card.body}</p>
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
              {t('sections.faqTitle')}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFaqPage((p) => Math.max(1, p - 1))}
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
              onClick={() => setFaqPage((p) => Math.min(totalFaqPages, p + 1))}
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

      <section className="mx-auto max-w-[1160px] px-5 pb-4">
        <InternalLinksGrid links={relatedLinks} />
      </section>
    </div>
  )
}
