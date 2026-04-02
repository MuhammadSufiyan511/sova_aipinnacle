import { motion as Motion } from 'framer-motion'
import { Activity, ArrowRight, ArrowUpRight, Box, Clock3, MessageCircle, Settings, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'

const stats = [
  { name: 'Active Conversations', value: '142', change: '+12.5%', icon: MessageCircle, color: 'bg-emerald-50 text-emerald-500' },
  { name: 'Qualified Leads', value: '89', change: '+5.2%', icon: Users, color: 'bg-sky-50 text-sky-500' },
  { name: 'Automated Replies', value: '1,204', change: '+24.1%', icon: Activity, color: 'bg-violet-50 text-violet-500' },
  { name: 'Avg. Response Time', value: '11s', change: '-34%', icon: Clock3, color: 'bg-amber-50 text-amber-500' },
]

const chartData = [18, 26, 24, 38, 44, 52, 48, 62, 58, 74, 80, 94]
const leadData = [28, 34, 31, 44, 50, 56, 62]
const sourceData = [
  { label: 'Serious buyers', value: 64, color: '#10B981' },
  { label: 'Follow-ups', value: 24, color: '#A78BFA' },
  { label: 'Spam filtered', value: 12, color: '#F59E0B' },
]
const activityFeed = [
  { time: '2 mins ago', title: 'New order intent detected', meta: 'Electronics - 5 unit bulk request' },
  { time: '9 mins ago', title: 'Follow-up sent automatically', meta: 'Clothing - cart recovery campaign' },
  { time: '14 mins ago', title: 'Spam inquiry filtered', meta: 'Repeated low-value message removed' },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }

function MainChart() {
  const points = chartData.map((value, index) => `${index * (100 / (chartData.length - 1))},${100 - value}`).join(' ')

  return (
    <div className="relative h-[250px] w-full px-1 pt-4">
      <div className="pointer-events-none absolute inset-x-0 bottom-10 top-6 grid grid-rows-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="border-t border-dashed border-[#DBEEE7]" />
        ))}
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`M 0 100 L ${points} L 100 100 Z`} fill="url(#chartGradient)" />
        <Motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          d={`M ${points}`}
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {chartData.map((value, index) => (
          <circle key={`${value}-${index}`} cx={index * (100 / (chartData.length - 1))} cy={100 - value} r="1.6" fill="white" stroke="#10B981" strokeWidth="1" />
        ))}
      </svg>
      <div className="mt-2 flex items-center justify-between px-1 text-[0.64rem] font-semibold text-[#6D8A88]">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  )
}

