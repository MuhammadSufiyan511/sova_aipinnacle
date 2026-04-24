import { motion as Motion } from 'framer-motion'
import { ProductViewContent } from './ProductViewContent'

export function ProductViewModal({
  product,
  onClose,
  onEdit,
  onRemove,
  t,
  isMobile,
  setLightboxOpen,
  activeMediaIndex,
  setActiveMediaIndex,
  modalSlideDirection,
  setModalSlideDirection
}) {
  if (!product) return null

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className={`absolute inset-0 bg-[#0F172A]/70 ${isMobile ? '' : 'backdrop-blur-xl'}`}
      />
      <ProductViewContent
        product={product}
        onClose={onClose}
        onEdit={onEdit}
        onRemove={onRemove}
        t={t}
        isMobile={isMobile}
        setLightboxOpen={setLightboxOpen}
        activeMediaIndex={activeMediaIndex}
        setActiveMediaIndex={setActiveMediaIndex}
        modalSlideDirection={modalSlideDirection}
        setModalSlideDirection={setModalSlideDirection}
        isPage={false}
      />
    </div>
  )
}
