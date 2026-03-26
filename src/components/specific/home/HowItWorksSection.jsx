import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'

const MotionDiv = motion.div

const steps = [
  {
    num: '01',
    title: 'Connect WhatsApp',
    description: 'Link your Meta account and choose the business number you want Sova to manage.',
    accent: '#0061FF',
  },
  {
    num: '02',
    title: 'Sova Replies Fast',
    description: 'Sova reads the message, answers common questions, and spots buying intent right away.',
    accent: '#0080FF',
  },
  {
    num: '03',
    title: 'Close Real Buyers',
    description: 'Your team focuses on the chats that are ready to order or need human support.',
    accent: '#0099FF',
  },
]

export function HowItWorksSection() {
  const { t, i18n } = useTranslation()
  const isUrdu = i18n.resolvedLanguage?.startsWith('ur')
  const localizedSteps = isUrdu
    ? [
        {
          num: '01',
          title: 'WhatsApp کنیکٹ کریں',
          description: 'اپنا Meta اکاؤنٹ جوڑیں اور وہ بزنس نمبر منتخب کریں جسے Sova سنبھالے گا۔',
          accent: '#0061FF',
        },
        {
          num: '02',
          title: 'Sova فوراً جواب دے',
          description: 'Sova میسج پڑھتا ہے، عام سوالوں کے جواب دیتا ہے، اور خریداری کی نیت فوراً پہچان لیتا ہے۔',
          accent: '#0080FF',
        },
        {
          num: '03',
          title: 'اصل خریدار بند کریں',
          description: 'آپ کی ٹیم انہی چیٹس پر فوکس کرتی ہے جو آرڈر کے قریب ہوں یا انسانی مدد چاہتی ہوں۔',
          accent: '#0099FF',
        },
      ]
    : steps

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0061FF]">{t('sections.howEyebrow')}</p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1D1D1F] sm:text-[2.8rem]">
            {t('sections.howTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-[420px] text-[0.96rem] leading-[1.75] text-[#6E6E73]">
            {t('sections.howDescription')}
          </p>
        </MotionDiv>

        <div className="grid gap-6 lg:grid-cols-3">
          {localizedSteps.map((step, index) => (
            <MotionDiv
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[28px] border border-[#E4EAFF] bg-white p-8 shadow-[0_8px_36px_rgba(0,97,255,0.06)] transition-all hover:border-[#0061FF]/40 hover:shadow-[0_12px_48px_rgba(0,97,255,0.12)] hover:-translate-y-1"
            >
              <div
                className="absolute left-0 right-0 top-0 h-[3px] rounded-t-[28px]"
                style={{ background: `linear-gradient(90deg, ${step.accent}, #00C6FF)` }}
              />

              <div className="mb-5 flex items-center gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold text-white"
                  style={{ background: `linear-gradient(135deg, ${step.accent}, #00C6FF)`, boxShadow: '0 6px 18px rgba(0,97,255,0.28)' }}
                >
                  {step.num}
                </span>
                <h3 className="font-display text-[1.25rem] font-bold tracking-[-0.02em] text-[#1D1D1F]">
                  {step.title}
                </h3>
              </div>

              <p className="text-[0.9rem] leading-[1.75] text-[#6E6E73]">{step.description}</p>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex flex-col items-center">
            <Link
              to={ROUTES.auth}
              className="inline-flex items-center gap-2 rounded-full bg-[#0061FF] px-7 py-3.5 text-[0.93rem] font-bold text-white shadow-[0_8px_28px_rgba(0,97,255,0.38)] transition hover:bg-[#004FD4] hover:scale-[1.03]"
            >
              {t('common.getStartedFree')} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-[0.72rem] font-medium text-[#9AA4B2]">{t('common.noCardRequired')}</p>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
