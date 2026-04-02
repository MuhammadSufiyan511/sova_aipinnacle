import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Bell, X, MessageSquare, Package, Zap, User } from 'lucide-react'

const notifications = [
  { id: 1, icon: MessageSquare, type: 'chat', text: 'New lead "Faizan" captured on WhatsApp!', time: '2m ago', color: 'text-emerald-500 bg-emerald-50' },
  { id: 2, icon: Package, type: 'product', text: '5 items out of stock in your catalog.', time: '1h ago', color: 'text-amber-500 bg-amber-50' },
  { id: 3, icon: Zap, type: 'system', text: 'SOVA automation rate increased by 12% today!', time: '3h ago', color: 'text-violet-500 bg-violet-50' },
  { id: 4, icon: User, type: 'lead', text: 'Sarah Malik is interested in the "Premium Scarf".', time: '5h ago', color: 'text-blue-500 bg-blue-50' },
]

export function NotificationDrawer({ isOpen, onClose }) {
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
            className="fixed right-0 top-0 z-[70] h-full w-full border-l border-[#1C3D3A] bg-[#0A1B19] shadow-2xl xs:max-w-sm admin-drawer-shell"
          >
            <div className="flex h-14 items-center justify-between border-b border-[#1C3D3A] px-5">
              <div className="flex items-center gap-2">
                <Bell className="h-4.5 w-4.5 text-emerald-500" />
                <h3 className="font-display text-[0.95rem] font-bold text-white admin-drawer-title">Notifications</h3>
              </div>
              <button onClick={onClose} className="rounded-full p-2 text-[#FAF7ED]/60 hover:bg-[#142B2A] transition-all admin-drawer-close">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 admin-drawer-content">
              <div className="space-y-2.5">
                {notifications.map((notif) => (
                  <Motion.div key={notif.id} whileHover={{ scale: 1.01 }}
                    className="flex cursor-pointer items-start gap-3.5 rounded-2xl border border-[#1C3D3A] bg-[#142B2A] p-3.5 sm:gap-4 sm:p-4 transition-all hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 admin-item-row"
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#040D0C] border border-[#1C3D3A] shadow-sm sm:h-10 sm:w-10 admin-item-icon`}>
                      <notif.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.78rem] font-bold leading-5 text-white sm:text-[0.82rem] admin-item-text">{notif.text}</p>
                      <p className="mt-1 text-[0.62rem] font-medium text-[#FAF7ED]/60 sm:text-[0.66rem] admin-item-time">{notif.time}</p>
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

            <div className="absolute bottom-0 left-0 w-full border-t border-[#1C3D3A] bg-[#040D0C] p-4 admin-drawer-footer">
              <button className="w-full rounded-xl bg-[#142B2A] border border-[#1C3D3A] px-4 py-2.5 text-xs font-bold tracking-[0.2em] text-[#FAF7ED] transition-all hover:border-emerald-500/50 admin-btn-secondary">
                MARK ALL AS READ
              </button>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
