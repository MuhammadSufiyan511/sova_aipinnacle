import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Clock3, Megaphone, PlayCircle, Plus, Radio, Send, Sparkles, Users, Zap } from 'lucide-react'
import { useState, memo } from 'react'
import { useTranslation } from 'react-i18next'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }

const statusDots = {
  active: 'bg-emerald-500 shadow-[0_0_6px_2px_rgba(16,185,129,0.4)]',
  processing: 'bg-sky-400 shadow-[0_0_6px_2px_rgba(56,189,248,0.4)]',
  delivered: 'bg-violet-400 shadow-[0_0_6px_2px_rgba(167,139,250,0.4)]',
  captured: 'bg-amber-400 shadow-[0_0_6px_2px_rgba(251,191,36,0.4)]',
}

export const BroadcastsOverview = memo(function BroadcastsOverview() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)

  const mockCampaigns = t('admin.mockData.broadcasts.campaigns', { returnObjects: true }) || []
  const campaignsData = [
    { ...mockCampaigns[0], id: 1, status: 'Scheduled', opens: '—', replies: '—', color: 'bg-amber-50 text-amber-600 border-amber-200' },
    { ...mockCampaigns[1], id: 2, status: 'Draft', opens: '—', replies: '—', color: 'bg-[#EEF8F3] text-[#476977] border-[#DDEFE7]' },
    { ...mockCampaigns[2], id: 3, status: 'Sent', opens: '78%', replies: '37%', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  ]

  const statCards = [
    { label: t('admin.broadcasts.stats.scheduled'), value: '04', icon: Clock3, tint: 'bg-amber-50 text-amber-500' },
    { label: t('admin.broadcasts.stats.sentWeek'), value: '11', icon: Send, tint: 'bg-emerald-50 text-emerald-500' },
    { label: t('admin.broadcasts.stats.avgResponse'), value: '37%', icon: Users, tint: 'bg-violet-50 text-violet-500' },
  ]

  const workflowNodes = [
    { id: 'trigger', label: t('admin.broadcasts.workflow.nodes.trigger.label'), sub: t('admin.broadcasts.workflow.nodes.trigger.sub'), status: 'active', color: 'border-emerald-400 bg-emerald-50' },
    { id: 'filter', label: t('admin.broadcasts.workflow.nodes.filter.label'), sub: t('admin.broadcasts.workflow.nodes.filter.sub'), status: 'processing', color: 'border-sky-400 bg-sky-50' },
    { id: 'route', label: t('admin.broadcasts.workflow.nodes.route.label'), sub: t('admin.broadcasts.workflow.nodes.route.sub'), status: 'delivered', color: 'border-violet-400 bg-violet-50' },
    { id: 'capture', label: t('admin.broadcasts.workflow.nodes.capture.label'), sub: t('admin.broadcasts.workflow.nodes.capture.sub'), status: 'captured', color: 'border-amber-400 bg-amber-50' },
  ]

  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="mx-auto flex w-[94%] flex-col gap-5 sm:w-full admin-broadcast-shell">
      {/* Header */}
      <Motion.div variants={item} className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <h2 className="font-display text-[1.35rem] font-bold text-[#173247] admin-card-title">{t('admin.broadcasts.title')}</h2>
          <p className="mt-0.5 text-[0.78rem] text-[#62808D] admin-card-desc">{t('admin.broadcasts.subtitle')}</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-[0.82rem] font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600 admin-btn-primary">
          <Plus className="h-4 w-4" /> {t('admin.broadcasts.newBtn')}
        </button>
      </Motion.div>

      {/* KPI Row */}
      <Motion.div variants={item} className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
        {statCards.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-3.5 rounded-[22px] border border-[#DDEFE7] bg-white p-4 text-center shadow-sm sm:flex-row sm:text-left admin-stat-box">
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
        <div className="mb-4 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">{t('admin.broadcasts.workflow.title')}</h3>
            <p className="text-[0.74rem] text-[#62808D] admin-card-desc">{t('admin.broadcasts.workflow.subtitle')}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[0.66rem] font-bold text-emerald-600 admin-pill">
            <Radio className="h-3 w-3" /> {t('admin.common.live')}
          </span>
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:items-stretch sm:gap-0">
          {workflowNodes.map((node, i) => (
            <div key={node.id} className="flex flex-col space-x-2 items-stretch sm:flex-1">
              <div className={`flex flex-col  justify-center rounded-[20px] border-2 p-4 transition-all hover:shadow-md ${node.color} cursor-pointer admin-workflow-node`}>
                <div className="flex items-center gap-2 sm:flex-col sm:items-start sm:gap-1">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${statusDots[node.status]}`} />
                  <p className="text-[0.84rem] font-bold text-[#173247]">{node.label}</p>
                </div>
                <p className="mt-1.5 text-[0.68rem] text-[#62808D]">{node.sub}</p>
                <span className="mt-2 inline-block self-start rounded-full bg-white/70 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-[#476977]">{t(`admin.broadcasts.workflow.status.${node.status}`, node.status)}</span>
              </div>
              {i < workflowNodes.length - 1 && (
                <div className="flex items-center justify-center py-2 sm:px-0 sm:py-2 admin-workflow-separator">
                  <Zap className="h-4 w-4 shrink-0 text-[#10B981] opacity-60 rotate-90 sm:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Motion.div>

      {/* Campaign List */}
      <Motion.div variants={item} className="space-y-3">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#6D8A88]">{t('admin.broadcasts.campaigns.title')}</p>
        <AnimatePresence>
          {campaignsData.map((c) => {
            const statusKey = `admin.broadcasts.campaigns.status.${c.status.toLowerCase()}`
            return (
              <Motion.div key={c.id} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                onClick={() => setSelected(selected === c.id ? null : c.id)}
                className="cursor-pointer rounded-[22px] border border-[#DDEFE7] bg-white p-3.5 sm:p-4 shadow-sm transition-all hover:border-emerald-200 hover:shadow-md admin-item-row"
              >
                <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-center sm:text-left">
                  <div>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                      <p className="text-[0.94rem] font-bold text-[#173247] admin-item-title">{c.name}</p>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] ${c.color} admin-status-pill`}>{t(statusKey)}</span>
                    </div>
                    <p className="mt-1 text-[0.74rem] text-[#62808D] admin-item-desc">
                      {t('admin.broadcasts.campaigns.meta.audience', { count: c.audience })}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="inline-flex items-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-1.5 text-[0.72rem] font-bold text-[#476977] transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 admin-btn-secondary">
                      <PlayCircle className="h-3.5 w-3.5" /> {t('admin.common.preview')}
                    </button>
                    <button className="inline-flex items-center gap-1.5 rounded-full bg-[#F2FBF7] px-3 py-1.5 text-[0.72rem] font-bold text-[#295565] transition hover:bg-[#E0F4EC] admin-btn-tertiary">
                      <Send className="h-3.5 w-3.5" /> {t('admin.common.open')}
                    </button>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-[0.72rem] font-medium text-[#6D8A88] sm:justify-start admin-item-meta">
                  <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{c.sendAt}</span>
                  <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-[#10B981]" />{t('admin.broadcasts.campaigns.meta.powered')}</span>
                  {c.opens !== '—' && (
                    <span className="font-semibold text-[#295565]">
                      {t('admin.broadcasts.campaigns.meta.stats', { opens: c.opens, replies: c.replies })}
                    </span>
                  )}
                </div>
              </Motion.div>
            )
          })}
        </AnimatePresence>
      </Motion.div>
    </Motion.div>
  )
})
