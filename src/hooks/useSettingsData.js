import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useApp } from '../context/AppProvider'
import toast from 'react-hot-toast'

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
  const { businessProfile, setBusinessProfile, tones, setTones, setHomeDarkMode, currency, setCurrency } = useApp()
  const normalizedTones = (Array.isArray(tones) ? tones : []).map(t => t.toLowerCase())
  
  const [alerts, setAlerts] = useState(true)
  const [autoReply, setAutoReply] = useState(true)
  const [spamFilter, setSpamFilter] = useState(true)
  
  const [businessModalOpen, setBusinessModalOpen] = useState(false)
  const [draftBusinessType, setDraftBusinessType] = useState(businessProfile?.type || 'clothing')
  const [draftCustomCategory, setDraftCustomCategory] = useState(businessProfile?.customCategory || '')

  const [toneModalOpen, setToneModalOpen] = useState(false)
  const [draftTones, setDraftTones] = useState(normalizedTones)
  
  const { bankDetails, setBankDetails } = useApp()
  const [draftBankDetails, setDraftBankDetails] = useState(bankDetails)
  const [isEditingBank, setIsEditingBank] = useState(false)

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
    { id: 'professional', label: t('admin.settings.tones.professional.label'), desc: t('admin.settings.tones.professional.desc'), color: 'emerald' },
    { id: 'friendly', label: t('admin.settings.tones.friendly.label'), desc: t('admin.settings.tones.friendly.desc'), color: 'blue' },
    { id: 'direct', label: t('admin.settings.tones.direct.label'), desc: t('admin.settings.tones.direct.desc'), color: 'amber' },
    { id: 'persuasive', label: t('admin.settings.tones.persuasive.label'), desc: t('admin.settings.tones.persuasive.desc'), color: 'rose' },
    { id: 'playful', label: t('admin.settings.tones.playful.label'), desc: t('admin.settings.tones.playful.desc'), color: 'violet' },
    { id: 'empathetic', label: t('admin.settings.tones.empathetic.label'), desc: t('admin.settings.tones.empathetic.desc'), color: 'cyan' },
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
    toast.success(t('admin.settings.businessUpdateSuccess'))
  }

  const openToneModal = () => {
    setDraftTones(normalizedTones)
    setToneModalOpen(true)
  }

  const saveToneSettings = () => {
    if (draftTones.length === 0) {
      toast.error(t('admin.settings.tones.validation.atLeastOne', 'Please select at least one tone for SOVA'))
      return
    }
    setTones(draftTones)
    setToneModalOpen(false)
    toast.success(t('admin.settings.toneUpdateSuccess'))
  }

  const saveBankDetails = () => {
    if (!draftBankDetails.accountTitle?.trim()) {
      toast.error(t('admin.settings.bank.errors.accountTitleRequired'))
      return
    }
    if (!draftBankDetails.bankName?.trim()) {
      toast.error(t('admin.settings.bank.errors.bankNameRequired'))
      return
    }
    if (!draftBankDetails.accountNumber?.trim()) {
      toast.error(t('admin.settings.bank.errors.accountNumberRequired'))
      return
    }

    setBankDetails(draftBankDetails)
    setIsEditingBank(false)
    toast.success(t('admin.settings.bankUpdateSuccess', 'Bank details updated successfully'))
  }

  const deleteBankDetails = () => {
    const emptyBank = { accountTitle: '', accountNumber: '', bankName: '', description: '' }
    setBankDetails(emptyBank)
    setDraftBankDetails(emptyBank)
    setIsEditingBank(false)
    toast.success(t('admin.settings.bankDeleteSuccess', 'Bank details deleted successfully'))
  }

  const cancelBankEdit = () => {
    setDraftBankDetails(bankDetails)
    setIsEditingBank(false)
  }

  const resetAllSettings = () => {
    const emptyBank = { accountTitle: '', accountNumber: '', bankName: '', description: '' }
    setBankDetails(emptyBank)
    setDraftBankDetails(emptyBank)
    setIsEditingBank(false)
    setBusinessProfile({ type: 'clothing', customCategory: '' })
    setTones([])
    setAlerts(true)
    setAutoReply(true)
    setSpamFilter(true)
    
    // Reset theme — clears saved preference so system preference takes over again
    localStorage.removeItem('sova-home-theme')
    setHomeDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    // Reset currency
    localStorage.removeItem('sova-currency')
    setCurrency('United States (USD)')
    
    toast.success(t('admin.settings.resetAllSuccess', 'All settings have been reset'))
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
    bankDetails,
    draftBankDetails, setDraftBankDetails,
    saveBankDetails,
    isEditingBank, setIsEditingBank,
    cancelBankEdit,
    deleteBankDetails,
    resetAllSettings,
    currency, setCurrency
  }
}

