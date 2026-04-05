import { Sparkles, Check, ChevronLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'

const availableTones = [
  { id: 'professional' },
  { id: 'friendly' },
  { id: 'persuasive' },
  { id: 'direct' },
  { id: 'playful' },
  { id: 'empathetic' },
]

export function StepTwoTone({ tones, setTones, onBack, onComplete }) {
  const { t } = useTranslation()

  const toggleTone = (id) => {
    if (tones.includes(id)) {
      setTones(tones.filter(t => t !== id))
    } else {
      setTones([...tones, id])
    }
  }

  const isValid = tones.length > 0

  return (
    <div className="w-full max-w-[58rem] onboarding-step-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-9 text-center"
      >
        <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-xl shadow-emerald-500/20 sm:h-13 sm:w-13 sm:rounded-2xl onboarding-step-icon">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <h2 className="font-display text-[1.6rem] font-extrabold tracking-tight text-slate-900 sm:text-[2.5rem] onboarding-card-title">
          {t('onboarding.tone.title')}
        </h2>
        <p className="mx-auto mt-3 max-w-md px-4 text-[0.88rem] leading-6 text-slate-500 sm:text-[0.98rem] sm:leading-7 onboarding-card-desc">
          {t('onboarding.tone.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-3.5 xs:grid-cols-2 lg:grid-cols-3">
        {availableTones.map((tone, i) => {
          const isSelected = tones.includes(tone.id)
          const labelKey = `onboarding.tone.profiles.${tone.id}.label`
          const descKey = `onboarding.tone.profiles.${tone.id}.desc`

          return (
            <motion.button
              key={tone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleTone(tone.id)}
              className={`relative flex flex-col items-start rounded-[28px] border-2 p-5 text-left transition-all duration-300 onboarding-card ${
                isSelected 
                  ? 'border-emerald-500 bg-white shadow-xl shadow-emerald-500/10 ring-4 ring-emerald-500/5 is-selected'
                  : 'border-slate-100 bg-white/50 hover:border-emerald-200 hover:bg-white hover:shadow-lg'
              }`}
            >
              <div className="mb-3 flex w-full items-center justify-between">
                <span className={`text-[1rem] font-bold tracking-tight onboarding-label ${isSelected ? 'text-emerald-600' : 'text-slate-900'}`}>
                  {t(labelKey)}
                </span>
                <div className={`flex h-5.5 w-5.5 items-center justify-center rounded-full border-2 transition-all duration-300 onboarding-check-badge ${
                  isSelected ? 'border-emerald-500 bg-emerald-500 text-white scale-110' : 'border-slate-200 bg-transparent text-transparent'
                }`}>
                  <Check className="h-3 w-3" strokeWidth={4} />
                </div>
              </div>
              <p className="text-[0.84rem] font-medium leading-6 text-slate-500 onboarding-desc">
                {t(descKey)}
              </p>
            </motion.button>
          )
        })}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-3.5 sm:mt-16 sm:flex-row">
        <button
          type="button"
          onClick={onBack}
          className="flex h-12 w-full max-w-[18rem] items-center justify-center gap-2 rounded-full border-2 border-slate-100 bg-white px-6 text-[0.9rem] font-bold text-slate-400 transition hover:border-slate-200 hover:text-slate-600 sm:h-13 sm:w-auto onboarding-btn-back"
        >
          <ChevronLeft className="h-4 w-4 sm:h-4.5 sm:w-4.5" /> {t('common.previous')}
        </button>
        
        <button
          type="button"
          onClick={onComplete}
          disabled={!isValid}
          className="group relative flex h-12 w-full max-w-[18rem] items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-900 text-[0.9rem] font-bold text-white shadow-2xl transition hover:bg-emerald-500 disabled:bg-slate-200 disabled:shadow-none sm:h-13 sm:text-[0.95rem] onboarding-btn-next"
        >
          <span className="relative z-10 transition group-hover:translate-x-[-4px]">{t('onboarding.tone.completeBtn')}</span>
          <ArrowRight className="relative z-10 h-4.5 w-4.5 transition group-hover:translate-x-[4px]" />
        </button>
      </div>
    </div>
  )
}
