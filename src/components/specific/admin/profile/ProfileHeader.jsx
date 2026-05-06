import { ShieldCheck } from 'lucide-react'
import { memo } from 'react'

export const ProfileHeader = memo(function ProfileHeader({ user, businessDetails, t, activity }) {
  const workspaceName = businessDetails?.name || 'Your Workspace'
  
  return (
    <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-5 admin-card-shell">
      <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-emerald-400 to-teal-500 text-base font-bold text-white shadow-[0_16px_34px_rgba(16,185,129,0.22)] sm:h-14 sm:w-14 sm:rounded-[20px] sm:text-lg">
            {businessDetails?.image ? (
              <img src={businessDetails.image} alt="Workspace Logo" className="h-full w-full object-cover rounded-[18px] sm:rounded-[20px]" />
            ) : (
              workspaceName[0]?.toUpperCase() || 'W'
            )}
          </div>
          <div>
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-emerald-500 sm:text-[0.68rem]">
              {t('admin.profile.header.label')}
            </p>
            <h2 className="mt-1 font-display text-[1.2rem] font-bold text-[#173247] sm:mt-2 sm:text-[1.35rem] admin-card-title">
              {workspaceName}
            </h2>
            <p className="mt-1 text-[0.78rem] leading-5 text-[#1E293B] sm:text-[0.82rem]">
              {t('admin.profile.header.desc')}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-emerald-700 admin-pill">
          <ShieldCheck className="h-4 w-4" />
          {t('admin.profile.plan', { name: user.plan || 'Free' })}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
        {activity.map((item) => (
          <div key={item.label} className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-center admin-field-group">
            <span className={`mx-auto flex h-10 w-10 items-center justify-center rounded-2xl ${item.tint} sm:mx-0 shadow-sm admin-item-icon`}>
              <item.icon className="h-4.5 w-4.5" />
            </span>
            <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1E293B]">{item.label}</p>
            <p className="mt-1 font-display text-[1.4rem] font-extrabold text-[#173247]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
})
