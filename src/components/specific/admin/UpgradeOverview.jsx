import { motion as Motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Crown, Sparkles, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useApp } from '../../../context/AppProvider'
import { rtlLanguages } from '../../../i18n'
import { pricingPlans } from '../../../data'

const accentMap = [
  {
    card: 'from-emerald-500/10 via-cyan-500/10 to-transparent',
    badge: 'bg-emerald-500 text-white',
    button: 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20',
  },
  {
    card: 'from-cyan-500/12 via-sky-500/12 to-transparent',
    badge: 'bg-cyan-500 text-white',
    button: 'bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/20',
  },
  {
    card: 'from-violet-500/12 via-fuchsia-500/12 to-transparent',
    badge: 'bg-violet-500 text-white',
    button: 'bg-violet-500 hover:bg-violet-600 shadow-violet-500/20',
  },
]

const PlanCard = memo(function PlanCard({ plan, index, currentPlan, t, accent }) {
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

export const UpgradeOverview = memo(function UpgradeOverview() {
  const { t, i18n } = useTranslation()
  const { user } = useApp()
  const isRtl = rtlLanguages.includes(i18n.language) || i18n.dir() === 'rtl'
  const currentPlan = String(user?.plan || 'free').toLowerCase()
  const localizedPlans = t('content.pricing.plans', { returnObjects: true }) || pricingPlans
  const [activePlanIdx, setActivePlanIdx] = useState(1) // Default to Growth

  const nextPlan = () => setActivePlanIdx((prev) => (prev + 1) % localizedPlans.length)
  const prevPlan = () => setActivePlanIdx((prev) => (prev - 1 + localizedPlans.length) % localizedPlans.length)

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto flex w-[94%] flex-col gap-6 sm:w-full pb-10">
      {/* Centered Header Section */}
      <div className="flex flex-col items-center text-center px-4 py-8 md:py-12">
        <Motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D8F3EA] bg-[#ECFDF5] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#10B981] admin-pill"
        >
          <Sparkles className="h-4 w-4" />
          {t('admin.upgrade.eyebrow')}
        </Motion.div>
        <Motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="admin-card-title mt-5 font-display text-[1.8rem] font-bold tracking-[-0.04em] text-[#173247] sm:text-[2.4rem] lg:text-[2.8rem]"
        >
          {t('admin.upgrade.title')}
        </Motion.h2>
        <Motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="admin-card-desc mt-4 max-w-2xl text-[0.92rem] leading-relaxed text-[#62808D] sm:text-[1rem]"
        >
          {t('admin.upgrade.subtitle')}
        </Motion.p>

        {/* Current Plan Sub-Indicator */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 inline-flex items-center gap-4 rounded-[24px] border border-[#DDEFE7] bg-white px-5 py-3 shadow-sm admin-item-row"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#10B981]">
              <Crown className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-[0.62rem] font-bold uppercase tracking-widest text-[#7A8A93]">{t('admin.upgrade.currentPlanLabel')}</p>
              <p className="text-[0.9rem] font-bold text-[#173247]">{t('admin.upgrade.currentPlanValue', { plan: user?.plan || 'Free' })}</p>
            </div>
          </div>
        </Motion.div>
      </div>

      {/* Pricing Plans Section */}
      <div className="relative mt-2">
        {/* Desktop View - Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {localizedPlans.map((plan, index) => (
            <PlanCard 
              key={plan.name}
              plan={plan}
              index={index}
              currentPlan={currentPlan}
              t={t}
              accent={accentMap[index % accentMap.length]}
            />
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait" initial={false}>
            <Motion.div
              key={activePlanIdx}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const swipeThreshold = 50
                if (info.offset.x > swipeThreshold) {
                  isRtl ? nextPlan() : prevPlan()
                } else if (info.offset.x < -swipeThreshold) {
                  isRtl ? prevPlan() : nextPlan()
                }
              }}
              initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRtl ? 40 : -40 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="px-1"
            >
              <PlanCard 
                plan={localizedPlans[activePlanIdx]}
                index={activePlanIdx}
                currentPlan={currentPlan}
                t={t}
                accent={accentMap[activePlanIdx % accentMap.length]}
              />
            </Motion.div>
          </AnimatePresence>

          {/* Slider Pagination Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button 
              onClick={prevPlan}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDEFE7] bg-white text-[#476977] shadow-sm transition active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {localizedPlans.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePlanIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activePlanIdx === i ? 'w-8 bg-[#10B981]' : 'w-2 bg-[#DCEEE7]'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextPlan}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDEFE7] bg-white text-[#476977] shadow-sm transition active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Comparison & Summary Cards */}
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="admin-card-shell rounded-[32px] border border-[#DDEFE7] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
             <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
               <CheckCircle2 className="h-5 w-5" />
             </div>
             <div>
               <h3 className="admin-card-title font-display text-[1.1rem] font-bold text-[#173247]">
                 {t('admin.upgrade.compareTitle')}
               </h3>
               <p className="admin-card-desc mt-1 text-[0.84rem] text-[#62808D]">
                 {t('admin.upgrade.compareDesc')}
               </p>
             </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((benefitIndex) => (
              <div key={benefitIndex} className="admin-item-row rounded-[24px] border border-[#E6F1EB] bg-[#FBFFFD] p-5 hover:bg-white transition-colors">
                <p className="admin-card-title text-[0.9rem] font-bold text-[#173247]">
                  {t(`admin.upgrade.benefits.${benefitIndex}.title`)}
                </p>
                <p className="admin-card-desc mt-1.5 text-[0.78rem] leading-6 text-[#62808D]">
                  {t(`admin.upgrade.benefits.${benefitIndex}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card-shell rounded-[32px] border border-[#DDEFE7] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
               <Zap className="h-5 w-5" />
             </div>
             <div>
                <h3 className="admin-card-title font-display text-[1.1rem] font-bold text-[#173247]">
                  {t('admin.upgrade.summaryTitle')}
                </h3>
                <p className="admin-card-desc mt-1 text-[0.84rem] text-[#62808D]">
                  {t('admin.upgrade.summaryDesc')}
                </p>
             </div>
          </div>
          <div className="mt-8 space-y-4">
            {[1, 2, 3].map((stepIndex) => (
              <div key={stepIndex} className="admin-item-row flex items-start gap-4 rounded-[24px] border border-[#E6F1EB] bg-[#FBFFFD] p-5 hover:bg-white transition-colors">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[0.85rem] font-black text-[#10B981]">
                  0{stepIndex}
                </span>
                <div>
                  <p className="admin-card-title text-[0.88rem] font-bold text-[#173247]">
                    {t(`admin.upgrade.steps.${stepIndex}.title`)}
                  </p>
                  <p className="admin-card-desc mt-1.5 text-[0.8rem] leading-6 text-[#62808D]">
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
