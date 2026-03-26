import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { heroVideoUrl } from '../../../data'
import { CTAButton, FeatureBadge } from '../../ui'
import { ROUTES } from '../../../utils/routes'

const MotionDiv = motion.div

export function HeroSection({ onWatchDemo }) {
  return (
    <section className="relative mx-auto grid min-h-[66vh] max-w-[1160px] items-center gap-6 overflow-hidden py-6 lg:grid-cols-[0.98fr_0.92fr] lg:py-8">
      <div className="mx-auto max-w-[520px] space-y-4 lg:mx-0 lg:justify-self-end">
        <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="space-y-4">
          <div className="space-y-3">
            <h1 className="max-w-lg font-display text-[1.5rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#173247] sm:text-[2.6rem] lg:text-[3.1rem]">
              Turn Every <span className="bg-[linear-gradient(135deg,#06b6d4,#10b981)] bg-clip-text text-transparent">WhatsApp Chat</span> Into a{' '}
              <span className="bg-[linear-gradient(135deg,#f59e0b,#fb7185)] bg-clip-text text-transparent">Sale</span>.
            </h1>
            <p className="max-w-md text-sm leading-7 text-[#4e6b79] sm:text-[15px]">
              Meet Sova, your <span className="font-semibold text-teal-600">24/7 virtual assistant</span>. It answers questions, finds real buyers, and takes orders for you automatically.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Too many messages?', 'No serious buyers?', 'Wasting time replying?'].map((item) => <FeatureBadge key={item}>{item}</FeatureBadge>)}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <CTAButton to={ROUTES.auth} label="Start Free Trial" subtext="No card required" full />
            <button type="button" onClick={onWatchDemo} className="inline-flex h-11 items-center justify-center gap-3 rounded-full border border-[#b7dce2] bg-white px-5 text-sm font-semibold text-[#214257] shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition hover:border-[#9fcdd6] hover:bg-[#f4fbfb]">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </MotionDiv>
      </div>

      <MotionDiv initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }} className="w-full max-w-[500px] justify-self-start">
        <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="aspect-video overflow-hidden rounded-[26px] bg-[#10283a]">
            <iframe className="h-full w-full" src={heroVideoUrl} title="Sova business automation demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}
