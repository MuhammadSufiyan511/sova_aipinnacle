import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Trash2, AlertTriangle, X } from 'lucide-react'
import { memo } from 'react'

export const DeleteConfirmationSheet = memo(function DeleteConfirmationSheet({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText,
  cancelText,
  isMobile = true
}) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          {/* Backdrop */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-[#0F172A]/40 backdrop-blur-sm"
          />

          {/* Sheet/Modal */}
          <Motion.div
            initial={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={isMobile ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed z-[210] flex flex-col bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.12)] ${isMobile
              ? 'bottom-0 left-0 w-full rounded-t-[32px] px-6 pb-10 pt-4'
              : 'left-1/2 top-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] p-8'
              }`}
          >
            {isMobile && (
              <div className="flex w-full justify-center mb-6">
                <div className="h-1.5 w-12 rounded-full bg-slate-100" />
              </div>
            )}

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-red-50 text-red-500 shadow-sm ring-1 ring-red-100">
                <Trash2 className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-[1.15rem] font-bold text-[#1E293B]">
                {title || 'Delete Product?'}
              </h3>
              <p className="mb-8 text-[0.88rem] leading-relaxed text-[#64748B]">
                {description || 'This action cannot be undone. All data associated with this product will be permanently removed.'}
              </p>

              <div className="flex w-full flex-col gap-3">
                <button
                  onClick={onConfirm}
                  className="flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-red-500 text-[0.92rem] font-bold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600 active:scale-[0.98]"
                >
                  <Trash2 className="h-4.5 w-4.5" />
                  {confirmText || 'Yes, Delete Product'}
                </button>
                <button
                  onClick={onClose}
                  className="flex h-13 w-full items-center justify-center text-[0.92rem] font-bold text-[#64748B] transition hover:bg-slate-50 rounded-2xl"
                >
                  {cancelText || 'Keep it for now'}
                </button>
              </div>
            </div>

            {!isMobile && (
              <button
                onClick={onClose}
                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </Motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
})
