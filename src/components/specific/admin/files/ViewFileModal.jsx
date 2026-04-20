import { motion as Motion, AnimatePresence } from 'framer-motion'
import { File as FileIcon, FileText, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

const gradients = [
  'from-cyan-400/20 to-teal-400/20',
  'from-violet-400/20 to-purple-400/20',
  'from-amber-400/20 to-orange-400/20',
  'from-blue-400/20 to-indigo-400/20',
  'from-rose-400/20 to-pink-400/20',
]

export const ViewFileModal = memo(function ViewFileModal({ viewingFile, setViewingFile, isMobile }) {
  const { t } = useTranslation()

  if (!viewingFile) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setViewingFile(null)}
          className={`absolute inset-0 bg-[#0F172A]/70 ${isMobile ? '' : 'backdrop-blur-sm'}`}
        />
        <Motion.div
          initial={{ opacity: 0, scale: isMobile ? 1 : 0.96, y: isMobile ? 12 : 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: isMobile ? 1 : 0.96, y: isMobile ? 8 : 18 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="admin-card-shell relative z-[130] w-full max-w-lg overflow-hidden rounded-[28px] border border-[#DDEFE7] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.2)] will-change-[transform,opacity]"
        >
          <button
            type="button"
            onClick={() => setViewingFile(null)}
            className="admin-modal-close absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#486977] shadow-sm transition hover:bg-white"
          >
            <X className="h-4 w-4" />
          </button>

          <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${gradients[0]}`}>
            {viewingFile.imagePreview ? (
              viewingFile.mediaType === 'video' ? (
                <video src={viewingFile.imagePreview} className="h-full w-full object-cover" controls playsInline />
              ) : viewingFile.mediaType === 'file' ? (
                <div className="admin-file-preview-card flex h-full w-full flex-col items-center justify-center gap-3 bg-[#F1FBFF] px-6 text-center">
                  <span className="admin-file-preview-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <FileText className="h-7 w-7 text-cyan-600" />
                  </span>
                  <span className="admin-file-preview-name line-clamp-2 text-[0.82rem] font-semibold text-[#295565]">
                    {viewingFile.mediaName || viewingFile.name}
                  </span>
                </div>
              ) : (
                <img src={viewingFile.imagePreview} alt={viewingFile.name} className="h-full w-full object-cover" />
              )
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-black/5 text-black/20">
                <FileIcon className="h-12 w-12" />
              </div>
            )}
          </div>

          <div className="space-y-4 p-5">
            <div className="admin-files-modal-badges flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#ECFEFF] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-cyan-600">
                {t('admin.files.item.modalTitle')}
              </span>
              <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${viewingFile.isActive !== false ? 'bg-cyan-500 text-white' : 'admin-files-inactive-badge bg-[#F3F4F6] text-[#6B7280]'
                }`}>
                {viewingFile.isActive !== false ? t('admin.files.item.active') : t('admin.files.item.inactive')}
              </span>
            </div>

            <div>
              <h3 className="admin-modal-title font-display text-[1.45rem] font-bold tracking-[-0.04em] text-[#173247]">{viewingFile.name}</h3>
              <p className="mt-2 text-[0.9rem] leading-6 text-[#62808D]">
                {viewingFile.description || t('admin.files.item.noDescription')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="admin-files-meta-card rounded-2xl border border-[#E5F1EB] bg-[#F8FFFC] p-3">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#7A8A93]">
                  {t('admin.files.item.mediaLabel')}
                </p>
                <p className="admin-modal-meta-value mt-1 text-[0.92rem] font-bold text-[#173247]">
                  {t(`admin.files.item.types.${viewingFile.mediaType || 'file'}`)}
                </p>
              </div>
              <div className="admin-files-meta-card rounded-2xl border border-[#E5F1EB] bg-[#F8FFFC] p-3">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#7A8A93]">
                  {t('admin.files.item.fileNameLabel')}
                </p>
                <p className="admin-modal-meta-value mt-1 line-clamp-2 text-[0.92rem] font-bold text-[#173247]">
                  {viewingFile.mediaName || t('admin.files.item.none')}
                </p>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  )
})
