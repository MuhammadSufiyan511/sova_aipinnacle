import { useState, useRef, useEffect, useMemo, memo } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, Check } from 'lucide-react'
import { getAvailableCurrencies } from '../../utils/currencyUtils'

// Cache the options outside the component to prevent re-parsing
const CURRENCY_OPTIONS = getAvailableCurrencies()

export const CurrencySelect = memo(function CurrencySelect({ 
  value, 
  onChange, 
  label = 'Currency', 
  homeDarkMode = false,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const containerRef = useRef(null)
  const inputRef = useRef(null)

  // Filter options based on search query
  const filteredOptions = useMemo(() => {
    if (!searchQuery) return CURRENCY_OPTIONS
    const q = searchQuery.toLowerCase()
    return CURRENCY_OPTIONS.filter(opt => opt.toLowerCase().includes(q))
  }, [searchQuery])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Focus input when opening
      setTimeout(() => inputRef.current?.focus(), 50)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Reset search when closing
  useEffect(() => {
    if (!isOpen) setSearchQuery('')
  }, [isOpen])

  const bgStyles = homeDarkMode 
    ? 'bg-[#0A1B19] border-[#1C3D3A] text-white hover:bg-[#112A27]' 
    : 'bg-white border-[#E2EFEA] text-[#1E293B] hover:bg-[#F8FCFA]'

  const dropdownBg = homeDarkMode ? 'bg-[#0A1B19] border-[#1C3D3A]' : 'bg-white border-[#E2EFEA]'
  const itemStyles = homeDarkMode 
    ? 'text-[#A7C4BD] hover:bg-[#1C3D3A] hover:text-white' 
    : 'text-[#475569] hover:bg-[#F1F8F5] hover:text-[#10B981]'

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${bgStyles}`}
      >
        <span className="truncate pr-4">{value || label}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''} ${homeDarkMode ? 'text-[#4D716A]' : 'text-[#64748B]'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute left-0 top-full z-[100] mt-2 w-full min-w-[240px] origin-top rounded-xl border shadow-xl sm:w-[320px] ${dropdownBg}`}
          >
            {/* Search Input */}
            <div className={`border-b p-2 ${homeDarkMode ? 'border-[#1C3D3A]' : 'border-[#E2EFEA]'}`}>
              <div className="relative">
                <Search className={`absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 ${homeDarkMode ? 'text-[#4D716A]' : 'text-[#94A3B8]'}`} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search currency..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full rounded-lg border-none bg-transparent py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#10B981] ${
                    homeDarkMode ? 'text-white placeholder-[#4D716A]' : 'text-[#1E293B] placeholder-[#94A3B8]'
                  }`}
                />
              </div>
            </div>

            {/* Options List */}
            <div className="max-h-[260px] overflow-y-auto p-1 custom-scrollbar">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      onChange(opt)
                      setIsOpen(false)
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${itemStyles}`}
                  >
                    <span className="truncate">{opt}</span>
                    {value === opt && <Check className="h-4 w-4 shrink-0 text-[#10B981]" />}
                  </button>
                ))
              ) : (
                <div className={`p-4 text-center text-sm ${homeDarkMode ? 'text-[#4D716A]' : 'text-[#64748B]'}`}>
                  No currencies found
                </div>
              )}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})
