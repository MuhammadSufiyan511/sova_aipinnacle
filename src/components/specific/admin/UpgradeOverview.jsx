import { motion as Motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Crown, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { memo } from 'react'
import { useUpgradeData, accentMap } from '../../../hooks/useUpgradeData'
import { PlanCard } from './upgrade/PlanCard'

export const UpgradeOverview = memo(function UpgradeOverview() {
  const {
    t, user, isRtl, currentPlan, localizedPlans,
    activePlanIdx, setActivePlanIdx, nextPlan, prevPlan
  } = useUpgradeData()

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto flex w-[94%] flex-col gap-4 sm:w-full pb-10">
      {/* Centered Header Section */}
      <div className="flex flex-col items-center text-center px-4 py-6 md:py-10">
        <Motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D8F3EA] bg-[#ECFDF5] px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10B981] admin-pill"
        >
          {t('admin.upgrade.eyebrow')}
        </Motion.div>
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="admin-card-title mt-4 font-display text-[1.6rem] font-bold tracking-[-0.04em] text-[#173247] sm:text-[2.1rem] lg:text-[2.4rem]"
        >
          {t('admin.upgrade.title')}
        </Motion.h2>
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="admin-card-desc mt-3 max-w-2xl text-[0.88rem] leading-relaxed text-[#62808D] sm:text-[0.94rem]"
        >
          {t('admin.upgrade.subtitle')}
        </Motion.p>

        {/* Current Plan Sub-Indicator */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-3.5 rounded-full border border-[#DDEFE7] bg-white px-4 py-2.5 shadow-sm admin-item-row"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
              <Crown className="h-4 w-4" />
            </span>
            <div className="text-left">
              <p className="text-[0.58rem] font-bold uppercase tracking-widest text-[#7A8A93] leading-none mb-1">{t('admin.upgrade.currentPlanLabel')}</p>
              <p className="text-[0.82rem] font-bold text-[#173247] leading-none">{t('admin.upgrade.currentPlanValue', { plan: user?.plan || 'Free' })}</p>
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
                  className={`h-2 rounded-full transition-all duration-300 ${activePlanIdx === i ? 'w-8 bg-[#10B981]' : 'w-2 bg-[#DCEEE7]'
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
        <div className="admin-card-shell rounded-[32px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="admin-card-title font-display text-[1rem] font-bold text-[#173247]">
                {t('admin.upgrade.compareTitle')}
              </h3>
              <p className="admin-card-desc mt-0.5 text-[0.8rem] text-[#62808D]">
                {t('admin.upgrade.compareDesc')}
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {[1, 2, 3, 4].map((benefitIndex) => (
              <div key={benefitIndex} className="admin-item-row rounded-[24px] border border-[#E6F1EB] bg-[#FBFFFD] p-4 hover:bg-white transition-colors">
                <p className="admin-card-title text-[0.86rem] font-bold text-[#173247]">
                  {t(`admin.upgrade.benefits.${benefitIndex}.title`)}
                </p>
                <p className="admin-card-desc mt-1 text-[0.76rem] leading-5 text-[#62808D]">
                  {t(`admin.upgrade.benefits.${benefitIndex}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card-shell rounded-[32px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              <Zap className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="admin-card-title font-display text-[1rem] font-bold text-[#173247]">
                {t('admin.upgrade.summaryTitle')}
              </h3>
              <p className="admin-card-desc mt-0.5 text-[0.8rem] text-[#62808D]">
                {t('admin.upgrade.summaryDesc')}
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-3.5">
            {[1, 2, 3].map((stepIndex) => (
              <div key={stepIndex} className="admin-item-row flex items-start gap-3.5 rounded-[24px] border border-[#E6F1EB] bg-[#FBFFFD] p-4 hover:bg-white transition-colors">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[0.8rem] font-black text-[#10B981]">
                  0{stepIndex}
                </span>
                <div>
                  <p className="admin-card-title text-[0.86rem] font-bold text-[#173247]">
                    {t(`admin.upgrade.steps.${stepIndex}.title`)}
                  </p>
                  <p className="admin-card-desc mt-1 text-[0.76rem] leading-5 text-[#62808D]">
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
