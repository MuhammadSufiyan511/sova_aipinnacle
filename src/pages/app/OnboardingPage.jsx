import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, Moon, Sun } from 'lucide-react'
import { StepZeroBusiness } from '../../components/specific/onboarding/StepZeroBusiness'
import { StepOneProducts } from '../../components/specific/onboarding/StepOneProducts'
import { StepTwoTone } from '../../components/specific/onboarding/StepTwoTone'
import { ROUTES } from '../../utils/routes'
import { useApp } from '../../context/AppProvider'

const LOADING_STEPS = [
  'Building your catalog...',
  'Applying AI persona...',
  'Integrating with Meta API...',
  'Preparing your workspace...',
]

// Step map:
// 0 → initial loader
// 1 → Choose Business Type  (NEW)
// 2 → Add Products
// 3 → Choose Tone
// 4 → Final workspace setup loader → navigate to admin

export function OnboardingPage() {
  const { setProducts: setGlobalProducts, setTones: setGlobalTones, setShowCelebration, homeDarkMode, setHomeDarkMode } = useApp()
  const [step, setStep] = useState(0)

  const [businessType, setBusinessType] = useState(null)
  const [products, setProducts] = useState([])
  const [tones, setTones] = useState([])
  const [loadingIndex, setLoadingIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    // Initial loader — auto-advance after 1.8s
    if (step === 0) {
      const timeout = setTimeout(() => setStep(1), 1800)
      return () => clearTimeout(timeout)
    }

    // Final workspace setup — cycle loading messages then navigate
    if (step === 4) {
      const interval = setInterval(() => {
        setLoadingIndex((prev) => (prev + 1) % LOADING_STEPS.length)
      }, 800)
      const timeout = setTimeout(() => navigate(ROUTES.admin), 3500)
      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [step, navigate])

  const handleComplete = () => {
    setGlobalProducts(products)
    setGlobalTones(tones)
    setShowCelebration(true)
    setStep(4)
  }

  // Progress indicator (steps 1–3)
  const totalSteps = 3
  const currentStepNum = step >= 1 && step <= 3 ? step : null

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-10 onboarding-page-shell">
      {/* Floating Theme Toggle */}
      <div className="fixed right-6 top-6 z-[60]">
        <button
          type="button"
          onClick={() => setHomeDarkMode(!homeDarkMode)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 shadow-lg backdrop-blur-md transition hover:border-emerald-500 hover:text-emerald-500 onboarding-theme-toggle"
          aria-label={homeDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {homeDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      {/* Ambient Background */}
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

      <motion.div
        key="onboarding-main-container"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-5xl onboarding-main-container"
      >
        {/* Step Progress Dots */}
        {currentStepNum && (
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
                  <div className={`onboarding-progress-dot flex h-7 w-7 items-center justify-center rounded-full border-2 text-[0.7rem] font-bold transition-all duration-300 ${
                    isDone
                      ? 'border-emerald-500 bg-emerald-500 text-white'
                      : isActive
                        ? 'border-emerald-500 bg-white text-emerald-600 shadow-md shadow-emerald-500/20'
                        : 'border-slate-200 bg-white text-slate-400 font-normal'
                  }`}>
                    {isDone ? '✓' : stepNum}
                  </div>
                  {i < totalSteps - 1 && (
                    <div className={`onboarding-progress-line h-0.5 w-10 rounded-full transition-all duration-500 ${isDone ? 'bg-emerald-500' : 'bg-slate-100'}`} />
                  )}
                </div>
              )
            })}
          </motion.div>
        )}

        <AnimatePresence mode="wait" initial={false}>
          {/* 0 — Initial Loader */}
          {step === 0 && (
            <motion.div
              key="step-init"
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.4 } }}
              className="mx-auto flex max-w-sm flex-col items-center text-center onboarding-init-box"
            >
              <div className="relative flex h-32 w-32 items-center justify-center rounded-[40px] bg-white shadow-2xl ring-1 ring-slate-100 onboarding-loader-shell">
                <Loader2 className="h-12 w-12 animate-spin text-emerald-500" strokeWidth={1.5} />
              </div>
              <p className="mt-12 animate-pulse font-display text-lg font-bold text-slate-900 onboarding-init-title">
                INITIALIZING ONBOARDING
              </p>
              <p className="mt-2 font-medium text-slate-400 onboarding-init-desc">Please wait while we prepare your setup.</p>
            </motion.div>
          )}

          {/* 1 — Choose Business Type */}
          {step === 1 && (
            <motion.div
              key="step-business"
              className="mx-auto flex w-full max-w-4xl justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
            >
              <StepZeroBusiness
                businessType={businessType}
                setBusinessType={setBusinessType}
                onNext={() => setStep(2)}
              />
            </motion.div>
          )}

          {/* 2 — Add Products */}
          {step === 2 && (
            <motion.div
              key="step-products"
              className="mx-auto w-full max-w-4xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
            >
              <StepOneProducts
                products={products}
                setProducts={setProducts}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            </motion.div>
          )}

          {/* 3 — Choose Tone */}
          {step === 3 && (
            <motion.div
              key="step-tone"
              className="mx-auto flex w-full max-w-4xl justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            >
              <StepTwoTone
                tones={tones}
                setTones={setTones}
                onBack={() => setStep(2)}
                onComplete={handleComplete}
              />
            </motion.div>
          )}

          {/* 4 — Final Workspace Setup Loader */}
          {step === 4 && (
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
                    {LOADING_STEPS[loadingIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p className="mt-2 font-medium text-slate-400">Please wait while we finalize your setup.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
