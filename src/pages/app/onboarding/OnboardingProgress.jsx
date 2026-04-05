import { motion } from 'framer-motion'

export function OnboardingProgress({ currentStepNum, totalSteps }) {
  if (!currentStepNum) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 flex items-center justify-center gap-2.5 onboarding-progress-nav"
    >
      {Array.from({ length: totalSteps }).map((_, i) => {
        const stepNum = i + 1
        const isDone = stepNum < currentStepNum
        const isActive = stepNum === currentStepNum
        return (
          <div key={stepNum} className="flex items-center gap-2.5">
            <div
              className={`onboarding-progress-dot flex h-7 w-7 items-center justify-center rounded-full border-2 text-[0.7rem] font-bold transition-all duration-300 ${
                isDone
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : isActive
                    ? 'border-emerald-500 bg-white text-emerald-600 shadow-md shadow-emerald-500/20'
                    : 'border-slate-200 bg-white text-slate-400 font-normal'
              }`}
            >
              {isDone ? '✓' : stepNum}
            </div>
            {i < totalSteps - 1 && (
              <div
                className={`onboarding-progress-line h-0.5 w-10 rounded-full transition-all duration-500 ${
                  isDone ? 'bg-emerald-500' : 'bg-slate-100'
                }`}
              />
            )}
          </div>
        )
      })}
    </motion.div>
  )
}