import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useApp } from '../context/AppProvider'

export const businessTypes = [
  { id: 'clothing', emoji: '🛍️' },
  { id: 'jewellery', emoji: '💎' },
  { id: 'toys', emoji: '🧸' },
  { id: 'books-stationary', emoji: '📚' },
  { id: 'dry-fruits', emoji: '🥜' },
  { id: 'decoration', emoji: '🎨' },
  { id: 'electronics', emoji: '⚡' },
  { id: 'medical-instruments', emoji: '🩺' },
  { id: 'surgical-instruments', emoji: '✂️' },
  { id: 'hardware', emoji: '🔨' },
  { id: 'fireworks', emoji: '✨' },
  { id: 'other', emoji: '🌟' },
]

export function useSettingsData() {
  const { t } = useTranslation()
  const { businessProfile, setBusinessProfile, tones, setTones } = useApp()
  const normalizedTones = Array.isArray(tones) && tones.length > 0 ? tones : ['Professional']
  
  const [alerts, setAlerts] = useState(true)
  const [autoReply, setAutoReply] = useState(true)
  const [spamFilter, setSpamFilter] = useState(true)
  
  const [businessModalOpen, setBusinessModalOpen] = useState(false)
  const [draftBusinessType, setDraftBusinessType] = useState(businessProfile?.type || 'clothing')
  const [draftCustomCategory, setDraftCustomCategory] = useState(businessProfile?.customCategory || '')

  const [toneModalOpen, setToneModalOpen] = useState(false)
  const [draftTones, setDraftTones] = useState(normalizedTones)
  
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const businessLabel = businessProfile?.type === 'other' && businessProfile?.customCategory?.trim()
    ? businessProfile.customCategory.trim()
    : t(`onboarding.business.categories.${businessProfile?.type || 'clothing'}.label`)

  const toneOptions = [
    { id: 'Professional', label: t('admin.settings.tones.professional.label'), desc: t('admin.settings.tones.professional.desc'), color: 'emerald' },
    { id: 'Friendly', label: t('admin.settings.tones.friendly.label'), desc: t('admin.settings.tones.friendly.desc'), color: 'blue' },
    { id: 'Direct', label: t('admin.settings.tones.direct.label'), desc: t('admin.settings.tones.direct.desc'), color: 'amber' },
    { id: 'Persuasive', label: t('admin.settings.tones.persuasive.label'), desc: t('admin.settings.tones.persuasive.desc'), color: 'rose' },
    { id: 'Playful', label: t('admin.settings.tones.playful.label'), desc: t('admin.settings.tones.playful.desc'), color: 'violet' },
    { id: 'Empathetic', label: t('admin.settings.tones.empathetic.label'), desc: t('admin.settings.tones.empathetic.desc'), color: 'cyan' },
  ]

  const openBusinessModal = () => {
    setDraftBusinessType(businessProfile?.type || 'clothing')
    setDraftCustomCategory(businessProfile?.customCategory || '')
    setBusinessModalOpen(true)
  }

  const saveBusinessProfile = () => {
    const customCategoryValue = draftCustomCategory.trim()
    if (draftBusinessType === 'other' && !customCategoryValue) return
    setBusinessProfile({
      type: draftBusinessType,
      customCategory: draftBusinessType === 'other' ? customCategoryValue : '',
    })
    setBusinessModalOpen(false)
  }

  const openToneModal = () => {
    setDraftTones(normalizedTones)
    setToneModalOpen(true)
  }

  const saveToneSettings = () => {
    setTones(draftTones.length > 0 ? draftTones : ['Professional'])
    setToneModalOpen(false)
  }

  return {
    t,
    businessProfile,
    normalizedTones,
    alerts, setAlerts,
    autoReply, setAutoReply,
    spamFilter, setSpamFilter,
    businessModalOpen, setBusinessModalOpen,
    draftBusinessType, setDraftBusinessType,
    draftCustomCategory, setDraftCustomCategory,
    isMobile,
    businessLabel,
    toneOptions,
    openBusinessModal,
    saveBusinessProfile,
    toneModalOpen, setToneModalOpen,
    draftTones, setDraftTones,
    openToneModal,
    saveToneSettings,
  }
}
