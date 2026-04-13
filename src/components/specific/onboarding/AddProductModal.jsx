import { useRef, useState, useEffect } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { X, Upload, Check, FileText, PlayCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

export function AddProductModal({ isOpen, onClose, onAdd, onSave, initialProduct = null }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'
  const [name, setName] = useState(initialProduct?.name || '')
  const [description, setDescription] = useState(initialProduct?.description || '')
  const [imagePreview, setImagePreview] = useState(initialProduct?.imagePreview || null)
  const [mediaType, setMediaType] = useState(initialProduct?.mediaType || null)
  const [mediaName, setMediaName] = useState(initialProduct?.mediaName || '')
  const [isMobile, setIsMobile] = useState(false)
  const fileInputRef = useRef(null)
  const isEditMode = Boolean(initialProduct)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const resetForm = () => {
    setName('')
    setDescription('')
    setImagePreview(null)
    setMediaType(null)
    setMediaName('')
  }

  const handleMediaChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const isImage = file.type.startsWith('image/')
    const isVideo = file.type.startsWith('video/')
    const isPdf = file.type === 'application/pdf'

    if (!isImage && !isVideo && !isPdf) {
      toast.error(t('onboarding.products.modal.invalidMediaType') || 'Please upload a valid image, video, or PDF file')
      e.target.value = ''
      return
    }

    const nextMediaType = isImage ? 'image' : isVideo ? 'video' : 'file'

    setImagePreview(URL.createObjectURL(file))
    setMediaType(nextMediaType)
    setMediaName(file.name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      const productPayload = {
        id: initialProduct?.id || Date.now().toString(),
        name: name.trim(),
        description: description.trim(),
        imagePreview,
        mediaType,
        mediaName,
        isActive: initialProduct?.isActive ?? true,
      }

      if (isEditMode) {
        onSave?.(productPayload)
      } else {
        onAdd?.(productPayload)
      }

      resetForm()
      onClose()
    }
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 backdrop-blur-sm"
          />
          <Motion.div
            initial={{ opacity: 0, scale: isMobile ? 1 : 0.95, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: isMobile ? 1 : 0.95, y: isMobile ? 10 : 20 }}
            className={`relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/50 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.1)] ${isMobile ? '' : 'backdrop-blur-xl'} will-change-[transform,opacity]`}
          >
            <button
              onClick={handleClose}
              className={`absolute top-6 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 ${isRTL ? 'left-6' : 'right-6'}`}
              aria-label={t('common.close')}
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="font-display text-2xl font-bold text-slate-900">
              {isEditMode ? t('onboarding.products.modal.titleUpdate') : t('onboarding.products.modal.titleAdd')}
            </h3>
            <p className="mt-2 text-sm text-slate-900">
              {isEditMode ? t('onboarding.products.modal.subtitleUpdate') : t('onboarding.products.modal.subtitleAdd')}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
                  {t('onboarding.products.modal.mediaLabel')}
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="group relative flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 transition hover:border-emerald-500 hover:bg-emerald-50/30"
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
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl bg-[#F2FBF7] px-4 text-center">
                        <FileText className="h-7 w-7 text-emerald-600" />
                        <span className="line-clamp-2 text-[0.7rem] font-semibold text-slate-900">{mediaName || 'File attached'}</span>
                      </div>
                    ) : (
                      <img src={imagePreview} alt="Preview" className="h-full w-full rounded-2xl object-cover" />
                    )
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <div className="rounded-full bg-white p-2 shadow-sm group-hover:scale-110 transition">
                        <Upload className="h-5 w-5 text-slate-900 group-hover:text-emerald-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-900 group-hover:text-emerald-600">
                        {t('onboarding.products.modal.mediaHelp')}
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
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
                  {t('onboarding.products.modal.nameLabel')}
                </label>
                <input
                  autoFocus
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('onboarding.products.modal.namePlaceholder')}
                  className="w-full rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-300 outline-none transition focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
                  {t('onboarding.products.modal.descLabel')}
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t('onboarding.products.modal.descPlaceholder')}
                  rows={2}
                  className="w-full resize-none rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-300 outline-none transition focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={!name.trim()}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-4 text-[0.95rem] font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600 disabled:bg-slate-200 disabled:shadow-none"
              >
                <Check className="h-5 w-5" /> {isEditMode ? t('onboarding.products.modal.updateBtn') : t('onboarding.products.modal.saveBtn')}
              </button>
            </form>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
