import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { caseStudies } from '../data'
import { FinalCta } from '../components'

export function CaseStudiesPage() {
  const { t, i18n } = useTranslation()
  const [activeTab, setActiveTab] = useState('all')
  const localizedStudies = i18n.resolvedLanguage?.startsWith('ur')
    ? {
        'abaya-store': { category: 'عبایا', businessType: 'فیشن ریٹیلر', company: 'نور عبایا ہاؤس', headline: 'تیز جوابوں نے شام کے WhatsApp رش کو آرڈرز میں بدل دیا۔', summary: 'ایک بڑھتے ہوئے عبایا اسٹور کو مصروف چیٹس میں خریدار ضائع ہونے سے بچنا تھا۔', problem: 'ٹیم بار بار سائز اور اسٹاک کے سوالوں میں وقت ضائع کر رہی تھی۔', solution: 'Sova نے ابتدائی جواب دیے، ہاٹ بائر ٹیگ کیے، اور فوری چیٹس آگے بڑھائیں۔', result: 'ہر ہفتے 12 گھنٹے بچے اور تیار خریدار 31% بڑھے۔', metrics: ['12 گھنٹے ہفتہ وار بچت', '31% زیادہ تیار خریدار'] },
        'toy-wholesale': { category: 'کھلونے', businessType: 'ٹوی ہول سیلر', company: 'رفیق ٹویز ہول سیل', headline: 'شور والی ان باکس میں بلک خریدار فوراً سامنے آنے لگے۔', summary: 'اس ہول سیل ٹیم کو ری سیلر ڈیمانڈ کے لیے تیز روٹنگ چاہیے تھی۔', problem: 'ری سیلر لیڈز عام پوچھ گچھ اور اسپام کے ساتھ مل رہی تھیں۔', solution: 'Sova نے بلک انٹینٹ فلٹر کی، کارٹن بائرز ہائی لائٹ کیے، اور فالو اپ خود بھیجے۔', result: 'لیڈ کوالٹی 42% بہتر ہوئی اور جواب کی رفتار دوگنی ہو گئی۔', metrics: ['42% بہتر لیڈ کوالٹی', '2x تیز جواب'] },
        'electronics-shop': { category: 'الیکٹرونکس', businessType: 'الیکٹرونکس سیلر', company: 'الیکٹروہب ٹریڈرز', headline: 'اہم پروڈکٹ انکوائریز عام سوالوں میں دبنا بند ہو گئیں۔', summary: 'مصروف اسٹور کو بہت زیادہ WhatsApp انکوائریز میں واضح سگنل چاہیے تھا۔', problem: 'فوری سیلز چیٹس باآسانی رہ جاتی تھیں۔', solution: 'Sova نے سوال منظم کیے، عام جوابات دیے، اور ہائی انٹینٹ چیٹس پہلے دکھائیں۔', result: 'ہر ہفتے 9 گھنٹے بچے اور مس ہونے والی لیڈز 28% کم ہوئیں۔', metrics: ['9 گھنٹے بچت', '28% کم مسڈ لیڈز'] },
        'dry-fruit-bulk': { category: 'ڈرائی فروٹس', businessType: 'ڈرائی فروٹس ہول سیلر', company: 'سلطان ڈرائی فروٹس', headline: 'سیزنل ڈیمانڈ بغیر اضافی اسٹاف کے سنبھلنے لگی۔', summary: 'ایک ہول سیلر کو قیمت اور مقدار کے بار بار سوالوں کے لیے مدد چاہیے تھی۔', problem: 'سیلز ٹیم ریٹس، وزن، اور ڈلیوری سوالوں میں الجھی ہوئی تھی۔', solution: 'Sova نے عام سوال سنبھالے اور ہائی انٹینٹ بلک بائرز الگ دکھائے۔', result: 'ہر ہفتے 11 گھنٹے بچے اور ہول سیل کنورژن 26% بہتر ہوا۔', metrics: ['11 گھنٹے بچت', '26% زیادہ کنورژن'] },
        'beauty-retail': { category: 'بیوٹی', businessType: 'بیوٹی ریٹیلر', company: 'گلو کارٹ اسٹوڈیو', headline: 'پروڈکٹ ریکمینڈیشن چیٹس کم دستی کام کے ساتھ کنورٹ ہونے لگیں۔', summary: 'اس بیوٹی سیلر کو شیڈز، اسٹاک، اور ڈلیوری سوالوں کے لیے تیز جواب چاہیے تھے۔', problem: 'سیل ڈیز میں سست جوابوں کی وجہ سے خریدار نکل رہے تھے۔', solution: 'Sova نے پروڈکٹ معلومات دی، لیڈز کو نَج کیا، اور ہاٹ چیٹس کو چیک آؤٹ تک پہنچایا۔', result: 'جواب کا وقت 53% کم ہوا اور ریپیٹ لیڈز 22% بڑھیں۔', metrics: ['53% تیز جواب', '22% زیادہ ریپیٹ لیڈز'] },
        'home-appliances': { category: 'ہوم اپلائنسز', businessType: 'ہوم اپلائنسز ڈیلر', company: 'اربن ہوم ڈیلز', headline: 'قیمتی خریدار اب روٹین سپورٹ چیٹس میں نہیں کھوتے۔', summary: 'اس ٹیم کو انکوائری اسپائکس کے دوران واضح لیڈ ترجیح درکار تھی۔', problem: 'وارنٹی اور ڈلیوری سوال سیلز قطار کو سست کر رہے تھے۔', solution: 'Sova نے ابتدائی سپورٹ سنبھالی، قیمت پوچھنے والے خریدار ٹیگ کیے، اور یاد دہانی خود بھیجی۔', result: 'مس ہونے والی سیلز لیڈز 33% کم ہوئیں اور ہر ہفتے 8 گھنٹے بچے۔', metrics: ['33% کم مسڈ لیڈز', '8 گھنٹے بچت'] },
      }
    : null
  const enrichedStudies = caseStudies.map((study) => ({ ...study, ...(localizedStudies?.[study.slug] || {}) }))
  const uniqueTabs = [{ key: 'all', label: t('common.all') }, ...[...new Set(enrichedStudies.map((study) => study.category))].map((category) => ({ key: category, label: category }))]
  const filteredStudies =
    activeTab === 'all' ? enrichedStudies : enrichedStudies.filter((study) => study.category === activeTab)

  return (
    <section className="mx-auto max-w-[1160px] pt-30 pb-10 px-5">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0061FF]">{t('sections.caseEyebrow')}</p>
        <h1 className="mt-5 font-display text-[2.8rem] font-extrabold tracking-[-0.04em] text-[#111827] sm:text-5xl">
          {t('sections.caseTitle')}
        </h1>
        <p className="mt-4 text-[1.1rem] leading-[1.7] text-[#6E6E73] sm:text-lg">
          {t('sections.caseDescription')}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {uniqueTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              activeTab === tab.key
                ? 'bg-[#0061FF] text-white shadow-[0_8px_20px_rgba(0,97,255,0.2)]'
                : 'bg-[#F8FAFF] text-[#0061FF] hover:bg-[#EEF3FF]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-16 space-y-12">
        {filteredStudies.map((study) => (
          <article
            key={study.slug}
            className="rounded-[36px] border border-[#F0F0F0] bg-white p-5 shadow-[0_12px_44px_rgba(0,0,0,0.03)] sm:p-8"
          >
            <div>
              <div className="rounded-[28px] border border-[#F0F0F0] bg-[#F8FAFF] p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0061FF]">{study.businessType}</p>
                <h2 className="mt-4 font-display text-[2.4rem] font-bold tracking-[-0.04em] text-[#111827] sm:text-[2.6rem]">
                  {study.company}
                </h2>
                <p className="mt-3 text-[1.2rem] font-medium leading-[1.6] text-[#0061FF]">{study.headline}</p>
                <p className="mt-5 text-[1rem] leading-[1.7] text-[#6E6E73]">{study.summary}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full bg-white px-5 py-2.5 text-[0.8rem] font-bold text-[#0061FF] shadow-sm border border-black/5"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.46fr_0.54fr]">
              <div className="overflow-hidden rounded-[28px]">
                <img src={study.image} alt={study.company} className="h-72 w-full object-cover sm:h-80" />
              </div>

              <div className="grid gap-5">
                <div className="rounded-[24px] border border-[#F0F0F0] bg-white p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0061FF]">{t('common.problem')}</p>
                  <p className="mt-3 text-[1rem] leading-[1.7] text-[#6E6E73]">{study.problem}</p>
                </div>

                <div className="rounded-[24px] border border-[#F0F0F0] bg-white p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0061FF]">{t('common.solution')}</p>
                  <p className="mt-3 text-[1rem] leading-[1.7] text-[#6E6E73]">{study.solution}</p>
                </div>

                <div className="rounded-[24px] border border-[#F0F0F0] bg-gradient-to-br from-[#F8FAFF] to-[#F0F7FF] p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0061FF]">{t('common.results')}</p>
                  <p className="mt-3 text-[1rem] leading-[1.7] text-[#0061FF] font-medium">{study.result}</p>
                </div>
              </div>
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
