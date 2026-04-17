import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { pricingPlans } from '../../../data'
import { PlanCard } from './pricing/PlanCard'
import { rtlLanguages } from '../../../i18n'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'
import { ArrowRight } from 'lucide-react'

const MotionDiv = motion.div

export const PricingPreviewSection = memo(function PricingPreviewSection() {
  const { t, i18n } = useTranslation()
  const isRtl = rtlLanguages.includes(i18n.language) || i18n.dir() === 'rtl'
  const localizedPlans = t('content.pricing.plans', { returnObjects: true }) || pricingPlans
  const [activePlan, setActivePlan] = useState(0)

  // Carousel controls for mobile
  const nextPlan = () => setActivePlan((prev) => (prev + 1) % localizedPlans.length)
  const prevPlan = () => setActivePlan((prev) => (prev - 1 + localizedPlans.length) % localizedPlans.length)

  return (
    <section id="pricing" className="home-pricing-preview-section w-full bg-white py-10 sm:py-16 2xl:py-24 3xl:py-32 scroll-mt-28">
      <div className="mx-auto max-w-[1160px] px-5 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#10B981]">{t('sections.pricingEyebrow')}</p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.8rem] 2xl:text-[3.6rem] 3xl:text-[4.2rem]">
            {t('sections.pricingTitle')}
          </h2>
          <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-3xl border border-[#DCEEE7] bg-[#ECFDF5]/50 p-5 sm:p-6 sm:flex-row shadow-sm hover:shadow-md transition-shadow">
            <div className={`flex flex-col ${isRtl ? 'sm:text-right' : 'sm:text-left'} text-center`}>
              <p className="text-[0.95rem] leading-[1.6] text-[#1E293B] font-medium max-w-[420px]">
                {t('sections.pricingDescription')}
              </p>
              <p className="mt-1.5 text-[0.75rem] font-bold text-[#F1990A] uppercase tracking-wider">
                {t('common.noCardRequired', 'No credit card required')}
              </p>
            </div>
            <Link 
              to={ROUTES.auth}
              className="flex shrink-0 items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-[#10B981] px-6 py-3.5 text-[0.9rem] font-bold text-white transition hover:scale-[1.02] hover:bg-[#0F8F72] shadow-[0_6px_20px_rgba(16,185,129,0.28)]"
            >
              {t('common.startFreeTrial', 'Start Free Trial')} 
              <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </MotionDiv>

        {/* Carousel Container */}
        <div className="relative mx-auto mt-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-6 2xl:gap-10 3xl:gap-14">
            {/* Mobile View - Animated Carousel */}
            <div className="overflow-visible lg:hidden">
              <AnimatePresence mode="wait" initial={false}>
                <MotionDiv
                  key={activePlan}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50
                    // In RTL: swipe left = prev plan, swipe right = next plan
                    if (info.offset.x > swipeThreshold) {
                      isRtl ? nextPlan() : prevPlan()
                    } else if (info.offset.x < -swipeThreshold) {
                      isRtl ? prevPlan() : nextPlan()
                    }
                  }}
                  initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRtl ? 50 : -50 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="mx-auto cursor-grab active:cursor-grabbing"
                >
                  <PlanCard
                    plan={localizedPlans[activePlan]}
                    index={activePlan}
                    isPopular={activePlan === 1}
                    t={t}
                  />
                </MotionDiv>
              </AnimatePresence>

              {/* Pagination Dots for Mobile */}
              <div className="mt-8 flex justify-center gap-2.5">
                {localizedPlans.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePlan(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${activePlan === i ? 'w-8 bg-[#10B981]' : 'w-2 bg-[#DCEEE7]'
                      }`}
                    aria-label={`Go to plan ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop View - Standard Grid */}
            <div className="hidden lg:contents">
              {localizedPlans.map((plan, index) => (
                <PlanCard
                  key={plan.name}
                  plan={plan}
                  index={index}
                  isPopular={index === 1}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
