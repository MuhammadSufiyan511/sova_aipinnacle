import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { InternalLinksGrid, SeoHead } from '../components'
import { faqs } from '../data'
import { createBreadcrumbSchema } from '../seo/schemas'
import { ROUTES } from '../utils/routes'
import { AboutFaqSection } from './about/AboutFaqSection'
import { AboutHero } from './about/AboutHero'
import { AboutMissionSection } from './about/AboutMissionSection'

const FAQS_PER_PAGE = 4

export function AboutContactPage() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'
  const localizedFaqs = t('content.faq.items', { returnObjects: true }) || faqs
  const missionParagraphs = t('content.about.mission', { returnObjects: true }) || []
  const focusCards = t('content.about.focusCards', { returnObjects: true }) || []
  const calendly = t('content.about.calendly', { returnObjects: true }) || {}

  const [faqPage, setFaqPage] = useState(1)
  const totalFaqPages = Math.ceil(localizedFaqs.length / FAQS_PER_PAGE)
  const visibleFaqs = localizedFaqs.slice((faqPage - 1) * FAQS_PER_PAGE, faqPage * FAQS_PER_PAGE)
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

      <AboutHero calendlyEmbedUrl={calendlyEmbedUrl} calendlyTitle={calendly.title} t={t} />
      <AboutMissionSection focusCards={focusCards} missionParagraphs={missionParagraphs} t={t} />
      <AboutFaqSection
        faqPage={faqPage}
        isRtl={isRtl}
        onNext={() => setFaqPage((p) => Math.min(totalFaqPages, p + 1))}
        onPrev={() => setFaqPage((p) => Math.max(1, p - 1))}
        t={t}
        totalFaqPages={totalFaqPages}
        visibleFaqs={visibleFaqs}
      />

      <section className="mx-auto max-w-[1160px] px-5 pb-4">
        <InternalLinksGrid links={relatedLinks} />
      </section>
    </div>
  )
}