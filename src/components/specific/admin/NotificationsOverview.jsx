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
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-[1.45rem] font-bold text-slate-800">Notifications</h2>
          <p className="mt-0.5 text-[0.82rem] text-slate-400">Track lead alerts, automation updates, and campaign activity from one place.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[0.78rem] font-bold text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
          <CheckCheck className="h-4 w-4" />
          Mark all as read
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">Unread alerts</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-slate-900">08</p>
        </div>
        <div className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">Lead notifications</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-slate-900">14</p>
        </div>
        <div className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">System updates</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-slate-900">05</p>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start gap-4 rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm transition hover:border-emerald-100 hover:shadow-md">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${notification.color}`}>
              <notification.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-slate-400">{notification.type}</p>
                <span className="text-[0.72rem] font-semibold text-slate-400">{notification.time}</span>
              </div>
              <p className="mt-2 text-[0.92rem] font-semibold leading-6 text-slate-700">{notification.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Motion.div>
  )
}
