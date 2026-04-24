import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Check, X, MessageSquare } from 'lucide-react'
import { memo } from 'react'

export const ToneSettingsModal = memo(function ToneSettingsModal({
  isOpen,
  onClose,
  isMobile,
  t,
  toneOptions,
  draftTones,
  setDraftTones,
  saveToneSettings
}) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[120] bg-[#1E293B]/45 ${isMobile ? '' : 'backdrop-blur-sm'}`}
            onClick={onClose}
          />
          <Motion.div
            initial={isMobile ? { y: '100%' } : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={isMobile ? { y: '100%' } : { opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300, duration: 0.2 }}
            className={`fixed z-[130] flex flex-col border border-[#DDEFE7] bg-white shadow-[0_30px_80px_rgba(30,41,59,0.22)] admin-card-shell overflow-hidden will-change-[transform,opacity] ${isMobile
              ? 'bottom-0 left-0 w-full rounded-t-[32px] rounded-b-none max-h-[92vh]'
              : 'left-1/2 top-1/2 w-[min(94vw,680px)] max-h-[92vh] -translate-x-1/2 -translate-y-1/2 rounded-[28px]'
              }`}
          >
            {isMobile && (
              <div className="flex w-full items-center justify-center pt-3 pb-1">
                <div className="h-1.5 w-12 rounded-full bg-[#DDEFE7]" />
              </div>
            )}
            <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-7 sm:pt-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#10B981]">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div>
                  <h2 className={`text-[1.15rem] font-bold text-[#173247] admin-tone-modal-title ${isMobile ? 'text-[1.1rem]' : ''}`}>
                    {t('admin.settings.sections.voice.modalTitle')}
                  </h2>
                  <p className="text-[0.78rem] text-[#64748B] sm:text-[0.8rem]">
                    {t('admin.settings.sections.voice.subtitle')}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DDEFE7] bg-[#F8FAFC] text-[#48617A] transition admin-modal-close hover:bg-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-4 sm:px-7 sm:py-6">
              <div className="grid grid-cols-1 gap-2.5 xs:grid-cols-2 md:grid-cols-3">
                {toneOptions.map((tone) => {
                  const isSelected = draftTones.includes(tone.id)

                  return (
                    <button
                      key={tone.id}
                      type="button"
                      onClick={() =>
                        setDraftTones((prev) =>
                          prev.includes(tone.id) ? prev.filter((id) => id !== tone.id) : [...prev, tone.id]
                        )
                      }
                      className={`admin-tone-card relative overflow-hidden rounded-[20px] border-2 p-3 text-left transition-all ${isSelected
                        ? 'border-[#10B981] bg-[#ECFDF5] shadow-[0_10px_24px_rgba(16,185,129,0.12)]'
                        : 'border-[#DDEFE7] bg-white hover:border-[#BFE7DA] hover:bg-[#F8FAFC]'
                        }`}
                    >
                      {isSelected ? (
                        <span className="absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-white shadow-sm">
                          <Check className="h-3 w-3" />
                        </span>
                      ) : null}

                      <div className="flex flex-col mt-1">
                        <p className={`text-[0.88rem] font-bold ${isSelected ? 'text-[#065F46]' : 'text-[#173247]'}`}>
                          {tone.label}
                        </p>
                        <p className={`mt-0.5 text-[0.68rem] leading-4 pr-1 ${isSelected ? 'text-[#047857]' : 'text-[#1E293B]'}`}>
                          {tone.desc}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col-reverse gap-2.5 border-t border-[#ECF8F3] bg-[#F8FAFC]/50 px-5 py-4 sm:flex-row sm:justify-end sm:px-7 sm:py-5">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-[#DDEFE7] bg-white px-5 py-2.5 text-[0.76rem] font-bold text-[#48617A] transition hover:bg-[#F8FAFC]"
              >
                {t('admin.settings.sections.business.cancel', 'Cancel')}
              </button>
              <button
                type="button"
                onClick={saveToneSettings}
                className="inline-flex items-center justify-center rounded-full bg-[#10B981] px-5 py-2.5 text-[0.76rem] font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition hover:scale-[1.02]"
              >
                {t('admin.settings.sections.business.save', 'Save Changes')}
              </button>
            </div>
          </Motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
})
