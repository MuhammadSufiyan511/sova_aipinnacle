import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaMeta } from 'react-icons/fa6'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'

const MotionDiv = motion.div
const stepVideoUrls = [
  'https://www.youtube.com/embed/7a1AXiAmSB0?rel=0&modestbranding=1',
  'https://www.youtube.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1',
  'https://www.youtube.com/embed/Qt3zMBH-FNg?rel=0&modestbranding=1',
]

const defaultSteps = [
  {
    num: '01',
    title: 'Sign In With Meta',
    description: 'Log in with your Meta account and connect the WhatsApp business number you want to use.',
    gradientFrom: '#10B981',
    gradientTo: '#047857',
    shadowColor: 'rgba(16,185,129,0.24)'
  },
  {
    num: '02',
    title: 'Add Your Products',
    description: 'Upload your products and let SOVA handle the chats - share details and guide your customers automatically.',
    gradientFrom: '#F59E0B',
    gradientTo: '#D97706',
    shadowColor: 'rgba(245,158,11,0.24)'
  },
  {
    num: '03',
    title: 'You Are Live',
    description: 'Go live on WhatsApp with instant replies, smarter follow-ups, and better lead handling from day one.',
    gradientFrom: '#A78BFA',
    gradientTo: '#8B5CF6',
    shadowColor: 'rgba(167,139,250,0.24)'
  },
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
  const handleVideoLoad = (videoIndex) => {
    setLoadedVideos((current) => current.map((loaded, index) => (index === videoIndex ? true : loaded)))
  }

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] pb-10 pt-16">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-4 inline-flex rounded-full border border-[#CDEDE5] bg-[linear-gradient(135deg,#ECFDF5_0%,#F5F3FF_100%)] px-5 py-2 text-[0.74rem] font-bold tracking-[0.08em] text-[#10B981] shadow-[0_8px_24px_rgba(16,185,129,0.1)]">
            {t('sections.howEyebrow')}
          </p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.8rem]">
            {t('sections.howTitle').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-gradient-to-r from-[#10B981] to-[#F59E0B] bg-clip-text text-transparent">
              {t('sections.howTitle').split(' ').slice(-1)[0]}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[420px] text-[0.96rem] leading-[1.75] text-[#5a9e88]">
            {t('sections.howDescription')}
          </p>
        </MotionDiv>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          <div className="grid h-full gap-6">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
      className="group relative flex h-full min-h-[40px] flex-col overflow-hidden rounded-[28px] border border-[#E2EFEA] bg-white p-8 shadow-[0_8px_36px_rgba(30,41,59,0.04)] transition-all hover:border-[#10B981]/40 hover:shadow-[0_12px_48px_rgba(16,185,129,0.1)] hover:-translate-y-1"            >
              <div className="mb-5 overflow-hidden rounded-[22px] border border-[#DCEEE7] bg-[#F8FAFC] shadow-[0_10px_28px_rgba(18,105,213,0.08)]">
                <div className="relative aspect-video w-full lg:aspect-[16/10]">
                  {!loadedVideos[0] && (
                    <div className="absolute inset-0 z-10 overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#E8FBF5_0%,#EFF6FF_55%,#F5F3FF_100%)]">
                      <div className="absolute inset-0 animate-pulse bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.45)_50%,transparent_100%)]" />
                      <div className="absolute left-4 right-4 top-4 h-3 rounded-full bg-white/80" />
                      <div className="absolute left-4 top-10 h-24 w-[42%] rounded-[18px] bg-white/70" />
                      <div className="absolute right-4 top-12 h-4 w-[30%] rounded-full bg-white/80" />
                      <div className="absolute right-4 top-19 h-4 w-[40%] rounded-full bg-white/70" />
                      <div className="absolute bottom-4 left-4 right-4 h-10 rounded-[16px] bg-white/80" />
                    </div>
                  )}
                  <iframe
                    className={`h-full w-full transition-opacity duration-500 ${loadedVideos[0] ? 'opacity-100' : 'opacity-0'}`}
                    src={stepVideoUrls[0]}
                    title={`${localizedSteps[0].title} - ${t('common.watchDemo')}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    onLoad={() => handleVideoLoad(0)}
                  />
                </div>
              </div>
              <div
                className="absolute left-0 right-0 top-0 h-[3px] rounded-t-[28px]"
                style={{ background: `linear-gradient(90deg, ${localizedSteps[0].gradientFrom}, ${localizedSteps[0].gradientTo})` }}
              />

              <div className="mb-5 flex items-center gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[1.1rem] font-extrabold text-white"
                  style={{ background: `linear-gradient(135deg, ${localizedSteps[0].gradientFrom}, ${localizedSteps[0].gradientTo})`, boxShadow: `0 6px 18px ${localizedSteps[0].shadowColor}` }}
                >
                  {localizedSteps[0].num}
                </span>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display text-[1.25rem] font-bold tracking-[-0.02em] text-[#1E293B]">
                    {localizedSteps[0].title}
                  </h3>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1269D5_0%,#0A4FB3_100%)] text-white shadow-[0_8px_18px_rgba(18,105,213,0.2)]">
                    <FaMeta className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              <p className="mt-auto text-[0.9rem] leading-[1.75] text-[#1E293B]">{localizedSteps[0].description}</p>
            </MotionDiv>
          </div>

          {localizedSteps.slice(1).map((step, index) => (
            <MotionDiv
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.14 + index * 0.08 }}
                className="group relative flex h-full min-h-[40px] flex-col self-stretch overflow-hidden rounded-[28px] border border-[#E2EFEA] bg-white p-8 shadow-[0_8px_36px_rgba(30,41,59,0.04)] transition-all hover:border-[#10B981]/40 hover:shadow-[0_12px_48px_rgba(16,185,129,0.1)] hover:-translate-y-1"
            >
              <div
                className="absolute left-0 right-0 top-0 h-[3px] rounded-t-[28px]"
                style={{ background: `linear-gradient(90deg, ${step.gradientFrom}, ${step.gradientTo})` }}
              />

              <div className="mb-5 overflow-hidden rounded-[22px] border border-[#DCEEE7] bg-[#F8FAFC] shadow-[0_10px_28px_rgba(18,105,213,0.08)]">
                <div className="relative aspect-video w-full lg:aspect-[16/10]">
                  {!loadedVideos[index + 1] && (
                    <div className="absolute inset-0 z-10 overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#E8FBF5_0%,#EFF6FF_55%,#F5F3FF_100%)]">
                      <div className="absolute inset-0 animate-pulse bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.45)_50%,transparent_100%)]" />
                      <div className="absolute left-4 right-4 top-4 h-3 rounded-full bg-white/80" />
                      <div className="absolute left-4 top-10 h-24 w-[42%] rounded-[18px] bg-white/70" />
                      <div className="absolute right-4 top-12 h-4 w-[30%] rounded-full bg-white/80" />
                      <div className="absolute right-4 top-19 h-4 w-[40%] rounded-full bg-white/70" />
                      <div className="absolute bottom-4 left-4 right-4 h-10 rounded-[16px] bg-white/80" />
                    </div>
                  )}
                  <iframe
                    className={`h-full w-full transition-opacity duration-500 ${loadedVideos[index + 1] ? 'opacity-100' : 'opacity-0'}`}
                    src={stepVideoUrls[index + 1]}
                    title={`${step.title} - ${t('common.watchDemo')}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    onLoad={() => handleVideoLoad(index + 1)}
                  />
                </div>
              </div>

              <div className="mb-5 flex items-center gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[1.1rem] font-extrabold text-white"
                  style={{ background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`, boxShadow: `0 6px 18px ${step.shadowColor}` }}
                >
                  {step.num}
                </span>
                <h3 className="font-display text-[1.25rem] font-bold tracking-[-0.02em] text-[#1E293B]">
                  {step.title}
                </h3>
              </div>

              <p className="mt-auto text-[0.9rem] leading-[1.75] text-[#1E293B]">{step.description}</p>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-6 flex justify-center"
        >
          <div className="flex flex-col items-center">
            <Link
              to={ROUTES.auth}
              className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-7 py-3.5 text-[0.93rem] font-bold text-white shadow-[0_8px_28px_rgba(16,185,129,0.3)] transition hover:bg-[#0F8F72] hover:scale-[1.03]"
            >
              {t('common.getStartedFree')} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-[0.72rem] font-medium text-[#F1990A]">{t('common.noCardRequired')}</p>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
