import { privacySections, termsSections } from '../data'
import { useTranslation } from 'react-i18next'
import { FinalCta, ListItem, SectionHeading } from '../components'

export function TermsPage() {
  const { t } = useTranslation()
  const localizedSections = t('content.legal.termsSections', { returnObjects: true }) || termsSections

  return (
    <LegalPage
      eyebrow={t('sections.termsEyebrow')}
      title={t('sections.termsTitle')}
      description={t('sections.termsDescription')}
      sections={localizedSections}
      updatedAt="March 25, 2026"
    />
  )
}

export function PrivacyPage() {
  const { t } = useTranslation()
  const localizedSections = t('content.legal.privacySections', { returnObjects: true }) || privacySections

  return (
    <LegalPage
      eyebrow={t('sections.privacyEyebrow')}
      title={t('sections.privacyTitle')}
      description={t('sections.privacyDescription')}
      sections={localizedSections}
      updatedAt="March 25, 2026"
    />
  )
}

function LegalPage({ eyebrow, title, description, sections, updatedAt }) {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-[1100px] px-5 pb-16 pt-30">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} centered />
      <p className="mt-6 text-center text-[0.85rem] font-bold uppercase tracking-widest text-[#10B981]">
        {t('common.lastUpdated')}: {updatedAt}
      </p>
      <div className="mt-12 grid gap-8">
        {sections.map((section, index) => {
          const fallbackIcon = termsSections[index]?.icon || privacySections[index]?.icon
          const Icon = section.icon || fallbackIcon

          return (
            <article
              key={section.title}
              className="rounded-[36px] border border-[#E2EFEA] bg-white p-8 shadow-[0_12px_44px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-5">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ECFDF5] to-[#FEF3C7] text-[#10B981]">
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </div>
                <h2 className="font-display text-[2.2rem] font-bold tracking-[-0.04em] text-[#0F172A]">{section.title}</h2>
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
      <div className="mt-14">
        <FinalCta />
      </div>
    </section>
  )
}

