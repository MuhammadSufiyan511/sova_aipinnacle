import { motion as Motion } from 'framer-motion'
import { Bell, Bot, Briefcase, MessageSquare, Shield, Sparkles, Zap } from 'lucide-react'
import { memo } from 'react'
import { BusinessProfileModal } from './settings/BusinessProfileModal'
import { ToneSettingsModal } from './settings/ToneSettingsModal'
import { useSettingsData, toneColors } from '../../../hooks/useSettingsData'
import { Toggle } from '../../shared/Toggle'
import sovaLogo from '../../../assets/logos/sova-bgless.png'

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
  const {
    t, activeTone, setTones,
    alerts, setAlerts, autoReply, setAutoReply, spamFilter, setSpamFilter,
    businessModalOpen, setBusinessModalOpen, draftBusinessType, setDraftBusinessType,
    draftCustomCategory, setDraftCustomCategory, isMobile, businessLabel,
    toneOptions, openBusinessModal, saveBusinessProfile,
    toneModalOpen, setToneModalOpen, draftTone, setDraftTone, openToneModal, saveToneSettings
  } = useSettingsData()

  return (
    <Motion.div variants={container} initial="hidden" animate="show" className="mx-auto flex w-[94%] max-w-3xl flex-col gap-4 sm:w-full">
      <Motion.div variants={rowItem} className="text-center sm:text-left">
        <h2 className="font-display text-[1.2rem] font-bold text-[#173247] admin-card-title settings-main-title">{t('admin.settings.title')}</h2>
        <p className="mt-0.5 text-[0.74rem] text-[#1E293B] admin-card-desc settings-main-subtitle">{t('admin.settings.subtitle')}</p>
      </Motion.div>

      <Motion.section variants={rowItem} className="rounded-[22px] border border-[#DDEFE7] p-4 shadow-sm admin-card-shell">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
            {/* <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 admin-stat-icon">
            </span> */}
            <div className="mx-auto mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-white shadow-xl shadow-emerald-500/20 sm:h-11 sm:w-11 sm:rounded-2xl onboarding-step-icon">
              <img src={sovaLogo} alt="SOVA Logo" className="h-5 w-5 sm:h-10 sm:w-10 object-contain rounded-xl" />

            </div>




            <div>
              <h3 className="text-[0.86rem] font-bold text-[#173247] admin-card-title">{t('admin.settings.sections.voice.title')}</h3>
              <p className="mt-0.5 text-[0.72rem] leading-5 text-[#1E293B]">{t('admin.settings.sections.voice.subtitle')}</p>
              <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#10B981]">
                {t('admin.settings.sections.voice.current')}: {toneOptions.find(opt => opt.id === activeTone)?.label || activeTone}
              </p>
            </div>
          </div>
          <button type="button" onClick={openToneModal} className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-4 py-2 text-[0.76rem] font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition hover:scale-[1.02]">
            {t('admin.settings.sections.voice.button')}
          </button>
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

          <button type="button" onClick={openBusinessModal} className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-4 py-2 text-[0.76rem] font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition hover:scale-[1.02]">
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

      <BusinessProfileModal
        isOpen={businessModalOpen}
        onClose={() => setBusinessModalOpen(false)}
        isMobile={isMobile}
        t={t}
        draftBusinessType={draftBusinessType}
        setDraftBusinessType={setDraftBusinessType}
        draftCustomCategory={draftCustomCategory}
        setDraftCustomCategory={setDraftCustomCategory}
        saveBusinessProfile={saveBusinessProfile}
      />
      <ToneSettingsModal
        isOpen={toneModalOpen}
        onClose={() => setToneModalOpen(false)}
        isMobile={isMobile}
        t={t}
        toneOptions={toneOptions}
        draftTone={draftTone}
        setDraftTone={setDraftTone}
        saveToneSettings={saveToneSettings}
      />
    </Motion.div>
  )
})
