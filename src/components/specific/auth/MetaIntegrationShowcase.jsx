import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const steps = [
  'Choose your Meta business account',
  'Select the WhatsApp number to connect',
  'Approve permissions and start automation',
]

export function MetaIntegrationShowcase({ onOpenModal }) {
  const { i18n } = useTranslation()
  const isUrdu = i18n.resolvedLanguage?.startsWith('ur')
  const localizedSteps = isUrdu
    ? [
        'اپنا Meta بزنس اکاؤنٹ منتخب کریں',
        'جو WhatsApp نمبر جوڑنا ہے وہ منتخب کریں',
        'اجازت دیں اور آٹومیشن شروع کریں',
      ]
    : steps

  return (
    <div className="rounded-[40px] border border-[#F0F0F0] bg-gradient-to-br from-[#F8FAFF] via-white to-[#F0F7FF] p-8 shadow-[0_12px_44px_rgba(0,0,0,0.03)] lg:col-span-2">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:p-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0061FF]">{isUrdu ? 'Meta انٹیگریشن موک اپ' : 'Meta integration mockup'}</p>
          <h2 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#111827]">{isUrdu ? 'چند آسان مراحل میں Meta کے ذریعے WhatsApp کنیکٹ کریں۔' : 'Connect WhatsApp through Meta in a few simple steps.'}</h2>
          <p className="mt-5 text-[1.1rem] leading-[1.7] text-[#6E6E73]">{isUrdu ? 'یہ موک اپ دکھاتا ہے کہ Sova کاروباری مالکان کو بغیر الجھن کے صاف Meta کنکشن فلو میں کیسے گائیڈ کرتا ہے۔' : 'This mockup shows how Sova can guide business owners through a clean Meta connection flow without extra confusion.'}</p>
          <div className="mt-10 space-y-4">
            {localizedSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-[22px] bg-white px-6 py-5 text-[1rem] font-bold text-[#111827] shadow-sm border border-black/5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] text-sm font-extrabold text-white shadow-lg">0{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[40px] border border-[#2D3139] bg-[#090E1A] p-2 shadow-[0_32px_80px_rgba(0,0,0,0.2)]">
          <div className="rounded-[32px] bg-gradient-to-b from-[#111827] to-[#090E1A] p-6 text-white overflow-hidden">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <div>
                <p className="text-sm font-bold">{isUrdu ? 'Meta بزنس کنکشن' : 'Meta Business Connection'}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{isUrdu ? 'آن بورڈنگ موک اپ فلو' : 'Mockup flow for onboarding'}</p>
              </div>
              <div className="rounded-full bg-[#1877F2] px-4 py-1.5 text-[10px] font-extrabold text-white uppercase tracking-wider shadow-lg shadow-[#1877F2]/30">Meta</div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#0061FF]">{isUrdu ? 'بزنس اکاؤنٹ' : 'Business account'}</p>
                <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4 border border-white/5">
                  <div>
                    <p className="text-[1.05rem] font-bold">Sova Commerce Demo</p>
                    <p className="text-[10px] font-medium text-white/60">Business Manager ID: 4921 8820</p>
                  </div>
                  <span className="rounded-full border border-[#0061FF]/30 bg-[#0061FF]/20 px-4 py-1.5 text-[10px] font-bold text-[#0061FF]">{isUrdu ? 'کنیکٹڈ' : 'Connected'}</span>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#0061FF]">{isUrdu ? 'WhatsApp نمبر' : 'WhatsApp number'}</p>
                <div className="mt-4 rounded-2xl bg-white/5 px-5 py-4 border border-white/5">
                  <p className="text-[1.05rem] font-bold">+92 300 1234567</p>
                  <p className="text-[10px] font-medium tracking-tight text-white/60">{isUrdu ? 'میسج آٹومیشن کے لیے تیار' : 'Ready for message automation'}</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-blue-500/20 bg-blue-500/10 p-6 backdrop-blur-sm">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-blue-300">{isUrdu ? 'اجازت منظور' : 'Permissions approved'}</p>
                <p className="mt-3 text-[0.95rem] font-medium leading-[1.65] text-white/80">{isUrdu ? 'Sova کے ذریعے میسجز سنبھالیں، لیڈز سنک کریں، اور خودکار جواب شروع کریں۔' : 'Manage messages, sync leads, and trigger automated replies through Sova.'}</p>
              </div>
              <button type="button" onClick={onOpenModal} className="mt-2 inline-flex h-[72px] w-full items-center justify-center gap-3 rounded-[24px] bg-gradient-to-r from-[#0061FF] to-[#3B82F6] px-8 text-[1.1rem] font-bold text-white shadow-[0_20px_40px_rgba(0,97,255,0.25)] transition hover:scale-[1.03]">
                <Globe className="h-6 w-6" />
                {isUrdu ? 'Sova میں جاری رکھیں' : 'Continue to Sova'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
