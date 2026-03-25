import { CircleHelp, MessagesSquare, PhoneCall } from 'lucide-react'
import { faqs } from '../data'
import { SectionHeading, WhatsAppButton } from '../components'

export function AboutContactPage() {
  return (
    <section className="mx-auto max-w-[1280px] py-14">
      <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About Sova"
            title="Helping businesses automate WhatsApp communication."
            description="Sova was created for businesses that get plenty of messages but still miss good sales because every chat looks the same."
          />
          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Our mission</p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We help teams reply faster, find serious buyers sooner, and keep sales conversations moving without adding more manual work.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Many growing businesses lose time to repeated questions, spam, and slow follow-ups. Sova keeps things calm, simple, and effective so every message has a better chance to become revenue.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#eef2ff_100%)] p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</p>
            <div className="mt-6 space-y-4 text-slate-700">
              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4">
                <PhoneCall className="h-5 w-5 text-teal-600" />
                +971 50 123 4567
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4">
                <MessagesSquare className="h-5 w-5 text-purple-500" />
                hello@sovaassist.com
              </div>
            </div>
            <WhatsAppButton />
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">FAQ</p>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <CircleHelp className="mt-1 h-5 w-5 shrink-0 text-slate-500" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.question}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
