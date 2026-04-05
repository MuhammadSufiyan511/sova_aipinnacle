import { motion } from 'framer-motion'

export function OnboardingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden onboarding-ambient-bg">
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0], x: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-[10%] -top-[10%] h-[80%] w-[80%] rounded-full bg-emerald-50/50 blur-[120px] onboarding-blur-emerald"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -8, 0], x: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-[10%] -top-[20%] h-[90%] w-[90%] rounded-full bg-slate-50/50 blur-[150px] onboarding-blur-slate"
      />
      <div className="absolute inset-0 bg-white/40 onboarding-overlay" />
    </div>
  )
}