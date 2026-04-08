import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Eye, FileText, Package, Pencil, PlayCircle, Plus, Search, ToggleLeft, ToggleRight, Trash2, X, Zap } from 'lucide-react'
import { useMemo, useState, memo } from 'react'
import { useApp } from '../../../context/AppProvider'
import { AddProductModal } from '../onboarding/AddProductModal'
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

export const ProductsOverview = memo(function ProductsOverview() {
  const { t } = useTranslation()
  const { products, addProduct, removeProduct, updateProduct } = useApp()
  const [modalOpen, setModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [viewingProduct, setViewingProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(24)

  const translateOr = (key, fallback) => {
    const value = t(key)
    return value === key ? fallback : value
  }

  const filterOptions = [
    { id: 'all', label: translateOr('admin.products.controls.filters.all', 'All') },
    { id: 'active', label: translateOr('admin.products.controls.filters.active', 'Active') },
    { id: 'inactive', label: translateOr('admin.products.controls.filters.inactive', 'Inactive') },
  ]

  const openAddModal = () => {
    setEditingProduct(null)
    setModalOpen(true)
  }

  const openEditModal = (product) => {
    setEditingProduct(product)
    setModalOpen(true)
  }

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
          <p className="text-[0.72rem] text-[#62808D] sm:text-[0.78rem]">
            {t('admin.products.subtitle', { count: products.length, s: products.length !== 1 ? 's' : '' })}
          </p>
        </div>
        <Motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={openAddModal}
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
          <p className="mt-1 max-w-xs text-[0.74rem] text-[#62808D]">{t('admin.products.empty.desc')}</p>
          <Motion.button whileHover={{ scale: 1.03 }} onClick={openAddModal} className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-[0.78rem] font-bold text-white shadow-md shadow-emerald-500/20">
            <Plus className="h-4 w-4" /> {t('admin.products.empty.btn')}
          </Motion.button>
        </Motion.div>
      ) : (
        <>
          <div className="rounded-[22px] border border-[#DDEFE7] bg-white p-3.5 shadow-sm">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-sm">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#86A29B]" />
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
                      className={`rounded-full px-3.5 py-2 text-[0.72rem] font-bold transition ${
                        isActive
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
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#86A29B]">
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
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#86A29B]">
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
              <Motion.div
                layout
                key={product.id}
                variants={cardItem}
                exit={{ opacity: 0, scale: 0.92 }}
                className={`group relative overflow-hidden rounded-[20px] border bg-white shadow-sm transition-all admin-item-row ${
                  product.isActive !== false
                    ? 'border-[#DDEFE7] hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10'
                    : 'border-[#E5E7EB] bg-[#FCFCFC] opacity-75 saturate-[0.35]'
                }`}
              >
                <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]} admin-item-img-shell ${product.isActive !== false ? '' : 'grayscale'}`}>
                  {product.imagePreview ? (
                    product.mediaType === 'video' ? (
                      <div className="relative h-full w-full">
                        <video
                          src={product.imagePreview}
                          className={`h-full w-full object-cover transition duration-500 ${product.isActive !== false ? 'group-hover:scale-110' : 'blur-[4px] grayscale opacity-45 scale-[1.03]'}`}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                        <span className={`absolute inset-0 flex items-center justify-center text-white ${product.isActive !== false ? 'bg-slate-900/20' : 'bg-slate-900/45'}`}>
                          <PlayCircle className="h-9 w-9" />
                        </span>
                      </div>
                    ) : product.mediaType === 'file' ? (
                      <div className={`flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center ${product.isActive !== false ? 'bg-[#F2FBF7]' : 'bg-[#F5F5F5] opacity-55 grayscale'}`}>
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <FileText className="h-6 w-6 text-emerald-600" />
                        </span>
                        <span className="line-clamp-2 text-[0.7rem] font-semibold text-[#295565]">{product.mediaName || product.name}</span>
                      </div>
                    ) : (
                      <img
                        src={product.imagePreview}
                        alt={product.name}
                        className={`h-full w-full object-cover transition duration-500 ${product.isActive !== false ? 'group-hover:scale-110' : 'blur-[4px] grayscale opacity-45 scale-[1.03]'}`}
                      />
                    )
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-black/5 text-black/20">
                      <Package className="h-10 w-10" />
                    </div>
                  )}
                  <div className="absolute left-2 top-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] shadow-sm ${
                        product.isActive !== false
                          ? 'bg-emerald-500/90 text-white'
                          : 'bg-white/90 text-[#6B7280]'
                      }`}
                    >
                      {product.isActive !== false ? t('admin.products.item.active') : t('admin.products.item.inactive')}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[0.6rem] font-bold text-[#173247] shadow-sm admin-item-price">
                    {t('admin.products.item.price', { price: product.price || '0' })}
                  </div>
                </div>

                <div className={`p-3.5 text-center sm:text-left admin-item-content ${product.isActive !== false ? '' : 'text-[#7A8A93]'}`}>
                  <p className={`text-[0.88rem] font-bold admin-item-title ${product.isActive !== false ? 'text-[#173247]' : 'text-[#7A8A93]'}`}>{product.name}</p>
                  {product.description ? <p className={`mt-1 line-clamp-2 text-[0.72rem] leading-5 admin-item-desc ${product.isActive !== false ? 'text-[#62808D]' : 'text-[#9CA3AF]'}`}>{product.description}</p> : null}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setViewingProduct(product)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 admin-btn-secondary"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      {t('admin.products.item.view')}
                    </button>
                    <button
                      onClick={() => toggleProductStatus(product)}
                      className={`inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-2 text-[0.68rem] font-bold transition ${
                        product.isActive !== false
                          ? 'border-amber-200 text-amber-700 hover:bg-amber-50'
                          : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                      }`}
                    >
                      {product.isActive !== false ? <ToggleLeft className="h-3.5 w-3.5" /> : <ToggleRight className="h-3.5 w-3.5" />}
                      {product.isActive !== false ? t('admin.products.item.deactivate') : t('admin.products.item.activate')}
                    </button>
                    <button onClick={() => openEditModal(product)} className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600 admin-btn-secondary">
                      <Pencil className="h-3.5 w-3.5" />
                      {t('admin.common.edit')}
                    </button>
                    <button onClick={() => removeProduct(product.id)} className="inline-flex items-center justify-center rounded-full border border-[#DDEFE7] p-2 text-red-500 transition hover:border-red-200 hover:bg-red-50 admin-btn-danger">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </Motion.div>
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
                    className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-[0.72rem] font-bold transition ${
                      safePage === pageNumber
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

      <AddProductModal
        key={editingProduct?.id || 'new-product'}
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setEditingProduct(null)
        }}
        onAdd={addProduct}
        onSave={updateProduct}
        initialProduct={editingProduct}
      />

      <AnimatePresence>
        {viewingProduct ? (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setViewingProduct(null)}
              className="absolute inset-0 bg-slate-900/45 backdrop-blur-sm"
            />
            <Motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              className="admin-card-shell relative z-[130] w-full max-w-lg overflow-hidden rounded-[28px] border border-[#DDEFE7] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.2)]"
            >
              <button
                type="button"
                onClick={() => setViewingProduct(null)}
                className="admin-modal-close absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#486977] shadow-sm transition hover:bg-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${gradients[0]}`}>
                {viewingProduct.imagePreview ? (
                  viewingProduct.mediaType === 'video' ? (
                    <video src={viewingProduct.imagePreview} className="h-full w-full object-cover" controls playsInline />
                  ) : viewingProduct.mediaType === 'file' ? (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#F2FBF7] px-6 text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <FileText className="h-7 w-7 text-emerald-600" />
                      </span>
                      <span className="line-clamp-2 text-[0.82rem] font-semibold text-[#295565]">
                        {viewingProduct.mediaName || viewingProduct.name}
                      </span>
                    </div>
                  ) : (
                    <img src={viewingProduct.imagePreview} alt={viewingProduct.name} className="h-full w-full object-cover" />
                  )
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-black/5 text-black/20">
                    <Package className="h-12 w-12" />
                  </div>
                )}
              </div>

              <div className="space-y-4 p-5">
                <div className="admin-products-modal-badges flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#10B981]">
                    {t('admin.products.item.modalTitle')}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
                      viewingProduct.isActive !== false ? 'bg-emerald-500 text-white' : 'admin-products-inactive-badge bg-[#F3F4F6] text-[#6B7280]'
                    }`}
                  >
                    {viewingProduct.isActive !== false ? t('admin.products.item.active') : t('admin.products.item.inactive')}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-[1.45rem] font-bold tracking-[-0.04em] text-[#173247]">
                    {viewingProduct.name}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-6 text-[#62808D]">
                    {viewingProduct.description || t('admin.products.item.noDescription')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="admin-products-meta-card rounded-2xl border border-[#E5F1EB] bg-[#F8FFFC] p-3">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#7A8A93]">
                      {t('admin.products.item.priceLabel')}
                    </p>
                    <p className="mt-1 text-[0.92rem] font-bold text-[#173247]">
                      {t('admin.products.item.price', { price: viewingProduct.price || '0' })}
                    </p>
                  </div>
                  <div className="admin-products-meta-card rounded-2xl border border-[#E5F1EB] bg-[#F8FFFC] p-3">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#7A8A93]">
                      {t('admin.products.item.mediaLabel')}
                    </p>
                    <p className="mt-1 text-[0.92rem] font-bold text-[#173247]">
                      {viewingProduct.mediaType || t('admin.products.item.none')}
                    </p>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </Motion.div>
  )
})
