import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Trash2, ArrowRight } from 'lucide-react'
import { AddProductModal } from './AddProductModal'

export function StepOneProducts({ products, setProducts, onNext }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          What products do you <span className="text-emerald-500 underline decoration-emerald-200 underline-offset-8">sell</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-slate-500">
          Add your bestsellers so SOVA can accurately handle inquiries and boost your sales.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Product Cards */}
        <AnimatePresence mode="popLayout">
          {products.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="group relative h-52 overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="absolute inset-0 bg-slate-100">
                {product.imagePreview ? (
                  <img src={product.imagePreview} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-50">
                    <span className="font-display text-4xl font-bold text-slate-200">{product.name[0]}</span>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent p-5">
                <p className="text-lg font-bold text-white tracking-tight">{product.name}</p>
                {product.description ? (
                  <p className="mt-1 line-clamp-2 text-[0.78rem] leading-5 text-white/85">{product.description}</p>
                ) : null}
              </div>
              <button
                onClick={() => removeProduct(product.id)}
                className="absolute right-3 top-3 translate-x-12 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition hover:bg-red-500 group-hover:translate-x-0"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </motion.div>
          ))}

          {/* Add Button Card */}
          <motion.button
            layout
            onClick={() => setIsModalOpen(true)}
            className="flex h-48 flex-col items-center justify-center gap-3 rounded-[24px] border-2 border-dashed border-slate-200 bg-slate-50/50 text-slate-400 transition hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-600"
          >
            <div className="rounded-full bg-white p-3 shadow-sm transition group-hover:scale-110">
              <Plus className="h-6 w-6" />
            </div>
            <span className="font-bold tracking-tight">Add Product</span>
          </motion.button>
        </AnimatePresence>
      </div>

      <div className="mt-16 flex justify-center">
        <button
          onClick={onNext}
          disabled={products.length === 0}
          className="group relative flex h-16 w-full max-w-sm items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-900 text-[1.05rem] font-bold text-white shadow-2xl transition hover:bg-emerald-500 disabled:bg-slate-200 disabled:shadow-none"
        >
          <span className="relative z-10 transition group-hover:translate-x-[-4px]">Continue to Tone Setup</span>
          <ArrowRight className="relative z-10 h-5 w-5 transition group-hover:translate-x-[4px]" />
        </button>
      </div>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  )
}
