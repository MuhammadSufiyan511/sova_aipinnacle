import { useTranslation } from 'react-i18next'
import { BadgeCheck, MessageSquare, Sparkles } from 'lucide-react'
import { useApp } from '../context/AppProvider'

export function useProfileData() {
  const { t, i18n } = useTranslation()
  const { user, setUser, products, tones, businessDetails, setBusinessDetails } = useApp()

  const mockProfile = t('admin.mockData.profile', { returnObjects: true }) || {}

  const activity = [
    { label: t('admin.profile.activity.products'), value: products.length || '0', icon: BadgeCheck, tint: 'bg-emerald-50 text-emerald-600' },
    { label: t('admin.profile.activity.automations'), value: mockProfile.automations || '06', icon: Sparkles, tint: 'bg-violet-50 text-violet-600' },
    { label: t('admin.profile.activity.alerts'), value: mockProfile.alerts || '08', icon: MessageSquare, tint: 'bg-sky-50 text-sky-600' },
  ]

  return {
    t,
    i18n,
    user,
    setUser,
    products,
    tones,
    businessDetails,
    setBusinessDetails,
    activity
  }
}
