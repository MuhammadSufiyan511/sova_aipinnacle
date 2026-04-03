import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Upload, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function AddProductModal({ isOpen, onClose, onAdd, onSave, initialProduct = null }) {
  const { t } = useTranslation()
  const [name, setName] = useState(initialProduct?.name || '')
  const [description, setDescription] = useState(initialProduct?.description || '')
  const [imagePreview, setImagePreview] = useState(initialProduct?.imagePreview || null)
  const [mediaType, setMediaType] = useState(initialProduct?.mediaType || 'image')
  const fileInputRef = useRef(null)
  const isEditMode = Boolean(initialProduct)

  const resetForm = () => {
    setName('')
    setDescription('')
    setImagePreview(null)
  }

  const handleMediaChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const isVideo = file.type.startsWith('video/')
      setMediaType(isVideo ? 'video' : 'image')

      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/50 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          >
            <button
              onClick={handleClose}
              className="absolute right-6 top-6 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="font-display text-2xl font-bold text-slate-900">
              {isEditMode ? t('onboarding.products.modal.titleUpdate') : t('onboarding.products.modal.titleAdd')}
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              {isEditMode ? t('onboarding.products.modal.subtitleUpdate') : t('onboarding.products.modal.subtitleAdd')}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {t('onboarding.products.modal.mediaLabel')}
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="group relative flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 transition hover:border-emerald-500 hover:bg-emerald-50/30"
                >
                  {imagePreview ? (
                    mediaType === 'video' ? (
                      <video
                        src={imagePreview}
                        className="h-full w-full rounded-2xl object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img src={imagePreview} alt="Preview" className="h-full w-full rounded-2xl object-cover" />
                    )
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <div className="rounded-full bg-white p-2 shadow-sm group-hover:scale-110 transition">
                        <Upload className="h-5 w-5 text-slate-400 group-hover:text-emerald-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-400 group-hover:text-emerald-600">
                        {t('onboarding.products.modal.mediaHelp')}
                      </span>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleMediaChange}
                    accept="image/*,video/*"
                    className="hidden"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
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
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
