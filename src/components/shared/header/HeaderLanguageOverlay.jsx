import { AnimatePresence, motion } from 'framer-motion'
import sovaLogo from '../../../assets/logos/sova.png'

const MotionDiv = motion.div

export function HeaderLanguageOverlay({ isChangingLanguage }) {
  return (
    <AnimatePresence>
      {isChangingLanguage && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="language-overlay-container fixed inset-0 z-[100] flex flex-col items-center justify-center backdrop-blur-md"
        >
          <MotionDiv
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5"
          >
            <div className="language-overlay-card relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#E2EFEA] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img src={sovaLogo} alt="Loading Sova" decoding="async" className="h-12 w-12 animate-pulse rounded-xl object-cover" />
            </div>
            <div className="mt-2 flex gap-1.5">
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#10B981]" style={{ animationDelay: '0ms' }} />
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#10B981]" style={{ animationDelay: '150ms' }} />
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#10B981]" style={{ animationDelay: '300ms' }} />
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}
