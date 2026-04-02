import { motion } from 'framer-motion'

const MotionDiv = motion.div

const glowMap = {
  emerald: 'bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18)_0%,var(--glow-fade)_72%)]',
  white: 'bg-[radial-gradient(circle_at_center,var(--glow-fade-alt)_0%,var(--glow-fade)_72%)]',
  gold: 'bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.16)_0%,var(--glow-fade)_72%)]',
  pink: 'bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.18)_0%,var(--glow-fade)_72%)]',
  purple: 'bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.16)_0%,var(--glow-fade)_70%)]',
}

export function AnimatedFeatureImage({ animate, className, glow = 'emerald', hover, imageClassName, src, transition, alt }) {
  return (
    <MotionDiv animate={animate} transition={transition} whileHover={hover} className={className}>
      <div className={`pointer-events-none absolute -inset-2 rounded-[24px] blur-md ${glowMap[glow] || glowMap.emerald}`} />
      <img src={src} alt={alt} loading="lazy" decoding="async" className={imageClassName} />
    </MotionDiv>
  )
}
