import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Info, MapPin, Tag, CheckCircle2, ChevronRight, X, PlayCircle, FileText, Image as ImageIcon } from 'lucide-react'
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

export const ViewProductModal = memo(function ViewProductModal({ viewingProduct, setViewingProduct }) {
  const { t } = useTranslation()
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  const mediaItems = useMemo(() => getProductMediaItems(viewingProduct), [viewingProduct])
  const currentMedia = mediaItems[activeMediaIndex] || null

  if (!viewingProduct) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setViewingProduct(null)}
          className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-sm"
        />
        <Motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 18 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="admin-card-shell relative z-[130] flex w-full max-w-4xl max-h-[90vh] flex-col overflow-hidden rounded-[28px] border border-[#DDEFE7] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.2)] md:flex-row will-change-[transform,opacity]"
        >
          <button
            type="button"
            onClick={() => setViewingProduct(null)}
            className="admin-modal-close absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#486977] shadow-sm transition hover:bg-white md:right-5 md:top-5"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="relative h-64 shrink-0 bg-slate-100 md:h-auto md:w-5/12">
            {currentMedia ? (
              <AnimatePresence mode="wait">
                 <Motion.div
                    key={currentMedia.preview || activeMediaIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 h-full w-full"
                  >
                    {currentMedia.type === 'video' ? (
                      <video src={currentMedia.preview} className="h-full w-full object-cover" controls playsInline />
                    ) : currentMedia.type === 'file' ? (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#F2FBF7] p-6 text-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm"><FileText className="h-8 w-8 text-emerald-600" /></span>
                        <span className="line-clamp-3 text-[0.85rem] font-bold text-[#295565]">{currentMedia.name || viewingProduct.name}</span>
                      </div>
                    ) : (
                      <img src={currentMedia.preview} alt={viewingProduct.name} className="h-full w-full object-cover" />
                    )}
                 </Motion.div>
              </AnimatePresence>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-black/5 text-black/20">
                <ImageIcon className="h-16 w-16" />
              </div>
            )}
            
            {mediaItems.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2 px-4 shadow-sm">
                <div className="flex gap-2 rounded-full bg-black/30 p-1.5 backdrop-blur-md">
                   {mediaItems.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveMediaIndex(idx)}
                        className={`relative h-10 w-10 overflow-hidden rounded-full border-2 transition-all ${
                          idx === activeMediaIndex ? 'border-white scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                         {item.type === 'video' ? (
                            <div className="flex h-full w-full items-center justify-center bg-slate-800"><PlayCircle className="h-5 w-5 text-white" /></div>
                         ) : item.type === 'file' ? (
                            <div className="flex h-full w-full items-center justify-center bg-slate-200"><FileText className="h-5 w-5 text-emerald-600" /></div>
                         ) : (
                            <img src={item.preview} alt="" className="h-full w-full object-cover" />
                         )}
                      </button>
                   ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${viewingProduct.isActive !== false ? 'bg-emerald-500 text-white' : 'bg-[#F3F4F6] text-[#6B7280]'}`}>
                {viewingProduct.isActive !== false ? t('admin.products.item.active') : t('admin.products.item.inactive')}
              </span>
              {viewingProduct.category ? (
                <span className="inline-flex items-center rounded-full bg-[#F2FBF7] px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.06em] text-emerald-700">
                  {t(`admin.addProductOverview.categories.${viewingProduct.category}`, viewingProduct.category)}
                </span>
              ) : null}
            </div>

            <h3 className="admin-modal-title mb-1 font-display text-[1.6rem] font-bold tracking-[-0.04em] text-[#173247] md:text-[1.8rem]">{viewingProduct.name}</h3>
            {viewingProduct.sku ? (
              <p className="text-[0.75rem] font-bold tracking-[0.1em] text-[#648E89]">SKU: {viewingProduct.sku}</p>
            ) : null}

            {viewingProduct.price ? (
              <div className="mt-4 flex items-end gap-3 rounded-2xl bg-[#F8FAFC] p-4 border border-[#F1F5F9]">
                <p className="text-[2rem] font-black leading-none text-emerald-600 tracking-[-0.04em]">
                  <span className="text-[1.2rem] font-bold tracking-normal opacity-80 mr-1">{viewingProduct.currency}</span>
                  {viewingProduct.price}
                </p>
                {viewingProduct.comparePrice ? (
                  <p className="text-[1rem] font-bold text-slate-400 line-through mb-1">
                    {viewingProduct.currency} {viewingProduct.comparePrice}
                  </p>
                ) : null}
              </div>
            ) : null}

            <p className="mt-6 text-[0.92rem] leading-7 text-[#62808D] whitespace-pre-wrap">{viewingProduct.description || t('admin.products.item.noDescription')}</p>

            <div className="mt-8 space-y-4">
              <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#173247] border-b border-[#E2E8F0] pb-2">{t('admin.products.viewModal.details')}</h4>
              
              <div className="grid grid-cols-2 gap-4">
                 {viewingProduct.stock !== undefined && (
                   <div className="rounded-2xl border border-[#F1F5F9] bg-[#F8FAFC] p-3">
                     <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-[#648E89]">{t('admin.addProductOverview.advanced.stockLabel')}</p>
                     <p className="mt-1 text-[0.9rem] font-bold text-[#173247]">{viewingProduct.stock}</p>
                   </div>
                 )}
                 {Array.isArray(viewingProduct.regions) && viewingProduct.regions.length > 0 && (
                   <div className="rounded-2xl border border-[#F1F5F9] bg-[#F8FAFC] p-3">
                     <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-[#648E89]">{t('admin.addProductOverview.regions.regionLabel')}</p>
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
    </AnimatePresence>
  )
})
