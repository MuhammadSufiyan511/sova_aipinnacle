import { AnimatePresence, motion } from 'framer-motion'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import sovaLogo from '../../assets/logos/sova.png'

const MotionDiv = motion.div

/**
 * AppSplashScreen
 * Premium initial loader that masks layout calculations and asset decoding.
 * Design matched to the language change overlay for consistency.
 */
export const AppSplashScreen = memo(function AppSplashScreen({ isVisible }) {
  const { t } = useTranslation()

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="app-splash-screen fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white/90 backdrop-blur-xl"
        >
          <MotionDiv
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative flex h-24 w-24 items-center justify-center rounded-[32px] border border-[#E2EFEA] bg-white shadow-[0_20px_50px_rgba(16,185,129,0.12)]">
              <img 
                src={sovaLogo} 
                alt="SOVA AI" 
                decoding="async" 
                className="h-14 w-14 animate-pulse rounded-2xl object-cover" 
              />
              {/* Outer glow ring */}
              <div className="absolute -inset-1 animate-pulse rounded-[36px] border-2 border-emerald-500/10" />
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="font-display text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#1e293b]/60">
                {t('common.initializingSova')}
              </p>
              <div className="flex gap-2">
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#10B981]" style={{ animationDelay: '0ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#10B981]" style={{ animationDelay: '150ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#10B981]" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
})
