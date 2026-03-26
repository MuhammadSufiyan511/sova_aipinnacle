import { useState } from 'react'
import { Check, Globe, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { MetaConnectModal, MetaIntegrationShowcase } from '../components/specific/auth'

const authBenefits = ['Safe Meta connection', 'No email or password needed', 'Start free with no card required']

export function AuthPage() {
  const { t, i18n } = useTranslation()
  const [showMetaModal, setShowMetaModal] = useState(false)
  const localizedBenefits = i18n.resolvedLanguage?.startsWith('ur')
    ? ['محفوظ Meta کنکشن', 'ای میل یا پاس ورڈ کی ضرورت نہیں', 'کارڈ کے بغیر مفت شروع کریں']
    : authBenefits

  return (
    <>
      <section className="mx-auto max-w-[1160px] py-20 px-5">
        <div className="grid gap-8 rounded-[44px] border border-[#F0F0F0] bg-white p-6 shadow-[0_12px_44px_rgba(0,0,0,0.04)] lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <div className="rounded-[36px] bg-gradient-to-br from-[#0061FF] via-[#3B82F6] to-[#60A5FA] p-10 text-white relative overflow-hidden shadow-xl">
             {/* Decorative pattern */}
             <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <circle cx="20" cy="20" r="40" fill="white" />
                  <circle cx="100" cy="80" r="30" fill="white" />
                </svg>
             </div>

            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">{t('sections.authEyebrow')}</p>
              <h1 className="mt-6 font-display text-[2.6rem] font-extrabold tracking-[-0.04em] leading-[1.1]">{t('sections.authTitle')}</h1>
              <p className="mt-5 text-[1.1rem] leading-[1.7] text-white/90">{t('sections.authDescription')}</p>
              <div className="mt-10 space-y-5">
                {localizedBenefits.map((point) => (
                  <div key={point} className="flex items-center gap-4 text-[1rem] font-medium text-white">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-sm"><Check className="h-5 w-5" /></span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[36px] bg-[#F8FAFF] p-8 sm:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0061FF]">{t('common.accountAccess')}</p>
              <h2 className="mt-4 font-display text-[2.2rem] font-bold tracking-[-0.04em] text-[#111827]">{t('common.continueWithMeta')}</h2>
              <p className="mt-4 text-[1rem] leading-[1.7] text-[#6E6E73]">{t('sections.authDescription')}</p>
              <button type="button" onClick={() => setShowMetaModal(true)} className="mt-10 inline-flex h-[72px] w-full items-center justify-center gap-4 rounded-[22px] bg-gradient-to-r from-[#0061FF] to-[#3B82F6] px-8 text-[1.1rem] font-bold text-white shadow-[0_20px_40px_rgba(0,97,255,0.25)] transition hover:scale-[1.03] active:scale-[0.98]">
                <Globe className="h-6 w-6" />
                {t('common.continueWithMeta')}
              </button>
              <p className="mt-4 text-center text-[0.85rem] text-[#6B8795] font-medium">{t('common.noCardRequired')}</p>
              
              <div className="mt-10 rounded-[28px] border border-[#F0F0F0] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[1.1rem] font-bold text-[#111827]"><ShieldCheck className="h-6 w-6 text-[#0061FF]" />{t('sections.authEyebrow')}</div>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-[#6E6E73]">
                  {i18n.resolvedLanguage?.startsWith('ur')
                    ? 'ہم نے یہ فلو ان کاروباری مالکان کے لیے سادہ رکھا ہے جو زیادہ تر موبائل سے کام کرتے ہیں۔'
                    : 'We keep the access flow clear and low-friction for business owners who mainly work from mobile.'}
                </p>
              </div>
            </div>
          </div>

          <MetaIntegrationShowcase onOpenModal={() => setShowMetaModal(true)} />
        </div>
      </section>

      {showMetaModal ? <MetaConnectModal onClose={() => setShowMetaModal(false)} /> : null}
    </>
  )
}
