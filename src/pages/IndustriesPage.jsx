import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { industries } from '../data'
import { FinalCta, SectionHeading } from '../components'

const MotionSection = motion.section

export function IndustriesPage() {
  const { t, i18n } = useTranslation()
  const [activeTab, setActiveTab] = useState('all')
  const localizedIndustries = i18n.resolvedLanguage?.startsWith('ur')
    ? {
        clothing: { label: 'کپڑے', title: 'سائز، رنگ، اور دستیاب اسٹاک کے جواب فوراً دیں۔', description: 'فیشن خریداروں کو جلدی جواب دیں تاکہ وہ انتظار کے بغیر آرڈر کر سکیں۔', useCase: 'سائز چارٹ، رنگ، COD، اور ڈلیوری معلومات کے لیے آٹو ریپلائیز۔' },
        toys: { label: 'کھلونے', title: 'بلک بائر اور ری سیلر دلچسپی جلدی پہچانیں۔', description: 'عام پوچھ گچھ اور سنجیدہ ہول سیل خریداروں میں فرق فوراً واضح کریں۔', useCase: 'بلک انکوائری فلٹرنگ، کیٹلاگ جوابات، اور ری سیلر لیڈ روٹنگ۔' },
        'dry-fruits': { label: 'ڈرائی فروٹس', title: 'قیمت، وزن، اور پیکنگ کے سوال خود سنبھالیں۔', description: 'مصروف سیزن میں ایک ہی معلومات بار بار دینے کے بجائے فوری جواب دیں۔', useCase: 'فی کلو قیمت، پیکنگ سائز، ڈلیوری زون، اور ہول سیل مدد۔' },
        electronics: { label: 'الیکٹرونکس', title: 'پروڈکٹ انکوائریز کو صاف اور تیز انداز میں سنبھالیں۔', description: 'اسٹاک، اسپیکس، اور قیمت کے سوال چلتے رہیں جبکہ ٹیم تیار خریداروں پر توجہ دے۔', useCase: 'پروڈکٹ معلومات، فوری لیڈ ٹیگنگ، اور ہائی انٹینٹ چیٹس پر فالو اپ۔' },
      }
    : null
  const enrichedIndustries = industries.map((industry) => ({ ...industry, ...(localizedIndustries?.[industry.id] || {}) }))
  const tabs = [{ key: 'all', label: t('common.all') }, ...enrichedIndustries.map((industry) => ({ key: industry.id, label: industry.label }))]
  const filteredIndustries =
    activeTab === 'all' ? enrichedIndustries : enrichedIndustries.filter((industry) => industry.id === activeTab)

  return (
    <div className="mx-auto max-w-[1160px] pb-10 pt-30 px-5">
      <SectionHeading
        eyebrow={t('sections.industriesPageEyebrow')}
        title={t('sections.industriesPageTitle')}
        description={t('sections.industriesPageDescription')}
        centered
      />

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
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
        {filteredIndustries.map((industry, index) => {
          const reverse = index % 2 === 1

          return (
            <MotionSection
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`grid items-center gap-8 rounded-[32px] border border-[#F0F0F0] bg-white p-8 shadow-[0_12px_44px_rgba(0,0,0,0.03)] lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="overflow-hidden rounded-[24px] bg-[#F8FAFF]">
                <img src={industry.image} alt={industry.label} className="h-72 w-full object-cover sm:h-80" />
              </div>
              <div className="rounded-[24px] bg-white p-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0061FF]">{industry.label}</p>
                <h2 className="mt-4 font-display text-[2.4rem] font-bold tracking-[-0.04em] text-[#1D1D1F]">
                  {industry.title}
                </h2>
                <p className="mt-4 text-[1.1rem] leading-[1.7] text-[#6E6E73]">{industry.description}</p>
                <div className="mt-8 rounded-[24px] border border-[#F0F0F0] bg-[#F8FAFF] p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0061FF]">{t('common.useCase')}</p>
                  <p className="mt-3 text-[1rem] leading-[1.6] text-[#6E6E73]">{industry.useCase}</p>
                </div>
              </div>
            </MotionSection>
          )
        })}
      </div>

      <div className="mt-14">
        <FinalCta />
      </div>
    </div>
  )
}
