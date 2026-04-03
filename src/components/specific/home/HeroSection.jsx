import { motion } from 'framer-motion'
import { Play, ArrowUpRight, ChevronDown } from 'lucide-react'
import { FaMeta } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { trustedBusinesses } from '../../../data'

const MotionDiv = motion.div
const MotionH1 = motion.h1
const businessLogoStyles = [
  'from-[#10B981] to-[#06B6D4]',
  'from-[#A78BFA] to-[#06B6D4]',
  'from-[#F59E0B] to-[#10B981]',
  'from-[#1E293B] to-[#10B981]',
  'from-[#FB7185] to-[#A78BFA]',
  'from-[#06B6D4] to-[#1E293B]',
]

function getBusinessMonogram(name) {
  const words = String(name || '')
    .split(' ')
    .filter(Boolean)

  if (words.length === 0) return 'SV'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()

  return `${words[0][0] || ''}${words[1][0] || ''}`.toUpperCase()
}

function HeroBusinessTrack({ items }) {
  return (
    <div className="flex shrink-0 items-center gap-4 pe-4">
      {items.map((business, index) => (
        <div
          key={`${business}-${index}`}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-[#DDEFE7] bg-white px-3.5 py-1.5 shadow-sm shadow-emerald-500/5"
        >
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br text-[0.58rem] font-extrabold text-white shadow-sm ${businessLogoStyles[index % businessLogoStyles.length]}`}
            aria-hidden="true"
          >
            {getBusinessMonogram(business)}
          </span>
          <span className="whitespace-nowrap text-[0.72rem] font-bold text-[#295565]">
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
    <section className="home-hero-section relative w-full overflow-hidden bg-white pb-16 pt-20 text-center sm:pb-20 sm:pt-24 lg:pt-30">
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
        {/* Mobile Glow behind CTAs */}
        <div className="absolute left-1/2 top-[55%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[80px] md:hidden" />
        
        {/* Subtle circles overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.25]">
          <div className="h-[400px] w-[400px] rounded-full border border-[#10B981]" />
          <div className="absolute h-[600px] w-[600px] rounded-full border border-[#F1990A]" />
          <div className="absolute h-[800px] w-[800px] rounded-full border border-[#1E293B]" />
        </div>
      </div>

      {/* Bottom badge */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-2 flex items-center justify-center sm:mt-5"
      >
        <div className="group flex items-center gap-2 rounded-[18px] px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 sm:gap-3 sm:py-2">
          {/* Icon */}
          <div className="flex items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#1269D5_0%,#0A4FB3_100%)] p-1.5 text-white shadow-[0_8px_18px_rgba(18,105,213,0.15)] sm:rounded-[12px] sm:p-2">
            <FaMeta className="h-5 w-5 sm:h-7 sm:w-7" />
          </div>

          {/* Text */}
          <span className="text-[1.1rem] font-bold tracking-tight text-[#1269D5] sm:text-[1.5rem]">
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
            className="mx-auto max-w-[860px] px-1 text-center font-display text-[2.3rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#1E293B] sm:px-4 sm:text-[2.6rem] md:text-[3rem] lg:text-[3.2rem]"
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
            <p className="mx-auto mt-5 max-w-[780px] px-2 text-center text-[0.98rem] leading-[1.65] text-[#1E293B]/80 sm:mt-7 sm:text-[1.1rem] lg:text-[1.2rem]">
              {t('hero.description')}
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="mt-8 flex flex-row items-center justify-center gap-2 sm:mt-12 sm:gap-4"
          >
            <div className="flex shrink-0 items-center">
              <Link
                to={ROUTES.auth}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#10B981] px-4 py-2.5 text-[0.78rem] font-extrabold text-white shadow-[0_12px_28px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.03] active:scale-[0.96] sm:px-8 sm:py-4 sm:text-[0.95rem]"
              >
                {t('common.startFreeTrial')} <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            </div>
            <button
              type="button"
              onClick={onWatchDemo}
              aria-label="Watch the SOVA product demo"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border-2 border-[#1E293B] bg-white px-4 py-2.5 text-[0.78rem] font-extrabold text-[#1E293B] transition-all hover:border-[#10B981] hover:bg-[#F8FAFC] hover:text-[#10B981] active:scale-[0.96] sm:px-8 sm:py-4 sm:text-[0.95rem]"
            >
              {t('common.watchDemo')} <Play className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
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

      {/* Bottom wash for smooth section transition */}
      <div className="hero-bottom-wash absolute bottom-0 left-0 right-0 h-[120px]" />
    </section>
  )
}
