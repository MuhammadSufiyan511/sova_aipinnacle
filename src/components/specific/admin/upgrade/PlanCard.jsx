import { ArrowUpRight, CheckCircle2, Zap } from 'lucide-react'
import { memo } from 'react'

export const PlanCard = memo(function PlanCard({ plan, index, currentPlan, t, accent }) {
  const isCurrent = currentPlan.includes(plan.name.split(' ')[1]?.toLowerCase() || 'none')
  const isPopular = index === 1

  return (
    <article
      className={`admin-card-shell relative h-full flex flex-col overflow-hidden rounded-[28px] border border-[#DDEFE7] bg-white p-6 shadow-sm transition-all sm:p-7 ${
        isPopular ? 'ring-2 ring-cyan-200/60' : ''
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.card}`} />
      
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className={`inline-flex items-center rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] ${accent.badge}`}>
              {plan.badge || (index === 0 ? t('admin.common.starter') : index === 1 ? t('admin.common.growth') : t('admin.common.scale'))}
            </div>
            <h3 className="admin-card-title mt-3 font-display text-[1.4rem] font-bold text-[#173247]">
              {plan.name}
            </h3>
          </div>
          {isPopular ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-cyan-700">
              <Zap className="h-3.5 w-3.5" />
              {t('admin.upgrade.popular')}
            </span>
          ) : null}
        </div>

        <div className="mt-5">
          <p className="admin-card-title text-[2.4rem] font-bold tracking-[-0.05em] text-[#173247]">
            {plan.price}
          </p>
          <p className="admin-card-desc mt-1.5 text-[0.82rem] leading-relaxed text-[#62808D]">
            {plan.blurb}
          </p>
        </div>

        <div className="my-6 h-px bg-[#E6F1EB]" />

        <ul className="flex-1 space-y-3">
          {plan.points.map((point, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3 rounded-2xl border border-[#E6F1EB] bg-[#FBFFFD] px-3.5 py-3 admin-item-row group-hover:bg-white transition-colors">
              <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#10B981]" />
              <span className="text-[0.84rem] font-medium text-[#476977]">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-[0.86rem] font-bold text-white shadow-lg transition-all active:scale-[0.98] ${accent.button} ${
            isCurrent ? 'opacity-80 cursor-default' : 'hover:scale-[1.02]'
          }`}
        >
          {isCurrent ? t('admin.upgrade.currentPlanButton') : t('admin.upgrade.choosePlan')}
          <ArrowUpRight className="h-4.5 w-4.5" />
        </button>
      </div>
    </article>
  )
})
