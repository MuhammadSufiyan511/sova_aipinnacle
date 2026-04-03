import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Package, Pencil, Plus, Trash2, Zap } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../../../context/AppProvider'
import { AddProductModal } from '../onboarding/AddProductModal'

const gradients = [
  'from-emerald-400/20 to-teal-400/20',
  'from-violet-400/20 to-purple-400/20',
  'from-amber-400/20 to-orange-400/20',
  'from-blue-400/20 to-indigo-400/20',
  'from-rose-400/20 to-pink-400/20',
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const cardItem = { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } }

export function ProductsOverview() {
  const { products, addProduct, removeProduct, updateProduct } = useApp()
  const [modalOpen, setModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const openAddModal = () => {
    setEditingProduct(null)
    setModalOpen(true)
  }

  const openEditModal = (product) => {
    setEditingProduct(product)
    setModalOpen(true)
  }

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-[1.2rem] font-bold text-[#173247] sm:text-[1.4rem] admin-card-title">Product Catalog</h2>
          <p className="text-[0.72rem] text-[#62808D] sm:text-[0.78rem]">{products.length} item{products.length !== 1 ? 's' : ''} shared by SOVA in buyer chats</p>
        </div>
        <Motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={openAddModal}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-[0.78rem] font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-600 sm:w-auto"
        >
          <Plus className="h-4 w-4" /> Add Product
        </Motion.button>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-3.5 py-2.5">
        <Zap className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
        <p className="text-[0.74rem] text-emerald-700">
          <span className="font-bold">SOVA uses your catalog</span> to answer questions about product availability, pricing, and features automatically.
        </p>
      </div>

      {products.length === 0 ? (
        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center rounded-[22px] border-2 border-dashed border-[#DDEFE7] bg-white px-4 py-10 text-center sm:py-14">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2FBF7] sm:h-12 sm:w-12">
            <Package className="h-5 w-5 text-[#86A29B] sm:h-6 sm:w-6" />
          </div>
          <p className="font-bold text-[#295565]">No products yet</p>
          <p className="mt-1 max-w-xs text-[0.74rem] text-[#62808D]">Add your first product so SOVA can share it with potential buyers on WhatsApp.</p>
          <Motion.button whileHover={{ scale: 1.03 }} onClick={openAddModal} className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-[0.78rem] font-bold text-white shadow-md shadow-emerald-500/20">
            <Plus className="h-4 w-4" /> Add your first product
          </Motion.button>
        </Motion.div>
      ) : (
        <Motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-3 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {products.map((product, i) => (
              <Motion.div
                layout
                key={product.id}
                variants={cardItem}
                exit={{ opacity: 0, scale: 0.92 }}
                className="group relative overflow-hidden rounded-[20px] border border-[#DDEFE7] bg-white shadow-sm transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10 admin-item-row"
              >
                <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]} admin-item-img-shell`}>
                  {product.imagePreview ? (
                    <img src={product.imagePreview} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-black/5 text-black/20">
                      <Package className="h-10 w-10" />
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[0.6rem] font-bold text-[#173247] shadow-sm admin-item-price">
                    Rs. {product.price || '0'}
                  </div>
                </div>

                <div className="p-3.5 admin-item-content">
                  <p className="text-[0.88rem] font-bold text-[#173247] admin-item-title">{product.name}</p>
                  {product.description ? <p className="mt-1 line-clamp-2 text-[0.72rem] leading-5 text-[#62808D] admin-item-desc">{product.description}</p> : null}
                  <div className="mt-3 flex items-center gap-2">
                    <button onClick={() => openEditModal(product)} className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600 admin-btn-secondary">
                      <Pencil className="h-3.5 w-3.5" />
                      Edit
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
    </Motion.div>
  )
}
