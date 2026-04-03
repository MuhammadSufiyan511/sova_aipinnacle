import { AnimatePresence, motion as Motion } from 'framer-motion'
import { CheckCircle2, MessageSquare, Rocket, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react'
import sovaLogo from '../../../assets/logos/sova.png'

const featureHighlights = [
  { icon: Zap, text: 'Instant auto replies are active', color: 'bg-amber-50 text-amber-500' },
  { icon: MessageSquare, text: 'Your WhatsApp chats are now automated', color: 'bg-emerald-50 text-emerald-500' },
  { icon: TrendingUp, text: 'Serious buyers will be highlighted first', color: 'bg-violet-50 text-violet-500' },
]

const launchChecklist = [
  { icon: Rocket, label: 'WhatsApp automation connected' },
  { icon: ShieldCheck, label: 'Lead filtering is active' },
  { icon: Sparkles, label: 'Follow-ups are ready to run' },
]

export function CelebrationModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#173247]/34 backdrop-blur-md" onClick={onClose} />
          <Motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="fixed left-1/2 top-1/2 z-[110] h-[90vh] w-[92vw] max-w-[880px] -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-auto rounded-[34px] border border-[#DDEFE7] bg-white p-5 shadow-2xl sm:h-auto sm:w-[92vw] sm:overflow-hidden sm:p-6"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
            {[...Array(12)].map((_, index) => (
              <Motion.span
                key={index}
                className="absolute h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#10B981] to-[#A78BFA]"
                initial={{ opacity: 0, x: 0, y: 0, left: '50%', top: '25%' }}
                animate={{ opacity: [0, 1, 0], x: [0, (index - 6) * 18], y: [0, 58 + (index % 3) * 22] }}
                transition={{ duration: 2.2, delay: index * 0.06, repeat: Infinity, repeatDelay: 1.8 }}
              />
            ))}

            <div className="relative flex flex-col items-center gap-6 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="w-full rounded-[28px] bg-gradient-to-br from-[#164E46] via-[#0F6A63] to-[#10B981] p-6 text-white shadow-[0_24px_80px_rgba(16,185,129,0.22)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                    <img src={sovaLogo} alt="SOVA logo" className="h-10 w-10 object-contain" />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-white/60">SOVA launch</p>
                    <p className="mt-1 text-lg font-bold">Your workspace is ready</p>
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
                <Motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.18, 1] }} transition={{ delay: 0.2, duration: 0.5 }} className="mb-5 flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-2xl shadow-emerald-500/30">
                  <Sparkles className="h-10 w-10" />
                </Motion.div>

                <Motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-display text-[1.6rem] font-extrabold tracking-tight text-[#173247] sm:text-[2rem]">
                  Your chats are now <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">automated</span>
                </Motion.h2>

                <Motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-3 max-w-xl text-[0.84rem] font-medium leading-relaxed text-[#62808D] sm:text-[0.92rem]">
                  SOVA is now live in your workspace. It can reply faster, spot serious buyers, and keep your WhatsApp sales moving even when your team is offline.
                </Motion.p>

                <div className="mt-6 grid w-full grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
                  {featureHighlights.map((feature, index) => (
                    <Motion.div
                      key={feature.text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex flex-col items-start gap-3 rounded-[22px] border border-[#DDEFE7] bg-[#F2FBF7] p-3.5"
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color} shadow-sm`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-wider text-[#6D8A88]">{feature.text}</p>
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
                  Continue to dashboard <CheckCircle2 className="h-5 w-5" />
                </Motion.button>
              </div>
            </div>
          </Motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}
