import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Eye, FileText, Package, Pencil, PlayCircle, Trash2 } from 'lucide-react'
import { useState, useEffect, useMemo, memo, useRef } from 'react'
import { RadioToggle } from '../../../shared/RadioToggle'
import { gradients, getProductMediaItems } from './utils'

const cardItem = { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } }

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
  const videoRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const currentMedia = mediaItems[activeMediaIndex] || null
  const hasMultipleMedia = mediaItems.length > 1
  const isActive = product.isActive !== false

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile || currentMedia?.type !== 'video' || !videoRef.current || !isActive) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => { })
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [isMobile, currentMedia?.type, isActive, activeMediaIndex])

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
      onClick={() => onView(product)}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        videoRef.current?.pause()
        if (videoRef.current) videoRef.current.currentTime = 0
      }}
      className={`group relative overflow-hidden rounded-[20px] border bg-white shadow-sm transition-all admin-item-row ${isActive
        ? 'border-[#DDEFE7] hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10'
        : 'border-[#E5E7EB] bg-[#FCFCFC] opacity-75 saturate-[0.35]'
        } cursor-pointer`}
    >
      <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]} admin-item-img-shell ${isActive ? '' : 'grayscale'}`}>
        {currentMedia ? (
          <AnimatePresence initial={false} custom={slideDirection}>
            <Motion.div
              key={currentMedia.preview || activeMediaIndex}
              custom={slideDirection}
              variants={{
                enter: (direction) => ({
                  x: direction > 0 ? 200 : direction < 0 ? -200 : 0,
                  opacity: 0,
                  scale: 0.95
                }),
                center: {
                  zIndex: 1,
                  x: 0,
                  opacity: 1,
                  scale: 1
                },
                exit: (direction) => ({
                  zIndex: 0,
                  x: direction < 0 ? 200 : direction > 0 ? -200 : 0,
                  opacity: 0,
                  scale: 0.95
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 h-full w-full"
            >
              {currentMedia.type === 'video' ? (
                <div className="relative h-full w-full bg-slate-900">
                  <video
                    ref={videoRef}
                    src={currentMedia.preview}
                    className={`h-full w-full object-cover transition duration-500 ${isActive ? 'group-hover:scale-110' : 'blur-[4px] grayscale opacity-45 scale-[1.03]'}`}
                    muted
                    loop
                    playsInline
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />
                  <span className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 pointer-events-none ${isActive ? 'bg-slate-900/20' : 'bg-slate-900/45'} ${isVideoPlaying ? 'opacity-0' : 'opacity-100'} ${isActive ? 'group-hover:opacity-0' : ''}`}>
                    <PlayCircle className="h-9 w-9" />
                  </span>
                </div>
              ) : currentMedia.type === 'file' ? (
                <div className={`flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center ${isActive ? 'bg-[#F2FBF7]' : 'bg-[#F5F5F5] opacity-55 grayscale'}`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <FileText className="h-6 w-6 text-emerald-600" />
                  </span>
                  <span className="line-clamp-2 text-[0.7rem] font-semibold text-[#295565]">{currentMedia.name || product.name}</span>
                </div>
              ) : (
                <img
                  src={currentMedia.preview}
                  alt={product.name}
                  className={`h-full w-full object-cover transition duration-500 ${isActive ? 'group-hover:scale-110' : 'blur-[4px] grayscale opacity-45 scale-[1.03]'}`}
                />
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
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showPreviousMedia()
              }}
              aria-label={t('common.previous')}
              className="absolute left-2 top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 text-[#173247] dark:text-slate-200 opacity-0 shadow-md transition duration-200 hover:scale-105 hover:bg-white dark:hover:bg-slate-800 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showNextMedia()
              }}
              aria-label={t('common.next')}
              className="absolute right-2 top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 text-[#173247] dark:text-slate-200 opacity-0 shadow-md transition duration-200 hover:scale-105 hover:bg-white dark:hover:bg-slate-800 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 dark:bg-slate-800/90 px-2 py-1 shadow-sm">
              {mediaItems.map((item, itemIndex) => (
                <span
                  key={item.id || itemIndex}
                  className={`h-1.5 w-1.5 rounded-full transition ${itemIndex === activeMediaIndex ? 'bg-[#10B981]' : 'bg-[#B6CCC6] dark:bg-slate-500'}`}
                />
              ))}
            </div>
          </>
        ) : null}

        <div className="absolute left-2 top-2">
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] shadow-sm ${isActive
              ? 'bg-emerald-500/90 text-white'
              : 'bg-white/90 text-[#6B7280]'
              }`}
          >
            {isActive ? t('admin.products.item.active') : t('admin.products.item.inactive')}
          </span>
        </div>
        <div className="admin-item-price absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[0.6rem] font-bold text-[#173247] shadow-sm">
          {t('admin.products.item.price', { price: product.price || '0' })}
        </div>
      </div>

      <div className={`p-3.5 text-center sm:text-left admin-item-content ${isActive ? '' : 'text-[#7A8A93]'}`}>
        <p className={`text-[0.88rem] font-bold admin-item-title ${isActive ? 'text-[#173247]' : 'text-[#7A8A93]'}`}>{product.name}</p>
        {product.description ? <p className={`mt-1 line-clamp-2 text-[0.72rem] leading-5 admin-item-desc ${isActive ? 'text-[#62808D]' : 'text-[#9CA3AF]'}`}>{product.description}</p> : null}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            onClick={(event) => {
              event.stopPropagation()
              onView(product)
            }}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 admin-btn-secondary"
          >
            <Eye className="h-3.5 w-3.5" />
            {t('admin.products.item.view')}
          </button>
          <div className="flex items-center">
            <RadioToggle
              id={`prod-${product.id}`}
              active={isActive}
              onChange={() => onToggleStatus(product)}
              activeColor="bg-[#ECFDF5]"
              activeTextColor="text-emerald-700"
              stopPropagation={true}
            />
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation()
              onEdit(product)
            }}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600 admin-btn-secondary"
          >
            <Pencil className="h-3.5 w-3.5" />
            {t('admin.common.edit')}
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation()
              onRemove(product.id)
            }}
            className="inline-flex items-center justify-center rounded-full border border-[#DDEFE7] p-2 text-red-500 transition hover:border-red-200 hover:bg-red-50 admin-btn-danger"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </Motion.div>
  )
})
