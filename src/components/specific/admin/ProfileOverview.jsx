import { motion as Motion } from 'framer-motion'
import { BadgeCheck, Globe2, MessageSquare, ShieldCheck, Sparkles, UserRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useApp } from '../../../context/AppProvider'

const activity = [
  { label: 'Connected products', value: '18', icon: BadgeCheck, tint: 'bg-emerald-50 text-emerald-600' },
  { label: 'Active automations', value: '06', icon: Sparkles, tint: 'bg-violet-50 text-violet-600' },
  { label: 'Unread lead alerts', value: '08', icon: MessageSquare, tint: 'bg-sky-50 text-sky-600' },
]

export function ProfileOverview() {
  const { user, products, tones } = useApp()
  const { i18n } = useTranslation()

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] border border-[#DDEFE7] p-5 shadow-sm sm:p-5 admin-card-shell">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-emerald-400 to-teal-500 text-base font-bold text-white shadow-[0_16px_34px_rgba(16,185,129,0.22)] sm:h-14 sm:w-14 sm:rounded-[20px] sm:text-lg">
                {(user.name || 'U')[0]}
              </div>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-emerald-500 sm:text-[0.68rem]">SOVA Workspace Profile</p>
                <h2 className="mt-1 font-display text-[1.2rem] font-bold text-[#173247] sm:mt-2 sm:text-[1.35rem]">{user.name || 'User'}</h2>
                <p className="mt-1 text-[0.78rem] leading-5 text-[#62808D] sm:text-[0.82rem]">Manage your workspace identity, language, and automation readiness from one place.</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              {user.plan || 'Free'} plan
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
            {activity.map((item) => (
              <div key={item.label} className="rounded-[20px] bg-[#F2FBF7] p-3.5 admin-field-group">
                <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${item.tint}`}>
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{item.label}</p>
                <p className="mt-1 font-display text-[1.4rem] font-extrabold text-[#173247]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-[#DDEFE7] p-5 shadow-sm sm:p-5 admin-card-shell">
          <h3 className="font-display text-[1rem] font-bold text-[#173247]">Workspace details</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 admin-field-group">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">Current language</p>
              <div className="mt-2 flex items-center gap-3 text-[#295565]">
                <Globe2 className="h-4.5 w-4.5 text-emerald-500" />
                <span className="text-[0.84rem] font-semibold">{i18n.language.toUpperCase()}</span>
              </div>
            </div>
            <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 admin-field-group">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">Products in catalog</p>
              <p className="mt-2 text-[0.84rem] font-semibold text-[#295565]">{products.length} ready for automated replies</p>
            </div>
            <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 admin-field-group">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">Business tone profiles</p>
              <p className="mt-2 text-[0.84rem] font-semibold text-[#295565]">{tones.length} tone setting{tones.length === 1 ? '' : 's'} configured</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
            <UserRound className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-[0.96rem] font-bold text-[#173247]">Profile summary</h3>
            <p className="text-[0.78rem] text-[#62808D]">This workspace is ready to manage WhatsApp conversations, route qualified leads, and automate replies with SOVA.</p>
          </div>
        </div>
      </div>
    </Motion.div>
  )
}
