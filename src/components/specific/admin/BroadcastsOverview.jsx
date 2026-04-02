import { motion as Motion } from 'framer-motion'
import { Clock3, Megaphone, PlayCircle, Send, Sparkles } from 'lucide-react'

const campaigns = [
  { id: 1, name: 'Ramzan Offer', status: 'Scheduled', audience: '1,240 contacts', sendAt: 'Today, 7:00 PM' },
  { id: 2, name: 'New Catalog Drop', status: 'Draft', audience: '860 contacts', sendAt: 'Waiting for approval' },
  { id: 3, name: 'VIP Follow-up Blast', status: 'Sent', audience: '420 contacts', sendAt: 'Yesterday, 5:30 PM' },
]

const statusStyles = {
  Scheduled: 'bg-amber-50 text-amber-600',
  Draft: 'bg-slate-100 text-slate-600',
  Sent: 'bg-emerald-50 text-emerald-600',
}

export function BroadcastsOverview() {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-[1.45rem] font-bold text-slate-800">Broadcast Campaigns</h2>
          <p className="mt-0.5 text-[0.82rem] text-slate-400">Manage scheduled WhatsApp updates, offers, and follow-up campaigns.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-[0.82rem] font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-600">
          <Megaphone className="h-4 w-4" />
          New Broadcast
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">Scheduled</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-slate-900">04</p>
        </div>
        <div className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">Sent this week</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-slate-900">11</p>
        </div>
        <div className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">Response rate</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-slate-900">37%</p>
        </div>
      </div>

      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="rounded-[26px] border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold text-slate-800">{campaign.name}</p>
                  <span className={`rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] ${statusStyles[campaign.status]}`}>{campaign.status}</span>
                </div>
                <p className="mt-2 text-[0.82rem] text-slate-500">Audience: {campaign.audience}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-[0.78rem] font-bold text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
                  <PlayCircle className="h-4 w-4" />
                  Preview
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-[0.78rem] font-bold text-slate-600 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600">
                  <Send className="h-4 w-4" />
                  Open
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-[0.78rem] font-medium text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" />
                {campaign.sendAt}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-[#10B981]" />
                Powered by SOVA automation
              </span>
            </div>
          </div>
        ))}
      </div>
    </Motion.div>
  )
}
