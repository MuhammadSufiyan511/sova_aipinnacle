import { AnimatePresence, motion as Motion } from 'framer-motion'
import { CheckCircle2, MessageSquare, Rocket, ShieldCheck, Sparkles, TrendingUp, X, Zap } from 'lucide-react'
import sovaLogo from '../../../assets/logos/sova.webp'
import { useTranslation, Trans } from 'react-i18next'
import { memo, useState, useEffect } from 'react'
import { useApp } from '../../../context/AppProvider'

export const CelebrationModal = memo(function CelebrationModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation()
  const { homeDarkMode } = useApp()
  const isRTL = i18n.dir() === 'rtl'
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const featureHighlights = [
    { icon: Zap, text: t('admin.celebration.features.replies'), color: 'bg-amber-50 text-amber-500' },
    { icon: MessageSquare, text: t('admin.celebration.features.whatsapp'), color: 'bg-emerald-50 text-emerald-500' },
    { icon: TrendingUp, text: t('admin.celebration.features.buyers'), color: 'bg-violet-50 text-violet-500' },
  ]

  const launchChecklist = [
    { icon: Rocket, label: t('admin.celebration.checklist.whatsapp') },
    { icon: ShieldCheck, label: t('admin.celebration.checklist.filtering') },
    { icon: Sparkles, label: t('admin.celebration.checklist.followups') },
  ]

  // Optimized confetti count for mobile
  const particleCount = isMobile ? 6 : 12

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[100] bg-[#173247]/34 ${isMobile ? '' : 'backdrop-blur-md'}`}
            onClick={onClose}
          />
          <Motion.div
            initial={{ opacity: 0, scale: isMobile ? 1 : 0.92, y: isMobile ? 12 : 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: isMobile ? 1 : 0.92, y: isMobile ? 12 : 24 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className={`fixed left-1/2 top-1/2 z-[110] h-[90vh] w-[92vw] max-w-[880px] -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-auto rounded-[34px] border p-5 shadow-2xl sm:h-auto sm:w-[92vw] sm:overflow-hidden sm:p-6 will-change-[transform,opacity] transition-colors ${
              homeDarkMode ? 'border-[#1C3D3A] bg-[#0A1B19]' : 'border-[#DDEFE7] bg-white'
            }`}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t('common.close')}
              className={`admin-modal-close absolute top-5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition ${isRTL ? 'left-5' : 'right-5'} ${
                homeDarkMode ? 'border-[#1C3D3A]/70 bg-[#040D0C]/90 text-[#F8FAFC] hover:bg-[#1C3D3A]' : 'border-white/70 bg-white/90 text-[#486977] hover:bg-white'
              }`}
            >
              <X className="h-4.5 w-4.5" />
            </button>
            <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 ${isMobile ? '' : 'blur-3xl'}`} />
            <div className={`absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/10 ${isMobile ? '' : 'blur-3xl'}`} />

            {[...Array(particleCount)].map((_, index) => (
              <Motion.span
                key={index}
                className="absolute h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#10B981] to-[#A78BFA]"
                initial={{ opacity: 0, x: 0, y: 0, left: '50%', top: '25%' }}
                animate={{ opacity: [0, 1, 0], x: [0, (index - (particleCount / 2)) * 18], y: [0, 58 + (index % 3) * 22] }}
                transition={{ duration: 2.2, delay: index * 0.06, repeat: Infinity, repeatDelay: 1.8 }}
              />
            ))}

            <div className="relative flex flex-col items-center gap-6 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="w-full rounded-[28px] bg-gradient-to-br from-[#164E46] via-[#0F6A63] to-[#10B981] p-6 text-white shadow-[0_24px_80px_rgba(16,185,129,0.22)]">
                <div className="flex items-center gap-3">
                  <span className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 ${isMobile ? '' : 'backdrop-blur'}`}>
                    <img src={sovaLogo} alt="SOVA logo" className="h-10 w-10 object-contain" />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-white">{t('admin.celebration.eyebrow')}</p>
                    <p className="mt-1 text-lg font-bold">{t('admin.celebration.title')}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {launchChecklist.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                        <item.icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="text-sm font-medium text-white/90">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start text-left">

                <Motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className={`font-display text-[1.6rem] font-extrabold tracking-tight sm:text-[2rem] transition-colors ${
                  homeDarkMode ? 'text-[#F8FAFC]' : 'text-[#173247]'
                }`}>
                  <Trans
                    i18nKey="admin.celebration.headline"
                    components={{
                      gradient: <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent" />
                    }}
                  />
                </Motion.h2>

                <Motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className={`mt-3 max-w-xl text-[0.84rem] font-medium leading-relaxed sm:text-[0.92rem] transition-colors ${
                  homeDarkMode ? 'text-[#A7C4BD]' : 'text-[#1E293B]'
                }`}>
                  {t('admin.celebration.desc')}
                </Motion.p>

                <div className="mt-6 grid w-full grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
                  {featureHighlights.map((feature, index) => (
                    <Motion.div
                      key={feature.text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className={`flex flex-col items-start gap-3 rounded-[22px] border p-3.5 transition-colors ${
                        homeDarkMode ? 'border-[#1C3D3A] bg-[#040D0C]/60' : 'border-[#DDEFE7] bg-[#F2FBF7]'
                      }`}
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color} shadow-sm transition-colors ${
                        homeDarkMode ? 'mix-blend-lighten opacity-90' : ''
                      }`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <p className={`text-[0.68rem] font-bold uppercase tracking-wider transition-colors ${
                        homeDarkMode ? 'text-[#A7C4BD]' : 'text-[#1E293B]'
                      }`}>{feature.text}</p>
                    </Motion.div>
                  ))}
                </div>

                <Motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#10B981] text-[0.92rem] font-bold text-white shadow-[0_18px_40px_rgba(16,185,129,0.25)] transition hover:bg-[#0D9A73]"
                >
                  {t('admin.celebration.btn')} <CheckCircle2 className="h-5 w-5" />
                </Motion.button>
              </div>
            </div>
          </Motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
})
