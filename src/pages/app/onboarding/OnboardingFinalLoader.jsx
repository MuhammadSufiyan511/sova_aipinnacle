import { AnimatePresence, motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export function OnboardingFinalLoader({ loadingIndex, steps, t }) {
  return (
    <motion.div
      key="step-final"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto flex max-w-sm flex-col items-center text-center"
    >
      <div className="relative flex h-32 w-32 items-center justify-center rounded-[40px] bg-white shadow-2xl ring-1 ring-slate-100">
        <Loader2 className="h-12 w-12 animate-spin text-emerald-500" strokeWidth={1.5} />
        <motion.div
          className="absolute inset-[-8px] rounded-[48px] border-[3px] border-emerald-500/20"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="mt-12 h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={loadingIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="font-display text-lg font-bold text-slate-900"
          >
            {steps[loadingIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <p className="mt-2 font-medium text-slate-400">{t('onboarding.loader.finalWait')}</p>
    </motion.div>
  )
}