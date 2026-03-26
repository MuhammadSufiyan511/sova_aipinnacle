import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { faqs } from '../../../data'

const MotionDiv = motion.div

export function FaqSection() {
  const { t, i18n } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)
  const localizedFaqs = i18n.resolvedLanguage?.startsWith('ur')
    ? [
        { question: 'کیا Sova صرف WhatsApp کے لیے ہے؟', answer: 'فی الحال Sova کی توجہ WhatsApp پر ہے، لیکن مستقبل میں یہ مزید چینلز کو بھی سپورٹ کر سکتا ہے۔' },
        { question: 'کیا سیٹ اپ کے لیے ٹیکنیکل مہارت چاہیے؟', answer: 'نہیں۔ سیٹ اپ کاروباری مالکان اور سیلز ٹیموں کے لیے آسان بنایا گیا ہے۔' },
        { question: 'کیا Sova میرے برانڈ کے انداز میں جواب دے سکتا ہے؟', answer: 'جی ہاں، آپ سادہ، رسمی، دوستانہ یا سیلز فوکسڈ انداز منتخب کر سکتے ہیں۔' },
        { question: 'کیا ٹرائل کے لیے کریڈٹ کارڈ ضروری ہے؟', answer: 'نہیں، ہر مرکزی CTA یہی وعدہ کرتا ہے کہ کارڈ درکار نہیں۔' },
      ]
    : faqs

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[800px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0061FF]">{t('sections.faqEyebrow')}</p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1D1D1F] sm:text-[2.8rem]">
            {t('sections.faqTitle')}
          </h2>
        </MotionDiv>

        <div className="space-y-4">
          {localizedFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-[24px] border transition-all duration-300 ${
                  isOpen ? 'border-[#0061FF] bg-[#EEF3FF]' : 'border-[#E4EAFF] bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`text-[1.05rem] font-bold ${isOpen ? 'text-[#0061FF]' : 'text-[#1D1D1F]'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full ${isOpen ? 'bg-[#0061FF] text-white' : 'bg-[#EEF3FF] text-[#0061FF]'}`}>
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
                      <div className="px-6 pb-6 text-[0.95rem] leading-[1.7] text-[#6E6E73]">
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
