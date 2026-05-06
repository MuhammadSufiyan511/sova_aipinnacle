import { motion as Motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ShieldCheck, Lock, Unlock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../../utils/routes'
import { useOverviewData } from '../../../hooks/useOverviewData'
import { useUserFeatures } from '../../../hooks/useUserFeatures'
import { MainChart } from './overview/MainChart'
import { LeadsBarChart } from './overview/LeadsBarChart'
import { SourceDonut } from './overview/SourceDonut'

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }

const RTL_LANGS = ['ur', 'ar', 'hi', 'bn']

// Helper for generating the lock overlay UI
const LockOverlay = ({ isLocked, text, title, isRTL }) => {
  if (!isLocked) return null
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[inherit] bg-white/70 backdrop-blur-[10px] transition-all duration-300">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900/10 shadow-sm backdrop-blur-lg">
          <Lock className={`h-4 w-4 sm:h-5 sm:w-5 text-slate-700 ${isRTL ? '[transform:scaleX(-1)]' : ''}`} />
        </div>
        <span className="text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-widest text-slate-700">{text}</span>
        {title && <h4 className="mt-1 font-display text-[1rem] font-extrabold text-[#173247] drop-shadow-sm">{title}</h4>}
      </div>
    </div>
  )
}

export const Overview = memo(function Overview() {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const { t, stats, quickTabs, activityFeed } = useOverviewData()
  const { manager } = useUserFeatures()
  const isRTL = RTL_LANGS.includes(i18n.language)

  const locks = {
    stats: manager.isFeatureLocked('stats'),
    main: manager.isFeatureLocked('mainChart'),
    donut: manager.isFeatureLocked('donutChart'),
    bar: manager.isFeatureLocked('barChart')
  }

  const handleQuickAction = (action) => {
    if (action === 'products') navigate(ROUTES.adminProducts)
    if (action === 'files') navigate(ROUTES.adminFiles)
    if (action === 'settings') navigate(ROUTES.adminSettings)
  }

  const unlockText = t('admin.common.unlockToView', 'Unlock to view')

  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="mx-auto flex w-[94%] flex-col gap-4 sm:w-full sm:gap-5 admin-overview-shell">
      {/* Quick action tabs */}
      <Motion.div variants={item} className="rounded-[24px] border border-[#DDEFE7] bg-white p-2 sm:p-2.5 shadow-sm admin-card-shell">
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
          <Motion.div key={stat.name} variants={item} className="relative rounded-[22px] border border-[#DDEFE7] bg-white p-4 shadow-sm admin-stat-box flex flex-col items-center text-center sm:items-start sm:text-left group">
            <button className={`absolute top-4 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/5 text-slate-400 transition-all cursor-not-allowed ${isRTL ? 'left-4' : 'right-4'}`}>
              {locks.stats ? <Lock className={`h-3.5 w-3.5 opacity-50 ${isRTL ? '[transform:scaleX(-1)]' : ''}`} /> : <Unlock className={`h-3.5 w-3.5 text-emerald-500 ${isRTL ? '[transform:scaleX(-1)]' : ''}`} />}
            </button>
            <div className={`w-full transition-all duration-300 ${locks.stats ? 'opacity-10 blur-md pointer-events-none' : ''}`}>
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
                <div className="flex items-center justify-center sm:justify-between pr-8">
                  <p className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#1E293B] admin-stat-label">{stat.name}</p>
                  <span className="hidden items-center gap-1 rounded-full bg-[#F4FBF8] px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#059669] admin-stat-change sm:inline-flex">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </span>
                </div>
                <p className="mt-1 font-display text-[1.7rem] font-extrabold text-[#173247] admin-stat-value">{stat.value}</p>
              </div>
            </div>
            <LockOverlay isLocked={locks.stats} text={t('admin.common.locked', 'Locked')} title={stat.name} isRTL={isRTL} />
          </Motion.div>
        ))}
      </div>

      {/* Charts row 1 */}
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-[1.45fr_0.95fr]">
        <Motion.div variants={item} className="relative group">
          <button className={`absolute top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/5 text-slate-400 transition-all cursor-not-allowed ${isRTL ? 'left-5' : 'right-5'}`}>
            {locks.main ? <Lock className={`h-4 w-4 opacity-50 ${isRTL ? '[transform:scaleX(-1)]' : ''}`} /> : <Unlock className={`h-4 w-4 text-emerald-500 ${isRTL ? '[transform:scaleX(-1)]' : ''}`} />}
          </button>
          <div className={`transition-all duration-300 ${locks.main ? 'opacity-10 blur-sm [&>div]:pointer-events-none' : ''}`}>
            <MainChart />
          </div>
          <LockOverlay isLocked={locks.main} text={unlockText} title={t('admin.overview.charts.saleTrend.title')} isRTL={isRTL} />
        </Motion.div>

        <Motion.div variants={item} className="relative rounded-[26px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:p-5 admin-chart-card group">
          <button className={`absolute top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/5 text-slate-400 transition-all cursor-not-allowed ${isRTL ? 'left-5' : 'right-5'}`}>
            {locks.donut ? <Lock className={`h-4 w-4 opacity-50 ${isRTL ? '[transform:scaleX(-1)]' : ''}`} /> : <Unlock className={`h-4 w-4 text-emerald-500 ${isRTL ? '[transform:scaleX(-1)]' : ''}`} />}
          </button>
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left pr-10">
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#1E293B] admin-card-title">{t('admin.overview.charts.leadMix.title')}</h3>
              <p className="text-[0.76rem] font-semibold text-[#1E293B] admin-card-desc">{t('admin.overview.charts.leadMix.subtitle')}</p>
            </div>
            <ShieldCheck className="hidden h-4.5 w-4.5 text-[#10B981] sm:block opacity-0 lg:opacity-100" />
          </div>
          <div className={`mt-4 transition-all duration-300 relative rounded-[inherit] overflow-hidden ${locks.donut ? 'opacity-10 blur-sm pointer-events-none' : ''}`}>
            <SourceDonut />
          </div>
          <LockOverlay isLocked={locks.donut} text={unlockText} title={t('admin.overview.charts.leadMix.title')} isRTL={isRTL} />
        </Motion.div>
      </div>

      {/* Charts row 2 */}
      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Motion.div variants={item} className="relative rounded-[26px] border border-[#DDEFE7] bg-white p-4 shadow-sm sm:p-5 admin-chart-card group">
          <button className={`absolute top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/5 text-slate-400 transition-all cursor-not-allowed ${isRTL ? 'left-5' : 'right-5'}`}>
            {locks.bar ? <Lock className={`h-4 w-4 opacity-50 ${isRTL ? '[transform:scaleX(-1)]' : ''}`} /> : <Unlock className={`h-4 w-4 text-emerald-500 ${isRTL ? '[transform:scaleX(-1)]' : ''}`} />}
          </button>
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left pr-10">
            <div>
              <h3 className="font-display text-[1rem] font-bold text-[#173247] admin-card-title">{t('admin.overview.charts.leadsByDay.title')}</h3>
              <p className="text-[0.76rem] font-semibold text-[#1E293B] admin-card-desc">{t('admin.overview.charts.leadsByDay.subtitle')}</p>
            </div>
            <div className="hidden rounded-full bg-violet-50 px-2.5 py-1 text-[0.66rem] font-bold text-violet-600 admin-pill sm:block opacity-0 xl:opacity-100">{t('admin.overview.charts.leadsByDay.pill')}</div>
          </div>
          <div className={`mt-4 w-full transition-all px-1 duration-300 relative rounded-[inherit] overflow-hidden ${locks.bar ? 'opacity-10 blur-sm pointer-events-none' : ''}`}>
            <LeadsBarChart />
          </div>
          <LockOverlay isLocked={locks.bar} text={unlockText} title={t('admin.overview.charts.leadsByDay.title')} isRTL={isRTL} />
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
