import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, Plus, Sparkles, CheckCircle2 } from 'lucide-react'
import { StepOneProducts } from '../../components/specific/onboarding/StepOneProducts'
import { StepTwoTone } from '../../components/specific/onboarding/StepTwoTone'
import { ROUTES } from '../../utils/routes'
import { useApp } from '../../context/AppProvider'

const LOADING_STEPS = [
  "Building your catalog...",
  "Applying AI persona...",
  "Integrating with Meta API...",
  "Preparing your workspace..."
]

export function OnboardingPage() {
  const { setProducts: setGlobalProducts, setTones: setGlobalTones, setShowCelebration } = useApp()
  const [step, setStep] = useState(0) // 0 is initial loader

  const [products, setProducts] = useState([])
  const [tones, setTones] = useState([])
  const [loadingIndex, setLoadingIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    // Initial Loader Timeout
    if (step === 0) {
      const timeout = setTimeout(() => {
        setStep(1)
      }, 1800)
      return () => clearTimeout(timeout)
    }

    // Final Workspace Setup Timeout
    if (step === 3) {
      const interval = setInterval(() => {
        setLoadingIndex((prev) => (prev + 1) % LOADING_STEPS.length)
      }, 800)
      const timeout = setTimeout(() => {
        navigate(ROUTES.admin)
      }, 3500)
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
    setStep(3)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-20">
      {/* Dynamic Ambient Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[10%] -top-[10%] h-[80%] w-[80%] rounded-full bg-emerald-50/50 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -8, 0],
            x: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-[10%] -top-[20%] h-[90%] w-[90%] rounded-full bg-slate-50/50 blur-[150px]"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <motion.div
        key="onboarding-main-container"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-5xl"
      >
        <AnimatePresence mode="wait" initial={false}>
          {step === 0 && (
            <motion.div
              key="step-zero"
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.4 } }}
              className="mx-auto flex flex-col items-center text-center max-w-sm"
            >
              <div className="relative flex h-32 w-32 items-center justify-center rounded-[40px] bg-white shadow-2xl ring-1 ring-slate-100">
                <Loader2 className="h-12 w-12 animate-spin text-emerald-500" strokeWidth={1.5} />
              </div>
              <p className="mt-12 text-lg font-bold text-slate-900 font-display animate-pulse">
                INITIALIZING ONBOARDING
              </p>
              <p className="mt-2 text-slate-400 font-medium">Please wait while we prepare your setup.</p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-one"
              className="w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
            >
              <StepOneProducts
                products={products}
                setProducts={setProducts}
                onNext={() => setStep(2)}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-two"
              className="w-full max-w-4xl mx-auto flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            >
              <StepTwoTone
                tones={tones}
                setTones={setTones}
                onBack={() => setStep(1)}
                onComplete={handleComplete}
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-three"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto flex flex-col items-center text-center max-w-sm"
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
                    className="text-lg font-bold text-slate-900 font-display"
                  >
                    {LOADING_STEPS[loadingIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p className="mt-2 text-slate-400 font-medium">Please wait while we finalize your setup.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
