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
        {/* Backdrop */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#020617]/80 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-slate-900/40 border border-white/10 p-3 shadow-[0_32px_120px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-6 lg:p-8"
        >
          {/* Decorative ambient glows */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

          <div className="relative z-10 flex items-center justify-between gap-4 mb-4 sm:mb-6">
            <div className="pl-2">
              <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                {t('common.watchDemo')}
              </h3>
              <div className="mt-1 h-1 w-12 rounded-full bg-emerald-500 sm:w-16" />
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-emerald-400 transition-colors hover:bg-white/10 hover:text-emerald-300 sm:h-12 sm:w-12 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              aria-label={t('common.close')}
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
          </div>

          {/* Video Wrapper */}
          <div className="relative overflow-hidden rounded-xl border border-white/5 bg-emerald-500/10 p-1 shadow-2xl sm:p-1.5 sm:rounded-3xl">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-black/40 sm:rounded-2xl">
              {/* Skeleton / Loading State */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950">
                  <div className="relative h-12 w-12 sm:h-16 sm:w-16">
                    <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/20" />
                    <div className="absolute inset-2 animate-pulse rounded-full bg-emerald-500/40" />
                    <div className="absolute inset-4 rounded-full bg-emerald-500" />
                  </div>
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
              )}

              <iframe
                className={`h-full w-full transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
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
