import { motion as Motion } from 'framer-motion'
import { useEffect } from 'react'
import { X } from 'lucide-react'

export function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => (e.key === 'Escape') && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      style={{ willChange: 'opacity' }}
    >
      <Motion.img
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ willChange: 'transform, opacity' }}
      />
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
    </Motion.div>
  )
}
