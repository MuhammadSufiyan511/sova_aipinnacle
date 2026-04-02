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
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-[1.2rem] font-bold text-[#173247]">Sales Reports</h2>
          <p className="mt-0.5 text-[0.74rem] text-[#62808D]">Track how SOVA conversations turn into orders, revenue, and faster customer replies.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-[#DDEFE7] bg-white px-3.5 py-2 text-[0.74rem] font-bold text-[#476977] transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
          <Download className="h-4 w-4" />
          Export report
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {reportStats.map((stat) => (
          <div key={stat.label} className="rounded-[20px] border border-[#DDEFE7] bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#059669]">
                <ArrowUpRight className="h-3 w-3" />
                {stat.change}
              </span>
            </div>
            <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{stat.label}</p>
            <p className="mt-1 font-display text-[1.7rem] font-extrabold text-[#173247]">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-[0.96rem] font-bold text-[#173247]">Weekly performance snapshot</h3>
            <p className="text-[0.74rem] text-[#62808D]">A simple view of chat volume, orders, and revenue influenced by automation.</p>
          </div>
          <ChartNoAxesCombined className="h-5 w-5 text-[#10B981]" />
        </div>

        <div className="mt-4 overflow-hidden rounded-[20px] border border-[#DDEFE7]">
          <div className="grid grid-cols-[0.8fr_1fr_1fr_1fr] bg-[#F2FBF7] px-3 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">
            <span>Day</span>
            <span>Chats</span>
            <span>Orders</span>
            <span>Revenue</span>
          </div>
          {weeklyRows.map((row) => (
            <div key={row.label} className="grid grid-cols-[0.8fr_1fr_1fr_1fr] items-center border-t border-[#DDEFE7] px-3 py-2.5 text-[0.8rem] font-semibold text-[#295565]">
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
