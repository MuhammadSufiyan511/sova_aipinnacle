import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { faqs } from '../../../data'

const MotionDiv = motion.div

export function FaqSection() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)
  const localizedFaqs = t('content.faq.items', { returnObjects: true }) || faqs

  return (
    <section className="home-faq-section w-full bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[800px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#10B981]">{t('sections.faqEyebrow')}</p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.8rem]">
            {t('sections.faqTitle')}
          </h2>
        </MotionDiv>

        <div className="space-y-4">
          {localizedFaqs.slice(0, 5).map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-[24px] border transition-all duration-300 ${
                  isOpen ? 'border-[#10B981] bg-[#ECFDF5]' : 'border-[#DCEEE7] bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`text-[1.05rem] font-bold ${isOpen ? 'text-[#10B981]' : 'text-[#1E293B]'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full ${isOpen ? 'bg-[#10B981] text-white' : 'bg-[#ECFDF5] text-[#10B981]'}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <MotionDiv
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-[0.95rem] leading-[1.7] text-[#1E293B]">
                        {faq.answer}
                      </div>
                    </MotionDiv>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
