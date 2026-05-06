import { motion as Motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export function OnboardingInitialLoader({ t }) {
  return (
    <Motion.div
      key="step-init"
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.4 } }}
      className="mx-auto flex max-w-sm flex-col items-center text-center onboarding-init-box"
    >
      <div className="relative flex h-32 w-32 items-center justify-center rounded-[40px] bg-white shadow-2xl ring-1 ring-slate-100 onboarding-loader-shell">
        <Loader2 className="h-12 w-12 animate-spin text-emerald-500" strokeWidth={1.5} />
      </div>
      <p className="mt-12 animate-pulse font-display text-lg font-bold text-slate-900 onboarding-init-title">
        {t('onboarding.loader.init')}
      </p>
      <p className="mt-2 font-medium text-slate-400 onboarding-init-desc">{t('onboarding.loader.wait')}</p>
    </Motion.div>
  )
}