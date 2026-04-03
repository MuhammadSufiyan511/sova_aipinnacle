import { motion } from 'framer-motion'
import { ArrowRight, Building2, Check } from 'lucide-react'

const businessTypes = [
  { id: 'clothing', emoji: '👗', label: 'Clothing', desc: 'Apparel, shoes, accessories.' },
  { id: 'jewellery', emoji: '💍', label: 'Jewellery', desc: 'Gold, silver, ornaments.' },
  { id: 'toys', emoji: '🧸', label: 'Toys', desc: 'Kids, puzzles, games.' },
  { id: 'books-stationary', emoji: '📚', label: 'Books & Stationary', desc: 'Education, office supplies.' },
  { id: 'dry-fruits', emoji: '🥜', label: 'Dry Fruits', desc: 'Almonds, cashews, dates.' },
  { id: 'decoration', emoji: '🎈', label: 'Decoration', desc: 'Events, themes, home decor.' },
  { id: 'electronics', emoji: '📱', label: 'Electronics', desc: 'Phones, gadgets, accessories.' },
  { id: 'medical-instruments', emoji: '🩺', label: 'Medical Instruments', desc: 'Hospital and clinic gear.' },
  { id: 'surgical-instruments', emoji: '✂️', label: 'Surgical Instruments', desc: 'Precision tools and sets.' },
  { id: 'hardware', emoji: '🔨', label: 'Hardware', desc: 'Tools, materials, fixtures.' },
  { id: 'fireworks', emoji: '✨', label: 'Fireworks', desc: 'Celebrations and events.' },
  { id: 'other', emoji: '🏬', label: 'Other', desc: 'Something unique to you.' },
]

export function StepZeroBusiness({ businessType, setBusinessType, onNext }) {
  const isValid = Boolean(businessType)

  return (
    <div className="w-full max-w-[58rem] onboarding-step-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-9 text-center"
      >
        <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-xl shadow-emerald-500/20 sm:h-13 sm:w-13 sm:rounded-2xl onboarding-step-icon">
          <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <h2 className="font-display text-[1.6rem] font-extrabold tracking-tight text-slate-900 sm:text-[2.5rem] onboarding-card-title">
          What's your <span className="text-emerald-500">business?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md px-4 text-[0.88rem] leading-6 text-slate-500 sm:text-[0.98rem] sm:leading-7 onboarding-card-desc">
          SOVA tailors its replies and lead detection to your specific industry.
        </p>
      </motion.div>

      {/* Business Type Grid */}
      <div className="grid grid-cols-2 gap-3.5 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {businessTypes.map((type, i) => {
          const isSelected = businessType === type.id

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
                {type.label}
              </p>
              <p className="mt-1 text-[0.76rem] font-medium leading-5 text-slate-400 onboarding-desc">
                {type.desc}
              </p>
            </motion.button>
          )
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 flex items-center justify-center">
        <button
          type="button"
          onClick={onNext}
          disabled={!isValid}
          className="group relative flex h-13 w-full max-w-[18rem] items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-900 text-[0.95rem] font-bold text-white shadow-2xl transition hover:bg-emerald-500 disabled:bg-slate-200 disabled:shadow-none disabled:text-slate-400 onboarding-btn-next"
        >
          <span className="relative z-10 transition group-hover:translate-x-[-4px]">Continue</span>
          <ArrowRight className="relative z-10 h-4.5 w-4.5 transition group-hover:translate-x-[4px]" />
        </button>
      </div>
    </div>
  )
}
