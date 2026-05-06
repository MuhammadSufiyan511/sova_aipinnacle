import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { X, Check, RotateCcw, Sliders, Crop } from 'lucide-react'

export const MediaEditorModal = ({ image, initialSettings, onClose, onSave, t }) => {
  const [crop, setCrop] = useState(initialSettings?.crop || { x: 0, y: 0 })
  const [zoom, setZoom] = useState(initialSettings?.zoom || 1)
  const [rotation, setRotation] = useState(initialSettings?.rotation || 0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(initialSettings?.croppedAreaPixels || null)
  const [filters, setFilters] = useState(initialSettings?.filters || {
    brightness: 100,
    contrast: 100,
    saturation: 100,
  })
  const [activeTab, setActiveTab] = useState('crop') // 'crop' or 'filters'

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', (error) => reject(error))
      image.setAttribute('crossOrigin', 'anonymous')
      image.src = url
    })

  const getCroppedImg = async (imageSrc, pixelCrop, rotation, filters) => {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) return null

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    // Apply filters to canvas context
    ctx.filter = `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturation}%)`

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    )

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(URL.createObjectURL(blob))
      }, 'image/jpeg')
    })
  }

  const handleSave = async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels, rotation, filters)
      const editorState = { crop, zoom, rotation, filters, croppedAreaPixels }
      onSave(croppedImage, editorState)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[250] flex items-center justify-center bg-[#0F172A]/90 p-4 backdrop-blur-xl"
    >
      <div className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[32px] bg-white dark:bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 p-6">
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{t('admin.addProductOverview.sections.media.editorTitle', 'Media Editor')}</h3>
            <p className="text-sm font-medium text-slate-400 dark:text-slate-500">{t('admin.addProductOverview.sections.media.editorSubtitle', 'Crop and adjust your product images')}</p>
          </div>
          <button onClick={onClose} className="rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 dark:text-slate-400 transition hover:bg-slate-200 dark:hover:bg-slate-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative flex-1 bg-slate-50 dark:bg-slate-950">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            style={{
              containerStyle: {
                filter: `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturation}%)`,
              },
            }}
          />
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 p-6">
          <div className="mb-6 flex gap-4">
            <button
              onClick={() => setActiveTab('crop')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition ${activeTab === 'crop' ? 'bg-emerald-900 dark:bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-700'}`}
            >
              <Crop className="h-4 w-4" /> {t('common.crop', 'Crop')}
            </button>
            <button
              onClick={() => setActiveTab('filters')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition ${activeTab === 'filters' ? 'bg-emerald-900 dark:bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-700'}`}
            >
              <Sliders className="h-4 w-4" /> {t('common.filters', 'Filters')}
            </button>
          </div>

          <div className="space-y-6">
            {activeTab === 'crop' ? (
              <div className="flex items-center gap-6">
                <div className="flex-1">
                  <p className="mb-2 text-[0.7rem] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{t('common.zoom', 'Zoom')}</p>
                  <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                </div>
                <button
                  onClick={() => { setZoom(1); setCrop({ x: 0, y: 0 }); setRotation(0) }}
                  className="flex items-center gap-2 text-sm font-bold text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  <RotateCcw className="h-4 w-4" /> {t('common.reset', 'Reset')}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <p className="mb-2 text-[0.7rem] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{t('common.brightness', 'Brightness')}</p>
                  <input
                    type="range"
                    value={filters.brightness}
                    min={50}
                    max={150}
                    onChange={(e) => setFilters(f => ({ ...f, brightness: e.target.value }))}
                    className="w-full accent-emerald-600"
                  />
                </div>
                <div>
                  <p className="mb-2 text-[0.7rem] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{t('common.contrast', 'Contrast')}</p>
                  <input
                    type="range"
                    value={filters.contrast}
                    min={50}
                    max={150}
                    onChange={(e) => setFilters(f => ({ ...f, contrast: e.target.value }))}
                    className="w-full accent-emerald-600"
                  />
                </div>
                <div>
                  <p className="mb-2 text-[0.7rem] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{t('common.saturation', 'Saturation')}</p>
                  <input
                    type="range"
                    value={filters.saturation}
                    min={0}
                    max={200}
                    onChange={(e) => setFilters(f => ({ ...f, saturation: e.target.value }))}
                    className="w-full accent-emerald-600"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button onClick={onClose} className="rounded-2xl border border-slate-200 dark:border-slate-700 px-8 py-3 font-bold text-slate-600 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-slate-800">
              {t('common.cancel')}
            </button>
            <button onClick={handleSave} className="flex items-center gap-2 rounded-2xl bg-emerald-900 dark:bg-emerald-600 px-10 py-3 font-bold text-white shadow-xl shadow-emerald-900/20 dark:shadow-emerald-900/40 transition hover:bg-black dark:hover:bg-emerald-500">
              <Check className="h-5 w-5" /> {t('common.save')}
            </button>
          </div>
        </div>
      </div>
    </Motion.div>
  )
}
