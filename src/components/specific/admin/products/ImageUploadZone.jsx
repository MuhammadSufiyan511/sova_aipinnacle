import { useRef, useState, memo } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Upload, X, Eye, PlayCircle, Image as ImageIcon, Star, Plus } from 'lucide-react'

export const ImageUploadZone = memo(function ImageUploadZone({
  t,
  gallery,
  setGallery,
  setViewingMedia,
  idPrefix = 'new'
}) {
  const fileInputRef = useRef(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true)
    else if (e.type === 'dragleave') setDragActive(false)
  }

  const generateMediaPreview = (file) => {
    return new Promise((resolve) => {
      if (file.type.startsWith('video/')) {
        const video = document.createElement('video')
        video.preload = 'metadata'
        video.onloadedmetadata = () => {
          video.currentTime = Math.min(1, video.duration / 2)
        }
        video.onseeked = () => {
          const canvas = document.createElement('canvas')
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          const ctx = canvas.getContext('2d')
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
          resolve(canvas.toDataURL('image/jpeg'))
        }
        video.onerror = () => resolve(URL.createObjectURL(file))
        video.src = URL.createObjectURL(file)
      } else {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(file)
      }
    })
  }

  const handleDrop = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const filesArray = Array.from(e.dataTransfer.files)
      processFiles(filesArray)
    }
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      const filesArray = Array.from(e.target.files)
      processFiles(filesArray)
    }
  }

  const processFiles = async (filesArray) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm']
    const validFiles = filesArray.filter((file) => validTypes.includes(file.type))
    const newItems = await Promise.all(
      validFiles.map(async (file) => {
        const preview = await generateMediaPreview(file)
        return {
          id: `${idPrefix}-media-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          file,
          preview,
          type: file.type.split('/')[0],
          name: file.name,
          isPrimary: gallery.length === 0,
        }
      })
    )
    setGallery((prev) => [...prev, ...newItems])
  }

  const removeMedia = (id) => {
    setGallery((prev) => {
      const filtered = prev.filter((item) => item.id !== id)
      if (filtered.length > 0 && !filtered.some((item) => item.isPrimary)) {
        filtered[0].isPrimary = true
      }
      return filtered
    })
  }

  const setPrimaryMedia = (id) => {
    setGallery((prev) => prev.map((item) => ({ ...item, isPrimary: item.id === id })))
  }

  return (
    <div className="space-y-4">
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`admin-media-upload-zone relative flex cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-dashed bg-[#F8FAFC] px-6 py-10 text-center transition-all duration-300 ${dragActive ? 'border-emerald-500 bg-emerald-50 scale-[1.01]' : 'border-[#DDEFE7] hover:border-emerald-300 hover:bg-[#F2FBF7]'}`}
      >
        <input ref={fileInputRef} type="file" multiple accept="image/*,video/mp4,video/webm" onChange={handleFileInput} className="hidden" />
        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-colors duration-300 ${dragActive ? 'bg-emerald-100 text-emerald-600' : 'bg-white text-[#648E89]'}`}>
          <Upload className={`h-6 w-6 transition-transform duration-300 ${dragActive ? '-translate-y-1' : ''}`} />
        </div>
        <p className="font-display text-[1rem] font-bold text-[#173247]">
          {t('admin.addProductOverview.advanced.uploadTitle')}
        </p>
        <p className="mt-1.5 max-w-sm text-[0.76rem] leading-relax text-[#62808D]">
          {t('admin.addProductOverview.advanced.uploadDesc')}
        </p>
      </div>

      <AnimatePresence>
        {gallery.length > 0 ? (
          <Motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="grid grid-cols-2 gap-3 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
            {gallery.map((item) => (
              <Motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }} className="group relative aspect-square overflow-hidden rounded-[18px] border border-[#DDEFE7] bg-white shadow-sm">
                <div className="absolute left-1.5 top-1.5 z-10 hidden group-hover:flex gap-1.5">
                  <button type="button" onClick={() => removeMedia(item.id)} className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition hover:scale-110 hover:bg-red-600">
                    <X className="h-3 w-3" />
                  </button>
                  <button type="button" onClick={() => setViewingMedia(item)} className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#173247] shadow-md transition hover:scale-110">
                    <Eye className="h-3 w-3" />
                  </button>
                </div>

                {!item.isPrimary ? (
                  <button type="button" onClick={() => setPrimaryMedia(item.id)} className="absolute bottom-1.5 left-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 p-1 text-[#648E89] opacity-0 shadow-sm backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:text-amber-500 group-hover:opacity-100">
                    <Star className="h-3.5 w-3.5" />
                  </button>
                ) : null}

                {item.isPrimary ? (
                  <div className="absolute right-1.5 top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 shadow-md">
                    <Star className="h-3.5 w-3.5 fill-white text-white" />
                  </div>
                ) : null}

                <div className="h-full w-full bg-slate-100">
                  {item.type === 'video' ? (
                    <div className="relative h-full w-full bg-slate-900">
                      <img src={item.preview} alt="" className="h-full w-full object-cover opacity-60 transition duration-300 group-hover:scale-110 group-hover:opacity-40" />
                      <span className="absolute inset-0 flex items-center justify-center text-white"><PlayCircle className="h-7 w-7 opacity-80" /></span>
                    </div>
                  ) : (
                    <img src={item.preview} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-110" />
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="truncate text-[0.6rem] font-medium tracking-wider">{item.name}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
})
