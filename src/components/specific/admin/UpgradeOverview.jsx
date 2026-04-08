import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Crown, Sparkles, Zap } from 'lucide-react'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useApp } from '../../../context/AppProvider'

const planKeys = ['starter', 'growth', 'scale']
const accentMap = {
  starter: {
    card: 'from-emerald-500/10 via-cyan-500/10 to-transparent',
    badge: 'bg-emerald-500 text-white',
    button: 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20',
  },
  growth: {
    card: 'from-cyan-500/12 via-sky-500/12 to-transparent',
    badge: 'bg-cyan-500 text-white',
    button: 'bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/20',
  },
  scale: {
    card: 'from-violet-500/12 via-fuchsia-500/12 to-transparent',
    badge: 'bg-violet-500 text-white',
    button: 'bg-violet-500 hover:bg-violet-600 shadow-violet-500/20',
  },
}

export const UpgradeOverview = memo(function UpgradeOverview() {
  const { t } = useTranslation()
  const { user } = useApp()
  const currentPlan = String(user?.plan || 'free').toLowerCase()

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto flex w-[94%] flex-col gap-4 sm:w-full">
      <div className="admin-card-shell overflow-hidden rounded-[28px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8F3EA] bg-[#ECFDF5] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#10B981] admin-pill">
              <Sparkles className="h-3.5 w-3.5" />
              {t('admin.upgrade.eyebrow')}
            </div>
            <h2 className="admin-card-title mt-3 font-display text-[1.4rem] font-bold tracking-[-0.04em] text-[#173247] sm:text-[1.8rem]">
              {t('admin.upgrade.title')}
            </h2>
            <p className="admin-card-desc mt-2 max-w-xl text-[0.86rem] leading-6 text-[#62808D] sm:text-[0.92rem]">
              {t('admin.upgrade.subtitle')}
            </p>
          </div>

          <div className="rounded-[22px] border border-[#DDEFE7] bg-[#F8FFFC] px-4 py-3 text-left shadow-sm admin-item-row">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#7A8A93]">
              {t('admin.upgrade.currentPlanLabel')}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#10B981]">
                <Crown className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="admin-card-title text-[1rem] font-bold text-[#173247]">{t('admin.upgrade.currentPlanValue', { plan: user?.plan || 'Free' })}</p>
                <p className="text-[0.74rem] text-[#62808D]">{t('admin.upgrade.currentPlanHint')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-3 xl:grid-cols-3">
        {planKeys.map((planKey) => {
          const accent = accentMap[planKey]
          const isCurrent = currentPlan === planKey
          return (
            <Motion.article
              key={planKey}
              whileHover={{ y: -4 }}
              className={`admin-card-shell relative overflow-hidden rounded-[28px] border border-[#DDEFE7] bg-white p-5 shadow-sm transition-all sm:p-6 ${
                planKey === 'growth' ? 'ring-2 ring-cyan-200/60' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accent.card}`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className={`inline-flex items-center rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] ${accent.badge}`}>
                      {t(`admin.upgrade.plans.${planKey}.badge`)}
                    </div>
                    <h3 className="admin-card-title mt-3 font-display text-[1.2rem] font-bold text-[#173247]">
                      {t(`admin.upgrade.plans.${planKey}.name`)}
                    </h3>
                  </div>
                  {planKey === 'growth' ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-cyan-700">
                      <Zap className="h-3.5 w-3.5" />
                      {t('admin.upgrade.popular')}
                    </span>
                  ) : null}
                </div>

                <div className="mt-4">
                  <p className="admin-card-title text-[2rem] font-bold tracking-[-0.05em] text-[#173247]">
                    {t(`admin.upgrade.plans.${planKey}.price`)}
                  </p>
                  <p className="admin-card-desc mt-1 text-[0.78rem] text-[#62808D]">
                    {t(`admin.upgrade.plans.${planKey}.desc`)}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[1, 2, 3, 4].map((featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2.5 rounded-2xl border border-[#E6F1EB] bg-[#FBFFFD] px-3 py-2.5 admin-item-row">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
                      <span className="text-[0.78rem] font-medium text-[#476977]">
                        {t(`admin.upgrade.plans.${planKey}.features.${featureIndex}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-[0.8rem] font-bold text-white shadow-lg transition ${accent.button} ${
                    isCurrent ? 'opacity-80' : ''
                  }`}
                >
                  {isCurrent ? t('admin.upgrade.currentPlanButton') : t('admin.upgrade.choosePlan')}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </Motion.article>
          )
        })}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="admin-card-shell rounded-[28px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-6">
          <h3 className="admin-card-title font-display text-[1.04rem] font-bold text-[#173247]">
            {t('admin.upgrade.compareTitle')}
          </h3>
          <p className="admin-card-desc mt-1 text-[0.8rem] text-[#62808D]">
            {t('admin.upgrade.compareDesc')}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4].map((benefitIndex) => (
              <div key={benefitIndex} className="admin-item-row rounded-[22px] border border-[#E6F1EB] bg-[#FBFFFD] p-4">
                <p className="admin-card-title text-[0.84rem] font-bold text-[#173247]">
                  {t(`admin.upgrade.benefits.${benefitIndex}.title`)}
                </p>
                <p className="admin-card-desc mt-1 text-[0.74rem] leading-5 text-[#62808D]">
                  {t(`admin.upgrade.benefits.${benefitIndex}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card-shell rounded-[28px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-6">
          <h3 className="admin-card-title font-display text-[1.04rem] font-bold text-[#173247]">
            {t('admin.upgrade.summaryTitle')}
          </h3>
          <p className="admin-card-desc mt-1 text-[0.8rem] text-[#62808D]">
            {t('admin.upgrade.summaryDesc')}
          </p>
          <div className="mt-5 space-y-3">
            {[1, 2, 3].map((stepIndex) => (
              <div key={stepIndex} className="admin-item-row flex items-start gap-3 rounded-[22px] border border-[#E6F1EB] bg-[#FBFFFD] p-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[0.76rem] font-bold text-[#10B981]">
                  0{stepIndex}
                </span>
                <div>
                  <p className="admin-card-title text-[0.82rem] font-bold text-[#173247]">
                    {t(`admin.upgrade.steps.${stepIndex}.title`)}
                  </p>
                  <p className="admin-card-desc mt-1 text-[0.74rem] leading-5 text-[#62808D]">
                    {t(`admin.upgrade.steps.${stepIndex}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Motion.div>
  )
})
