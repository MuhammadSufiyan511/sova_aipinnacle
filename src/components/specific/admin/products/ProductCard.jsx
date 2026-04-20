import { memo, useMemo, useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Eye, FileText, Package, Pencil, PlayCircle, Trash2, ChevronLeft, ChevronRight, Zap, Target } from 'lucide-react'
import { RadioToggle } from '../../../shared/RadioToggle'

const gradients = [
  'from-emerald-400/20 to-teal-400/20',
  'from-violet-400/20 to-purple-400/20',
  'from-amber-400/20 to-orange-400/20',
  'from-blue-400/20 to-indigo-400/20',
  'from-rose-400/20 to-pink-400/20',
]

const cardItem = { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } }

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

export const ProductCard = memo(function ProductCard({
  product,
  index,
  onView,
  onToggleStatus,
  onEdit,
  onRemove,
  t,
}) {
  const mediaItems = useMemo(() => getProductMediaItems(product), [product])
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState(0)
  const currentMedia = mediaItems[activeMediaIndex] || null
  const hasMultipleMedia = mediaItems.length > 1
  const isActive = product.isActive !== false

  const showPreviousMedia = () => {
    setSlideDirection(-1)
    setActiveMediaIndex((current) => (current === 0 ? mediaItems.length - 1 : current - 1))
  }

  const showNextMedia = () => {
    setSlideDirection(1)
    setActiveMediaIndex((current) => (current === mediaItems.length - 1 ? 0 : current + 1))
  }

  return (
    <Motion.div
      layout
      variants={cardItem}
      exit={{ opacity: 0, scale: 0.92 }}
      className={`group relative overflow-hidden rounded-[20px] border bg-white shadow-sm transition-all admin-item-row ${isActive
        ? 'border-[#DDEFE7] hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10'
        : 'border-[#E5E7EB] bg-[#FCFCFC] opacity-75 saturate-[0.35]'
        }`}
    >
      <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]} admin-item-img-shell ${isActive ? '' : 'grayscale'}`}>
        {currentMedia ? (
          <AnimatePresence initial={false} custom={slideDirection}>
            <Motion.div
              key={currentMedia.preview || activeMediaIndex}
              custom={slideDirection}
              variants={{
                enter: (direction) => ({ x: direction > 0 ? 200 : direction < 0 ? -200 : 0, opacity: 0, scale: 0.95 }),
                center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
                exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 200 : direction > 0 ? -200 : 0, opacity: 0, scale: 0.95 })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute inset-0 h-full w-full"
            >
              {currentMedia.type === 'video' ? (
                <div className="relative h-full w-full bg-slate-900">
                  <video src={currentMedia.preview} className={`h-full w-full object-cover transition duration-500 ${isActive ? 'group-hover:scale-110' : 'blur-[4px] grayscale opacity-45 scale-[1.03]'}`} autoPlay muted loop playsInline />
                  <span className={`absolute inset-0 flex items-center justify-center text-white ${isActive ? 'bg-slate-900/20' : 'bg-slate-900/45'}`}><PlayCircle className="h-9 w-9" /></span>
                </div>
              ) : currentMedia.type === 'file' ? (
                <div className={`flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center ${isActive ? 'bg-[#F2FBF7]' : 'bg-[#F5F5F5] opacity-55 grayscale'}`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm"><FileText className="h-6 w-6 text-emerald-600" /></span>
                  <span className="line-clamp-2 text-[0.7rem] font-semibold text-[#295565]">{currentMedia.name || product.name}</span>
                </div>
              ) : (
                <img src={currentMedia.preview} alt={product.name} className={`h-full w-full object-cover transition duration-500 ${isActive ? 'group-hover:scale-110' : 'blur-[4px] grayscale opacity-45 scale-[1.03]'}`} />
              )}
            </Motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-black/5 text-black/20">
            <Package className="h-10 w-10" />
          </div>
        )}

        {hasMultipleMedia ? (
          <>
            <button type="button" onClick={(e) => { e.stopPropagation(); showPreviousMedia(); }} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-1.5 text-[#173247] opacity-0 shadow-sm backdrop-blur-sm transition-all hover:bg-white group-hover:opacity-100">
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); showNextMedia(); }} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-1.5 text-[#173247] opacity-0 shadow-sm backdrop-blur-sm transition-all hover:bg-white group-hover:opacity-100">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1 rounded-full bg-black/20 px-2 py-1 backdrop-blur-sm">
              {mediaItems.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeMediaIndex ? 'w-3 bg-white' : 'w-1.5 bg-white/50'}`} />
              ))}
            </div>
          </>
        ) : null}

        <div className="absolute left-2 top-2 z-10 flex flex-col gap-1">
          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] shadow-sm ${isActive ? 'bg-emerald-500/95 text-white' : 'bg-white/95 text-[#6B7280]'}`}>
            {isActive ? t('admin.products.item.active') : t('admin.products.item.inactive')}
          </span>
          {product.category ? (
            <span className="inline-flex items-center rounded-full bg-white/95 px-2 py-0.5 text-[0.58rem] font-bold tracking-[0.06em] text-[#173247] shadow-sm">
              {t(`admin.addProductOverview.categories.${product.category}`, product.category)}
            </span>
          ) : null}
          {product.stock && Number(product.stock) < 10 ? (
            <span className="inline-flex items-center rounded-full bg-red-500/95 px-2 py-0.5 text-[0.58rem] font-bold tracking-[0.06em] text-white shadow-sm">
              {t('admin.products.item.lowStock', { count: product.stock })}
            </span>
          ) : null}
        </div>
      </div>

      <div className={`flex flex-col flex-1 p-3.5 pb-4 text-center sm:text-left admin-item-content ${isActive ? '' : 'text-[#7A8A93]'}`}>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`line-clamp-2 text-[0.88rem] font-bold leading-tight admin-item-title ${isActive ? 'text-[#173247]' : 'text-[#7A8A93]'}`}>
              {product.name}
            </h3>
            {product.price ? (
              <span className={`shrink-0 text-[0.92rem] font-black ${isActive ? 'text-emerald-600' : 'text-[#7A8A93]'}`}>
                {product.currency} {product.price}
              </span>
            ) : null}
          </div>
          {product.sku ? (
             <p className="mt-1 text-[0.66rem] font-medium tracking-[0.08em] text-[#86A29B]">
               SKU: {product.sku}
             </p>
          ) : null}
        </div>

        <div className="mt-3.5 grid grid-cols-2 gap-2 shrink-0">
          <button onClick={() => onView(product)} className="admin-btn-secondary inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
            <Eye className="h-3.5 w-3.5" /> {t('admin.products.item.view')}
          </button>
          <div className="flex items-center justify-center">
            <RadioToggle id={`product-${product.id}`} active={isActive} onChange={() => onToggleStatus(product.id, isActive)} activeColor="bg-emerald-500" />
          </div>
          <button onClick={() => onEdit(product.id)} className="admin-btn-secondary inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600">
            <Pencil className="h-3.5 w-3.5" /> {t('admin.common.edit')}
          </button>
          <button onClick={() => onRemove(product.id)} className="admin-btn-danger inline-flex items-center justify-center rounded-full border border-[#DDEFE7] p-2 text-red-500 transition hover:border-red-200 hover:bg-red-50">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </Motion.div>
  )
})
