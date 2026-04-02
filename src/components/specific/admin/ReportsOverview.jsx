import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, ChartNoAxesCombined, CircleDollarSign, Download, TrendingUp } from 'lucide-react'

const reportStats = [
  { label: 'Revenue influenced', value: 'Rs. 8.4L', change: '+18%', icon: CircleDollarSign, color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Lead-to-order rate', value: '37%', change: '+6%', icon: TrendingUp, color: 'bg-sky-50 text-sky-600' },
  { label: 'Chats resolved', value: '1,284', change: '+22%', icon: BarChart3, color: 'bg-violet-50 text-violet-600' },
]

const weeklyRows = [
  { label: 'Mon', chats: 142, orders: 24, revenue: 'Rs. 82k' },
  { label: 'Tue', chats: 164, orders: 29, revenue: 'Rs. 95k' },
  { label: 'Wed', chats: 178, orders: 31, revenue: 'Rs. 1.1L' },
  { label: 'Thu', chats: 191, orders: 36, revenue: 'Rs. 1.3L' },
  { label: 'Fri', chats: 205, orders: 41, revenue: 'Rs. 1.5L' },
]

export function ReportsOverview() {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-[1.45rem] font-bold text-slate-800">Sales Reports</h2>
          <p className="mt-0.5 text-[0.82rem] text-slate-400">Track how SOVA conversations turn into orders, revenue, and faster customer replies.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[0.78rem] font-bold text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
          <Download className="h-4 w-4" />
          Export report
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {reportStats.map((stat) => (
          <div key={stat.label} className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#059669]">
                <ArrowUpRight className="h-3 w-3" />
                {stat.change}
              </span>
            </div>
            <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">{stat.label}</p>
            <p className="mt-1 font-display text-3xl font-extrabold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-[1.05rem] font-bold text-slate-800">Weekly performance snapshot</h3>
            <p className="text-[0.8rem] text-slate-400">A simple view of chat volume, orders, and revenue influenced by automation.</p>
          </div>
          <ChartNoAxesCombined className="h-5 w-5 text-[#10B981]" />
        </div>

        <div className="mt-5 overflow-hidden rounded-[22px] border border-slate-100">
          <div className="grid grid-cols-[0.8fr_1fr_1fr_1fr] bg-[#F8FAFC] px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-400">
            <span>Day</span>
            <span>Chats</span>
            <span>Orders</span>
            <span>Revenue</span>
          </div>
          {weeklyRows.map((row) => (
            <div key={row.label} className="grid grid-cols-[0.8fr_1fr_1fr_1fr] items-center border-t border-slate-100 px-4 py-3 text-[0.88rem] font-semibold text-slate-700">
              <span>{row.label}</span>
              <span>{row.chats}</span>
              <span>{row.orders}</span>
              <span>{row.revenue}</span>
            </div>
          ))}
        </div>
      </div>
    </Motion.div>
  )
}
