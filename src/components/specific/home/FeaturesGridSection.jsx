import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { features } from '../../../data'
import { SectionHeading } from '../../ui'

const MotionDiv = motion.div

const featureCardContent = [
  {
    description: 'Spot real buyers quickly and stop wasting time on low-intent chats.',
    points: ['Find buying intent faster', 'Send hot chats to your team', 'Focus only on real opportunities'],
  },
  {
    description: 'Reply to common questions instantly so customers never wait too long.',
    points: ['Answer size, price, and stock', 'Stay active after working hours', 'Keep replies fast and consistent'],
  },
  {
    description: 'Bring interested buyers back with timely reminders and smart follow-ups.',
    points: ['Recover silent leads', 'Send reminders at the right time', 'Increase chances of conversion'],
  },
  {
    description: 'Keep your inbox cleaner by pushing spam and time-wasting chats aside.',
    points: ['Reduce inbox clutter', 'Prioritize serious conversations', 'Help your team stay focused'],
  },
]

export function FeaturesGridSection() {
  return (
    <section className="mx-auto max-w-[1200px] py-6">
      <SectionHeading eyebrow="Features" title="Everything you need" description="Four simple tools for cleaner WhatsApp sales." centered />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon
          const featureMeta = featureCardContent[index]

          return (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-[26px] border border-[#dfebe9] bg-white p-5 shadow-[0_16px_38px_rgba(15,23,42,0.06)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#eefbf8_0%,#f4f0ff_100%)] text-[#0f9f8f]">
                <FeatureIcon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-display text-[1.45rem] font-semibold tracking-[-0.05em] text-[#173247] sm:text-[1.55rem]">
                {feature.title}
              </h3>

              <p className="mt-2.5 text-[0.95rem] leading-7 text-[#4e6b79]">
                {featureMeta.description}
              </p>

              <div className="mt-5 space-y-3">
                {featureMeta.points.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0f9f8f]" />
                    <p className="text-[0.92rem] leading-6 text-[#305365]">{point}</p>
                  </div>
                ))}
              </div>
            </MotionDiv>
          )
        })}
      </div>
    </section>
  )
}
