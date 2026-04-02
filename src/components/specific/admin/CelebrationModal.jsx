import { AnimatePresence, motion } from 'framer-motion'
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="fixed left-1/2 top-1/2 z-[110] w-full max-w-[720px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[40px] border border-white/20 bg-white p-8 shadow-2xl"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
            {[...Array(12)].map((_, index) => (
              <motion.span
                key={index}
                className="absolute h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#10B981] to-[#A78BFA]"
                initial={{ opacity: 0, x: 0, y: 0, left: '50%', top: '25%' }}
                animate={{ opacity: [0, 1, 0], x: [0, (index - 6) * 18], y: [0, 58 + (index % 3) * 22] }}
                transition={{ duration: 2.2, delay: index * 0.06, repeat: Infinity, repeatDelay: 1.8 }}
              />
            ))}

            <div className="relative grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[32px] bg-gradient-to-br from-[#0F172A] via-[#15354C] to-[#10B981] p-7 text-white shadow-[0_24px_80px_rgba(16,185,129,0.22)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                    <img src={sovaLogo} alt="SOVA logo" className="h-10 w-10 object-contain" />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-white/60">SOVA launch</p>
                    <p className="mt-1 text-xl font-bold">Your workspace is ready</p>
                  </div>
                </div>
                <div className="mt-7 space-y-3">
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
                <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.18, 1] }} transition={{ delay: 0.2, duration: 0.5 }} className="mb-6 flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-2xl shadow-emerald-500/30">
                  <Sparkles className="h-10 w-10" />
                </motion.div>

                <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-display text-4xl font-extrabold tracking-tight text-slate-900">
                  Your chats are now <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">automated</span>
                </motion.h2>

                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-slate-500">
                  SOVA is now live in your workspace. It can reply faster, spot serious buyers, and keep your WhatsApp sales moving even when your team is offline.
                </motion.p>

                <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                  {featureHighlights.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex flex-col items-start gap-3 rounded-[24px] border border-slate-100 bg-[#F8FAFC] p-4"
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color} shadow-sm`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <p className="text-[0.75rem] font-bold uppercase tracking-wider text-slate-400">{feature.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#10B981] text-base font-bold text-white shadow-[0_18px_40px_rgba(16,185,129,0.25)] transition hover:bg-[#0D9A73]"
                >
                  Continue to dashboard <CheckCircle2 className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}
