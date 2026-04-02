import { motion as Motion } from 'framer-motion'
import { Bell, CheckCheck, MessageSquare, Package, TriangleAlert, User } from 'lucide-react'

const notifications = [
  { id: 1, icon: MessageSquare, text: 'New lead "Faizan" captured from WhatsApp chat flow.', time: '2m ago', color: 'text-emerald-500 bg-emerald-50', type: 'Lead alert' },
  { id: 2, icon: Package, text: '5 catalog items need stock updates before the next campaign.', time: '1h ago', color: 'text-amber-500 bg-amber-50', type: 'Catalog' },
  { id: 3, icon: Bell, text: 'Broadcast campaign "Ramzan Offer" is ready to send.', time: '3h ago', color: 'text-violet-500 bg-violet-50', type: 'Campaign' },
  { id: 4, icon: User, text: 'Sarah Malik requested a callback after viewing pricing.', time: '5h ago', color: 'text-blue-500 bg-blue-50', type: 'Customer' },
  { id: 5, icon: TriangleAlert, text: 'Spam detection blocked 12 low-intent messages today.', time: 'Today', color: 'text-rose-500 bg-rose-50', type: 'System' },
]

export function NotificationsOverview() {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-[1.2rem] font-bold text-[#173247]">Notifications</h2>
          <p className="mt-0.5 text-[0.74rem] text-[#62808D]">Track lead alerts, automation updates, and campaign activity from one place.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-[#DDEFE7] bg-white px-3.5 py-2 text-[0.74rem] font-bold text-[#476977] transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
          <CheckCheck className="h-4 w-4" />
          Mark all as read
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {[
          ['Unread alerts', '08'],
          ['Lead notifications', '14'],
          ['System updates', '05'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-[20px] border border-[#DDEFE7] bg-white p-4 shadow-sm">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{label}</p>
            <p className="mt-1.5 font-display text-[1.7rem] font-extrabold text-[#173247]">{value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2.5">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start gap-3 rounded-[20px] border border-[#DDEFE7] bg-white p-4 shadow-sm transition hover:border-emerald-100 hover:shadow-md">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${notification.color}`}>
              <notification.icon className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{notification.type}</p>
                <span className="text-[0.66rem] font-semibold text-[#6D8A88]">{notification.time}</span>
              </div>
              <p className="mt-1.5 text-[0.84rem] font-semibold leading-5 text-[#295565]">{notification.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Motion.div>
  )
}
