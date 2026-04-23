import { AnimatePresence, motion as Motion } from 'framer-motion'
import { FileText, Image as ImageIcon, Maximize2, PlayCircle, X, ZoomIn } from 'lucide-react'
import { memo, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const getProductMediaItems = (product) => {
  if (Array.isArray(product?.gallery) && product.gallery.length > 0) {
    return [...product.gallery].sort((a, b) => Number(Boolean(b?.isPrimary)) - Number(Boolean(a?.isPrimary)))
  }
  if (product?.imagePreview) {
    return [{
      id: `${product.id || product.name || 'product'}-legacy`,
      preview: product.imagePreview,
      type: product.mediaType || 'image',
      name: product.mediaName || product.name || 'Media',
      isPrimary: true,
    }]
  }
  return []
}

/* ─── Full-screen image lightbox ─────────────────────────────────────────── */
function ImageLightbox({ src, alt, onClose }) {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      style={{ willChange: 'opacity' }}
    >
      <Motion.img
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ willChange: 'transform, opacity' }}
      />
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
    </Motion.div>
  )
}

/* ─── Main modal ─────────────────────────────────────────────────────────── */
export const ViewProductModal = memo(function ViewProductModal({ viewingProduct, setViewingProduct }) {
  const { t } = useTranslation()
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const mediaItems = useMemo(() => getProductMediaItems(viewingProduct), [viewingProduct])
  const currentMedia = mediaItems[activeMediaIndex] || null
  const canExpand = currentMedia?.type === 'image'

  if (!viewingProduct) return null

  return (
    <AnimatePresence>
      {/* ── Backdrop ───────────────────────────────────────────────── */}
      <div className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto p-3 sm:items-center sm:p-4">
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={() => setViewingProduct(null)}
          className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-sm"
        />

        {/* ── Card ───────────────────────────────────────────────────── */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="admin-card-shell relative z-[130] my-4 flex w-full max-w-3xl flex-col overflow-hidden rounded-[24px] border border-[#DDEFE7] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:my-0 sm:max-h-[90vh] sm:flex-row sm:rounded-[28px]"
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setViewingProduct(null)}
            className="admin-modal-close absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#486977] shadow-sm transition hover:bg-white sm:right-4 sm:top-4 sm:h-9 sm:w-9"
          >
            <X className="h-4 w-4" />
          </button>

          {/* ── Media column ────────────────────────────────────────── */}
          <div className="relative h-56 shrink-0 bg-slate-100 sm:h-auto sm:w-5/12">
            {currentMedia ? (
              <AnimatePresence mode="wait">
                <Motion.div
                  key={currentMedia.preview || activeMediaIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="absolute inset-0"
                >
                  {currentMedia.type === 'video' ? (
                    <video src={currentMedia.preview} className="h-full w-full object-cover" controls playsInline />
                  ) : currentMedia.type === 'file' ? (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#F2FBF7] p-6 text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <FileText className="h-7 w-7 text-emerald-600" />
                      </span>
                      <span className="line-clamp-3 text-[0.82rem] font-bold text-[#295565]">
                        {currentMedia.name || viewingProduct.name}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={currentMedia.preview}
                      alt={viewingProduct.name}
                      className="h-full w-full object-cover"
                    />
                  )}
                </Motion.div>
              </AnimatePresence>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-black/5 text-black/20">
                <ImageIcon className="h-14 w-14" />
              </div>
            )}

            {/* Magnify / expand button — bottom-right of image */}
            {canExpand && (
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 hover:scale-105 active:scale-95"
                title={t('admin.common.preview')}
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            )}

            {/* Thumbnail strip */}
            {mediaItems.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5 px-10">
                <div className="flex gap-1.5 rounded-full bg-black/30 p-1.5 backdrop-blur-md">
                  {mediaItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMediaIndex(idx)}
                      className={`relative h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 transition-all sm:h-9 sm:w-9 ${
                        idx === activeMediaIndex ? 'border-white scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      {item.type === 'video' ? (
                        <div className="flex h-full w-full items-center justify-center bg-slate-800">
                          <PlayCircle className="h-4 w-4 text-white" />
                        </div>
                      ) : item.type === 'file' ? (
                        <div className="flex h-full w-full items-center justify-center bg-slate-200">
                          <FileText className="h-4 w-4 text-emerald-600" />
                        </div>
                      ) : (
                        <img src={item.preview} alt="" className="h-full w-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Info column ─────────────────────────────────────────── */}
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-5 sm:p-7">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] ${
                viewingProduct.isActive !== false ? 'bg-emerald-500 text-white' : 'bg-[#F3F4F6] text-[#6B7280]'
              }`}>
                {viewingProduct.isActive !== false ? t('admin.products.item.active') : t('admin.products.item.inactive')}
              </span>
              {viewingProduct.category && (
                <span className="inline-flex items-center rounded-full bg-[#F2FBF7] px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.06em] text-emerald-700">
                  {t(`admin.addProductOverview.categories.${viewingProduct.category}`, viewingProduct.category)}
                </span>
              )}
            </div>

            {/* Name */}
            <h3 className="admin-modal-title font-display text-[1.35rem] font-bold tracking-[-0.03em] text-[#173247] sm:text-[1.55rem]">
              {viewingProduct.name}
            </h3>
            {viewingProduct.sku && (
              <p className="mt-0.5 text-[0.72rem] font-bold tracking-[0.1em] text-[#648E89]">SKU: {viewingProduct.sku}</p>
            )}

            {/* Price */}
            {viewingProduct.price && (
              <div className="mt-4 flex items-end gap-3 rounded-2xl bg-[#F8FAFC] p-3.5 border border-[#F1F5F9]">
                <p className="text-[1.8rem] font-black leading-none text-emerald-600 tracking-[-0.04em] sm:text-[2rem]">
                  <span className="text-[1rem] font-bold tracking-normal opacity-80 mr-1">{viewingProduct.currency}</span>
                  {viewingProduct.price}
                </p>
                {viewingProduct.comparePrice && (
                  <p className="mb-0.5 text-[0.95rem] font-bold text-slate-400 line-through">
                    {viewingProduct.currency} {viewingProduct.comparePrice}
                  </p>
                )}
              </div>
            )}

            {/* Description */}
            <p className="mt-5 text-[0.88rem] leading-7 text-[#62808D] whitespace-pre-wrap">
              {viewingProduct.description || t('admin.products.item.noDescription')}
            </p>

            {/* Detail tiles */}
            <div className="mt-6 space-y-3">
              <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#173247] border-b border-[#E2E8F0] pb-2">
                {t('admin.products.viewModal.details')}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {viewingProduct.stock !== undefined && (
                  <div className="rounded-2xl border border-[#F1F5F9] bg-[#F8FAFC] p-3">
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#648E89]">
                      {t('admin.addProductOverview.advanced.stockLabel')}
                    </p>
                    <p className="mt-1 text-[0.9rem] font-bold text-[#173247]">{viewingProduct.stock}</p>
                  </div>
                )}
                {Array.isArray(viewingProduct.regions) && viewingProduct.regions.length > 0 && (
                  <div className="rounded-2xl border border-[#F1F5F9] bg-[#F8FAFC] p-3">
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#648E89]">
                      {t('admin.addProductOverview.regions.regionLabel')}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {viewingProduct.regions.map(r => (
                        <span key={r} className="inline-block rounded-md bg-white px-1.5 py-0.5 text-[0.7rem] font-bold shadow-sm">{r}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Motion.div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────── */}
      {lightboxOpen && canExpand && (
        <ImageLightbox
          src={currentMedia.preview}
          alt={viewingProduct.name}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </AnimatePresence>
  )
})
