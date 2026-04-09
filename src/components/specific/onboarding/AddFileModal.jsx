import { useRef, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Check, FileText, PlayCircle, Upload, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

export function AddFileModal({ isOpen, onClose, onAdd, onSave, initialFile = null }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'
  const [name, setName] = useState(initialFile?.name || '')
  const [description, setDescription] = useState(initialFile?.description || '')
  const [imagePreview, setImagePreview] = useState(initialFile?.imagePreview || null)
  const [mediaType, setMediaType] = useState(initialFile?.mediaType || null)
  const [mediaName, setMediaName] = useState(initialFile?.mediaName || '')
  const fileInputRef = useRef(null)
  const isEditMode = Boolean(initialFile)

  const resetForm = () => {
    setName('')
    setDescription('')
    setImagePreview(null)
    setMediaType(null)
    setMediaName('')
  }

  const handleMediaChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const isImage = file.type.startsWith('image/')
    const isVideo = file.type.startsWith('video/')
    const isPdf = file.type === 'application/pdf'

    if (!isImage && !isVideo && !isPdf) {
      toast.error(t('admin.files.modal.invalidMediaType') || 'Please upload a valid image, video, or PDF file')
      event.target.value = ''
      return
    }

    const nextMediaType = isImage
      ? 'image'
      : isVideo
        ? 'video'
        : 'file'

    if (!nextMediaType) {
      toast.error(t('admin.files.modal.invalidMediaType') || 'Please upload a valid image, video, or file')
      return
    }

    setImagePreview(URL.createObjectURL(file))
    setMediaType(nextMediaType)
    setMediaName(file.name)
    if (!name.trim()) {
      setName(file.name.replace(/\.[^/.]+$/, ''))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim()) return

    const filePayload = {
      id: initialFile?.id || Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
      imagePreview,
      mediaType,
      mediaName,
      isActive: initialFile?.isActive ?? true,
    }

    if (isEditMode) {
      onSave?.(filePayload)
    } else {
      onAdd?.(filePayload)
    }

    resetForm()
    onClose()
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          <Motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="admin-card-shell add-file-modal-shell relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/50 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          >
            <button
              onClick={handleClose}
              className={`admin-modal-close absolute top-6 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 ${isRTL ? 'left-6' : 'right-6'}`}
              aria-label={t('common.close')}
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="admin-modal-title font-display text-2xl font-bold text-slate-900">
              {isEditMode ? t('admin.files.modal.titleUpdate') : t('admin.files.modal.titleAdd')}
            </h3>
            <p className="add-file-modal-subtitle mt-2 text-sm text-slate-500">
              {isEditMode ? t('admin.files.modal.subtitleUpdate') : t('admin.files.modal.subtitleAdd')}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label className="add-file-modal-label text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {t('admin.files.modal.mediaLabel')}
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="add-file-modal-dropzone group relative flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 transition hover:border-cyan-500 hover:bg-cyan-50/30"
                >
                  {imagePreview ? (
                    mediaType === 'video' ? (
                      <div className="relative h-full w-full overflow-hidden rounded-2xl">
                        <video src={imagePreview} className="h-full w-full object-cover" muted playsInline />
                        <span className="absolute inset-0 flex items-center justify-center bg-slate-900/25 text-white">
                          <PlayCircle className="h-8 w-8" />
                        </span>
                      </div>
                    ) : mediaType === 'file' ? (
                      <div className="admin-file-preview-card flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl bg-[#F1FBFF] px-4 text-center">
                        <FileText className="h-7 w-7 text-cyan-600" />
                        <span className="admin-file-preview-name line-clamp-2 text-[0.7rem] font-semibold text-slate-600">{mediaName || t('admin.files.item.none')}</span>
                      </div>
                    ) : (
                      <img src={imagePreview} alt="Preview" className="h-full w-full rounded-2xl object-cover" />
                    )
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <div className="add-file-modal-upload-icon rounded-full bg-white p-2 shadow-sm transition group-hover:scale-110">
                        <Upload className="h-5 w-5 text-slate-400 group-hover:text-cyan-500" />
                      </div>
                      <span className="add-file-modal-help text-xs font-medium text-slate-400 group-hover:text-cyan-600">
                        {t('admin.files.modal.mediaHelp')}
                      </span>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleMediaChange}
                    accept="image/*,video/*,application/pdf,.pdf"
                    className="hidden"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="add-file-modal-label text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {t('admin.files.modal.nameLabel')}
                </label>
                <input
                  autoFocus
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={t('admin.files.modal.namePlaceholder')}
                  className="add-file-modal-input w-full rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-300 outline-none transition focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="add-file-modal-label text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {t('admin.files.modal.descLabel')}
                </label>
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder={t('admin.files.modal.descPlaceholder')}
                  rows={2}
                  className="add-file-modal-input w-full resize-none rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-300 outline-none transition focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={!name.trim()}
                className="add-file-modal-submit flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 text-[0.95rem] font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600 disabled:bg-slate-200 disabled:shadow-none"
              >
                <Check className="h-5 w-5" /> {isEditMode ? t('admin.files.modal.updateBtn') : t('admin.files.modal.saveBtn')}
              </button>
            </form>
          </Motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
