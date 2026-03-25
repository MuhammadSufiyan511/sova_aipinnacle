import { privacySections, termsSections } from '../data'
import { FinalCta, ListItem, SectionHeading } from '../components'

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms and Conditions"
      title="Clear rules for using Sova responsibly."
      description="A structured overview of how Sova may be used, how information is handled, and what rights users keep."
      sections={termsSections}
      updatedAt="March 25, 2026"
    />
  )
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your data should be handled with care and clarity."
      description="This page explains what we collect, how we use it, how we protect it, and what rights users may request."
      sections={privacySections}
      updatedAt="March 25, 2026"
    />
  )
}

function LegalPage({ eyebrow, title, description, sections, updatedAt }) {
  return (
    <section className="mx-auto max-w-[1100px] py-14">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} centered />
      <p className="mt-4 text-center text-sm font-medium text-[#6b8795]">Last updated: {updatedAt}</p>
      <div className="mt-10 grid gap-6">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[32px] border border-[#cfe6e9] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ccfbf1_0%,#fef3c7_100%)] text-[#173247]">
                <section.icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#173247]">{section.title}</h2>
            </div>
            <div className="mt-6 space-y-4">
              {section.items.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
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
