import { motion as Motion } from 'framer-motion'
import { Bell, Check, Info, MessageSquare, Zap } from 'lucide-react'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }
const item = { hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }

export const NotificationsOverview = memo(function NotificationsOverview() {
  const { t } = useTranslation()

  const mockNotifs = t('admin.mockData.notifications', { returnObjects: true }) || []
  const notifications = [
    { ...mockNotifs[0], id: 1, icon: Zap, color: 'bg-amber-50 text-amber-500' },
    { ...mockNotifs[1], id: 2, icon: Check, color: 'bg-emerald-50 text-emerald-500' },
    { ...mockNotifs[2], id: 3, icon: Info, color: 'bg-blue-50 text-blue-500' },
    { ...mockNotifs[3], id: 4, icon: MessageSquare, color: 'bg-violet-50 text-violet-500' },
  ]

  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="mx-auto flex w-[94%] flex-col gap-6 sm:w-full admin-notifications-shell">
      <div className="rounded-[28px] border border-[#DDEFE7] bg-white p-6 shadow-sm admin-card-shell">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <h3 className="font-display text-[1rem] font-bold text-[#173247] sm:text-[1.1rem] admin-card-title">{t('admin.notifications.title')}</h3>
          <button className="text-[0.7rem] font-bold text-emerald-600 hover:text-emerald-500 sm:text-[0.78rem] admin-btn-text">{t('admin.notifications.readAll')}</button>
        </div>

        <div className="mt-8 space-y-4">
          {notifications.map((n) => (
            <Motion.div key={n.id} variants={item} className="group flex flex-col items-center gap-4 rounded-[22px] border border-[#DDEFE7] bg-[#F2FBF7] p-4 text-center transition hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 sm:flex-row sm:text-left admin-item-row">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${n.color} shadow-sm admin-item-icon`}>
                <n.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col items-center justify-between gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <p className="min-w-0 flex-1 text-[0.84rem] font-bold text-[#173247] sm:text-[0.88rem] admin-item-title">{n.title}</p>
                  <span className="shrink-0 text-[0.62rem] font-medium text-[#6D8A88] sm:text-[0.66rem] admin-item-time">{n.time}</span>
                </div>
                <p className="mt-1 text-[0.78rem] leading-5 text-[#62808D] sm:text-[0.82rem] admin-item-desc">{n.desc}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </Motion.div>
  )
})
