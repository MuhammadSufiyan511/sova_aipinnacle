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
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-sm border-l border-[#DDEFE7] bg-white shadow-2xl"
          >
            <div className="flex h-14 items-center justify-between border-b border-[#DDEFE7] px-5">
              <div className="flex items-center gap-2">
                <Bell className="h-4.5 w-4.5 text-[#62808D]" />
                <h3 className="font-display text-[0.95rem] font-bold text-[#173247]">Notifications</h3>
              </div>
              <button onClick={onClose} className="rounded-full p-2 text-[#62808D] hover:bg-[#F2FBF7] transition-all">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2.5">
                {notifications.map((notif) => (
                  <Motion.div key={notif.id} whileHover={{ scale: 1.02 }}
                    className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#DDEFE7] bg-white p-3.5 transition-all hover:border-emerald-100 hover:shadow-md"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${notif.color}`}>
                      <notif.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.8rem] font-bold leading-5 text-[#173247]">{notif.text}</p>
                      <p className="mt-1 text-[0.66rem] font-semibold text-[#6D8A88]">{notif.time}</p>
                    </div>
                  </Motion.div>
                ))}
              </div>

              {notifications.length === 0 && (
                <div className="mt-20 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F2FBF7] text-[#86A29B]">
                    <Bell className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-bold text-[#62808D]">No new notifications</p>
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 w-full border-t border-[#DDEFE7] bg-[#F2FBF7] p-4">
              <button className="w-full rounded-xl bg-white px-4 py-2.5 text-xs font-bold tracking-wider text-[#62808D] transition-all hover:bg-[#ECF8F3] hover:text-[#295565]">
                MARK ALL AS READ
              </button>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
