import { UserRound } from 'lucide-react'
import { memo } from 'react'

export const SummarySection = memo(function SummarySection({ t }) {
  return (
    <div className="rounded-[24px] border border-[#DDEFE7] bg-gradient-to-br from-white to-[#F2FBF7] p-5 shadow-sm sm:p-5 admin-card-shell">
      <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm admin-item-icon">
          <UserRound className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-[0.96rem] font-bold text-[#173247] admin-card-title">{t('admin.profile.summary.title')}</h3>
          <p className="text-[0.78rem] text-[#1E293B]">{t('admin.profile.summary.desc')}</p>
        </div>
      </div>
    </div>
  )
})
