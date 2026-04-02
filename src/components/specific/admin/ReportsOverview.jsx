import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, CircleDollarSign, Download, TrendingUp } from 'lucide-react'

const reportStats = [
  { label: 'Revenue influenced', value: 'Rs. 8.4L', change: '+18%', icon: CircleDollarSign, color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Lead-to-order rate', value: '37%', change: '+6%', icon: TrendingUp, color: 'bg-sky-50 text-sky-600' },
  { label: 'Chats resolved', value: '1,284', change: '+22%', icon: BarChart3, color: 'bg-violet-50 text-violet-600' },
]

const weeklyRows = [
  { label: 'Mon', chats: 142, orders: 24, revenue: 'Rs. 82k', rate: '16.9%' },
  { label: 'Tue', chats: 164, orders: 29, revenue: 'Rs. 95k', rate: '17.7%' },
  { label: 'Wed', chats: 178, orders: 31, revenue: 'Rs. 1.1L', rate: '17.4%' },
  { label: 'Thu', chats: 191, orders: 36, revenue: 'Rs. 1.3L', rate: '18.8%' },
  { label: 'Fri', chats: 205, orders: 41, revenue: 'Rs. 1.5L', rate: '20.0%' },
]

const barData = [82, 95, 110, 130, 150]
const maxBar = Math.max(...barData)

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }

export function ReportsOverview() {
  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-5 admin-reports-shell">
      {/* Header */}
      <Motion.div variants={item} className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-[1.2rem] font-bold text-[#173247] sm:text-[1.35rem] admin-card-title">Sales Reports</h2>
          <p className="mt-0.5 text-[0.7rem] leading-5 text-[#62808D] sm:text-[0.74rem] admin-card-desc">Track how SOVA converts WhatsApp conversations into orders, revenue, and faster replies.</p>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#DDEFE7] bg-white px-4 py-2.5 text-[0.78rem] font-bold text-[#476977] shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 sm:w-auto admin-btn-secondary">
          <Download className="h-4 w-4" /> Export report
        </button>
      </Motion.div>

      {/* KPI Cards */}
      <Motion.div variants={item} className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
        {reportStats.map((stat) => (
          <div key={stat.label} className="rounded-[22px] border border-[#DDEFE7] bg-white p-4 shadow-sm admin-stat-box">
            <div className="flex items-center justify-between">
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${stat.color} admin-stat-icon`}>
                <stat.icon className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[0.68rem] font-extrabold text-[#059669] admin-pill">
                <ArrowUpRight className="h-3 w-3" /> {stat.change}
              </span>
            </div>
            <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88] admin-stat-label">{stat.label}</p>
            <p className="mt-1 font-display text-[1.7rem] font-extrabold text-[#173247] admin-stat-value">{stat.value}</p>
          </div>
        ))}
      </Motion.div>

      {/* Revenue Bar Chart */}
      <Motion.div variants={item} className="rounded-[26px] border border-[#DDEFE7] bg-white p-5 shadow-sm admin-card-shell">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">Revenue influenced by SOVA</h3>
            <p className="text-[0.74rem] text-[#62808D] admin-card-desc">Daily tracked sales emerging from automated conversations</p>
          </div>
          <div className="rounded-full bg-violet-50 px-3 py-1 text-[0.66rem] font-bold text-violet-600 admin-pill">This week</div>
        </div>
        <div className="flex h-44 items-end justify-between gap-3 pt-4 admin-chart-container">
          {weeklyRows.map((row, i) => (
            <div key={row.label} className="group flex flex-1 flex-col items-center gap-2">
              <span className="hidden text-[0.62rem] font-bold text-[#10B981] opacity-0 transition group-hover:opacity-100 sm:block">{row.revenue}</span>
              <Motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(barData[i] / maxBar) * 140}px` }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: 'easeOut' }}
                className="w-full rounded-t-[14px] bg-gradient-to-t from-[#10B981] via-[#34D399] to-[#A78BFA] shadow-[0_8px_20px_rgba(16,185,129,0.2)] transition group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.35)] admin-chart-bar"
              />
              <span className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-[#6D8A88]">{row.label}</span>
            </div>
          ))}
        </div>
      </Motion.div>

      {/* Weekly Table */}
      <Motion.div variants={item} className="overflow-hidden rounded-[26px] border border-[#DDEFE7] bg-white shadow-sm admin-card-shell">
        <div className="border-b border-[#DDEFE7] px-5 py-4">
          <h3 className="font-display text-[0.96rem] font-bold text-[#173247] admin-card-title">Weekly performance snapshot</h3>
          <p className="mt-0.5 text-[0.74rem] text-[#62808D] admin-card-desc">Chat volume, orders, conversion rate, and revenue influenced daily by automation.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="bg-[#F2FBF7] text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88] admin-table-header">
                <th className="px-5 py-3 text-left">Day</th>
                <th className="px-5 py-3 text-left">Chats</th>
                <th className="px-5 py-3 text-left">Orders</th>
                <th className="px-5 py-3 text-left">Conversion</th>
                <th className="px-5 py-3 text-left">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDEFE7] admin-table-body">
              {weeklyRows.map((row) => (
                <tr key={row.label} className="transition hover:bg-[#F8FDFB] admin-table-row">
                  <td className="px-5 py-3 text-[0.84rem] font-bold text-[#295565]">{row.label}</td>
                  <td className="px-5 py-3 text-[0.84rem] text-[#476977]">{row.chats}</td>
                  <td className="px-5 py-3 text-[0.84rem] text-[#476977]">{row.orders}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F4FBF8] px-2 py-0.5 text-[0.68rem] font-bold text-[#059669] admin-pill">
                      <ArrowUpRight className="h-3 w-3" /> {row.rate}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-[0.84rem] font-semibold text-[#173247]">{row.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Motion.div>
    </Motion.div>
  )
}
