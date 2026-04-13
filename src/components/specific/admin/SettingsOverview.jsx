import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Bell, Bot, Briefcase, Check, MessageSquare, Shield, Sparkles, X, Zap } from 'lucide-react'
import { useState, memo, useEffect } from 'react'
import { useApp } from '../../../context/AppProvider'
import { useTranslation } from 'react-i18next'

const businessTypes = [
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

const toneColors = {
  emerald: { active: 'border-emerald-500 bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
  blue: { active: 'border-blue-400 bg-blue-50 text-blue-700', dot: 'bg-blue-400' },
  amber: { active: 'border-amber-400 bg-amber-50 text-amber-700', dot: 'bg-amber-400' },
  violet: { active: 'border-violet-500 bg-violet-50 text-violet-700', dot: 'bg-violet-500' },
  rose: { active: 'border-rose-400 bg-rose-50 text-rose-700', dot: 'bg-rose-400' },
  cyan: { active: 'border-cyan-400 bg-cyan-50 text-cyan-700', dot: 'bg-cyan-400' },
}

function Toggle({ enabled, onChange }) {
  return (
    <button onClick={() => onChange(!enabled)} className={`relative inline-flex h-5.5 w-10 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ${enabled ? 'bg-emerald-500' : 'bg-[#DDEFE7]'}`}>
      <Motion.div layout transition={{ type: 'spring', stiffness: 500, damping: 30 }} className={`h-3.5 w-3.5 rounded-full bg-white shadow-md ${enabled ? 'translate-x-5.5' : 'translate-x-1'}`} />
    </button>
  )
}

function SettingRow({ icon, iconBg, title, desc, children }) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-center sm:text-left">
      <div className="flex flex-col items-center gap-3.5 sm:flex-row sm:items-center">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-[0.82rem] font-bold text-[#173247]">{title}</p>
          <p className="text-[0.7rem] leading-4 text-[#1E293B] sm:leading-normal">{desc}</p>
        </div>
      </div>
      <div className="flex w-full justify-center sm:w-auto sm:justify-end sm:shrink-0">{children}</div>
    </div>
  )
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const rowItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }

export const SettingsOverview = memo(function SettingsOverview() {
  const { t } = useTranslation()
  const { businessProfile, setBusinessProfile, tones, setTones } = useApp()
  const activeTone = tones[0] || 'Professional'
  const [alerts, setAlerts] = useState(true)
  const [autoReply, setAutoReply] = useState(true)
  const [spamFilter, setSpamFilter] = useState(true)
  const [businessModalOpen, setBusinessModalOpen] = useState(false)
  const [draftBusinessType, setDraftBusinessType] = useState(businessProfile?.type || 'clothing')
  const [draftCustomCategory, setDraftCustomCategory] = useState(businessProfile?.customCategory || '')
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

  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="mx-auto flex w-[94%] max-w-3xl flex-col gap-4 sm:w-full">
        <Motion.div variants={rowItem} className="text-center sm:text-left">
          <h2 className="font-display text-[1.2rem] font-bold text-[#173247] admin-card-title settings-main-title">{t('admin.settings.title')}</h2>
          <p className="mt-0.5 text-[0.74rem] text-[#1E293B] admin-card-desc settings-main-subtitle">{t('admin.settings.subtitle')}</p>
        </Motion.div>

      <Motion.section variants={rowItem} className="rounded-[22px] border border-[#DDEFE7] p-4 shadow-sm admin-card-shell">
        <div className="mb-4 flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
            <Sparkles className="h-4.5 w-4.5" />
          </span>
          <div>
            <h3 className="text-[0.86rem] font-bold text-[#173247] admin-card-title">{t('admin.settings.sections.voice.title')}</h3>
            <p className="text-[0.7rem] text-[#1E293B]">{t('admin.settings.sections.voice.subtitle')}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2.5 xs:grid-cols-2 md:grid-cols-3">
          {toneOptions.map((tone) => {
            const isActive = activeTone === tone.id
            const style = toneColors[tone.color]
            return (
              <Motion.button
                key={tone.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => setTones([tone.id])}
                className={`admin-tone-card relative rounded-2xl border-2 p-3 text-center transition-all sm:text-left ${isActive ? 'is-active ' + style.active : 'border-[#DDEFE7] bg-[#F2FBF7] hover:border-[#CFE6DC] hover:bg-[#EEF8F3]'}`}
              >
                {isActive ? <Motion.div layoutId="tone-dot" className={`tone-dot absolute right-3 top-3 h-2 w-2 rounded-full ${style.dot}`} /> : null}
                <p className="text-[0.8rem] font-bold">{tone.label}</p>
                <p className={`mt-0.5 text-[0.66rem] ${isActive ? 'opacity-70' : 'text-[#1E293B]'}`}>{tone.desc}</p>
              </Motion.button>
            )
          })}
        </div>
      </Motion.section>

      <Motion.section variants={rowItem} className="rounded-[22px] border border-[#DDEFE7] p-4 shadow-sm admin-card-shell">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 admin-stat-icon">
              <Briefcase className="h-4.5 w-4.5" />
            </span>
            <div>
              <h3 className="text-[0.86rem] font-bold text-[#173247] admin-card-title">{t('admin.settings.sections.business.title')}</h3>
              <p className="mt-0.5 text-[0.72rem] leading-5 text-[#1E293B]">{t('admin.settings.sections.business.subtitle')}</p>
              <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#10B981]">
                {t('admin.settings.sections.business.current')}: {businessLabel}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={openBusinessModal}
            className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-4 py-2 text-[0.76rem] font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition hover:scale-[1.02]"
          >
            {t('admin.settings.sections.business.button')}
          </button>
        </div>
      </Motion.section>

      <Motion.section variants={rowItem} className="divide-y divide-[#ECF8F3] rounded-[22px] border border-[#DDEFE7] shadow-sm admin-card-shell">
        <div className="px-4 pb-3 pt-4">
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
            <Bot className="h-4 w-4 text-[#10B981]" />
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#10B981] admin-card-title">{t('admin.settings.sections.rules.title')}</h3>
          </div>
        </div>
        <div className="px-4 py-3.5 admin-setting-item">
          <SettingRow icon={<MessageSquare className="h-4.5 w-4.5" />} iconBg="bg-emerald-50 text-emerald-500 admin-stat-icon" title={t('admin.settings.rows.autoReply.title')} desc={t('admin.settings.rows.autoReply.desc')}>
            <Toggle enabled={autoReply} onChange={setAutoReply} />
          </SettingRow>
        </div>
        <div className="px-4 py-3.5 admin-setting-item">
          <SettingRow icon={<Zap className="h-4.5 w-4.5" />} iconBg="bg-violet-50 text-violet-500 admin-stat-icon" title={t('admin.settings.rows.spamFilter.title')} desc={t('admin.settings.rows.spamFilter.desc')}>
            <Toggle enabled={spamFilter} onChange={setSpamFilter} />
          </SettingRow>
        </div>
        <div className="px-4 py-3.5 admin-setting-item">
          <SettingRow icon={<Bell className="h-4.5 w-4.5" />} iconBg="bg-blue-50 text-blue-500 admin-stat-icon" title={t('admin.settings.rows.alerts.title')} desc={t('admin.settings.rows.alerts.desc')}>
            <Toggle enabled={alerts} onChange={setAlerts} />
          </SettingRow>
        </div>
        <div className="px-4 py-3.5 opacity-60 admin-setting-item">
          <SettingRow icon={<Shield className="h-4.5 w-4.5" />} iconBg="bg-[#F2FBF7] text-[#86A29B] admin-stat-icon" title={t('admin.settings.rows.tfa.title')} desc={t('admin.settings.rows.tfa.desc')}>
            <span className="rounded-full bg-[#F2FBF7] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#6D8A88] admin-pill">{t('admin.settings.comingSoon')}</span>
          </SettingRow>
        </div>
      </Motion.section>

      <AnimatePresence>
        {businessModalOpen ? (
          <>
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 z-[120] bg-[#1E293B]/45 ${isMobile ? '' : 'backdrop-blur-sm'}`}
              onClick={() => setBusinessModalOpen(false)}
            />
            <Motion.div
              initial={{ opacity: 0, y: isMobile ? 12 : 24, scale: isMobile ? 1 : 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: isMobile ? 8 : 16, scale: isMobile ? 1 : 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed left-1/2 top-1/2 z-[130] flex w-[min(94vw,680px)] max-h-[92vh] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[28px] border border-[#DDEFE7] bg-white shadow-[0_30px_80px_rgba(30,41,59,0.22)] admin-card-shell overflow-hidden will-change-[transform,opacity]"
            >
              <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-7 sm:pt-7">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#10B981]">
                    {t('admin.settings.sections.business.title')}
                  </p>
                  <h3 className="mt-1.5 font-display text-[1.15rem] font-bold text-[#173247] admin-card-title sm:text-[1.25rem]">
                    {t('admin.settings.sections.business.modalTitle')}
                  </h3>
                  <p className="mt-1 text-[0.76rem] leading-5 text-[#1E293B] admin-card-desc">
                    {t('admin.settings.sections.business.modalSubtitle')}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setBusinessModalOpen(false)}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DDEFE7] bg-[#F8FAFC] text-[#48617A] transition admin-modal-close hover:bg-white"
                  aria-label={t('admin.settings.sections.business.close')}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-4 sm:px-7 sm:py-6">
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {businessTypes.map((type) => {
                    const isSelected = draftBusinessType === type.id
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setDraftBusinessType(type.id)}
                        className={`relative rounded-[20px] border-2 p-3 text-left transition ${
                          isSelected
                            ? 'border-[#10B981] bg-[#ECFDF5] shadow-[0_10px_24px_rgba(16,185,129,0.12)]'
                            : 'border-[#DDEFE7] bg-white hover:border-[#BFE7DA] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        {isSelected ? (
                          <span className="absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-white">
                            <Check className="h-3 w-3" />
                          </span>
                        ) : null}
                        <span className="text-[1.3rem] leading-none">{type.emoji}</span>
                        <p className="mt-1.5 text-[0.78rem] font-bold text-[#173247]">
                          {t(`onboarding.business.categories.${type.id}.label`)}
                        </p>
                        <p className="mt-0.5 text-[0.66rem] leading-4 text-[#1E293B]">
                          {t(`onboarding.business.categories.${type.id}.desc`)}
                        </p>
                      </button>
                    )
                  })}
                </div>

                {draftBusinessType === 'other' ? (
                  <div className="mt-5">
                    <label className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#648E89]">
                      {t('onboarding.business.customCategoryPlaceholder')}
                    </label>
                    <input
                      type="text"
                      value={draftCustomCategory}
                      onChange={(event) => setDraftCustomCategory(event.target.value)}
                      placeholder={t('onboarding.business.customCategoryPlaceholder')}
                      className="h-12 w-full rounded-2xl border border-[#DDEFE7] bg-[#F8FAFC] px-4 text-[0.88rem] text-[#173247] outline-none transition focus:border-[#10B981] focus:bg-white"
                    />
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col-reverse gap-2.5 border-t border-[#ECF8F3] bg-[#F8FAFC]/50 px-5 py-4 sm:flex-row sm:justify-end sm:px-7 sm:py-5">
                <button
                  type="button"
                  onClick={() => setBusinessModalOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-[#DDEFE7] bg-white px-5 py-2.5 text-[0.76rem] font-bold text-[#48617A] transition hover:bg-[#F8FAFC]"
                >
                  {t('admin.settings.sections.business.cancel')}
                </button>
                <button
                  type="button"
                  onClick={saveBusinessProfile}
                  disabled={draftBusinessType === 'other' && !draftCustomCategory.trim()}
                  className="inline-flex items-center justify-center rounded-full bg-[#10B981] px-5 py-2.5 text-[0.76rem] font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {t('admin.settings.sections.business.save')}
                </button>
              </div>
            </Motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </Motion.div>
  )
})