function LeadsBarChart() {
  const maxValue = Math.max(...leadData)

  return (
    <div className="flex h-[170px] items-end justify-between gap-2.5 pt-5">
      {leadData.map((value, index) => (
        <div key={`${value}-${index}`} className="flex flex-1 flex-col items-center gap-3">
          <Motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(value / maxValue) * 150}px` }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className="w-full rounded-t-[18px] bg-gradient-to-t from-[#10B981] via-[#34D399] to-[#A78BFA] shadow-[0_10px_25px_rgba(16,185,129,0.18)]"
          />
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
          </span>
        </div>
      ))}
    </div>
  )
}

function SourceDonut() {
  const total = sourceData.reduce((sum, item) => sum + item.value, 0)
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const segments = sourceData.map((item, index) => {
    const previousValues = sourceData.slice(0, index).reduce((sum, current) => sum + (current.value / total) * circumference + 4, 0)
    const dash = (item.value / total) * circumference

    return {
      ...item,
      dash,
      offset: -previousValues,
    }
  })

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      <div className="relative flex h-40 w-40 items-center justify-center">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="#E6F5EE" strokeWidth="14" />
          {segments.map((item) => (
            <circle
              key={item.label}
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth="14"
              strokeDasharray={`${item.dash} ${circumference - item.dash}`}
              strokeDashoffset={item.offset}
              strokeLinecap="round"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">Lead mix</p>
          <p className="mt-1 font-display text-xl font-bold text-[#173247]">64%</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        {sourceData.map((item) => (
          <div key={item.label} className="flex items-center justify-between rounded-2xl bg-[#F2FBF7] px-3 py-2.5">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[0.84rem] font-medium text-[#476977]">{item.label}</span>
            </div>
            <span className="text-[0.84rem] font-bold text-[#173247]">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const quickTabs = [
  { label: 'View Products', icon: Box, action: 'products' },
  { label: 'Business tone setting', icon: Settings, action: 'settings' },
  { label: 'Read Notifications', icon: MessageCircle, action: 'notifications' },
]

export function Overview() {
  const navigate = useNavigate()

  const handleQuickAction = (action) => {
    if (action === 'products') navigate(ROUTES.adminProducts)
    if (action === 'settings') navigate(ROUTES.adminSettings)
    if (action === 'notifications') navigate(ROUTES.adminNotifications)
  }

  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-4 sm:gap-5 admin-overview-shell">
      <Motion.div variants={item} className="rounded-[24px] border border-[#DDEFE7] bg-white p-2 sm:p-2.5 shadow-sm admin-card-shell">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {quickTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleQuickAction(tab.action)}
              className="group inline-flex w-full items-center justify-between gap-2.5 rounded-full border border-[#DDEFE7] bg-[#F2FBF7] px-3.5 py-2.5 text-left text-[0.8rem] font-bold text-[#295565] transition hover:border-emerald-200 hover:bg-[#ECF8F3] hover:text-[#10B981] admin-quick-tab"
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#10B981] shadow-sm admin-tab-icon">
                  <tab.icon className="h-4 w-4" />
                </span>
                <span className="truncate">{tab.label}</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#86A29B] transition group-hover:translate-x-1 group-hover:text-[#10B981]" />
            </button>
          ))}
        </div>
      </Motion.div>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
        {stats.map((stat) => (
          <Motion.div key={stat.name} variants={item} className="rounded-[22px] border border-[#DDEFE7] bg-white p-4 shadow-sm admin-stat-box">
            <div className="flex items-center justify-between">
              <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${stat.color} shadow-sm admin-stat-icon`}>
                <stat.icon className="h-4.5 w-4.5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#059669] admin-stat-change">
                <ArrowUpRight className="h-3 w-3" />
                {stat.change}
              </span>
            </div>
            <p className="mt-3 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#6D8A88] admin-stat-label">{stat.name}</p>
            <p className="mt-1 font-display text-[1.7rem] font-extrabold text-[#173247] admin-stat-value">{stat.value}</p>
          </Motion.div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-[1.45fr_0.95fr]">
        <Motion.div variants={item} className="rounded-[26px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:p-5 admin-chart-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">Conversation to sale trend</h3>
              <p className="text-[0.76rem] font-semibold text-[#62808D] admin-card-desc">Live weekly automation performance</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.66rem] font-bold text-emerald-600 admin-pill">
              <TrendingUp className="h-3.5 w-3.5" /> +28% this month
            </div>
          </div>
          <MainChart />
        </Motion.div>

        <Motion.div variants={item} className="rounded-[26px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:p-5 admin-chart-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">Lead quality mix</h3>
              <p className="text-[0.76rem] font-semibold text-[#62808D] admin-card-desc">Where SOVA is focusing next</p>
            </div>
            <ShieldCheck className="h-4.5 w-4.5 text-[#10B981]" />
          </div>
          <div className="mt-4">
            <SourceDonut />
          </div>
        </Motion.div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Motion.div variants={item} className="rounded-[26px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:p-5 admin-chart-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">Qualified leads by day</h3>
              <p className="text-[0.76rem] font-semibold text-[#62808D] admin-card-desc">Real-time lead capture volume</p>
            </div>
            <div className="rounded-full bg-violet-50 px-2.5 py-1 text-[0.66rem] font-bold text-violet-600 admin-pill">Updated live</div>
          </div>
          <LeadsBarChart />
        </Motion.div>

        <Motion.div variants={item} className="rounded-[26px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:p-5 admin-activity-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">Recent automation activity</h3>
              <p className="text-[0.76rem] font-semibold text-[#62808D] admin-card-desc">What SOVA handled just now</p>
            </div>
            <div className="h-2.5 w-2.5 rounded-full bg-[#10B981] shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
          </div>
          <div className="mt-4 space-y-2.5">
            {activityFeed.map((entry) => (
              <div key={entry.title} className="rounded-[20px] bg-[#F2FBF7] p-3 sm:p-3.5 admin-activity-item">
                <div className="flex items-center justify-between gap-3">
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
}
