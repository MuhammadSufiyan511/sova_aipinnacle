import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { X, AlertCircle, Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const TagInput = ({ value = [], onChange, placeholder, isColor = false }) => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')

  const isValidColor = (str) => {
    if (typeof window === 'undefined') return false
    const s = new Option().style
    s.color = str
    return s.color !== ''
  }

  const addTag = (tag) => {
    const trimmed = tag.trim()
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed])
      setInputValue('')
    }
  }

  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag))
  }

  return (
    <div className="space-y-3">
      <div className="admin-tag-input-container relative flex min-h-[52px] w-full flex-wrap gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/30 px-3 py-2 transition-all hover:border-emerald-200 focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-500/5">
        <AnimatePresence>
          {value.map((tag) => {
            const displayColor = isColor && isValidColor(tag) ? tag : null

            return (
              <Motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`admin-tag-chip flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.76rem] font-bold shadow-sm ${displayColor
                  ? 'border border-black/5'
                  : (isColor ? 'border-2 border-dashed border-emerald-200 bg-emerald-50 text-emerald-900/40' : 'bg-emerald-900 text-white')
                  }`}
                style={displayColor ? {
                  backgroundColor: displayColor,
                  color: ['white', 'yellow', 'lime', 'cyan', 'pink'].some(c => tag.toLowerCase().includes(c)) ? '#064E3B' : 'white',
                  textShadow: 'none',
                  border: '1px solid rgba(0,0,0,0.1)'
                } : {}}
              >
                {displayColor && (
                  <span
                    className="h-2 w-2 rounded-full border border-white/20 bg-white"
                    style={{ backgroundColor: tag }}
                  />
                )}
                {isColor && !displayColor && <AlertCircle className="h-3 w-3 text-red-400" />}
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className={`hover:shadow-lg transition-all opacity-70 hover:opacity-100 ${isColor && !displayColor ? 'text-red-400' : ''}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Motion.span>
            )
          })}
        </AnimatePresence>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              addTag(inputValue)
            }
          }}
          placeholder={value.length === 0 ? placeholder : ''}
          className={`admin-tag-input-field flex-1 min-w-[120px] bg-transparent text-[0.9rem] text-emerald-950 outline-none placeholder:text-emerald-900/30 font-medium ${isColor && inputValue && !isValidColor(inputValue) ? 'text-red-500' : ''}`}
        />
        {inputValue && (
          <div className="flex items-center gap-2 ltr:ml-auto rtl:mr-auto">
            {isColor && isValidColor(inputValue) && (
              <Motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="h-4 w-4 rounded-full border-2 border-emerald-500 bg-white"
                style={{ backgroundColor: inputValue }}
              />
            )}
            <button
              type="button"
              onClick={() => addTag(inputValue)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all ${isColor && !isValidColor(inputValue) ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'}`}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
      {isColor && inputValue && !isValidColor(inputValue) && (
        <Motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[0.65rem] font-bold text-red-500 ltr:pl-2 rtl:pr-2"
        >
          {t('admin.addProductOverview.sections.fields.colorNotFound', { defaultValue: 'Color not recognized. It will be added as a label.' })}
        </Motion.p>
      )}
    </div>
  )
}
