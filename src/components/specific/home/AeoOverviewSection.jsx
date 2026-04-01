import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const MotionDiv = motion.div

const defaultCards = [
  {
    question: 'What is SOVA?',
    answer:
      'SOVA is a WhatsApp automation tool for businesses. It replies to customers, filters buyer intent, follows up with leads, and helps teams handle sales chats faster.',
  },
  {
    question: 'Who is SOVA for?',
    answer:
      'SOVA is for small, medium, and growing businesses that get many WhatsApp messages every day, especially sellers, retailers, wholesalers, and service teams.',
  },
  {
    question: 'What does SOVA automate?',
    answer:
      'SOVA automates first replies, product questions, buyer qualification, lead follow-ups, and spam filtering so teams can focus on serious customers.',
  },
  {
    question: 'Why do businesses use SOVA?',
    answer:
      'Businesses use SOVA to save reply time, stop missing buyers, keep WhatsApp organized, and turn more conversations into real orders.',
  },
]

export function AeoOverviewSection() {
  const { t } = useTranslation()
  const cards = t('content.aeoOverview.cards', { returnObjects: true }) || defaultCards

  return (
    <section className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#10B981]">
            {t('content.aeoOverview.eyebrow')}
          </p>
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.5rem]">
            {t('content.aeoOverview.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-[720px] text-[0.98rem] leading-[1.75] text-[#48617A]">
            {t('content.aeoOverview.description')}
          </p>
        </MotionDiv>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cards.map((item, index) => (
            <MotionDiv
              key={item.question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[28px] border border-[#D1FAE5] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FFFC_100%)] p-6 shadow-[0_10px_28px_rgba(16,185,129,0.08)]"
            >
              {/* <p className="text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">SOVA</p> */}
              <h3 className="mt-3 text-[1.1rem] font-bold text-[#10B981]">{item.question}</h3>
              <p className="mt-3 text-[0.96rem] leading-[1.8] text-[#1E293B]">{item.answer}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
