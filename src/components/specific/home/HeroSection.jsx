import { motion } from 'framer-motion'
import { Play, ArrowUpRight, ChevronDown } from 'lucide-react'
import { FaMeta } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { trustedBusinesses } from '../../../data'

const MotionDiv = motion.div
const MotionH1 = motion.h1

export function HeroSection({ onWatchDemo }) {
  const { t } = useTranslation()

  return (
    <section className="relative w-full overflow-hidden bg-white pt-30 pb-16 text-center">
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
            background: 'radial-gradient(ellipse, rgba(0, 98, 255, 0.2) 0%, rgba(161,196,255,0.08) 45%, transparent 75%)',
          }}
        />
        {/* Subtle circles overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.09]">
          <div className="h-[400px] w-[400px] rounded-full border border-[#0061FF]" />
          <div className="absolute h-[600px] w-[600px] rounded-full border border-[#0061FF]" />
          <div className="absolute h-[800px] w-[800px] rounded-full border border-[#0061FF]" />
        </div>
      </div>

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
            className="font-display text-[1.8rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[clamp(2rem,4.2vw,4.2rem)] md:whitespace-nowrap px-4"
          >
            {t('hero.titlePrefix')} <span style={{ color: '#0061FF' }}>{t('hero.titleHighlight')}</span>{' '}
            {t('hero.titleSuffix')}
          </MotionH1>

          {/* Subtext - Summarized to ~1.5 lines */}
          <MotionDiv
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="mt-7 mx-auto max-w-[780px] text-[1.05rem] leading-[1.6] text-[#6E6E73] sm:text-[1.2rem]">
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
                className="inline-flex items-center gap-2 rounded-full bg-[#0061FF] px-8 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_8px_24px_rgba(0,97,255,0.3)] transition hover:bg-[#004FD4] hover:scale-[1.03] active:scale-[0.98]"
              >
                {t('common.getStartedFree')} <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="mt-2 text-[0.72rem] font-medium text-[#9AA4B2]">{t('common.noCardRequired')}</p>
            </div>
            <button
              type="button"
              onClick={onWatchDemo}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#0061FF] bg-white px-8 py-3.5 text-[0.95rem] font-bold text-[#0061FF] transition hover:bg-[#EEF3FF] hover:scale-[1.02]"
            >
              {t('common.watchDemo')} <Play className="h-4 w-4 fill-current" />
            </button>
          </MotionDiv>

          {/* Bottom badge */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-2"
          >
            <FaMeta className="h-4 w-4 text-[#0061FF]" />
            <span className="text-[0.75rem] font-bold text-[#1D1D1F]">{t('common.metaApproved')}</span>
          </MotionDiv>

          {/* Business Ticker - Centered & Limited Width */}
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 mx-auto max-w-[650px] overflow-hidden"
          >
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#9AA4B2]">
              {t('hero.trustedLabel')}
            </p>
            <div
              className="group relative flex overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              }}
            >
              <div
                className="flex w-max shrink-0 items-center gap-4 py-2"
                style={{ animation: 'ticker 30s linear infinite' }}
              >
                {[...trustedBusinesses, ...trustedBusinesses, ...trustedBusinesses].map((business, index) => (
                  <div
                    key={`${business}-${index}`}
                    className="flex shrink-0 items-center gap-2 rounded-full border border-[#EEF3FF] bg-[#F8FAFF] px-4 py-1.5 shadow-sm"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#0061FF]" />
                    <span className="whitespace-nowrap text-[0.72rem] font-bold text-[#1D1D1F] opacity-60">
                      {business}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>

      {/* Blue wash at bottom of hero */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[100px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #EEF5FF)',
        }}
      />
    </section>
  )
}
