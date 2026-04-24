import { useMemo, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../../../context/AppProvider'
import { ROUTES } from '../../../utils/routes'
import { ProductViewContent } from './products/ProductViewContent'
import { ImageLightbox } from './products/ImageLightbox'
import { getProductMediaItems } from './products/utils'

export function ProductDetailsOverview({ id: propId }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id: paramsId } = useParams()
  const id = propId || paramsId
  const { products, removeProduct } = useApp()

  const product = useMemo(() => {
    if (!id) return null
    return products.find((p) => String(p.id) === String(id)) || null
  }, [id, products])

  const [isMobile, setIsMobile] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const [modalSlideDirection, setModalSlideDirection] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!product) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-4">
        <p className="text-slate-400 font-medium">{t('admin.products.item.none')}</p>
        <button onClick={() => navigate(ROUTES.adminProducts)} className="text-emerald-600 font-bold flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> {t('admin.addProductOverview.backToCatalog')}
        </button>
      </div>
    )
  }

  const handleEdit = (p) => navigate(ROUTES.adminEditProduct.replace(':id', p.id))
  const handleClose = () => navigate(ROUTES.adminProducts)

  return (
    <div className="admin-product-details-page min-h-screen bg-white md:bg-emerald-50/40">
      <main className="mx-auto max-w-[1440px] px-0 md:px-8 md:py-10">
        <div className="hidden md:block mb-8">
          <Motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleClose}
            className="group flex items-center gap-2 text-[0.82rem] font-bold text-[#1E293B]/80 transition-all hover:text-[#1E293B]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#1E293B] shadow-sm ring-1 ring-emerald-100 transition-all group-hover:bg-emerald-50 group-hover:ring-emerald-200">
              <ArrowLeft className="h-4 w-4" />
            </div>
            {t('admin.addProductOverview.backToCatalog')}
          </Motion.button>
        </div>

        <ProductViewContent
          product={product}
          onClose={handleClose}
          onEdit={handleEdit}
          onRemove={removeProduct}
          t={t}
          isMobile={isMobile}
          setLightboxOpen={setLightboxOpen}
          activeMediaIndex={activeMediaIndex}
          setActiveMediaIndex={setActiveMediaIndex}
          modalSlideDirection={modalSlideDirection}
          setModalSlideDirection={setModalSlideDirection}
          isPage={true}
        />

        <AnimatePresence>
          {lightboxOpen && (
            <ImageLightbox
              src={getProductMediaItems(product)[activeMediaIndex]?.preview || product?.imagePreview}
              alt={product?.name}
              onClose={() => setLightboxOpen(false)}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
