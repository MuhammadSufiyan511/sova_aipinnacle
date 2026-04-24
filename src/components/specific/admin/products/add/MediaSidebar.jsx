import { ImageIcon, Tag, Plus, PlayCircle, Trash2, Star } from 'lucide-react'
import { motion as Motion, AnimatePresence } from 'framer-motion'

export const MediaSidebar = ({
  formData,
  fileInputRef,
  handleMediaUpload,
  removeMedia,
  setPrimaryMedia,
  t
}) => {
  return (
    <aside className="admin-media-sidebar space-y-6 md:space-y-8">
      <div className="lg:sticky lg:top-10 space-y-6 md:space-y-8">
        <section className="rounded-[28px] md:rounded-[32px] border border-emerald-100 bg-white p-5 md:p-6 shadow-sm ring-1 ring-emerald-100/50">
          <div className="relative mb-6 h-40 md:h-48 w-full overflow-hidden rounded-2xl md:rounded-3xl bg-emerald-50">
            {formData.gallery.length > 0 ? (
              <img
                src={formData.gallery.find(i => i.isPrimary)?.preview || formData.gallery[0].preview}
                className="h-full w-full object-cover"
                alt="Preview"
              />
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
            <h3 className="line-clamp-2 text-lg md:text-xl font-black leading-tight text-[#1E293B]">
              {formData.name || t('admin.addProductOverview.sections.summary.untitled', { defaultValue: 'Untitled Item' })}
            </h3>

            <div className="flex items-center justify-between">
              <p className="text-xl md:text-2xl font-black text-[#1E293B]/80">
                {t('admin.common.currencySymbol', '$')}{formData.price || '0.00'}
              </p>
              <div className="flex flex-col items-end gap-1">
                <span className={`rounded-lg px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-widest ${formData.stock > 0 ? 'bg-emerald-50 text-[#1E293B]/80' : 'bg-red-50 text-red-600'}`}>
                  {formData.stock > 0
                    ? t('admin.addProductOverview.sections.summary.statusReady', { defaultValue: 'Ready in Stock' })
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
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-emerald-100"
                >
                  {item.type === 'image' ? (
                    <img src={item.preview} className="h-full w-full object-cover transition-transform group-hover:scale-110" alt={item.name} />
                  ) : item.type === 'video' ? (
                    <div className="flex h-full w-full items-center justify-center bg-emerald-900">
                      <PlayCircle className="h-7 w-7 text-white" />
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
                    <button
                      onClick={() => removeMedia(item.id)}
                      className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-md hover:bg-red-500"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
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
          <input ref={fileInputRef} type="file" multiple accept="image/*,video/*,application/pdf" className="hidden" onChange={handleMediaUpload} />
        </section>
      </div>
    </aside>
  )
}
