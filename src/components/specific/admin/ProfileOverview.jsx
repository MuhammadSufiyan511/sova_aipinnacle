import { motion as Motion } from 'framer-motion'
import { BadgeCheck, Globe2, MessageSquare, ShieldCheck, Sparkles, UserRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useApp } from '../../../context/AppProvider'

export const ProfileOverview = memo(function ProfileOverview() {
  const { t } = useTranslation()
  const { user, products, tones } = useApp()
  const { i18n } = useTranslation()

  const mockProfile = t('admin.mockData.profile', { returnObjects: true }) || {}

  const activity = [
    { label: t('admin.profile.activity.products'), value: products.length || '0', icon: BadgeCheck, tint: 'bg-emerald-50 text-emerald-600' },
    { label: t('admin.profile.activity.automations'), value: mockProfile.automations || '06', icon: Sparkles, tint: 'bg-violet-50 text-violet-600' },
    { label: t('admin.profile.activity.alerts'), value: mockProfile.alerts || '08', icon: MessageSquare, tint: 'bg-sky-50 text-sky-600' },
  ]

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto flex w-[94%] flex-col gap-4 sm:w-full admin-profile-shell">
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-5 admin-card-shell">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-emerald-400 to-teal-500 text-base font-bold text-white shadow-[0_16px_34px_rgba(16,185,129,0.22)] sm:h-14 sm:w-14 sm:rounded-[20px] sm:text-lg">
                {(user.name || 'U')[0]}
              </div>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-emerald-500 sm:text-[0.68rem]">{t('admin.profile.header.label')}</p>
                <h2 className="mt-1 font-display text-[1.2rem] font-bold text-[#173247] sm:mt-2 sm:text-[1.35rem] admin-card-title">{user.name || 'User'}</h2>
                <p className="mt-1 text-[0.78rem] leading-5 text-[#62808D] sm:text-[0.82rem]">{t('admin.profile.header.desc')}</p>
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
                <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{item.label}</p>
                <p className="mt-1 font-display text-[1.4rem] font-extrabold text-[#173247]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-5 admin-card-shell">
          <h3 className="font-display text-[1rem] font-bold text-[#173247] text-center sm:text-left admin-card-title">{t('admin.profile.details.title')}</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-center sm:text-left admin-field-group">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{t('admin.profile.details.language')}</p>
              <div className="mt-2 flex items-center justify-center gap-3 text-[#295565] sm:justify-start">
                <Globe2 className="h-4.5 w-4.5 text-emerald-500" />
                <span className="text-[0.84rem] font-semibold">{i18n.language.toUpperCase()}</span>
              </div>
            </div>
            <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-center sm:text-left admin-field-group">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{t('admin.profile.details.products.label')}</p>
              <p className="mt-2 text-[0.84rem] font-semibold text-[#295565]">{t('admin.profile.details.products.ready', { count: products.length })}</p>
            </div>
            <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-center sm:text-left admin-field-group">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{t('admin.profile.details.tones.label')}</p>
              <p className="mt-2 text-[0.84rem] font-semibold text-[#295565]">{t('admin.profile.details.tones.ready', { count: tones.length, s: tones.length === 1 ? '' : 's' })}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[24px] border border-[#DDEFE7] bg-gradient-to-br from-white to-[#F2FBF7] p-5 shadow-sm sm:p-5 admin-card-shell">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm admin-item-icon">
            <UserRound className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-[0.96rem] font-bold text-[#173247] admin-card-title">{t('admin.profile.summary.title')}</h3>
            <p className="text-[0.78rem] text-[#62808D]">{t('admin.profile.summary.desc')}</p>
          </div>
        </div>
      </div>
    </Motion.div>
  )
})
