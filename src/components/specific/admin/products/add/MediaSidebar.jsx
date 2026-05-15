import { ImageIcon, Tag, Plus, PlayCircle, Trash2, Star, Pencil, RefreshCw } from 'lucide-react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { MediaEditorModal } from './components/MediaEditorModal'

export const MediaSidebar = ({
  formData,
  setFormData,
  fileInputRef,
  handleMediaUpload,
  handleReplaceMedia,
  removeMedia,
  setPrimaryMedia,
  t
}) => {
  const [editingMedia, setEditingMedia] = useState(null)
  const replaceInputRef = useRef(null)
  const [replacingId, setReplacingId] = useState(null)

  const handleEditSave = (newPreview, editorState) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.map(item =>
        item.id === editingMedia.id 
          ? { ...item, originalPreview: item.originalPreview || item.preview, preview: newPreview, editorState } 
          : item
      )
    }))
    setEditingMedia(null)
  }

  const onReplaceClick = (id) => {
    setReplacingId(id)
    replaceInputRef.current?.click()
  }

  const onReplaceFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file && replacingId) {
      handleReplaceMedia(replacingId, file)
      setReplacingId(null)
    }
    e.target.value = ''
  }

    const hasVariants = Array.isArray(formData.variantGroups) && formData.variantGroups.some(g => Object.keys(g.attributes || {}).length > 0);

  const displayPrice = hasVariants 
    ? (formData.variantGroups.map(g => Number(g.price)).filter(p => !isNaN(p) && p > 0).length > 0 
        ? Math.min(...formData.variantGroups.map(g => Number(g.price)).filter(p => !isNaN(p) && p > 0)) 
        : 0)
    : Number(formData.price || 0);

  const displaySalePrice = hasVariants
    ? (formData.variantGroups.map(g => Number(g.salePrice)).filter(p => !isNaN(p) && p > 0).length > 0
        ? Math.min(...formData.variantGroups.map(g => Number(g.salePrice)).filter(p => !isNaN(p) && p > 0))
        : null)
    : (formData.salePrice ? Number(formData.salePrice) : null);

  const displayStock = hasVariants
    ? formData.variantGroups.reduce((sum, g) => sum + (Number(g.stock) || 0), 0)
    : Number(formData.stock || 0);

  return (
    <aside className="admin-media-sidebar space-y-6 md:space-y-8">
      <div className="lg:sticky lg:top-10 space-y-6 md:space-y-8">
        <section className="rounded-[28px] md:rounded-[32px] border border-emerald-100 bg-white p-5 md:p-6 shadow-sm ring-1 ring-emerald-100/50">
          <div className="relative mb-6 h-40 md:h-48 w-full overflow-hidden rounded-2xl md:rounded-3xl bg-emerald-50">
            {formData.gallery.length > 0 ? (
              <>
                {(() => {
                  const primaryMedia = formData.gallery.find(i => i.isPrimary) || formData.gallery[0];
                  return primaryMedia.type === 'video' ? (
                    <video
                      src={primaryMedia.preview}
                      className="h-full w-full object-cover cursor-pointer"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={primaryMedia.preview}
                      className="h-full w-full object-cover"
                      alt="Preview"
                    />
                  );
                })()}
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <ImageIcon className="h-8 w-8 md:h-10 md:w-10 text-[#1E293B]/30" />
              </div>
            )}
            <div className="absolute left-3 top-3 md:left-4 md:top-4 rounded-full bg-white/90 px-3 py-1 text-[0.6rem] md:text-[0.65rem] font-black uppercase tracking-widest text-[#1E293B]/80 backdrop-blur-sm">
              {t('admin.common.preview')}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="line-clamp-2 text-lg md:text-xl font-black leading-tight text-[#1E293B]">
                {formData.name || t('admin.addProductOverview.sections.summary.untitled', { defaultValue: 'Untitled Item' })}
              </h3>
              {hasVariants && (
                <span className="shrink-0 rounded bg-emerald-100 px-1.5 py-0.5 text-[0.55rem] font-black text-emerald-700 uppercase tracking-wider">{t('admin.addProductOverview.sections.pricing.autoLabel', 'Auto')}</span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-xl md:text-2xl font-black text-[#1E293B]/80">
                    {t('admin.common.currencySymbol', '$')}{displaySalePrice !== null ? displaySalePrice : displayPrice}
                  </p>
                  {hasVariants && (
                    <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[0.5rem] font-black text-[#1E293B]/40 uppercase tracking-widest">{t('admin.addProductOverview.sections.pricing.startingFromLabel', 'From')}</span>
                  )}
                </div>
                {displaySalePrice !== null && displayPrice > displaySalePrice && (
                  <p className="text-[0.75rem] font-medium text-[#1E293B]/40 line-through">
                    {t('admin.common.currencySymbol', '$')}{displayPrice}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`rounded-lg px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-widest ${displayStock > 0 ? 'bg-emerald-50 text-[#1E293B]/80' : 'bg-red-50 text-red-600'}`}>
                  {displayStock > 0
                    ? (hasVariants ? `${t('admin.addProductOverview.sections.pricing.totalLabel', 'Total')}: ${displayStock}` : t('admin.addProductOverview.sections.summary.statusReady', { defaultValue: 'Ready in Stock' }))
                    : t('admin.addProductOverview.sections.summary.statusOutOfStock', { defaultValue: 'No Stock Left' })}
                </span>
                <div className="flex items-center gap-1.5 px-1">
                  <div className={`h-1.5 w-1.5 rounded-full ${formData.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-emerald-300'}`} />
                  <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[#1E293B]/50">
                    {t('admin.addProductOverview.sections.summary.listingHealth', { defaultValue: 'Listing Status' })}: {formData.status === 'active' ? t('admin.common.active') : t('admin.common.inactive')}
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-emerald-100" />
            <div className="flex flex-wrap items-center gap-2 text-[0.72rem] font-bold text-[#1E293B]/50">
              <Tag className="h-3 w-3 shrink-0" />
              <span className="truncate max-w-full">
                {formData.category ? (
                  <>
                    {t(`admin.addProductOverview.categories.${formData.category}`, formData.category)}
                    {formData.subCategory && <span className="text-[#1E293B]/40 mx-1">/</span>}
                    {formData.subCategory && <span className="text-[#1E293B]/60">{t(`admin.addProductOverview.subcategories.${formData.subCategory}`, formData.subCategory)}</span>}
                  </>
                ) : (
                  t(`admin.addProductOverview.categories.${formData.industry}`, formData.industry)
                )}
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] md:rounded-[32px] border border-emerald-100 bg-white p-5 md:p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-[0.65rem] md:text-[0.7rem] font-black uppercase tracking-[0.2em] text-[#1E293B]">
              {t('admin.addProductOverview.sections.media.title')}
            </h3>
            <span className="text-[0.65rem] font-bold text-[#1E293B]">{formData.gallery.length} / 10</span>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-emerald-100 bg-emerald-50/10 text-[#1E293B]/80 transition-all hover:bg-emerald-50 hover:border-emerald-300"
            >
              <div className="rounded-full bg-white p-2 shadow-sm">
                <Plus className="h-4 w-4" />
              </div>
              <span className="text-[0.55rem] font-black uppercase tracking-widest">
                {t('admin.addProductOverview.sections.media.upload')}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {formData.gallery.map((item) => (
                <Motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  key={item.id}
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) video.play();
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-emerald-100"
                >
                  {item.type === 'image' ? (
                    <img src={item.preview} className="h-full w-full object-cover transition-transform group-hover:scale-110" alt={item.name} draggable="false" />
                  ) : item.type === 'video' ? (
                    <div className="relative h-full w-full overflow-hidden bg-emerald-900 group-hover:scale-110 transition-transform">
                      <video 
                        src={item.preview} 
                        className="h-full w-full object-cover"
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                        <PlayCircle className="h-7 w-7 text-white/80 group-hover:text-white drop-shadow-lg" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-50 text-slate-400">
                      <div className="flex flex-col items-center gap-1">
                        <PlayCircle className="h-7 w-7" />
                        <span className="text-[0.5rem] font-bold px-1 text-center truncate w-full">{item.name}</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-emerald-900/40 p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => removeMedia(item.id)}
                        className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-md hover:bg-red-500"
                        title={t('common.remove')}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => onReplaceClick(item.id)}
                        className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-md hover:bg-emerald-500"
                        title={t('common.replace', { defaultValue: 'Replace' })}
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                      </button>
                      {item.type === 'image' && (
                        <button
                          onClick={() => setEditingMedia(item)}
                          className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-md hover:bg-emerald-500"
                          title={t('common.edit')}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                    <button
                      onClick={() => setPrimaryMedia(item.id)}
                      className={`w-full py-1 rounded-lg text-[0.5rem] md:text-[0.55rem] font-black uppercase tracking-widest backdrop-blur-md ${item.isPrimary ? 'bg-emerald-500 text-white' : 'bg-white/20 text-white hover:bg-white/40'}`}
                    >
                      {item.isPrimary ? t('admin.addProductOverview.sections.media.primary') : t('admin.addProductOverview.sections.media.makePrimary')}
                    </button>
                  </div>
                  {item.isPrimary && (
                    <div className="absolute right-2 top-2 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-lg">
                      <Star className="h-2 w-2 md:h-2.5 md:w-2.5 fill-current" />
                    </div>
                  )}
                </Motion.div>
              ))}
            </AnimatePresence>
          </div>
          <input ref={fileInputRef} type="file" multiple accept="image/*,video/*" className="hidden" onChange={handleMediaUpload} />
          <input ref={replaceInputRef} type="file" accept="image/*,video/*" className="hidden" onChange={onReplaceFileChange} />
        </section>
      </div>

      <AnimatePresence>
        {editingMedia && (
          <MediaEditorModal
            image={editingMedia.originalPreview || editingMedia.preview}
            initialSettings={editingMedia.editorState}
            onClose={() => setEditingMedia(null)}
            onSave={handleEditSave}
            t={t}
          />
        )}
      </AnimatePresence>
    </aside>
  )
}
