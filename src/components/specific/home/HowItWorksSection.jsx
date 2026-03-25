import { SectionHeading } from '../../ui'

const steps = [
  ['Step 1', 'Connect WhatsApp', 'Link your Meta account and choose the business number you want Sova to manage.'],
  ['Step 2', 'Sova replies fast', 'Sova reads the message, answers common questions, and spots buying intent right away.'],
  ['Step 3', 'Close real buyers', 'Your team focuses on the chats that are ready to order or need human support.'],
]

export function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-[1280px] py-16">
      <SectionHeading eyebrow="How It Works" title="Start in three steps" description="Setup stays simple from connection to conversion." centered />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {steps.map(([step, title, description], index) => (
          <div key={title} className="rounded-[28px] border border-[#cfe6e9] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-7">
            <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              {step}
            </div>
            <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173247] text-sm font-semibold text-white">
              0{index + 1}
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-[#173247]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#4e6b79]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
