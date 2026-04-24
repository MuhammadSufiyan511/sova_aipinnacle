export const gradients = [
  'from-emerald-400/20 to-teal-400/20',
  'from-violet-400/20 to-purple-400/20',
  'from-amber-400/20 to-orange-400/20',
  'from-blue-400/20 to-indigo-400/20',
  'from-rose-400/20 to-pink-400/20',
]

export const getProductMediaItems = (product) => {
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

export const formatFieldLabel = (label) => label?.replace(/([A-Z])/g, ' $1')?.replace(/[_-]/g, ' ') || ''
