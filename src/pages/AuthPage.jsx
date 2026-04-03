import { useState } from 'react'
import { Check, ShieldCheck } from 'lucide-react'
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
      <div className="page-top-spacing w-full px-0 pb-12 sm:px-6 sm:pb-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pb-32">
        <div className="overflow-hidden border-y border-[#D1FAE5] bg-white shadow-[0_24px_80px_rgba(16,185,129,0.12)] sm:rounded-[40px] sm:border">
          <div className="flex flex-col lg:grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="auth-banner-box relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#A78BFA] p-6 sm:p-14 text-white">
              <div className="pointer-events-none absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <circle cx="20" cy="20" r="40" fill="white" />
                  <circle cx="100" cy="80" r="30" fill="white" />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F1990A]">{t('sections.authEyebrow')}</p>
                <h1 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[2.6rem]">
                  <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
                    {t('sections.authTitle')}
                  </span>
                </h1>
                <p className="mt-5 text-[0.95rem] leading-[1.7] text-white/90 sm:text-[1.1rem]">{t('sections.authDescription')}</p>
                <div className="mt-10 space-y-5">
                  {localizedBenefits.map((point) => (
                    <div key={point} className="flex items-center gap-4 text-[0.9rem] font-medium text-white sm:text-[1rem]">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F59E0B] shadow-sm backdrop-blur-sm sm:h-10 sm:w-10">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="auth-form-wrapper w-full bg-[#F8FAFC] p-6 sm:p-12 md:p-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#10B981]">{t('common.accountAccess')}</p>
                <h2 className="mt-4 font-display text-[1.8rem] font-bold tracking-[-0.04em] text-[#0F172A] sm:text-[2.2rem] admin-card-title">{t('common.continueWithMeta')}</h2>
                <p className="mt-4 text-[0.95rem] leading-[1.7] text-[#1E293B] sm:text-[1rem]">{t('sections.authDescription')}</p>
                <button
                  type="button"
                  onClick={() => setShowMetaModal(true)}
                  className="mt-10 inline-flex h-16 w-full items-center justify-center gap-4 rounded-[22px] bg-[#1269d5] px-8 text-[1rem] font-bold text-white shadow-[0_20px_40px_rgba(18,105,213,0.25)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(18,105,213,0.76)] active:scale-[0.98] sm:h-[72px] sm:text-[1.1rem]"
                >
                  <FaMeta className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  {t('common.continueWithMeta')}
                </button>
                <p className="mt-4 text-center text-[0.85rem] font-medium text-[#F1990A]">{t('common.noCardRequired')}</p>

                <div className="mt-10 rounded-[28px] border border-[#E2EFEA] bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-[1rem] font-bold text-[#10B981] sm:text-[1.1rem]">
                    <ShieldCheck className="h-5 w-5 text-[#10B981] sm:h-6 sm:w-6" />
                    {t('sections.authEyebrow')}
                  </div>
                  <p className="mt-3 text-[0.85rem] leading-[1.6] text-[#1E293B] sm:text-[0.95rem]">
                    {t('content.auth.supportNote')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MetaIntegrationShowcase onOpenModal={() => setShowMetaModal(true)} />
      </div>

      {showMetaModal ? <MetaConnectModal onClose={() => setShowMetaModal(false)} /> : null}
    </>
  )
}
