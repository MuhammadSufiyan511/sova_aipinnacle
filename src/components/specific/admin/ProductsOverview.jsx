import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Package, Plus, Zap, Search } from 'lucide-react'
import { useMemo, useState, memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../../context/AppProvider'
import { ROUTES } from '../../../utils/routes'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

// Modular Components
import { ProductCard } from './products/ProductCard'
import { ProductViewModal } from './products/ProductViewModal'
import { ProductFilters } from './products/ProductFilters'
import { ProductPagination } from './products/ProductPagination'
import { ImageLightbox } from './products/ImageLightbox'
import { getProductMediaItems } from './products/utils'
import { DeleteConfirmationSheet } from '../../shared/DeleteConfirmationSheet'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const PER_PAGE_OPTIONS = [12, 24, 48, 96, 'all']

export const ProductsOverview = memo(function ProductsOverview() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { products, removeProduct, updateProduct } = useApp()

  // UI State
  const [viewingProduct, setViewingProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(24)
  const [isMobile, setIsMobile] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [productToRemove, setProductToRemove] = useState(null)

  // Modal Gallery State
  const [activeModalMediaIndex, setActiveModalMediaIndex] = useState(0)
  const [modalSlideDirection, setModalSlideDirection] = useState(0)

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
    const isNowActive = !(product.isActive !== false)
    updateProduct({ ...product, isActive: isNowActive })
    toast.success(t(isNowActive ? 'admin.addProductOverview.validation.statusActive' : 'admin.addProductOverview.validation.statusInactive'))
  }

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    return products.filter((product) => {
      const isActive = product.isActive !== false
      const matchesFilter = statusFilter === 'all' || (statusFilter === 'active' && isActive) || (statusFilter === 'inactive' && !isActive)
      if (!matchesFilter) return false
      if (!normalizedSearch) return true
      return [product.name, product.description, product.mediaName].filter(Boolean).some((value) => String(value).toLowerCase().includes(normalizedSearch))
    })
  }, [products, searchTerm, statusFilter])

  const normalizedItemsPerPage = itemsPerPage === 'all' ? Math.max(filteredProducts.length, 1) : itemsPerPage
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / normalizedItemsPerPage))
  const safePage = Math.min(currentPage, totalPages)
  const paginatedProducts = itemsPerPage === 'all' ? filteredProducts : filteredProducts.slice((safePage - 1) * normalizedItemsPerPage, safePage * normalizedItemsPerPage)
  const pageStart = filteredProducts.length === 0 ? 0 : (safePage - 1) * normalizedItemsPerPage + 1
  const pageEnd = Math.min(safePage * normalizedItemsPerPage, filteredProducts.length)

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto flex w-[94%] flex-col gap-4 sm:w-full admin-products-shell">
      {/* Header Section */}
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

      {/* Banner */}
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-3.5 py-3 text-center sm:flex-row sm:text-left">
        <Zap className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
        <p className="text-[0.74rem] text-emerald-700">{t('admin.products.banner')}</p>
      </div>

      {products.length === 0 ? (
        <EmptyProductsState onAdd={openAddPage} t={t} />
      ) : (
        <>
          {/* Filters & Controls */}
          <ProductFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            filterOptions={filterOptions}
            translateOr={translateOr}
            setCurrentPage={setCurrentPage}
          />

          {/* Page Info & Selection */}
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[0.72rem] font-medium text-[#62808D]">
              {translateOr('admin.products.controls.pageInfo', '{{start}}-{{end}} of {{total}} products')
                .replace('{{start}}', String(pageStart))
                .replace('{{end}}', String(pageEnd))
                .replace('{{total}}', String(filteredProducts.length))}
            </p>
            <div className="flex items-center justify-center gap-2 sm:justify-end">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#1E293B]">{translateOr('admin.products.controls.show', 'Show')}</span>
              <select
                value={String(itemsPerPage)}
                onChange={(e) => {
                  setItemsPerPage(e.target.value === 'all' ? 'all' : Number(e.target.value))
                  setCurrentPage(1)
                }}
                className="h-9 rounded-full border border-[#DDEFE7] bg-white px-3 text-[0.72rem] font-bold text-[#476977] outline-none transition focus:border-[#10B981]"
              >
                {PER_PAGE_OPTIONS.map((opt) => (
                  <option key={String(opt)} value={String(opt)}>{opt === 'all' ? translateOr('admin.products.controls.all', 'All') : opt}</option>
                ))}
              </select>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#1E293B]">/ {translateOr('admin.products.controls.perPage', 'page')}</span>
            </div>
          </div>

          {/* Product Grid */}
          {paginatedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-[22px] border border-dashed border-[#DDEFE7] bg-white px-4 py-12 text-center">
              <Search className="mb-3 h-9 w-9 text-[#86A29B]" />
              <p className="font-bold text-[#295565]">{translateOr('admin.products.controls.empty.title', 'No matching products')}</p>
              <p className="mt-1 max-w-sm text-[0.74rem] text-[#62808D]">{translateOr('admin.products.controls.empty.desc', 'Try a different search term.')}</p>
            </div>
          ) : (
            <Motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {paginatedProducts.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                    onView={(p) => {
                      if (isMobile) {
                        navigate(ROUTES.adminViewProduct.replace(':id', p.id))
                      } else {
                        setActiveModalMediaIndex(0)
                        setModalSlideDirection(0)
                        setViewingProduct(p)
                      }
                    }}
                    onToggleStatus={toggleProductStatus}
                    onEdit={openEditPage}
                    onRemove={(id) => setProductToRemove(products.find(p => p.id === id))}
                    t={t}
                  />
                ))}
              </AnimatePresence>
            </Motion.div>
          )}

          {/* Pagination */}
          <ProductPagination totalPages={totalPages} currentPage={safePage} setCurrentPage={setCurrentPage} t={t} />
        </>
      )}

      {/* Product Detail Modal */}
      <AnimatePresence>
        {viewingProduct && (
          <ProductViewModal
            product={viewingProduct}
            onClose={() => setViewingProduct(null)}
            onEdit={openEditPage}
            onRemove={removeProduct}
            t={t}
            isMobile={isMobile}
            setLightboxOpen={setLightboxOpen}
            activeMediaIndex={activeModalMediaIndex}
            setActiveMediaIndex={setActiveModalMediaIndex}
            modalSlideDirection={modalSlideDirection}
            setModalSlideDirection={setModalSlideDirection}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            src={getProductMediaItems(viewingProduct)[activeModalMediaIndex]?.preview || viewingProduct?.imagePreview}
            alt={viewingProduct?.name}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>

      <DeleteConfirmationSheet
        isOpen={Boolean(productToRemove)}
        onClose={() => setProductToRemove(null)}
        onConfirm={() => {
          if (productToRemove) {
            removeProduct(productToRemove.id)
            setProductToRemove(null)
            toast.success(t('admin.products.item.deleteSuccess'))
          }
        }}
        title={t('admin.products.item.deleteConfirmTitle')}
        description={t('admin.products.item.deleteConfirmDesc')}
        confirmText={t('admin.products.item.deleteConfirmBtn')}
        cancelText={t('admin.products.item.deleteCancelBtn')}
        isMobile={isMobile}
      />
    </Motion.div>
  )
})

const EmptyProductsState = ({ onAdd, t }) => (
  <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center rounded-[22px] border-2 border-dashed border-[#DDEFE7] bg-white px-4 py-10 text-center sm:py-14">
    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2FBF7] sm:h-12 sm:w-12">
      <Package className="h-5 w-5 text-[#86A29B] sm:h-6 sm:w-6" />
    </div>
    <p className="font-bold text-[#295565]">{t('admin.products.empty.title')}</p>
    <p className="mt-1 max-w-xs text-[0.74rem] text-[#1E293B]">{t('admin.products.empty.desc')}</p>
    <Motion.button whileHover={{ scale: 1.03 }} onClick={onAdd} className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-[0.78rem] font-bold text-white shadow-md shadow-emerald-500/20">
      <Plus className="h-4 w-4" /> {t('admin.products.empty.btn')}
    </Motion.button>
  </Motion.div>
)

