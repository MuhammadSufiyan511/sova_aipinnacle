import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { StepZeroBusiness } from '../../components/specific/onboarding/StepZeroBusiness'
import { StepOneProducts } from '../../components/specific/onboarding/StepOneProducts'
import { StepTwoTone } from '../../components/specific/onboarding/StepTwoTone'
import { ROUTES } from '../../utils/routes'
import { useApp } from '../../context/AppProvider'
import { useTranslation } from 'react-i18next'
import { OnboardingBackground } from './onboarding/OnboardingBackground'
import { OnboardingFinalLoader } from './onboarding/OnboardingFinalLoader'
import { OnboardingInitialLoader } from './onboarding/OnboardingInitialLoader'
import { OnboardingProgress } from './onboarding/OnboardingProgress'
import { OnboardingThemeToggle } from './onboarding/OnboardingThemeToggle'
import { CurrencySelect } from '../../components/shared/CurrencySelect'

export function OnboardingPage() {
  const { t } = useTranslation()
  const { setProducts: setGlobalProducts, setFiles: setGlobalFiles, setTones: setGlobalTones, setShowCelebration, homeDarkMode, toggleHomeDarkMode, currency, setCurrency, setBusinessDetails, setBusinessProfile } = useApp()
  const [step, setStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState(null)
  const [products, setProducts] = useState([])
  const [tones, setTones] = useState([])
  const [loadingIndex, setLoadingIndex] = useState(0)
  const navigate = useNavigate()

  const LOADING_STEPS = [
    t('onboarding.loader.steps.catalog'),
    t('onboarding.loader.steps.ai'),
    t('onboarding.loader.steps.meta'),
    t('onboarding.loader.steps.workspace'),
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (step === 0) {
      const timeout = setTimeout(() => setStep(1), 1800)
      return () => clearTimeout(timeout)
    }

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
  }, [step, navigate, LOADING_STEPS.length])

  const handleComplete = () => {
    const productCatalog = products.filter((item) => item.mediaType !== 'file')
    const fileLibrary = products.filter((item) => item.mediaType === 'file')

    setGlobalProducts(productCatalog)
    setGlobalFiles(fileLibrary)
    setGlobalTones(tones)
    setBusinessDetails(prev => ({ ...prev, name: businessName }))
    setBusinessProfile(prev => ({ ...prev, type: businessType }))
    setShowCelebration(true)
    setStep(4)
  }

  const totalSteps = 3
  const currentStepNum = step >= 1 && step <= 3 ? step : null

  // Performance optimized variants for mobile
  const stepVariants = {
    initial: (mob) => ({
      opacity: 0,
      x: mob ? 10 : 20,
      y: mob ? 0 : 20,
    }),
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: (mob) => ({
      opacity: 0,
      x: mob ? -10 : -20,
      transition: { duration: 0.2 }
    })
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-10 onboarding-page-shell">
      <div className="fixed right-6 top-6 z-[60] flex items-center gap-3">

        <OnboardingThemeToggle
          homeDarkMode={homeDarkMode}
          onToggle={toggleHomeDarkMode}
          t={t}
        />
      </div>

      <OnboardingBackground />

      <Motion.div
        key="onboarding-main-container"
        initial={{ opacity: 0, scale: isMobile ? 1 : 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl onboarding-main-container will-change-transform"
      >
        <OnboardingProgress currentStepNum={currentStepNum} totalSteps={totalSteps} />

        <AnimatePresence mode="wait" initial={false}>
          {step === 0 && <OnboardingInitialLoader t={t} />}

          {step === 1 && (
            <Motion.div
              key="step-business"
              custom={isMobile}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mx-auto flex w-full max-w-4xl justify-center will-change-[transform,opacity]"
            >
              <StepZeroBusiness
                businessType={businessType}
                setBusinessType={setBusinessType}
                businessName={businessName}
                setBusinessName={setBusinessName}
                currency={currency}
                setCurrency={setCurrency}
                homeDarkMode={homeDarkMode}
                onNext={() => setStep(2)}
              />
            </Motion.div>
          )}

          {step === 2 && (
            <Motion.div
              key="step-tone"
              custom={isMobile}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mx-auto flex w-full max-w-4xl justify-center will-change-[transform,opacity]"
            >
              <StepTwoTone
                tones={tones}
                setTones={setTones}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            </Motion.div>
          )}

          {step === 3 && (
            <Motion.div
              key="step-products"
              custom={isMobile}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mx-auto w-full max-w-4xl will-change-[transform,opacity]"
            >
              <StepOneProducts
                products={products}
                setProducts={setProducts}
                businessType={businessType}
                onBack={() => setStep(2)}
                onComplete={handleComplete}
              />
            </Motion.div>
          )}

          {step === 4 && (
            <OnboardingFinalLoader loadingIndex={loadingIndex} steps={LOADING_STEPS} t={t} />
          )}
        </AnimatePresence>
      </Motion.div>
    </div>
  )
}

export default OnboardingPage
