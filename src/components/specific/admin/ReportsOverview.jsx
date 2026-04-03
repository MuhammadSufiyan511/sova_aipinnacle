import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, CircleDollarSign, Download, TrendingUp } from 'lucide-react'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const barData = [82, 95, 110, 130, 150]
const maxBar = Math.max(...barData)

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }

export const ReportsOverview = memo(function ReportsOverview() {
  const { t } = useTranslation()

  const mockReports = t('admin.mockData.reports', { returnObjects: true }) || {}
  const mockStats = mockReports.stats || {}
  const mockRows = mockReports.rows || []

  const reportStats = [
    { label: t('admin.reports.stats.revenue'), value: mockStats.revenue || 'Rs. 8.4L', change: mockStats.revenueChange || '+18%', icon: CircleDollarSign, color: 'bg-emerald-50 text-emerald-600' },
    { label: t('admin.reports.stats.orderRate'), value: mockStats.orderRate || '37%', change: mockStats.orderRateChange || '+6%', icon: TrendingUp, color: 'bg-sky-50 text-sky-600' },
    { label: t('admin.reports.stats.resolved'), value: mockStats.resolved || '1,284', change: mockStats.resolvedChange || '+22%', icon: BarChart3, color: 'bg-violet-50 text-violet-600' },
  ]

  const weeklyRows = [
    { label: t('common.days.mon'), chats: 142, orders: 24, revenue: mockRows[0]?.revenue || 'Rs. 82k', rate: mockRows[0]?.rate || '16.9%' },
    { label: t('common.days.tue'), chats: 164, orders: 29, revenue: mockRows[1]?.revenue || 'Rs. 95k', rate: mockRows[1]?.rate || '17.7%' },
    { label: t('common.days.wed'), chats: 178, orders: 31, revenue: mockRows[2]?.revenue || 'Rs. 1.1L', rate: mockRows[2]?.rate || '17.4%' },
    { label: t('common.days.thu'), chats: 191, orders: 36, revenue: mockRows[3]?.revenue || 'Rs. 1.3L', rate: mockRows[3]?.rate || '18.8%' },
    { label: t('common.days.fri'), chats: 205, orders: 41, revenue: mockRows[4]?.revenue || 'Rs. 1.5L', rate: mockRows[4]?.rate || '20.0%' },
  ]

  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="mx-auto flex w-[94%] flex-col gap-5 sm:w-full admin-reports-shell">
      {/* Header */}
      <Motion.div variants={item} className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-center sm:text-left">
        <div className="max-w-md">
          <h2 className="font-display text-[1.2rem] font-bold text-[#173247] sm:text-[1.35rem] admin-card-title">{t('admin.reports.title')}</h2>
          <p className="mt-0.5 text-[0.7rem] leading-5 text-[#62808D] sm:text-[0.74rem] admin-card-desc">{t('admin.reports.subtitle')}</p>
        </div>
        <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#DDEFE7] bg-white px-4 py-2.5 text-[0.78rem] font-bold text-[#476977] shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 admin-btn-secondary">
          <Download className="h-4 w-4" /> {t('admin.reports.exportBtn')}
        </button>
      </Motion.div>

      {/* KPI Cards */}
      <Motion.div variants={item} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {reportStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-4 rounded-[22px] border border-[#DDEFE7] bg-white p-4 text-center shadow-sm sm:flex-row sm:text-left admin-stat-box">
            <div className="flex w-full items-center justify-between sm:w-auto sm:flex-col sm:gap-2">
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${stat.color} admin-stat-icon`}>
                <stat.icon className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[0.68rem] font-extrabold text-[#059669] admin-pill sm:hidden">
                <ArrowUpRight className="h-3 w-3" /> {stat.change}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-2 sm:justify-between">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88] admin-stat-label">{stat.label}</p>
                <span className="hidden items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[0.68rem] font-extrabold text-[#059669] admin-pill sm:inline-flex">
                  <ArrowUpRight className="h-3 w-3" /> {stat.change}
                </span>
              </div>
              <p className="mt-1 font-display text-[1.4rem] font-extrabold text-[#173247] 2xl:text-[1.6rem] admin-stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </Motion.div>

      {/* Revenue Bar Chart */}
      <Motion.div variants={item} className="rounded-[24px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:rounded-[26px] sm:p-5 admin-card-shell w-full min-w-0">
        <div className="mb-4 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:items-center sm:text-left">
          <div>
            <h3 className="font-display text-[0.96rem] font-bold text-[#173247] admin-card-title">{t('admin.reports.chart.title')}</h3>
            <p className="text-[0.7rem] sm:text-[0.74rem] text-[#62808D] admin-card-desc">{t('admin.reports.chart.subtitle')}</p>
          </div>
          <div className="rounded-full bg-violet-50 px-3 py-1 text-[0.66rem] font-bold text-violet-600 admin-pill">{t('admin.reports.chart.pill')}</div>
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
      <Motion.div
        variants={item}
        className="overflow-hidden rounded-[24px] border border-[#DDEFE7] bg-white shadow-sm sm:rounded-[26px] admin-card-shell w-full min-w-0"
      >
        {/* Header */}
        <div className="border-b border-[#DDEFE7] px-4 py-4 text-center sm:px-5 sm:text-left">
          <h3 className="font-display text-[0.96rem] font-bold text-[#173247] admin-card-title">
            {t('admin.reports.table.title')}
          </h3>
          <p className="mt-0.5 text-[0.7rem] sm:text-[0.74rem] text-[#62808D] admin-card-desc">
            {t('admin.reports.table.subtitle')}
          </p>
        </div>

        {/* ── MOBILE: stacked cards (hidden on md+) ─────────────── */}
        <div className="divide-y divide-[#DDEFE7] md:hidden">
          {weeklyRows.map((row) => (
            <div key={row.label} className="px-4 py-4 transition hover:bg-[#F8FDFB]">
              <div className="mb-3.5 flex items-center justify-between">
                <span className="text-[0.88rem] font-bold text-[#295565]">{row.label}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-0.5 text-[0.68rem] font-bold text-[#059669] admin-pill">
                  <ArrowUpRight className="h-3 w-3" /> {row.rate}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-[12px] bg-[#F2FBF7] px-2.5 py-2.5 text-center">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#6D8A88]">{t('admin.reports.table.headers.chats')}</p>
                  <p className="mt-0.5 text-[0.82rem] font-bold text-[#476977]">{row.chats}</p>
                </div>
                <div className="rounded-[12px] bg-[#F2FBF7] px-2.5 py-2.5 text-center">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#6D8A88]">{t('admin.reports.table.headers.orders')}</p>
                  <p className="mt-0.5 text-[0.82rem] font-bold text-[#476977]">{row.orders}</p>
                </div>
                <div className="rounded-[12px] bg-[#F2FBF7] px-2.5 py-2.5 text-center">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#6D8A88]">{t('admin.reports.table.headers.revenue')}</p>
                  <p className="mt-0.5 text-[0.82rem] font-extrabold text-[#173247]">{row.revenue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: standard table (hidden below md) ─────────── */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="bg-[#F2FBF7] text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88] admin-table-header">
                <th className="px-5 py-3 text-left">{t('admin.reports.table.headers.day')}</th>
                <th className="px-5 py-3 text-left">{t('admin.reports.table.headers.chats')}</th>
                <th className="px-5 py-3 text-left">{t('admin.reports.table.headers.orders')}</th>
                <th className="px-5 py-3 text-left">{t('admin.reports.table.headers.conversion')}</th>
                <th className="px-5 py-3 text-left">{t('admin.reports.table.headers.revenue')}</th>
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
})
