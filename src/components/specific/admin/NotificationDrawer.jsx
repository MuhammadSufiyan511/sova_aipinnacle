import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Bell, X, MessageSquare, Package, Zap, User } from 'lucide-react'
import { useApp } from '../../../context/AppProvider'
const notifications = [
  { id: 1, icon: MessageSquare, type: 'chat', text: 'New lead "Faizan" captured on WhatsApp!', time: '2m ago', color: 'text-emerald-500 bg-emerald-50' },
  { id: 2, icon: Package, type: 'product', text: '5 items out of stock in your catalog.', time: '1h ago', color: 'text-amber-500 bg-amber-50' },
  { id: 3, icon: Zap, type: 'system', text: 'SOVA automation rate increased by 12% today!', time: '3h ago', color: 'text-violet-500 bg-violet-50' },
  { id: 4, icon: User, type: 'lead', text: 'Sarah Malik is interested in the "Premium Scarf".', time: '5h ago', color: 'text-blue-500 bg-blue-50' },
]

export function NotificationDrawer({ isOpen, onClose }) {
  const { homeDarkMode } = useApp()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#173247]/24 backdrop-blur-sm"
            onClick={onClose}
          />
          <Motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed right-0 top-0 z-[70] h-full w-full border-l shadow-2xl xs:max-w-sm sm:max-w-md admin-drawer-shell transition-colors duration-300 ${homeDarkMode
              ? 'bg-[#0A1B19] border-[#1C3D3A]'
              : 'bg-white border-slate-100'
              }`}
          >
            <div className={`flex h-16 items-center justify-between border-b px-5 transition-colors duration-300 ${homeDarkMode ? 'border-[#1C3D3A]' : 'border-slate-50'
              }`}>
              <div className="flex items-center gap-2.5">
                <Bell className="h-5 w-5 text-emerald-500" />
                <h3 className={`font-display text-[1rem] font-bold admin-drawer-title ${homeDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Notifications</h3>
              </div>
              <button
                onClick={onClose}
                className={`rounded-full p-2 transition-all admin-drawer-close ${homeDarkMode
                  ? 'text-[#FAF7ED]/60 hover:bg-[#142B2A]'
                  : 'text-slate-400 hover:bg-slate-100'
                  }`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 admin-drawer-content">
              <div className="space-y-2.5">
                {notifications.map((notif) => (
                  <Motion.div key={notif.id} whileHover={{ scale: 1.01 }}
                    className={`flex cursor-pointer items-start gap-3.5 rounded-2xl border p-3.5 sm:gap-4 sm:p-4 transition-all admin-item-row ${homeDarkMode
                      ? 'bg-[#142B2A] border-[#1C3D3A] hover:border-emerald-500/50 hover:shadow-[0_12px_30px_rgba(16,185,129,0.08)]'
                      : 'bg-slate-50 border-slate-50 hover:border-emerald-500/20 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]'
                      }`}
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border shadow-sm sm:h-10 sm:w-10 admin-item-icon ${homeDarkMode
                      ? 'bg-[#040D0C] border-[#1C3D3A]'
                      : 'bg-white border-slate-100'
                      }`}>
                      <notif.icon className={`h-4.5 w-4.5 sm:h-5 sm:w-5 ${homeDarkMode ? 'text-emerald-400' : 'text-emerald-500'
                        }`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-[0.82rem] font-bold leading-5 sm:text-[0.86rem] admin-item-text ${homeDarkMode ? 'text-white' : 'text-slate-800'
                        }`}>{notif.text}</p>
                      <p className={`mt-1 text-[0.64rem] font-medium sm:text-[0.68rem] admin-item-time ${homeDarkMode ? 'text-[#FAF7ED]/60' : 'text-slate-400'
                        }`}>{notif.time}</p>
                    </div>
                  </Motion.div>
                ))}
              </div>

              {notifications.length === 0 && (
                <div className="mt-20 text-center admin-empty-state">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#142B2A] text-[#FAF7ED]/40">
                    <Bell className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-bold text-[#FAF7ED]/60">No new notifications</p>
                </div>
              )}
            </div>

            <div className={`absolute bottom-0 left-0 w-full border-t p-4 transition-colors duration-300 admin-drawer-footer ${homeDarkMode ? 'bg-[#040D0C] border-[#1C3D3A]' : 'bg-white border-slate-50'
              }`}>
              <button className={`w-full rounded-xl border px-4 py-3 text-[0.7rem] font-bold tracking-[0.2em] transition-all admin-btn-secondary ${homeDarkMode
                ? 'bg-[#142B2A] border-[#1C3D3A] text-[#FAF7ED] hover:border-emerald-500/50'
                : 'bg-slate-50 border-slate-100 text-slate-600 hover:border-emerald-500/30 hover:bg-white hover:text-emerald-600'
                }`}>
                MARK ALL AS READ
              </button>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
