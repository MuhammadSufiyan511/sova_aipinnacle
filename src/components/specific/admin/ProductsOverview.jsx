import { AnimatePresence, motion } from 'framer-motion'
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
const cardItem = { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } }

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-[1.45rem] font-bold text-slate-800">Product Catalog</h2>
          <p className="text-[0.78rem] text-slate-400">{products.length} item{products.length !== 1 ? 's' : ''} — shared by SOVA in buyer chats</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          onClick={openAddModal}
          className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-[0.84rem] font-bold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
        >
          <Plus className="h-4 w-4" /> Add Product
        </motion.button>
      </div>

      {/* AI Banner */}
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
        <Zap className="h-4 w-4 shrink-0 text-emerald-500" />
        <p className="text-[0.8rem] text-emerald-700">
          <span className="font-bold">SOVA uses your catalog</span> to answer questions about product availability, pricing, and features — automatically.
        </p>
      </div>

      {/* Grid / Empty State */}
      {products.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center rounded-[26px] border-2 border-dashed border-slate-100 bg-white py-20 text-center"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
            <Package className="h-7 w-7 text-slate-300" />
          </div>
          <p className="font-bold text-slate-600">No products yet</p>
          <p className="mt-1 max-w-xs text-[0.8rem] text-slate-400">Add your first product so SOVA can share it with potential buyers on WhatsApp.</p>
          <motion.button whileHover={{ scale: 1.04 }} onClick={openAddModal}
            className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/20"
          >
            <Plus className="h-4 w-4" /> Add your first product
          </motion.button>
        </motion.div>
      ) : (
        <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {products.map((product, i) => (
              <motion.div layout key={product.id} variants={cardItem} exit={{ opacity: 0, scale: 0.9 }}
                className="group relative overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-sm transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                {/* Image / Placeholder */}
                <div className={`relative h-44 bg-gradient-to-br ${gradients[i % gradients.length]} overflow-hidden`}>
                  {product.imagePreview ? (
                    <img src={product.imagePreview} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-5xl font-extrabold text-white/20">
                      {product.name[0].toUpperCase()}
                    </div>
                  )}
                  <div className="absolute right-2.5 top-2.5 flex items-center gap-1 opacity-0 transition-all duration-200 group-hover:opacity-100">
                    <button
                      onClick={() => openEditModal(product)}
                      className="rounded-full bg-white/85 p-1.5 text-slate-500 backdrop-blur-sm transition hover:bg-sky-50 hover:text-sky-500"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => removeProduct(product.id)}
                    className="rounded-full bg-white/85 p-1.5 text-slate-500 backdrop-blur-sm transition hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                  </div>
                  <div className="absolute bottom-2 left-2.5 flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 backdrop-blur-sm">
                    <Zap className="h-2.5 w-2.5 text-emerald-500" />
                    <span className="text-[0.6rem] font-bold text-emerald-600">AI Ready</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="font-bold text-slate-800">{product.name}</p>
                  {product.description && (
                    <p className="mt-1 line-clamp-2 text-[0.76rem] leading-relaxed text-slate-400">{product.description}</p>
                  )}
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(product)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-[0.72rem] font-bold text-slate-500 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      Edit
                    </button>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-[0.72rem] font-bold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
    </motion.div>
  )
}
