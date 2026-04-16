import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Eye, FileText, Package, Pencil, PlayCircle, Plus, Search, Trash2, X, Zap, ArrowRight, Tag, Box, BadgeCheck, TrendingUp } from 'lucide-react'
import { useMemo, useState, memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../../context/AppProvider'
import { ROUTES } from '../../../utils/routes'
import { useTranslation } from 'react-i18next'

const gradients = [
  'from-emerald-400/20 to-teal-400/20',
  'from-violet-400/20 to-purple-400/20',
  'from-amber-400/20 to-orange-400/20',
  'from-blue-400/20 to-indigo-400/20',
  'from-rose-400/20 to-pink-400/20',
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const cardItem = { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } }
const PER_PAGE_OPTIONS = [12, 24, 48, 96, 'all']

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

const RadioToggle = ({ id, active, onChange, activeColor = 'bg-[#ECFDF5]' }) => {
  const { t } = useTranslation()

  return (
    <div className="admin-radio-toggle-track relative flex h-[34px] w-full rounded-full border border-slate-200/50 bg-slate-100/80 p-0.5 transition-all duration-300 dark:border-white/70 dark:bg-white/5">
      <div className="z-10 grid h-full w-full grid-cols-2">
        <button
          type="button"
          onClick={() => !active && onChange()}
          className={`admin-radio-toggle-btn relative flex items-center justify-center text-[0.65rem] font-extrabold transition-colors duration-300 ${active ? 'text-emerald-700 is-active' : 'text-[#648E89] is-inactive dark:text-slate-400'}`}
        >
          <span className="relative z-10">{t('admin.common.active')}</span>
          {active && (
            <Motion.div
              layoutId={`highlight-${id}`}
              className={`absolute inset-0 rounded-full shadow-sm ${activeColor}`}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
            />
          )}
        </button>
        <button
          type="button"
          onClick={() => active && onChange()}
          className={`admin-radio-toggle-btn relative flex items-center justify-center text-[0.65rem] font-extrabold transition-colors duration-300 ${!active ? 'text-emerald-700 is-active' : 'text-[#648E89] is-inactive dark:text-slate-400'}`}
        >
          <span className="relative z-10">{t('admin.common.inactive')}</span>
          {!active && (
            <Motion.div
              layoutId={`highlight-${id}`}
              className={`absolute inset-0 rounded-full shadow-sm ${activeColor}`}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
            />
          )}
        </button>
      </div>
    </div>
  )
}

const ProductCard = memo(function ProductCard({
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
  const currentMedia = mediaItems[activeMediaIndex] || null
  const hasMultipleMedia = mediaItems.length > 1
  const isActive = product.isActive !== false

  const showPreviousMedia = () => {
    setActiveMediaIndex((current) => (current === 0 ? mediaItems.length - 1 : current - 1))
  }

  const showNextMedia = () => {
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
          currentMedia.type === 'video' ? (
            <div className="relative h-full w-full">
              <video
                src={currentMedia.preview}
                className={`h-full w-full object-cover transition duration-500 ${isActive ? 'group-hover:scale-110' : 'blur-[4px] grayscale opacity-45 scale-[1.03]'}`}
                autoPlay
                muted
                loop
                playsInline
              />
              <span className={`absolute inset-0 flex items-center justify-center text-white ${isActive ? 'bg-slate-900/20' : 'bg-slate-900/45'}`}>
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
          )
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
              className="absolute left-2 top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#173247] opacity-0 shadow-md transition duration-200 hover:scale-105 hover:bg-white group-hover:opacity-100 focus-visible:opacity-100"
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
              className="absolute right-2 top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#173247] opacity-0 shadow-md transition duration-200 hover:scale-105 hover:bg-white group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 shadow-sm">
              {mediaItems.map((item, itemIndex) => (
                <span
                  key={item.id || itemIndex}
                  className={`h-1.5 w-1.5 rounded-full transition ${itemIndex === activeMediaIndex ? 'bg-[#10B981]' : 'bg-[#B6CCC6]'}`}
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
            onClick={() => onView(product)}
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
            />
          </div>
          <button onClick={() => onEdit(product)} className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600 admin-btn-secondary">
            <Pencil className="h-3.5 w-3.5" />
            {t('admin.common.edit')}
          </button>
          <button onClick={() => onRemove(product.id)} className="inline-flex items-center justify-center rounded-full border border-[#DDEFE7] p-2 text-red-500 transition hover:border-red-200 hover:bg-red-50 admin-btn-danger">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </Motion.div>
  )
})

export const ProductsOverview = memo(function ProductsOverview() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { products, removeProduct, updateProduct } = useApp()
  const [viewingProduct, setViewingProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(24)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const translateOr = (key, fallback) => {
    const value = t(key)
    return value === key ? fallback : value
  }

  const filterOptions = [
    { id: 'all', label: translateOr('admin.products.controls.filters.all', 'All') },
    { id: 'active', label: translateOr('admin.products.controls.filters.active', 'Active') },
    { id: 'inactive', label: translateOr('admin.products.controls.filters.inactive', 'Inactive') },
  ]

  const openAddPage = () => navigate(ROUTES.adminAddProduct)
  const openEditPage = (product) => navigate(ROUTES.adminEditProduct.replace(':id', product.id))

  const toggleProductStatus = (product) => {
    updateProduct({ ...product, isActive: !(product.isActive !== false) })
  }

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return products.filter((product) => {
      const isActive = product.isActive !== false
      const matchesFilter =
        statusFilter === 'all' ||
        (statusFilter === 'active' && isActive) ||
        (statusFilter === 'inactive' && !isActive)

      if (!matchesFilter) return false
      if (!normalizedSearch) return true

      return [product.name, product.description, product.mediaName]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(normalizedSearch))
    })
  }, [products, searchTerm, statusFilter])

  const normalizedItemsPerPage = itemsPerPage === 'all' ? Math.max(filteredProducts.length, 1) : itemsPerPage
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / normalizedItemsPerPage))
  const safePage = Math.min(currentPage, totalPages)
  const paginatedProducts =
    itemsPerPage === 'all'
      ? filteredProducts
      : filteredProducts.slice((safePage - 1) * normalizedItemsPerPage, safePage * normalizedItemsPerPage)
  const pageStart = filteredProducts.length === 0 ? 0 : (safePage - 1) * normalizedItemsPerPage + 1
  const pageEnd = Math.min(safePage * normalizedItemsPerPage, filteredProducts.length)

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto flex w-[94%] flex-col gap-4 sm:w-full admin-products-shell">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-center sm:text-left">
        <div>
          <h2 className="font-display text-[1.2rem] font-bold text-[#173247] sm:text-[1.4rem] admin-card-title">{t('admin.products.title')}</h2>
          <p className="text-[0.72rem] text-[#1E293B] sm:text-[0.78rem]">
            {t('admin.products.subtitle', { count: products.length, s: products.length !== 1 ? 's' : '' })}
          </p>
        </div>
        <Motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={openAddPage}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-[0.78rem] font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-600 sm:w-auto admin-btn-primary"
        >
          <Plus className="h-4 w-4" /> {t('admin.products.newBtn')}
        </Motion.button>
      </div>

      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-3.5 py-3 text-center sm:flex-row sm:text-left">
        <Zap className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
        <p className="text-[0.74rem] text-emerald-700">
          {t('admin.products.banner')}
        </p>
      </div>

      {products.length === 0 ? (
        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center rounded-[22px] border-2 border-dashed border-[#DDEFE7] bg-white px-4 py-10 text-center sm:py-14">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2FBF7] sm:h-12 sm:w-12">
            <Package className="h-5 w-5 text-[#86A29B] sm:h-6 sm:w-6" />
          </div>
          <p className="font-bold text-[#295565]">{t('admin.products.empty.title')}</p>
          <p className="mt-1 max-w-xs text-[0.74rem] text-[#1E293B]">{t('admin.products.empty.desc')}</p>
          <Motion.button whileHover={{ scale: 1.03 }} onClick={openAddPage} className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-[0.78rem] font-bold text-white shadow-md shadow-emerald-500/20">
            <Plus className="h-4 w-4" /> {t('admin.products.empty.btn')}
          </Motion.button>
        </Motion.div>
      ) : (
        <>
          <div className="rounded-[22px] border border-[#DDEFE7] bg-white p-3.5 shadow-sm">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-sm">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1E293B]" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value)
                    setCurrentPage(1)
                  }}
                  placeholder={translateOr('admin.products.controls.searchPlaceholder', 'Search products...')}
                  className="h-11 w-full rounded-2xl border border-[#DDEFE7] bg-[#F8FAFC] pl-10 pr-4 text-[0.82rem] text-[#173247] outline-none transition focus:border-[#10B981] focus:bg-white"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => {
                  const isActive = statusFilter === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setStatusFilter(option.id)
                        setCurrentPage(1)
                      }}
                      className={`rounded-full px-3.5 py-2 text-[0.72rem] font-bold transition ${isActive
                        ? 'bg-[#10B981] text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)]'
                        : 'border border-[#DDEFE7] bg-white text-[#476977] hover:border-[#BFE7DA] hover:bg-[#F8FFFC]'
                        }`}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[0.72rem] font-medium text-[#62808D]">
                {translateOr('admin.products.controls.pageInfo', '{{start}}-{{end}} of {{total}} products')
                  .replace('{{start}}', String(pageStart))
                  .replace('{{end}}', String(pageEnd))
                  .replace('{{total}}', String(filteredProducts.length))}
              </p>
              <div className="flex items-center justify-center gap-2 sm:justify-end">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#1E293B]">
                  {translateOr('admin.products.controls.show', 'Show')}
                </span>
                <select
                  value={String(itemsPerPage)}
                  onChange={(event) => {
                    const nextValue = event.target.value === 'all' ? 'all' : Number(event.target.value)
                    setItemsPerPage(nextValue)
                    setCurrentPage(1)
                  }}
                  className="h-9 rounded-full border border-[#DDEFE7] bg-white px-3 text-[0.72rem] font-bold text-[#476977] outline-none transition focus:border-[#10B981]"
                >
                  {PER_PAGE_OPTIONS.map((option) => (
                    <option key={String(option)} value={String(option)}>
                      {option === 'all' ? translateOr('admin.products.controls.all', 'All') : option}
                    </option>
                  ))}
                </select>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#1E293B]">
                  / {translateOr('admin.products.controls.perPage', 'page')}
                </span>
              </div>
            </div>
          </div>

          {paginatedProducts.length === 0 ? (
            <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center rounded-[22px] border border-dashed border-[#DDEFE7] bg-white px-4 py-12 text-center">
              <Search className="mb-3 h-9 w-9 text-[#86A29B]" />
              <p className="font-bold text-[#295565]">{translateOr('admin.products.controls.empty.title', 'No matching products')}</p>
              <p className="mt-1 max-w-sm text-[0.74rem] text-[#62808D]">
                {translateOr('admin.products.controls.empty.desc', 'Try a different search term or switch the active filter.')}
              </p>
            </Motion.div>
          ) : (
            <Motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              <AnimatePresence mode="popLayout">
                {paginatedProducts.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                    onView={setViewingProduct}
                    onToggleStatus={toggleProductStatus}
                    onEdit={openEditPage}
                    onRemove={removeProduct}
                    t={t}
                  />
                ))}
              </AnimatePresence>
            </Motion.div>
          )}

          {totalPages > 1 ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-[20px] border border-[#DDEFE7] bg-white px-4 py-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-[0.72rem] font-bold transition ${safePage === pageNumber
                      ? 'bg-[#10B981] text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)]'
                      : 'border border-[#DDEFE7] bg-white text-[#476977] hover:bg-[#F8FFFC]'
                      }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={safePage === 1}
                  className="inline-flex items-center gap-2 rounded-full border border-[#DDEFE7] px-4 py-2 text-[0.74rem] font-bold text-[#476977] transition hover:bg-[#F8FFFC] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {t('common.previous')}
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  disabled={safePage === totalPages}
                  className="inline-flex items-center gap-2 rounded-full border border-[#DDEFE7] px-4 py-2 text-[0.74rem] font-bold text-[#476977] transition hover:bg-[#F8FFFC] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {t('common.next')}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : null}
        </>
      )}

      <AnimatePresence>
        {viewingProduct ? (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setViewingProduct(null)}
              className={`absolute inset-0 bg-[#0F172A]/70 ${isMobile ? '' : 'backdrop-blur-xl'}`}
            />
            <Motion.div
              initial={{ opacity: 0, scale: isMobile ? 1 : 0.96, y: isMobile ? 12 : 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: isMobile ? 1 : 0.96, y: isMobile ? 8 : 30 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="admin-modal-lux admin-card-shell relative z-[130] w-full max-w-lg overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/20 bg-white shadow-[0_40px_100px_rgba(15,23,42,0.3)] will-change-[transform,opacity]"
            >
              <button
                type="button"
                onClick={() => setViewingProduct(null)}
                className="admin-modal-close-btn absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/60 text-slate-500 backdrop-blur-md transition hover:bg-white hover:text-red-500 shadow-xl"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-40 md:h-48 w-full overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  <Motion.img
                    key={viewingProduct.imagePreview}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src={viewingProduct.imagePreview || ''}
                    className="h-full w-full object-cover"
                    alt={viewingProduct.name}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute left-6 bottom-4 md:left-8 md:bottom-6 text-white">
                  <span className="mb-2 flex w-fit items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-[0.5rem] md:text-[0.55rem] font-bold uppercase tracking-[0.14em] shadow-lg">
                    <TrendingUp className="h-3 w-3" />
                    {viewingProduct.isActive !== false ? 'Live' : 'Archived'}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                    {viewingProduct.name}
                  </h3>
                </div>
              </div>

              <div className="admin-modal-ribbon flex flex-col md:flex-row md:h-14 items-start md:items-center border-b border-slate-100 bg-white/50 px-6 py-4 md:py-0">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <div className="flex flex-col">
                      <span className="text-[0.5rem] md:text-[0.55rem] font-bold uppercase tracking-widest text-slate-400">{t('admin.products.item.priceLabel')}</span>
                      <span className="text-[0.85rem] md:text-[0.95rem] font-black text-emerald-600">{t('admin.products.item.price', { price: viewingProduct.price || '0.00' })}</span>
                    </div>
                    <div className="admin-modal-divider hidden md:block h-8 w-px bg-slate-100" />
                    <div className="flex flex-col">
                      <span className="text-[0.5rem] md:text-[0.55rem] font-bold uppercase tracking-widest text-slate-400">{t('admin.products.item.stockLabel')}</span>
                      <span className="admin-modal-value text-[0.85rem] md:text-[0.95rem] font-black text-slate-900">{viewingProduct.stock || '0'}</span>
                    </div>
                    <div className="admin-modal-divider hidden md:block h-8 w-px bg-slate-100" />
                    <div className="flex flex-col">
                      <span className="text-[0.5rem] md:text-[0.55rem] font-bold uppercase tracking-widest text-slate-400">{t('admin.products.item.skuLabel')}</span>
                      <span className="admin-modal-value text-[0.75rem] md:text-[0.85rem] font-bold text-slate-900">{viewingProduct.sku || t('admin.products.item.none')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-h-[50vh] overflow-y-auto px-6 py-6 no-scrollbar">
                <div className="space-y-6 md:space-y-8">
                  <section>
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="admin-modal-tag inline-flex items-center gap-1.5 rounded-full bg-slate-100/50 px-2.5 py-1.5 md:px-3 text-[0.55rem] md:text-[0.62rem] font-bold text-slate-500">
                        <Box className="h-3.5 w-3.5" />
                        {viewingProduct.industry || 'Catalog'}
                      </span>
                      {viewingProduct.categoryAt && (
                        <>
                          <ArrowRight className="h-3 w-3 text-slate-300" />
                          <span className="admin-modal-badge-emerald inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1.5 md:px-3 text-[0.55rem] md:text-[0.62rem] font-extrabold text-emerald-600">
                            {viewingProduct.categoryAt}
                          </span>
                        </>
                      )}
                      {viewingProduct.subCategoryAt && (
                        <>
                          <ArrowRight className="h-3 w-3 text-slate-300" />
                          <span className="admin-modal-badge-dark inline-flex items-center rounded-full bg-slate-900 px-2.5 py-1.5 md:px-3 text-[0.55rem] md:text-[0.62rem] font-extrabold text-white">
                            {viewingProduct.subCategoryAt}
                          </span>
                        </>
                      )}
                    </div>
                    <h4 className="sr-only">Description</h4>
                    <p className="admin-modal-description max-w-2xl text-[0.85rem] md:text-[0.95rem] font-medium leading-[1.8] text-slate-600">
                      {viewingProduct.description || t('admin.products.item.noDescription')}
                    </p>
                  </section>

                  {viewingProduct.specs && Object.keys(viewingProduct.specs).length > 0 && (
                    <section className="admin-modal-specs">
                      <div className="mb-5 md:mb-6 flex items-center gap-4">
                        <h4 className="flex items-center gap-2 text-[0.55rem] md:text-[0.6rem] font-black uppercase tracking-[0.2em] text-slate-300">
                          <BadgeCheck className="h-4 w-4 text-emerald-500" />
                          {t('admin.products.item.specsTitle')}
                        </h4>
                        <div className="admin-modal-divider h-px flex-1 bg-slate-100" />
                      </div>
                      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-8">
                        {Object.entries(viewingProduct.specs).map(([key, value]) => (
                          <div key={key} className="flex flex-col gap-1 md:gap-1.5">
                            <span className="text-[0.5rem] md:text-[0.55rem] font-black uppercase tracking-[0.18em] text-slate-400">
                              {key.replace(/([A-Z])/g, ' $1')}
                            </span>
                            <span className="admin-modal-value text-[0.82rem] md:text-[0.9rem] font-bold tracking-tight text-slate-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                  <Motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openEditPage(viewingProduct)}
                    className="admin-cta-premium w-full sm:flex-1 h-14 flex items-center justify-center gap-3 rounded-[20px] md:rounded-[24px] bg-slate-900 text-[0.85rem] md:text-[0.92rem] font-black text-white shadow-2xl transition hover:bg-emerald-600"
                  >
                    <Pencil className="h-4 w-4" />
                    {t('admin.products.item.editBtn')}
                  </Motion.button>
                  <Motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (window.confirm('Archive this product?')) {
                        removeProduct(viewingProduct.id)
                        setViewingProduct(null)
                      }
                    }}
                    className="admin-btn-danger-glass h-16 w-16 flex items-center justify-center rounded-[24px] bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white ring-1 ring-red-100/50"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Motion.button>
                </div>
              </div>
            </Motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </Motion.div>
  )
})
