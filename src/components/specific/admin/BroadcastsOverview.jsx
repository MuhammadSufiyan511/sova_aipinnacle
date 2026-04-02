import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Clock3, Megaphone, PlayCircle, Plus, Radio, Send, Sparkles, Users, Zap } from 'lucide-react'
import { useState } from 'react'

const campaigns = [
  {
    id: 1, name: 'Ramzan Offer', status: 'Scheduled',
    audience: '1,240 contacts', sendAt: 'Today, 7:00 PM',
    opens: '—', replies: '—', color: 'bg-amber-50 text-amber-600 border-amber-200',
  },
  {
    id: 2, name: 'New Catalog Drop', status: 'Draft',
    audience: '860 contacts', sendAt: 'Waiting for approval',
    opens: '—', replies: '—', color: 'bg-[#EEF8F3] text-[#476977] border-[#DDEFE7]',
  },
  {
    id: 3, name: 'VIP Follow-up Blast', status: 'Sent',
    audience: '420 contacts', sendAt: 'Yesterday, 5:30 PM',
    opens: '78%', replies: '37%', color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
]

const statCards = [
  { label: 'Scheduled', value: '04', icon: Clock3, tint: 'bg-amber-50 text-amber-500' },
  { label: 'Sent this week', value: '11', icon: Send, tint: 'bg-emerald-50 text-emerald-500' },
  { label: 'Avg response rate', value: '37%', icon: Users, tint: 'bg-violet-50 text-violet-500' },
]

const workflowNodes = [
  { id: 'trigger', label: 'Inbound Message', sub: 'WhatsApp trigger', status: 'active', color: 'border-emerald-400 bg-emerald-50' },
  { id: 'filter', label: 'Intent Filter', sub: 'SOVA detects lead quality', status: 'processing', color: 'border-sky-400 bg-sky-50' },
  { id: 'route', label: 'Route & Reply', sub: 'Auto response sent', status: 'delivered', color: 'border-violet-400 bg-violet-50' },
  { id: 'capture', label: 'Lead Captured', sub: 'CRM entry created', status: 'captured', color: 'border-amber-400 bg-amber-50' },
]

const statusDots = {
  active: 'bg-emerald-500 shadow-[0_0_6px_2px_rgba(16,185,129,0.4)]',
  processing: 'bg-sky-400 shadow-[0_0_6px_2px_rgba(56,189,248,0.4)]',
  delivered: 'bg-violet-400 shadow-[0_0_6px_2px_rgba(167,139,250,0.4)]',
  captured: 'bg-amber-400 shadow-[0_0_6px_2px_rgba(251,191,36,0.4)]',
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }

export function BroadcastsOverview() {
  const [selected, setSelected] = useState(null)

  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-5 admin-broadcast-shell">
      {/* Header */}
      <Motion.div variants={item} className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-[1.35rem] font-bold text-[#173247] admin-card-title">Broadcast Campaigns</h2>
          <p className="mt-0.5 text-[0.78rem] text-[#62808D] admin-card-desc">Schedule WhatsApp messages to leads, customers, and segments — powered by SOVA.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-[0.82rem] font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600 admin-btn-primary">
          <Plus className="h-4 w-4" /> New Broadcast
        </button>
      </Motion.div>

      {/* KPI Row */}
      <Motion.div variants={item} className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
        {statCards.map((s) => (
          <div key={s.label} className="flex items-center gap-3.5 rounded-[22px] border border-[#DDEFE7] bg-white p-4 shadow-sm admin-stat-box">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${s.tint} admin-stat-icon`}>
              <s.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88] admin-stat-label">{s.label}</p>
              <p className="mt-0.5 font-display text-[1.6rem] font-extrabold text-[#173247] admin-stat-value">{s.value}</p>
            </div>
          </div>
        ))}
      </Motion.div>

      {/* Automation Workflow Preview */}
      <Motion.div variants={item} className="overflow-hidden rounded-[26px] border border-[#DDEFE7] bg-white p-5 shadow-sm admin-card-shell">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">Automation workflow</h3>
            <p className="text-[0.74rem] text-[#62808D] admin-card-desc">How SOVA routes incoming WhatsApp messages into qualified leads</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[0.66rem] font-bold text-emerald-600 admin-pill">
            <Radio className="h-3 w-3" /> Live
          </span>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-0">
          {workflowNodes.map((node, i) => (
            <div key={node.id} className="flex flex-1 items-stretch space-x-2 sm:flex-col">
              <div className={`flex flex-1 flex-col justify-center rounded-[20px] border-2 p-4 transition-all hover:shadow-md ${node.color} cursor-pointer admin-workflow-node`}>
                <div className="flex items-center gap-2 sm:flex-col sm:items-start sm:gap-1">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${statusDots[node.status]}`} />
                  <p className="text-[0.84rem] font-bold text-[#173247]">{node.label}</p>
                </div>
                <p className="mt-1.5 text-[0.68rem] text-[#62808D]">{node.sub}</p>
                <span className="mt-2 inline-block self-start rounded-full bg-white/70 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-[#476977]">{node.status}</span>
              </div>
              {i < workflowNodes.length - 0  && (
                <div className="flex items-center justify-center px-2 sm:py-2 sm:px-0  admin-workflow-separator">
                  <Zap className="h-4 w-4 shrink-0 text-[#10B981] opacity-60 rotate-90 sm:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Motion.div>

      {/* Campaign List */}
      <Motion.div variants={item} className="space-y-3">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#6D8A88]">All campaigns</p>
        <AnimatePresence>
          {campaigns.map((c) => (
            <Motion.div key={c.id} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              onClick={() => setSelected(selected === c.id ? null : c.id)}
              className="cursor-pointer rounded-[22px] border border-[#DDEFE7] bg-white p-3.5 sm:p-4 shadow-sm transition-all hover:border-emerald-200 hover:shadow-md admin-item-row"
            >
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[0.94rem] font-bold text-[#173247] admin-item-title">{c.name}</p>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] ${c.color} admin-status-pill`}>{c.status}</span>
                  </div>
                  <p className="mt-1 text-[0.74rem] text-[#62808D] admin-item-desc">Audience: {c.audience}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-1.5 text-[0.72rem] font-bold text-[#476977] transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 admin-btn-secondary">
                    <PlayCircle className="h-3.5 w-3.5" /> Preview
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-[#F2FBF7] px-3 py-1.5 text-[0.72rem] font-bold text-[#295565] transition hover:bg-[#E0F4EC] admin-btn-tertiary">
                    <Send className="h-3.5 w-3.5" /> Open
                  </button>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-[0.72rem] font-medium text-[#6D8A88] admin-item-meta">
                <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{c.sendAt}</span>
                <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-[#10B981]" />Powered by SOVA automation</span>
                {c.opens !== '—' && <span className="font-semibold text-[#295565]">Opens: {c.opens} · Replies: {c.replies}</span>}
              </div>
            </Motion.div>
          ))}
        </AnimatePresence>
      </Motion.div>
    </Motion.div>
  )
}
