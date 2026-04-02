import { Sparkles, Check, ChevronLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const availableTones = [
  { id: 'professional', label: 'Professional', desc: 'Clear, polite, and business-focused.' },
  { id: 'friendly', label: 'Friendly', desc: 'Warm, welcoming, and approachable.' },
  { id: 'persuasive', label: 'Persuasive', desc: 'Sales-driven, highlights benefits.' },
  { id: 'direct', label: 'Direct', desc: 'Short, concise, and to-the-point.' },
  { id: 'playful', label: 'Playful', desc: 'Uses emojis, energetic and fun.' },
  { id: 'empathetic', label: 'Empathetic', desc: 'Understanding, patient and helpful.' },
]

export function StepTwoTone({ tones, setTones, onBack, onComplete }) {
  const toggleTone = (id) => {
    if (tones.includes(id)) {
      setTones(tones.filter(t => t !== id))
    } else {
      setTones([...tones, id])
    }
  }

  const isValid = tones.length > 0

  return (
    <div className="w-full max-w-[58rem]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-9 text-center"
      >
        <div className="mx-auto mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-xl shadow-emerald-500/20">
          <Sparkles className="h-6 w-6" />
        </div>
        <h2 className="font-display text-[2rem] font-extrabold tracking-tight text-slate-900 sm:text-[2.5rem]">
          Choose SOVA's <span className="text-emerald-500">Personality</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[0.98rem] leading-7 text-slate-500">
          Select one or more tones that match your brand's voice.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {availableTones.map((tone, i) => {
          const isSelected = tones.includes(tone.id)

          return (
            <motion.button
              key={tone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleTone(tone.id)}
              className={`relative flex flex-col items-start rounded-[28px] border-2 p-5 text-left transition-all duration-300 ${
                isSelected 
                  ? 'border-emerald-500 bg-white shadow-xl shadow-emerald-500/10 ring-4 ring-emerald-500/5'
                  : 'border-slate-100 bg-white/50 hover:border-emerald-200 hover:bg-white hover:shadow-lg'
              }`}
            >
              <div className="mb-3 flex w-full items-center justify-between">
                <span className={`text-[1rem] font-bold tracking-tight ${isSelected ? 'text-emerald-600' : 'text-slate-900'}`}>
                  {tone.label}
                </span>
                <div className={`flex h-5.5 w-5.5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isSelected ? 'border-emerald-500 bg-emerald-500 text-white scale-110' : 'border-slate-200 bg-transparent text-transparent'
                }`}>
                  <Check className="h-3 w-3" strokeWidth={4} />
                </div>
              </div>
              <p className="text-[0.84rem] font-medium leading-6 text-slate-500">
                {tone.desc}
              </p>
            </motion.button>
          )
        })}
      </div>

      <div className="mt-12 flex items-center justify-center gap-3.5">
        <button
          type="button"
          onClick={onBack}
          className="flex h-13 items-center gap-2 rounded-full border-2 border-slate-100 bg-white px-6 text-[0.95rem] font-bold text-slate-400 transition hover:border-slate-200 hover:text-slate-600"
        >
          <ChevronLeft className="h-4.5 w-4.5" /> Back
        </button>
        
        <button
          type="button"
          onClick={onComplete}
          disabled={!isValid}
          className="group relative flex h-13 w-full max-w-[18rem] items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-900 text-[0.95rem] font-bold text-white shadow-2xl transition hover:bg-emerald-500 disabled:bg-slate-200 disabled:shadow-none"
        >
          <span className="relative z-10 transition group-hover:translate-x-[-4px]">Launch Dashboard</span>
          <ArrowRight className="relative z-10 h-4.5 w-4.5 transition group-hover:translate-x-[4px]" />
        </button>
      </div>
    </div>
  )
}
