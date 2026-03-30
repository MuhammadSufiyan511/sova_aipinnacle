import { motion } from 'framer-motion'
import { Play, ArrowUpRight, ChevronDown } from 'lucide-react'
import { FaMeta } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { trustedBusinesses } from '../../../data'

const MotionDiv = motion.div
const MotionH1 = motion.h1

function HeroBusinessTrack({ items }) {
  return (
    <div className="flex shrink-0 items-center gap-4 pe-4">
      {items.map((business, index) => (
        <div
          key={`${business}-${index}`}
          className="flex shrink-0 items-center gap-2 rounded-full border border-[#ECFDF5] bg-[#F8FAFC] px-4 py-1.5 shadow-sm"
        >
          <span className="h-1 w-1 rounded-full bg-[#10B981]" />
          <span className="whitespace-nowrap text-[0.72rem] font-bold text-[#10B981] opacity-60">
            {business}
          </span>
        </div>
      ))}
    </div>
  )
}

export function HeroSection({ onWatchDemo }) {
  const { t } = useTranslation()
  const businessItems = t('content.trustedBusinesses.items', { returnObjects: true }) || trustedBusinesses

  return (
    <section className="relative w-full overflow-hidden bg-white pt-30 pb-10 text-center">
      {/* Animated radial gradient background - centered */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.55, 0.75, 0.55],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/2 top-[-100px] h-[600px] w-[800px] -translate-x-1/2 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.16) 0%, rgba(167,139,250,0.1) 45%, transparent 75%)',
          }}
        />
        {/* Subtle circles overlay */}
     
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.25]">
          <div className="h-[400px] w-[400px] rounded-full border border-[#10B981]" />
          <div className="absolute h-[600px] w-[600px] rounded-full border border-[#F1990A]" />
          <div className="absolute h-[800px] w-[800px] rounded-full border border-[#1E293B]" />
          <div className="absolute h-[1000px] w-[1000px] rounded-full border border-[#10B981]" />
          <div className="absolute h-[1200px] w-[1200px] rounded-full border border-[#F1990A]" />
      </div>
      </div>
     {/* Bottom badge */}
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 flex items-center justify-center"
          >
            <div className="group flex items-center gap-3 rounded-[18px]  px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ">

              {/* Icon */}
              <div className="flex items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#1269D5_0%,#0A4FB3_100%)] p-2 text-white shadow-[0_10px_22px_rgba(18,105,213,0.18)]">
                <FaMeta className="h-7 w-7" />
              </div>

              {/* Text */}
              <span className="rounded-full py-1 text-[1.5rem] font-semibold tracking-wide text-[#1269D5]">
                {t('common.metaApproved')}
              </span>
            </div>
          </MotionDiv>
      <div className="relative z-10 mx-auto max-w-[900px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Main Hero Title - Responsive One-Liner */}
          <MotionH1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mx-auto max-w-[860px] px-4 text-center font-display text-[1.5rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#1E293B] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.2change secntenrem]"
          >
            {t('hero.titlePrefix')}{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#F1990A] bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>{' '}
            {t('hero.titleSuffix')}
          </MotionH1>

          {/* Subtext - Summarized to ~1.5 lines */}
          <MotionDiv
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="mt-7 mx-auto max-w-[780px] text-center text-[1.05rem] leading-[1.6] text-[#1E293B] sm:text-[1.2rem]">
              {t('hero.description')}
            </p>
          </MotionDiv>

          {/* CTAs */}
          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-start justify-center gap-4"
          >
            <div className="flex flex-col items-center">
              <Link
                to={ROUTES.auth}
                className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-8 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)] transition hover:scale-[1.03] active:scale-[0.98]"
              >
                {t('common.getStartedFree')} <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="mt-2 text-[0.72rem] font-medium text-[#F1990A]">{t('common.noCardRequired')}</p>
            </div>
            <button
              type="button"
              onClick={onWatchDemo}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#1E293B] bg-white px-8 py-3.5 text-[0.95rem] font-bold text-[#1E293B] transition hover:bg-[#F8FAFC] hover:text-[#10B981] hover:border-[#10B981] hover:scale-[1.02]"
            >
              {t('common.watchDemo')} <Play className="h-4 w-4 fill-current" />
            </button>
          </MotionDiv>

     

          {/* Business Ticker - Centered & Limited Width */}
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 mx-auto max-w-[650px] overflow-hidden"
          >
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#F1990A]">
              {t('hero.trustedLabel')}
            </p>
            <div
              className="group relative flex overflow-hidden"
              dir="ltr"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              }}
            >
              <div
                className="flex w-max items-center py-2"
                style={{ animation: 'ticker 30s linear infinite' }}
              >
                <HeroBusinessTrack items={businessItems} />
                <HeroBusinessTrack items={businessItems} />
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>

      {/* Blue wash at bottom of hero */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[100px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #F8FAFC)',
        }}
      />
    </section>
  )
}
