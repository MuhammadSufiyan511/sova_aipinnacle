import { motion } from 'framer-motion'
import { FaMeta } from 'react-icons/fa6'

const MotionDiv = motion.div

export function HowItWorksCard({ isMetaStep = false, isLoaded, onLoad, step, title, videoUrl }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: isMetaStep ? 0.08 : 0.2 }}
      className="how-it-works-card group relative flex h-full min-h-[40px] flex-col self-stretch overflow-hidden rounded-[28px] border border-[#E2EFEA] bg-white p-8 shadow-[0_8px_36px_rgba(30,41,59,0.04)] transition-all hover:-translate-y-1 hover:border-[#10B981]/40 hover:shadow-[0_12px_48px_rgba(16,185,129,0.1)]"
    >
      <div
        className="absolute left-0 right-0 top-0 h-[3px] rounded-t-[28px]"
        style={{ background: `linear-gradient(90deg, ${step.gradientFrom}, ${step.gradientTo})` }}
      />

      <div className="mb-5 overflow-hidden rounded-[22px] border border-[#DCEEE7] bg-[#F8FAFC] shadow-[0_10px_28px_rgba(18,105,213,0.08)]">
        <div className="relative aspect-video w-full lg:aspect-[16/10]">
          {!isLoaded && (
            <div className="video-placeholder absolute inset-0 z-10 overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#E8FBF5_0%,#EFF6FF_55%,#F5F3FF_100%)]">
              <div className="absolute inset-0 animate-pulse bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.45)_50%,transparent_100%)]" />
              <div className="absolute left-4 right-4 top-4 h-3 rounded-full bg-white/40" />
              <div className="absolute left-4 top-10 h-24 w-[42%] rounded-[18px] bg-white/30" />
              <div className="absolute right-4 top-12 h-4 w-[30%] rounded-full bg-white/40" />
              <div className="absolute right-4 top-19 h-4 w-[40%] rounded-full bg-white/30" />
              <div className="absolute bottom-4 left-4 right-4 h-10 rounded-[16px] bg-white/40" />
            </div>
          )}
          <iframe
            className={`h-full w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            src={videoUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={onLoad}
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
        <div className="flex items-center gap-2.5">
          <h3 className="font-display text-[1.25rem] font-bold tracking-[-0.02em] text-[#1E293B]">{step.title}</h3>
          {isMetaStep ? (
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1269D5_0%,#0A4FB3_100%)] text-white shadow-[0_8px_18px_rgba(18,105,213,0.2)]">
              <FaMeta className="h-3.5 w-3.5" />
            </span>
          ) : null}
        </div>
      </div>

      <p className="mt-auto text-[0.9rem] leading-[1.75] text-[#1E293B]">{step.description}</p>
    </MotionDiv>
  )
}
