import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Check, PencilLine, ArrowRight } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

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

export function StepZeroBusiness({ businessType, setBusinessType, onNext }) {
  const { t } = useTranslation()
  const [customCategory, setCustomCategory] = useState('')
  const isOther = businessType === 'other'
  const isValid = Boolean(businessType) && (!isOther || customCategory.trim() !== '')

  const handleNext = () => {
    if (isValid) {
      onNext()
    }
  }

  return (
    <div className="w-full max-w-[58rem] onboarding-step-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-9 text-center"
      >
        <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-xl shadow-emerald-500/20 sm:h-13 sm:w-13 sm:rounded-2xl onboarding-step-icon">
          <Building2 className="h-5 w-5 sm:h-6 w-6" />
        </div>
        <h2 className="font-display text-[1.6rem] font-extrabold tracking-tight text-slate-900 sm:text-[2.5rem] onboarding-card-title">
          {/* <Trans i18nKey="onboarding.business.title">
            What's your <span className="text-emerald-500">business</span>?
          </Trans> */}
          {t('onboarding.business.title')}
        </h2>
        <p className="mx-auto mt-3 max-w-md px-4 text-[0.88rem] leading-6 text-slate-500 sm:text-[0.98rem] sm:leading-7 onboarding-card-desc">
          {t('onboarding.business.subtitle')}
        </p>
      </motion.div>

      {/* Business Type Grid */}
      <div className="grid grid-cols-2 gap-3.5 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {businessTypes.map((type, i) => {
          const isSelected = businessType === type.id
          const labelKey = `onboarding.business.categories.${type.id}.label`
          const descKey = `onboarding.business.categories.${type.id}.desc`

          return (
            <motion.button
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setBusinessType(type.id)}
              className={`relative flex flex-col items-start rounded-[24px] border-2 p-4 text-left transition-all duration-300 onboarding-card ${
                isSelected
                  ? 'border-emerald-500 bg-white shadow-xl shadow-emerald-500/10 ring-4 ring-emerald-500/5 is-selected'
                  : 'border-slate-100 bg-white/50 hover:border-emerald-200 hover:bg-white hover:shadow-lg'
              }`}
            >
              {/* Check badge */}
              <div className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300 onboarding-check-badge ${
                isSelected ? 'border-emerald-500 bg-emerald-500 text-white scale-110' : 'border-slate-200 bg-transparent text-transparent'
              }`}>
                <Check className="h-3 w-3" strokeWidth={4} />
              </div>

              {/* Emoji icon */}
              <span className="mb-3 text-[1.8rem] leading-none onboarding-emoji">{type.emoji}</span>

              <p className={`text-[0.88rem] font-bold tracking-tight onboarding-label ${isSelected ? 'text-emerald-600' : 'text-slate-900'}`}>
                {t(labelKey)}
              </p>
              <p className="mt-1 text-[0.76rem] font-medium leading-5 text-slate-400 onboarding-desc">
                {t(descKey)}
              </p>
            </motion.button>
          )
        })}
      </div>

      {/* Custom Category Input */}
      <AnimatePresence>
        {isOther && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="mx-auto w-full max-w-md overflow-hidden"
          >
            <div className="relative">
              <PencilLine className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-500" />
              <input
                autoFocus
                type="text"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                placeholder={t('onboarding.business.customCategoryPlaceholder')}
                className="h-14 w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/30 pl-12 pr-4 font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:shadow-lg focus:shadow-emerald-500/10"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <div className="mt-12 flex items-center justify-center">
        <button
          type="button"
          onClick={handleNext}
          disabled={!isValid}
          className="group relative flex h-13 w-full max-w-[18rem] items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-900 text-[0.95rem] font-bold text-white shadow-2xl transition hover:bg-emerald-500 disabled:bg-slate-200 disabled:shadow-none disabled:text-slate-400 onboarding-btn-next"
        >
          <span className="relative z-10">{t('onboarding.business.nextBtn')}</span>
        </button>
      </div>
    </div>
  )
}
