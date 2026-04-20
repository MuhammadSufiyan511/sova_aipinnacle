import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useApp } from '../context/AppProvider'
import { rtlLanguages } from '../i18n'
import { pricingPlans } from '../data'

export const accentMap = [
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

export function useUpgradeData() {
  const { t, i18n } = useTranslation()
  const { user } = useApp()
  
  const isRtl = rtlLanguages.includes(i18n.language) || i18n.dir() === 'rtl'
  const currentPlan = String(user?.plan || 'free').toLowerCase()
  const localizedPlans = t('content.pricing.plans', { returnObjects: true }) || pricingPlans
  
  const [activePlanIdx, setActivePlanIdx] = useState(1) // Default to Growth

  const nextPlan = () => setActivePlanIdx((prev) => (prev + 1) % localizedPlans.length)
  const prevPlan = () => setActivePlanIdx((prev) => (prev - 1 + localizedPlans.length) % localizedPlans.length)

  return {
    t,
    user,
    isRtl,
    currentPlan,
    localizedPlans,
    activePlanIdx,
    setActivePlanIdx,
    nextPlan,
    prevPlan
  }
}
