import { useTranslation } from 'react-i18next'
import { FinalCta, InternalLinksGrid, ListItem, SectionHeading, SeoHead } from '../components'
import { privacySections, termsSections } from '../data'
import { createBreadcrumbSchema } from '../seo/schemas'
import { ROUTES } from '../utils/routes'
import { memo } from 'react'

export const TermsPage = memo(function TermsPage() {
  const { t } = useTranslation()
  const localizedSections = t('content.legal.termsSections', { returnObjects: true }) || termsSections

  return (
    <LegalPage
      eyebrow={t('sections.termsEyebrow')}
      title={t('sections.termsTitle')}
      description={t('sections.termsDescription')}
      sections={localizedSections}
      updatedAt={t('legal.terms.updated', { date: 'March 25, 2026' })}
      seoTitle={t('legal.terms.seo.title')}
      seoDescription={t('legal.terms.seo.desc')}
      seoPath="/terms"
    />
  )
})

export const PrivacyPage = memo(function PrivacyPage() {
  const { t } = useTranslation()
  const localizedSections = t('content.legal.privacySections', { returnObjects: true }) || privacySections

  return (
    <LegalPage
      eyebrow={t('sections.privacyEyebrow')}
      title={t('sections.privacyTitle')}
      description={t('sections.privacyDescription')}
      sections={localizedSections}
      updatedAt={t('legal.privacy.updated', { date: 'March 25, 2026' })}
      seoTitle={t('legal.privacy.seo.title')}
      seoDescription={t('legal.privacy.seo.desc')}
      seoPath="/privacy_policy"
    />
  )
})

function LegalPage({ eyebrow, title, description, sections, updatedAt, seoTitle, seoDescription, seoPath }) {
  const { t } = useTranslation()
  const relatedLinks = [
    { to: ROUTES.about, label: t('nav.about'), description: t('sections.aboutDescription') },
    { to: ROUTES.industries, label: t('nav.industries'), description: t('sections.industriesPageDescription') },
    { to: ROUTES.caseStudies, label: t('nav.caseStudies'), description: t('sections.caseDescription') },
    { to: ROUTES.auth, label: t('common.continueWithMeta'), description: t('sections.authDescription') },
  ]

  return (
    <section className="mx-auto max-w-[1100px] px-5 pb-16 pt-30 2xl:max-w-[1300px] 3xl:max-w-[1450px] 2xl:pb-24 3xl:pb-32">
      <SeoHead
        title={seoTitle}
        description={seoDescription}
        schema={[
          createBreadcrumbSchema([
            { name: t('nav.home'), path: '/' },
            { name: title, path: seoPath },
          ]),
        ]}
      />
      <SectionHeading eyebrow={eyebrow} title={title} description={description} centered as="h1" />
      <p className="mt-6 text-center text-[0.85rem] font-bold uppercase tracking-widest text-[#10B981]">
        {updatedAt}
      </p>
      <div className="mt-12 grid gap-8">
        {sections.map((section, index) => {
          const fallbackIcon = termsSections[index]?.icon || privacySections[index]?.icon
          const Icon = section.icon || fallbackIcon

          return (
            <article
              key={section.title}
              className="rounded-[36px] border border-[#E2EFEA] bg-white p-6 shadow-[0_12px_44px_rgba(0,0,0,0.03)] sm:p-8"
            >
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ECFDF5] to-[#FEF3C7] text-[#10B981] 2xl:h-18 2xl:w-18">
                  {Icon ? <Icon className="h-6 w-6 2xl:h-8 2xl:w-8" /> : null}
                </div>
                <h2 className="font-display text-[1.8rem] font-bold tracking-[-0.04em] text-[#0F172A] sm:text-[2.2rem] 2xl:text-[2.8rem] 3xl:text-[3.2rem]">{section.title}</h2>
              </div>
              <div className="mt-8 space-y-5">
                {section.items.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </div>
            </article>
          )
        })}
      </div>
      <InternalLinksGrid links={relatedLinks} className="mt-12" />
      <div className="mt-14">
        <FinalCta />
      </div>
    </section>
  )
}
