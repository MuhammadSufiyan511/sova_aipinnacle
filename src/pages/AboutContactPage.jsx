import { CircleHelp, MessagesSquare, PhoneCall } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { contactPhone, faqs } from '../data'
import { SectionHeading, WhatsAppButton } from '../components'

export function AboutContactPage() {
  const { t, i18n } = useTranslation()
  const isUrdu = i18n.resolvedLanguage?.startsWith('ur')
  const localizedFaqs = isUrdu
    ? [
        { question: 'کیا Sova صرف WhatsApp کے لیے ہے؟', answer: 'فی الحال Sova کی توجہ WhatsApp پر ہے، لیکن مستقبل میں یہ مزید چینلز کو بھی سپورٹ کر سکتا ہے۔' },
        { question: 'کیا سیٹ اپ کے لیے ٹیکنیکل مہارت چاہیے؟', answer: 'نہیں۔ سیٹ اپ کاروباری مالکان اور سیلز ٹیموں کے لیے آسان بنایا گیا ہے۔' },
        { question: 'کیا Sova میرے برانڈ کے انداز میں جواب دے سکتا ہے؟', answer: 'جی ہاں، آپ سادہ، رسمی، دوستانہ یا سیلز فوکسڈ انداز منتخب کر سکتے ہیں۔' },
        { question: 'کیا ٹرائل کے لیے کریڈٹ کارڈ ضروری ہے؟', answer: 'نہیں، ہر مرکزی CTA یہی وعدہ کرتا ہے کہ کارڈ درکار نہیں۔' },
      ]
    : faqs

  return (
    <section className="mx-auto max-w-[1160px] py-20 px-5">
      <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t('sections.aboutEyebrow')}
            title={t('sections.aboutTitle')}
            description={t('sections.aboutDescription')}
          />
          <div className="rounded-[32px] border border-[#F0F0F0] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0061FF]">{t('common.ourMission')}</p>
            <p className="mt-6 text-[1.1rem] leading-[1.8] text-[#6E6E73]">
              {isUrdu
                ? 'ہم ٹیموں کو تیز جواب دینے، سنجیدہ خریدار جلد پہچاننے، اور سیلز گفتگو کو بغیر اضافی دستی کام کے آگے بڑھانے میں مدد دیتے ہیں۔'
                : 'We help teams reply faster, find serious buyers sooner, and keep sales conversations moving without adding more manual work.'}
            </p>
            <p className="mt-6 text-[1.1rem] leading-[1.8] text-[#6E6E73]">
              {isUrdu
                ? 'بہت سے بڑھتے ہوئے کاروبار بار بار سوالات، اسپام، اور سست فالو اپ میں وقت ضائع کرتے ہیں۔ Sova ہر پیغام کو بہتر کاروباری موقع میں بدلنے کے لیے چیزوں کو سادہ اور مؤثر رکھتا ہے۔'
                : 'Many growing businesses lose time to repeated questions, spam, and slow follow-ups. Sova keeps things calm, simple, and effective so every message has a better chance to become revenue.'}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[32px] border border-[#F0F0F0] bg-gradient-to-br from-[#F8FAFF] via-white to-[#F0F7FF] p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0061FF]">{t('common.contact')}</p>
            <div className="mt-8 space-y-4 text-[#111827]">
              <div className="flex items-center gap-4 rounded-[22px] bg-white border border-[#F0F0F0] px-6 py-5 shadow-sm font-bold">
                <PhoneCall className="h-6 w-6 text-[#0061FF]" />
                {contactPhone}
              </div>
              <div className="flex items-center gap-4 rounded-[22px] bg-white border border-[#F0F0F0] px-6 py-5 shadow-sm font-bold">
                <MessagesSquare className="h-6 w-6 text-[#3B82F6]" />
                hello@sovaassist.com
              </div>
            </div>
            <div className="mt-8">
              <WhatsAppButton />
            </div>
          </div>

          <div className="rounded-[32px] border border-[#F0F0F0] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0061FF]">{t('common.faq')}</p>
            <div className="mt-8 space-y-5">
              {localizedFaqs.map((item) => (
                <div key={item.question} className="rounded-[24px] border border-black/5 bg-[#F8FAFF] p-6">
                  <div className="flex items-start gap-4">
                    <CircleHelp className="mt-1 h-6 w-6 shrink-0 text-[#0061FF]" />
                    <div>
                      <h3 className="font-bold text-[#111827] text-[1.05rem] leading-tight">{item.question}</h3>
                      <p className="mt-3 text-[1rem] leading-[1.6] text-[#6E6E73]">{item.answer}</p>
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
