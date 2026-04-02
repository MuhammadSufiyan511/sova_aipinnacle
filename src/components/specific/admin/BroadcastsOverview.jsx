import { motion as Motion } from 'framer-motion'
import { Clock3, Megaphone, PlayCircle, Send, Sparkles } from 'lucide-react'

const campaigns = [
  { id: 1, name: 'Ramzan Offer', status: 'Scheduled', audience: '1,240 contacts', sendAt: 'Today, 7:00 PM' },
  { id: 2, name: 'New Catalog Drop', status: 'Draft', audience: '860 contacts', sendAt: 'Waiting for approval' },
  { id: 3, name: 'VIP Follow-up Blast', status: 'Sent', audience: '420 contacts', sendAt: 'Yesterday, 5:30 PM' },
]

const statusStyles = {
  Scheduled: 'bg-amber-50 text-amber-600',
  Draft: 'bg-[#EEF8F3] text-[#476977]',
  Sent: 'bg-emerald-50 text-emerald-600',
}

export function BroadcastsOverview() {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-[1.2rem] font-bold text-[#173247]">Broadcast Campaigns</h2>
          <p className="mt-0.5 text-[0.74rem] text-[#62808D]">Manage scheduled WhatsApp updates, offers, and follow-up campaigns.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3.5 py-2 text-[0.78rem] font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-600">
          <Megaphone className="h-4 w-4" />
          New Broadcast
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-[20px] border border-[#DDEFE7] bg-white p-4 shadow-sm">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">Scheduled</p>
          <p className="mt-1.5 font-display text-[1.7rem] font-extrabold text-[#173247]">04</p>
        </div>
        <div className="rounded-[20px] border border-[#DDEFE7] bg-white p-4 shadow-sm">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">Sent this week</p>
          <p className="mt-1.5 font-display text-[1.7rem] font-extrabold text-[#173247]">11</p>
        </div>
        <div className="rounded-[20px] border border-[#DDEFE7] bg-white p-4 shadow-sm">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">Response rate</p>
          <p className="mt-1.5 font-display text-[1.7rem] font-extrabold text-[#173247]">37%</p>
        </div>
      </div>

      <div className="space-y-3">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="rounded-[22px] border border-[#DDEFE7] bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[0.96rem] font-bold text-[#173247]">{campaign.name}</p>
                  <span className={`rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] ${statusStyles[campaign.status]}`}>{campaign.status}</span>
                </div>
                <p className="mt-1.5 text-[0.74rem] text-[#62808D]">Audience: {campaign.audience}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="inline-flex items-center gap-2 rounded-full border border-[#DDEFE7] px-3.5 py-1.5 text-[0.72rem] font-bold text-[#476977] transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
                  <PlayCircle className="h-4 w-4" />
                  Preview
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-[#DDEFE7] px-3.5 py-1.5 text-[0.72rem] font-bold text-[#476977] transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600">
                  <Send className="h-4 w-4" />
                  Open
                </button>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-[0.72rem] font-medium text-[#6D8A88]">
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
