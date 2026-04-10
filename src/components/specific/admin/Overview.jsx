import { motion as Motion } from 'framer-motion'
import { Activity, ArrowRight, ArrowUpRight, Box, Clock3, Files, MessageCircle, Settings, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'
import { ROUTES } from '../../../utils/routes'
import { useTranslation } from 'react-i18next'
import { LeadsBarChart, MainChart, SourceDonut } from './overview/OverviewCharts'

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }


export const Overview = memo(function Overview() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const mockOverview = t('admin.mockData.overview', { returnObjects: true }) || {}
  const mockStats = mockOverview.stats || {}
  const mockActivity = mockOverview.activity || []

  const stats = [
    { name: t('admin.overview.stats.activeConversations'), value: mockStats.active || '142', change: mockStats.activeChange || '+12.5%', icon: MessageCircle, color: 'bg-emerald-50 text-emerald-500' },
    { name: t('admin.overview.stats.qualifiedLeads'), value: mockStats.leads || '89', change: mockStats.leadsChange || '+5.2%', icon: Users, color: 'bg-sky-50 text-sky-500' },
    { name: t('admin.overview.stats.automatedReplies'), value: mockStats.replies || '1,204', change: mockStats.repliesChange || '+24.1%', icon: Activity, color: 'bg-violet-50 text-violet-500' },
    { name: t('admin.overview.stats.avgResponseTime'), value: mockStats.time || '11s', change: mockStats.timeChange || '-34%', icon: Clock3, color: 'bg-amber-50 text-amber-500' },
  ]

  const quickTabs = [
    { label: t('admin.overview.quickActions.businessSettings'), icon: Settings, action: 'settings' },
    { label: t('admin.overview.quickActions.products'), icon: Box, action: 'products' },
    { label: t('admin.overview.quickActions.files'), icon: Files, action: 'files' },
  ]

  const activityFeed = [
    { time: mockActivity[0]?.time || '2 mins ago', title: t('admin.overview.activity.feeds.order'), meta: mockActivity[0]?.meta || 'Electronics - 5 unit bulk request' },
    { time: mockActivity[1]?.time || '9 mins ago', title: t('admin.overview.activity.feeds.followup'), meta: mockActivity[1]?.meta || 'Clothing - cart recovery campaign' },
    { time: mockActivity[2]?.time || '14 mins ago', title: t('admin.overview.activity.feeds.spam'), meta: mockActivity[2]?.meta || 'Repeated low-value message removed' },
  ]

  const handleQuickAction = (action) => {
    if (action === 'products') navigate(ROUTES.adminProducts)
    if (action === 'files') navigate(ROUTES.adminFiles)
    if (action === 'settings') navigate(ROUTES.adminSettings)
  }

  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="mx-auto flex w-[94%] flex-col gap-4 sm:w-full sm:gap-5 admin-overview-shell">
      {/* Quick action tabs */}
      <Motion.div variants={item} className="rounded-[24px] border border-[#DDEFE7] bg-white p-2 sm:p-2.5 shadow-sm admin-card-shell">
        {/* Mobile: 3 cols, icon only. sm+: full label + arrow */}
        <div className="grid grid-cols-3 gap-2">
          {quickTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleQuickAction(tab.action)}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#DDEFE7] bg-[#F2FBF7] px-3.5 py-2.5 text-center text-[0.8rem] font-bold text-[#295565] transition hover:border-emerald-200 hover:bg-[#ECF8F3] hover:text-[#10B981] sm:justify-between sm:text-left admin-quick-tab"
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#10B981] shadow-sm admin-tab-icon">
                  <tab.icon className="h-4 w-4" />
                </span>
                {/* Label hidden on mobile, shown sm+ */}
                <span className="hidden truncate sm:inline">{tab.label}</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#86A29B] transition group-hover:translate-x-1 group-hover:text-[#10B981] hidden sm:block" />
            </button>
          ))}
        </div>
      </Motion.div>

      {/* Stats */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Motion.div key={stat.name} variants={item} className="rounded-[22px] border border-[#DDEFE7] bg-white p-4 shadow-sm admin-stat-box flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="flex w-full items-center justify-between sm:justify-start sm:gap-2">
              <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${stat.color} shadow-sm admin-stat-icon`}>
                <stat.icon className="h-4.5 w-4.5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#059669] admin-stat-change sm:hidden">
                <ArrowUpRight className="h-3 w-3" />
                {stat.change}
              </span>
            </div>
            <div className="w-full mt-3">
               <div className="flex items-center justify-center sm:justify-between">
                  <p className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#6D8A88] admin-stat-label">{stat.name}</p>
                  <span className="hidden items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#059669] admin-stat-change sm:inline-flex">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </span>
               </div>
               <p className="mt-1 font-display text-[1.7rem] font-extrabold text-[#173247] admin-stat-value">{stat.value}</p>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* Charts row 1 */}
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-[1.45fr_0.95fr]">
          <MainChart />
        <Motion.div variants={item} className="rounded-[26px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:p-5 admin-chart-card">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">{t('admin.overview.charts.leadMix.title')}</h3>
              <p className="text-[0.76rem] font-semibold text-[#62808D] admin-card-desc">{t('admin.overview.charts.leadMix.subtitle')}</p>
            </div>
            <ShieldCheck className="h-4.5 w-4.5 text-[#10B981]" />
          </div>
          <div className="mt-4">
            <SourceDonut />
          </div>
        </Motion.div>
      </div>

      {/* Charts row 2 */}
      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Motion.div variants={item} className="rounded-[26px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:p-5 admin-chart-card">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">{t('admin.overview.charts.leadsByDay.title')}</h3>
              <p className="text-[0.76rem] font-semibold text-[#62808D] admin-card-desc">{t('admin.overview.charts.leadsByDay.subtitle')}</p>
            </div>
            <div className="rounded-full bg-violet-50 px-2.5 py-1 text-[0.66rem] font-bold text-violet-600 admin-pill">{t('admin.overview.charts.leadsByDay.pill')}</div>
          </div>
          <LeadsBarChart />
        </Motion.div>

        <Motion.div variants={item} className="rounded-[26px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:p-5 admin-activity-card">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">{t('admin.overview.activity.title')}</h3>
              <p className="text-[0.76rem] font-semibold text-[#62808D] admin-card-desc">{t('admin.overview.activity.subtitle')}</p>
            </div>
            <div className="h-2.5 w-2.5 rounded-full bg-[#10B981] shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
          </div>
          <div className="mt-4 space-y-2.5">
            {activityFeed.map((entry) => (
              <div key={entry.title} className="rounded-[20px] bg-[#F2FBF7] p-3 sm:p-3.5 admin-activity-item text-center sm:text-left">
                <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                  <p className="text-[0.84rem] font-bold text-[#173247]">{entry.title}</p>
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{entry.time}</span>
                </div>
                <p className="mt-1.5 text-[0.8rem] leading-5 text-[#4F7281]">{entry.meta}</p>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </Motion.div>
  )
})
