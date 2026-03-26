import { SectionHeading } from '../../ui'

const steps = [
  ['Connect WhatsApp', 'Link your Meta account and choose the business number you want Sova to manage.'],
  ['Sova replies fast', 'Sova reads the message, answers common questions, and spots buying intent right away.'],
  ['Close real buyers', 'Your team focuses on the chats that are ready to order or need human support.'],
]

export function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-[1280px] py-16">
      <SectionHeading eyebrow="How It Works" title="Start in three steps" description="Setup stays simple from connection to conversion." centered />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {steps.map(([title, description], index) => (
          <div key={title} className="rounded-[28px] border border-[#cfe6e9] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0f9f8f] text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#0f9f8f]">{title}</h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#305365]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
