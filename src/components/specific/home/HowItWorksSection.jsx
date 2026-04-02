import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'
import { HowItWorksCard } from './how-it-works/HowItWorksCard'
import { stepVideoUrls } from './how-it-works/videoUrls'

const MotionDiv = motion.div

const defaultSteps = [
  { num: '01', title: 'Sign In With Meta', description: 'Log in with your Meta account and connect the WhatsApp business number you want to use.', gradientFrom: '#10B981', gradientTo: '#047857', shadowColor: 'rgba(16,185,129,0.24)' },
  { num: '02', title: 'Add Your Products', description: 'Upload your products and let SOVA handle the chats - share details and guide your customers automatically.', gradientFrom: '#F59E0B', gradientTo: '#D97706', shadowColor: 'rgba(245,158,11,0.24)' },
  { num: '03', title: 'You Are Live', description: 'Go live on WhatsApp with instant replies, smarter follow-ups, and better lead handling from day one.', gradientFrom: '#A78BFA', gradientTo: '#8B5CF6', shadowColor: 'rgba(167,139,250,0.24)' },
]

export function HowItWorksSection() {
  const { t } = useTranslation()
  const [loadedVideos, setLoadedVideos] = useState([false, false, false])
  const localizedSteps = (t('content.howItWorks.steps', { returnObjects: true }) || defaultSteps).map((step, index) => ({
    ...step,
    gradientFrom: defaultSteps[index]?.gradientFrom || '#10B981',
    gradientTo: defaultSteps[index]?.gradientTo || '#047857',
    shadowColor: defaultSteps[index]?.shadowColor || 'rgba(16,185,129,0.24)',
  }))

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] pb-10 pt-16">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="mb-10 text-center">
          <p className="mb-4 inline-flex rounded-full border border-[#CDEDE5] bg-[linear-gradient(135deg,#ECFDF5_0%,#F5F3FF_100%)] px-5 py-2 text-[0.74rem] font-bold tracking-[0.08em] text-[#10B981] shadow-[0_8px_24px_rgba(16,185,129,0.1)]">
            {t('sections.howEyebrow')}
          </p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.8rem]">
            {t('sections.howTitle').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-gradient-to-r from-[#10B981] to-[#F59E0B] bg-clip-text text-transparent">{t('sections.howTitle').split(' ').slice(-1)[0]}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[420px] text-[0.96rem] leading-[1.75] text-[#5a9e88]">{t('sections.howDescription')}</p>
        </MotionDiv>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {localizedSteps.map((step, index) => (
            <HowItWorksCard
              key={step.title}
              isLoaded={loadedVideos[index]}
              isMetaStep={index === 0}
              onLoad={() => setLoadedVideos((current) => current.map((loaded, itemIndex) => (itemIndex === index ? true : loaded)))}
              step={step}
              title={`${step.title} - ${t('common.watchDemo')}`}
              videoUrl={stepVideoUrls[index]}
            />
          ))}
        </div>

        <MotionDiv initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.3 }} className="mt-6 flex justify-center">
          <div className="flex flex-col items-center">
            <Link to={ROUTES.auth} className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-7 py-3.5 text-[0.93rem] font-bold text-white shadow-[0_8px_28px_rgba(16,185,129,0.3)] transition hover:scale-[1.03] hover:bg-[#0F8F72]">
              {t('common.getStartedFree')} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-[0.72rem] font-medium text-[#F1990A]">{t('common.noCardRequired')}</p>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
