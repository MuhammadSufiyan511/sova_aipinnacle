import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { heroVideoUrl } from '../../data'

const MotionDiv = motion.div

export function DemoModal({ onClose }) {
  const { t } = useTranslation()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const autoplayVideoUrl = `${heroVideoUrl}?autoplay=1&rel=0`

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">

        {/* Backdrop — opacity only, NO blur (blur forces GPU repaint on every frame on mobile) */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          onClick={onClose}
          className="absolute inset-0 bg-[#020617]/88"
        />

        {/* Modal — GPU-composited translateY + opacity only, NO scale, NO backdrop-blur */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-[#0f172a] border border-white/10 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.7)] sm:rounded-[2rem] sm:p-6 lg:p-8"
        >
          {/* Static ambient glows — smaller blur, no animation */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/15 blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-purple-500/10 blur-[50px]" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between gap-4 mb-4 sm:mb-6">
            <div className="pl-2">
              <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                {t('common.watchDemo')}
              </h3>
              <div className="mt-1 h-1 w-12 rounded-full bg-emerald-500 sm:w-16" />
            </div>

            {/* Close — whileTap only (no whileHover rotate, which triggers layout on mobile) */}
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-emerald-400 transition-colors hover:bg-white/10 hover:text-emerald-300 sm:h-12 sm:w-12 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              aria-label={t('common.close')}
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
          </div>

          {/* Video Wrapper */}
          <div className="relative overflow-hidden rounded-xl border border-white/5 bg-emerald-500/10 p-1 shadow-2xl sm:p-1.5 sm:rounded-3xl">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-black sm:rounded-2xl">

              {/* Skeleton */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950">
                  <div className="relative h-12 w-12 sm:h-16 sm:w-16">
                    <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/20" />
                    <div className="absolute inset-2 animate-pulse rounded-full bg-emerald-500/40" />
                    <div className="absolute inset-4 rounded-full bg-emerald-500" />
                  </div>
                </div>
              )}

              <iframe
                className={`h-full w-full transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                src={autoplayVideoUrl}
                title={`${t('common.brand')} ${t('common.watchDemo')}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onLoad={() => setIsVideoLoaded(true)}
              />
            </div>
          </div>
        </MotionDiv>
      </div>
    </AnimatePresence>
  )
}
