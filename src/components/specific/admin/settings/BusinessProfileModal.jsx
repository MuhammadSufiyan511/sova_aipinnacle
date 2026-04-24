import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Check, X, PencilLine } from 'lucide-react'
import { memo } from 'react'
import { businessTypes } from '../../../../hooks/useSettingsData'

export const BusinessProfileModal = memo(function BusinessProfileModal({
  isOpen,
  onClose,
  isMobile,
  t,
  draftBusinessType,
  setDraftBusinessType,
  draftCustomCategory,
  setDraftCustomCategory,
  saveBusinessProfile
}) {
  const isOther = draftBusinessType === 'other'
  const showCustomField = isOther || Boolean(draftCustomCategory.trim())

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
            initial={{ opacity: 0, y: isMobile ? 12 : 24, scale: isMobile ? 1 : 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 8 : 16, scale: isMobile ? 1 : 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed left-1/2 top-1/2 z-[130] flex w-[min(94vw,680px)] max-h-[92vh] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[28px] border border-[#DDEFE7] bg-white shadow-[0_30px_80px_rgba(30,41,59,0.22)] admin-card-shell overflow-hidden will-change-[transform,opacity]"
          >
            <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-7 sm:pt-7">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#10B981]">
                  {t('admin.settings.sections.business.title')}
                </p>
                <h3 className="mt-1.5 font-display text-[1.15rem] font-bold text-[#173247] admin-card-title sm:text-[1.25rem]">
                  {t('admin.settings.sections.business.modalTitle')}
                </h3>
                <p className="mt-1 text-[0.76rem] leading-5 text-[#1E293B] admin-card-desc">
                  {t('admin.settings.sections.business.modalSubtitle')}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DDEFE7] bg-[#F8FAFC] text-[#48617A] transition admin-modal-close hover:bg-white"
                aria-label={t('admin.settings.sections.business.close')}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-4 sm:px-7 sm:py-6">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {businessTypes.map((type) => {
                  const isSelected = draftBusinessType === type.id
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setDraftBusinessType(type.id)}
                      className={`relative rounded-[20px] border-2 p-3 text-left transition ${isSelected
                        ? 'border-[#10B981] bg-[#ECFDF5] shadow-[0_10px_24px_rgba(16,185,129,0.12)]'
                        : 'border-[#DDEFE7] bg-white hover:border-[#BFE7DA] hover:bg-[#F8FAFC]'
                        }`}
                    >
                      {isSelected ? (
                        <span className="absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-white">
                          <Check className="h-3 w-3" />
                        </span>
                      ) : null}
                      <span className="text-[1.3rem] leading-none mb-1">{type.emoji}</span>
                      <p className={`text-[0.78rem] font-bold ${isSelected ? 'text-emerald-700' : 'text-[#173247]'}`}>
                        {t(`onboarding.business.categories.${type.id}.label`)}
                      </p>
                      <p className="mt-0.5 text-[0.66rem] leading-4 text-[#1E293B] opacity-70">
                        {t(`onboarding.business.categories.${type.id}.desc`)}
                      </p>
                    </button>
                  )
                })}
              </div>

              <AnimatePresence>
                {showCustomField && (
                  <Motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <label className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#648E89]">
                      {t('admin.settings.sections.business.customCategoryLabel', {
                        defaultValue: t('onboarding.business.customCategoryPlaceholder'),
                      })}
                    </label>
                    <div className="relative">
                      <PencilLine className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-500" />
                      <input
                        autoFocus={isOther}
                        type="text"
                        value={draftCustomCategory}
                        onChange={(event) => {
                          const value = event.target.value
                          setDraftCustomCategory(value)
                          if (value.trim()) setDraftBusinessType('other')
                        }}
                        placeholder={t('onboarding.business.customCategoryPlaceholder')}
                        className="h-13 w-full rounded-2xl border-2 border-[#DDEFE7] bg-emerald-50/20 pl-12 pr-4 text-[0.88rem] font-medium text-[#173247] outline-none transition focus:border-[#10B981] focus:bg-white focus:shadow-lg focus:shadow-emerald-500/5"
                      />
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col-reverse gap-2.5 border-t border-[#ECF8F3] bg-[#F8FAFC]/50 px-5 py-4 sm:flex-row sm:justify-end sm:px-7 sm:py-5">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-[#DDEFE7] bg-white px-5 py-2.5 text-[0.76rem] font-bold text-[#48617A] transition hover:bg-[#F8FAFC]"
              >
                {t('admin.settings.sections.business.cancel')}
              </button>
              <button
                type="button"
                onClick={saveBusinessProfile}
                disabled={draftBusinessType === 'other' && !draftCustomCategory.trim()}
                className="inline-flex items-center justify-center rounded-full bg-[#10B981] px-5 py-2.5 text-[0.76rem] font-bold text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {t('admin.settings.sections.business.save')}
              </button>
            </div>
          </Motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
})
