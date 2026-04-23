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

export const toneColors = {
  emerald: { active: 'border-emerald-500 bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
  blue: { active: 'border-blue-400 bg-blue-50 text-blue-700', dot: 'bg-blue-400' },
  amber: { active: 'border-amber-400 bg-amber-50 text-amber-700', dot: 'bg-amber-400' },
  violet: { active: 'border-violet-500 bg-violet-50 text-violet-700', dot: 'bg-violet-500' },
  rose: { active: 'border-rose-400 bg-rose-50 text-rose-700', dot: 'bg-rose-400' },
  cyan: { active: 'border-cyan-400 bg-cyan-50 text-cyan-700', dot: 'bg-cyan-400' },
}

export function useSettingsData() {
  const { t } = useTranslation()
  const { businessProfile, setBusinessProfile, tones, setTones } = useApp()
  const activeTone = tones[0] || 'Professional'
  
  const [alerts, setAlerts] = useState(true)
  const [autoReply, setAutoReply] = useState(true)
  const [spamFilter, setSpamFilter] = useState(true)
  
  const [businessModalOpen, setBusinessModalOpen] = useState(false)
  const [draftBusinessType, setDraftBusinessType] = useState(businessProfile?.type || 'clothing')
  const [draftCustomCategory, setDraftCustomCategory] = useState(businessProfile?.customCategory || '')

  const [toneModalOpen, setToneModalOpen] = useState(false)
  const [draftTone, setDraftTone] = useState(activeTone)
  
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const businessLabel = draftBusinessType === 'other' && draftCustomCategory.trim()
    ? draftCustomCategory.trim()
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
    if (draftBusinessType === 'other' && !draftCustomCategory.trim()) return
    setBusinessProfile({
      type: draftBusinessType,
      customCategory: draftBusinessType === 'other' ? draftCustomCategory.trim() : '',
    })
    setBusinessModalOpen(false)
  }

  const openToneModal = () => {
    setDraftTone(activeTone)
    setToneModalOpen(true)
  }

  const saveToneSettings = () => {
    setTones([draftTone])
    setToneModalOpen(false)
  }

  return {
    t,
    businessProfile,
    activeTone, setTones,
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
    draftTone, setDraftTone,
    openToneModal,
    saveToneSettings,
  }
}
