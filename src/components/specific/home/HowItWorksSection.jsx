import { SectionHeading } from '../../ui'

const steps = [
  ['Connect WhatsApp', 'Link your Meta account and choose the business number you want Sova to manage.'],
  ['AI reads messages', 'Sova understands the question, detects buying intent, and responds instantly.'],
  ['You get serious buyers', 'Your team steps in when a chat is ready for closing or deeper support.'],
]

export function HowItWorksSection() {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-8 py-16 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <SectionHeading eyebrow="How It Works" title="Three steps between a busy inbox and better sales." description="Setup stays simple, even for mobile-first businesses." />
      </div>
      <div className="space-y-5">
        {steps.map(([title, description], index) => (
          <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">0{index + 1}</div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
