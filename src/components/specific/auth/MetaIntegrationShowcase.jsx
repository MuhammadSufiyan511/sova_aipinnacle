import { Globe } from 'lucide-react'
import { FaMeta } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

const steps = [
  'Choose your Meta business account',
  'Select the WhatsApp number to connect',
  'Approve permissions and start automation',
]

export function MetaIntegrationShowcase({ onOpenModal }) {
  const { t } = useTranslation()
  const copy = t('content.metaIntegration', { returnObjects: true }) || {}
  const localizedSteps = copy.steps || steps

  return (
    <div className="rounded-[40px] border border-[#E2EFEA] bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC] p-8 shadow-[0_12px_44px_rgba(0,0,0,0.03)] lg:col-span-2">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:p-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#10B981]">{copy.eyebrow}</p>
          <h2 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0F172A]">{copy.title}</h2>
          <p className="mt-5 text-[1.1rem] leading-[1.7] text-[#48617A]">{copy.description}</p>
          <div className="mt-10 space-y-4">
            {localizedSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-[22px] border border-[#E2EFEA] bg-white px-6 py-5 text-[1rem] font-bold text-[#0F172A] shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F1990A] text-sm font-extrabold text-white shadow-lg">0{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[40px] border border-[#334155] bg-[#0F172A] p-2 shadow-[0_32px_80px_rgba(0,0,0,0.2)]">
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0F172A] to-[#0F172A] p-6 text-white">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <div>
                <p className="text-sm font-bold">{copy.cardTitle}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F1990A]">{copy.cardSubtext}</p>
              </div>
              <div className="rounded-full bg-[#1877F2] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg shadow-[#1877F2]/30">Meta</div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#10B981]">{copy.businessAccount}</p>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4">
                  <div>
                    <p className="text-[1.05rem] font-bold">Sova Commerce Demo</p>
                    <p className="text-[10px] font-medium text-[#F1990A]">Business Manager ID: 4921 8820</p>
                  </div>
                  <span className="rounded-full border border-[#10B981]/30 bg-[#10B981]/20 px-4 py-1.5 text-[10px] font-bold text-[#10B981]">{copy.connected}</span>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#10B981]">{copy.whatsappNumber}</p>
                <div className="mt-4 rounded-2xl border border-white/5 bg-white/5 px-5 py-4">
                  <p className="text-[1.05rem] font-bold">+92 300 1234567</p>
                  <p className="text-[10px] font-medium tracking-tight text-[#F1990A]">{copy.numberStatus}</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-emerald-500/20 bg-emerald-500/10 p-6 backdrop-blur-sm">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-emerald-300">{copy.permissions}</p>
                <p className="mt-2 text-[0.8rem] leading-[1.6] text-white/80">{copy.permissionsText}</p>
              </div>
              <button
                type="button"
                onClick={onOpenModal}
                className="mt-2 inline-flex h-[72px] w-full items-center justify-center gap-3 rounded-[24px] bg-gradient-to-r from-[#10B981] to-[#1E293B] px-8 text-[1.1rem] font-bold text-white shadow-[0_20px_40px_rgba(16,185,129,0.22)] transition hover:scale-[1.03]"
              >
                <Globe className="h-6 w-6" />
                {copy.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
