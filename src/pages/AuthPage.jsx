import { useState } from 'react'
import { Check, Globe, ShieldCheck } from 'lucide-react'
import { FaMeta } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import { SeoHead } from '../components'
import { MetaConnectModal, MetaIntegrationShowcase } from '../components/specific/auth'
import { createBreadcrumbSchema } from '../seo/schemas'

export function AuthPage() {
  const { t } = useTranslation()
  const [showMetaModal, setShowMetaModal] = useState(false)
  const localizedBenefits = t('content.auth.benefits', { returnObjects: true }) || []

  return (
    <>
      <SeoHead
        title="Connect with Meta | SOVA"
        description="Connect your Meta and WhatsApp setup with SOVA to start automating customer chats, product replies, and lead handling."
        schema={[
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Connect with Meta', path: '/auth' },
          ]),
        ]}
      />
      <section className="mx-auto max-w-[1160px] px-5 py-20">
        <div className="grid gap-8 rounded-[44px] border border-[#E2EFEA] bg-white p-6 shadow-[0_12px_44px_rgba(30,41,59,0.04)] lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#A78BFA] p-10 text-white shadow-[0_24px_60px_rgba(30,41,59,0.3)]">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="20" cy="20" r="40" fill="white" />
                <circle cx="100" cy="80" r="30" fill="white" />
              </svg>
            </div>

            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F1990A]">{t('sections.authEyebrow')}</p>
              <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.1] tracking-[-0.04em]">
                <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
                  {t('sections.authTitle')}
                </span>
              </h1>
              <p className="mt-5 text-[1.1rem] leading-[1.7] text-white/90">{t('sections.authDescription')}</p>
              <div className="mt-10 space-y-5">
                {localizedBenefits.map((point) => (
                  <div key={point} className="flex items-center gap-4 text-[1rem] font-medium text-white">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B] shadow-sm backdrop-blur-sm">
                      <Check className="h-5 w-5" />
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[36px] bg-[#F8FAFC] p-8 sm:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#10B981]">{t('common.accountAccess')}</p>
              <h2 className="mt-4 font-display text-[2.2rem] font-bold tracking-[-0.04em] text-[#0F172A]">{t('common.continueWithMeta')}</h2>
              <p className="mt-4 text-[1rem] leading-[1.7] text-[#1E293B]">{t('sections.authDescription')}</p>
              <button
                type="button"
                onClick={() => setShowMetaModal(true)}
                className="mt-10 inline-flex h-[72px] w-full items-center justify-center gap-4 rounded-[22px] bg-[#1269d5] px-8 text-[1.1rem] font-bold text-white shadow-[0_20px_40px_rgba(18, 105, 213,0.25)] transition hover:shadow-[0_24px_50px_rgba(18, 105, 213,0.76)] hover:-translate-y-1 active:scale-[0.98]"
              >
                {/* <Globe className="h-6 w-6" /> */}
                 <FaMeta className="h-6 w-6 text-white" />
                {t('common.continueWithMeta')}
              </button>
              <p className="mt-4 text-center text-[0.85rem] font-medium text-[#F1990A]">{t('common.noCardRequired')}</p>

              <div className="mt-10 rounded-[28px] border border-[#E2EFEA] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[1.1rem] font-bold text-[#10B981]">
                  <ShieldCheck className="h-6 w-6 text-[#10B981]" />
                  {t('sections.authEyebrow')}
                </div>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-[#1E293B]">
                  {t('content.auth.supportNote')}
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
