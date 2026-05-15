import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Pencil, Trash2, X, Box, Star, DollarSign, Package, FileText, BadgeCheck, Tag, Layers, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { useState, memo } from 'react'
import { useApp } from '../../../../context/AppProvider'
import toast from 'react-hot-toast'
import { getProductMediaItems, formatFieldLabel } from './utils'
import { DeleteConfirmationSheet } from '../../../shared/DeleteConfirmationSheet'

export function ProductViewContent({
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
  setModalSlideDirection,
  isPage = false // To adjust styles for full page view
}) {
  const { homeDarkMode } = useApp()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  if (!product) return null

  const modalMediaItems = getProductMediaItems(product)
  const currentModalMedia = modalMediaItems[activeMediaIndex] || { preview: product.imagePreview, type: 'image' }
  const hasMultipleModalMedia = modalMediaItems.length > 1

  const showNextModalMedia = (e) => {
    e?.stopPropagation()
    setModalSlideDirection(1)
    setActiveMediaIndex(curr => (curr === modalMediaItems.length - 1 ? 0 : curr + 1))
  }
  const showPrevModalMedia = (e) => {
    e?.stopPropagation()
    setModalSlideDirection(-1)
    setActiveMediaIndex(curr => (curr === 0 ? modalMediaItems.length - 1 : curr - 1))
  }

  const validVariants = Array.isArray(product.variantGroups) && product.variantGroups.filter(g => Object.keys(g.attributes || {}).length > 0)
  const hasVariants = validVariants && validVariants.length > 0

  return (
    <Motion.div
      initial={isPage ? { opacity: 0, y: -20 } : { opacity: 0, scale: isMobile ? 1 : 0.96, y: isMobile ? 12 : 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={isPage ? { opacity: 0 } : { opacity: 0, scale: isMobile ? 1 : 0.96, y: isMobile ? 8 : 30 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`admin-modal-lux admin-card-shell relative z-[130] flex w-full flex-col overflow-hidden ${homeDarkMode ? 'bg-[#040D0C] border-emerald-900/20 shadow-[0_40px_100px_rgba(0,0,0,0.6)]' : 'bg-white border-white/20 shadow-[0_40px_100px_rgba(15,23,42,0.3)]'
        } ${isPage
          ? 'h-full md:h-[min(90vh,950px)] md:rounded-[32px] md:max-w-6xl md:border'
          : 'max-w-6xl rounded-[24px] md:flex-row md:h-[min(90vh,950px)] md:rounded-[32px] h-[calc(100dvh-2rem)] md:max-h-[calc(100dvh-4rem)] border'
        } ${isMobile && isPage ? '' : 'md:flex-row'}`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-[100] flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/40 text-white backdrop-blur-md transition hover:bg-slate-900/60 hover:text-red-400 shadow-xl"
      >
        <X className="h-5 w-5 drop-shadow-md" />
      </button>

      {/* LEFT SIDE: Media */}
      <div className={`relative shrink-0 overflow-hidden bg-slate-950 ${isPage && isMobile ? 'h-[350px]' : 'h-[280px] sm:h-[320px] md:h-full md:w-[45%]'}`}>
        <AnimatePresence initial={false} custom={modalSlideDirection}>
          <Motion.div
            key={currentModalMedia.preview || activeMediaIndex}
            custom={modalSlideDirection}
            variants={{
              enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
              center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
              exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.95 })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset }) => {
              const swipe = offset.x
              if (swipe < -50) {
                showNextModalMedia()
              } else if (swipe > 50) {
                showPrevModalMedia()
              }
            }}
            className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
          >
            {currentModalMedia.type === 'video' ? (
              <video src={currentModalMedia.preview} className="h-full w-full object-contain bg-black/50" controls autoPlay muted loop playsInline />
            ) : currentModalMedia.type === 'file' ? (
              <div className={`flex h-full w-full flex-col items-center justify-center gap-4 ${homeDarkMode ? 'bg-slate-900/50 text-slate-500' : 'bg-slate-50 text-slate-400'}`}>
                <FileText className="h-12 w-12 text-slate-300" />
                <span className="max-w-[80%] text-center text-[0.75rem] font-bold text-slate-500">{currentModalMedia.name || product.name}</span>
              </div>
            ) : (
              <img src={currentModalMedia.preview} className="h-full w-full object-cover" alt={product.name} />
            )}
          </Motion.div>
        </AnimatePresence>

        <div className="absolute left-4 top-4 z-40 flex flex-wrap gap-2 pr-12">
          <span className={`text-[0.6rem] font-black px-3 py-1 rounded-full border shadow-sm backdrop-blur-md tracking-wider uppercase ${product.isActive !== false ? 'bg-emerald-500/90 text-white border-emerald-400/50' : 'bg-slate-900/80 text-slate-300 border-slate-700/50'
            }`}>
            {product.isActive !== false ? t('admin.common.active') : t('admin.common.inactive')}
          </span>
          {product.industry && (
            <span className="text-[0.6rem] font-black px-3 py-1 rounded-full bg-black/40 text-white border border-white/10 shadow-sm backdrop-blur-md tracking-wider uppercase">
              {t(`admin.addProductOverview.categories.${product.industry}`, { defaultValue: product.industry })}
            </span>
          )}
          {product.brand && (
            <span className="text-[0.6rem] font-black px-3 py-1 rounded-full bg-black/40 text-white border border-white/10 shadow-sm backdrop-blur-md tracking-wider uppercase">
              {product.brand}
            </span>
          )}
          {product.sku && (
            <span className="text-[0.6rem] font-black px-3 py-1 rounded-full bg-black/60 text-white border border-white/20 shadow-sm backdrop-blur-md tracking-wider uppercase">
              {t('admin.products.item.skuLabel')}: {product.sku}
            </span>
          )}
        </div>

        {currentModalMedia.type !== 'video' && currentModalMedia.type !== 'file' && (
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white border border-white/20 shadow-2xl backdrop-blur-lg transition hover:bg-emerald-500 hover:border-emerald-400 hover:scale-110 active:scale-95"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
        )}

        {hasMultipleModalMedia && (
          <>
            <button
              type="button"
              onClick={showPrevModalMedia}
              className="absolute left-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNextModalMedia}
              className="absolute right-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/20 px-3 py-1.5 backdrop-blur-md">
              {modalMediaItems.map((_, i) => (
                <span key={i} className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === activeMediaIndex ? 'w-4 bg-white shadow-sm' : 'bg-white/40'}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* RIGHT SIDE: Details */}
      <div className={`flex-1 flex flex-col min-h-0 min-w-0 ${homeDarkMode ? 'bg-emerald-950/5' : 'bg-slate-50/20'}`}>
        <div className="flex-1 overflow-y-auto px-5 py-6 md:px-10 md:py-10 lux-scrollbar">
          <div className="mb-10">
            <h3 className={`text-[1.25rem] sm:text-[1.5rem] md:text-[1.85rem] font-bold leading-tight mb-2 ${homeDarkMode ? 'text-white' : 'text-[#1E293B]'}`}>
              {product.name || t('admin.products.item.none')}
            </h3>
          </div>

          <div className="space-y-8">
            <div className={`rounded-[24px] p-4 sm:p-6 shadow-sm border ${homeDarkMode ? 'bg-[#0A1B19] border-emerald-900/20' : 'bg-white border-[#EAF1EE]'}`}>
              <div className="flex items-center gap-3 mb-6">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${homeDarkMode ? 'bg-indigo-950/30 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                  <Layers className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className={`text-[0.62rem] font-black uppercase tracking-[0.18em] ${homeDarkMode ? 'text-slate-300' : 'text-[#1E293B]'}`}>
                    {t('admin.addProductOverview.sections.category.title')}
                  </p>
                  <p className={`text-[0.75rem] font-medium ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {t('admin.addProductOverview.sections.category.desc')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <span className={`text-[0.52rem] font-black uppercase tracking-[0.14em] ${homeDarkMode ? 'text-slate-500' : 'text-[#9BA8A4]'}`}>
                    {t('admin.addProductOverview.sections.category.industryLabel')}
                  </span>
                  <span className={`text-[0.92rem] font-bold capitalize ${homeDarkMode ? 'text-slate-200' : 'text-[#1E293B]'}`}>
                    {t(`admin.addProductOverview.categories.${product.industry}`, { defaultValue: product.industry?.replace('-', ' ') })}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className={`text-[0.52rem] font-black uppercase tracking-[0.14em] ${homeDarkMode ? 'text-slate-500' : 'text-[#9BA8A4]'}`}>{t('admin.addProductOverview.sections.category.categoryLabel')}</span>
                  <span className={`text-[0.92rem] font-bold capitalize ${homeDarkMode ? 'text-slate-200' : 'text-[#1E293B]'}`}>
                    {product.categoryAt === 'custom' ? product.customCategory : t(`admin.addProductOverview.subcategories.${product.categoryAt}`, { defaultValue: product.categoryAt?.replace(/-/g, ' ') })}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className={`text-[0.52rem] font-black uppercase tracking-[0.14em] ${homeDarkMode ? 'text-slate-500' : 'text-[#9BA8A4]'}`}>{t('admin.addProductOverview.sections.category.subCategoryLabel')}</span>
                  <span className={`text-[0.92rem] font-bold capitalize ${homeDarkMode ? 'text-slate-200' : 'text-[#1E293B]'}`}>
                    {product.subCategoryAt === 'custom' ? product.customSubCategory : t(`admin.addProductOverview.subcategories.${product.subCategoryAt}`, { defaultValue: product.subCategoryAt })}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
              <div className={`rounded-[22px] p-5 shadow-sm transition-all hover:shadow-md border ${homeDarkMode ? 'bg-[#0A1B19] border-emerald-900/20' : 'bg-white border-[#EAF1EE]'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[0.6rem] font-black uppercase tracking-[0.15em] ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {t('admin.products.item.priceLabel')}
                  </span>
                  {hasVariants && (
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[0.55rem] font-black text-emerald-700 uppercase tracking-wider">{t('admin.addProductOverview.sections.pricing.startingFromLabel', 'Starting From')}</span>
                  )}
                </div>
                <p className="text-[1.25rem] font-bold text-[#10B981]">
                  {product.salePrice ? t('admin.products.item.price', { price: product.salePrice }) : t('admin.products.item.none')}
                </p>
                {product.price && Number(product.price) > Number(product.salePrice) && (
                  <div className="mt-2 flex items-center gap-2">
                    <p className={`text-[0.72rem] font-medium line-through ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      {t('admin.products.item.price', { price: product.price })}
                    </p>
                    <span className="text-[0.62rem] font-black text-rose-500 uppercase">
                      -{product.discount || '0%'}
                    </span>
                  </div>
                )}
              </div>

              <div className={`rounded-[22px] p-5 shadow-sm transition-all hover:shadow-md border ${homeDarkMode ? 'bg-[#0A1B19] border-emerald-900/20' : 'bg-white border-[#EAF1EE]'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[0.6rem] font-black uppercase tracking-[0.15em] ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {t('admin.products.item.stockLabel')}
                  </span>
                  {hasVariants && (
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[0.55rem] font-black text-emerald-700 uppercase tracking-wider">{t('admin.addProductOverview.sections.pricing.totalLabel', 'Total')}</span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <p className={`text-[1.25rem] font-bold ${Number(product.stock) <= Number(product.minStock) ? 'text-rose-500' : (homeDarkMode ? 'text-slate-200' : 'text-[#1E293B]')}`}>
                    {product.stock ?? '0'}
                  </p>
                  <span className={`text-[0.65rem] font-bold uppercase tracking-wider ${homeDarkMode ? 'text-slate-400' : 'text-[#1E293B]'}`}>{t('admin.common.units')}</span>
                </div>
                <p className={`mt-2 text-[0.68rem] font-medium ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  {t('admin.addProductOverview.sections.pricing.minStockLabel')}: {product.minStock || '0'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className={`rounded-[22px] p-4 flex items-center gap-4 border ${homeDarkMode ? 'bg-[#0A1B19] border-emerald-900/20' : 'bg-white border-[#EAF1EE]'}`}>
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${homeDarkMode ? 'bg-slate-900 text-slate-500' : 'bg-slate-50 text-slate-400'}`}>
                  <Box className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-[0.52rem] font-black uppercase tracking-[0.1em] mb-0.5 ${homeDarkMode ? 'text-slate-400' : 'text-[#1E293B]'}`}>{t('admin.addProductOverview.sections.pricing.minOrderLabel')}</p>
                  <p className={`text-[0.88rem] font-bold ${homeDarkMode ? 'text-slate-200' : 'text-[#1E293B]'}`}>{product.minOrder || '1'} {t('admin.common.units')}</p>
                </div>
              </div>
              {product.brand && (
                <div className={`rounded-[22px] p-4 flex items-center gap-4 border ${homeDarkMode ? 'bg-[#0A1B19] border-emerald-900/20' : 'bg-white border-[#EAF1EE]'}`}>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${homeDarkMode ? 'bg-emerald-950/30 text-emerald-400' : 'bg-emerald-50 text-emerald-500'}`}>
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className={`text-[0.52rem] font-black uppercase tracking-[0.1em] mb-0.5 ${homeDarkMode ? 'text-slate-400' : 'text-[#1E293B]'}`}>{t('admin.addProductOverview.sections.basics.brandLabel')}</p>
                    <p className={`text-[0.88rem] font-bold ${homeDarkMode ? 'text-slate-200' : 'text-[#1E293B]'}`}>{product.brand}</p>
                  </div>
                </div>
              )}
            </div>

            <div className={`rounded-[24px] p-5 sm:p-6 shadow-sm group border ${homeDarkMode ? 'bg-[#0A1B19] border-emerald-900/20' : 'bg-white border-[#EAF1EE]'}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${homeDarkMode ? 'bg-slate-900 text-slate-500 group-hover:bg-emerald-900/40' : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600'
                  }`}>
                  <FileText className="h-4 w-4" />
                </span>
                <p className={`text-[0.65rem] font-black uppercase tracking-[0.15em] ${homeDarkMode ? 'text-slate-300' : 'text-[#1E293B]'}`}>
                  {t('admin.addProductOverview.sections.basics.descriptionLabel')}
                </p>
              </div>
              <p className={`text-[0.95rem] font-medium leading-[1.8] min-h-[50px] whitespace-pre-wrap ${homeDarkMode ? 'text-slate-400' : 'text-[#476172]'}`}>
                {product.description || t('admin.products.item.noDescription')}
              </p>
            </div>

            {Array.isArray(product.variantGroups) && product.variantGroups.length > 0 && (
              <div className={`rounded-[24px] p-4 sm:p-6 shadow-sm border ${homeDarkMode ? 'bg-[#0A1B19] border-emerald-900/20' : 'bg-white border-[#EAF1EE]'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${homeDarkMode ? 'bg-violet-950/30 text-violet-400' : 'bg-violet-50 text-violet-600'}`}>
                    <Tag className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className={`text-[0.65rem] font-black uppercase tracking-[0.15em] ${homeDarkMode ? 'text-slate-300' : 'text-[#1E293B]'}`}>
                      {t('admin.addProductOverview.sections.variants.title')}
                    </p>
                    <p className={`text-[0.75rem] font-medium ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      {t('admin.addProductOverview.sections.variants.desc')}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {product.variantGroups.map((group, groupIdx) => (
                    <div key={group.id || groupIdx} className={`p-4 sm:p-5 rounded-2xl border ${homeDarkMode ? 'bg-slate-900/30 border-emerald-900/10' : 'bg-slate-50/50 border-slate-100/30'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`flex h-7 w-7 items-center justify-center rounded-lg border text-[0.7rem] font-black shadow-sm ${homeDarkMode ? 'bg-slate-900 border-emerald-900/20 text-white' : 'bg-white border-slate-200 text-slate-900'
                          }`}>
                          {groupIdx + 1}
                        </span>
                        <span className={`text-[0.75rem] font-black uppercase tracking-[0.1em] ${homeDarkMode ? 'text-slate-500' : 'text-slate-900/40'}`}>
                          {t('admin.addProductOverview.sections.variants.rowLabel')}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {Object.entries(group.attributes || {}).map(([key, val]) => (
                          <div key={key} className="flex flex-col gap-2">
                            <span className={`text-[0.55rem] font-black uppercase tracking-[0.12em] ${homeDarkMode ? 'text-slate-500' : 'text-[#1E293B]'}`}>
                              {t(`admin.addProductOverview.variantNames.${key}`, { defaultValue: formatFieldLabel(key) })}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {Array.isArray(val) ? (
                                val.map(v => (
                                  <span key={v} className={`text-[0.7rem] font-bold px-2.5 py-1 rounded-lg border shadow-sm ${homeDarkMode ? 'bg-slate-900 border-emerald-900/20 text-slate-200' : 'bg-white border-slate-200 text-[#1E293B]'
                                    }`}>
                                    {v}
                                  </span>
                                ))
                              ) : (
                                <span className={`text-[0.7rem] font-bold px-2.5 py-1 rounded-lg border shadow-sm ${homeDarkMode ? 'bg-slate-900 border-emerald-900/20 text-slate-200' : 'bg-white border-slate-200 text-[#1E293B]'
                                  }`}>
                                  {val}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}

                        {/* Variant Price & Stock Info */}
                        {(group.price || group.salePrice || group.stock) && (
                          <div className={`col-span-full mt-2 pt-3 border-t flex items-center gap-6 ${homeDarkMode ? 'border-emerald-900/20' : 'border-slate-100'}`}>
                            {group.salePrice ? (
                              <>
                                <div className="flex flex-col gap-0.5">
                                  <span className={`text-[0.5rem] font-black uppercase tracking-[0.1em] ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                    {t('admin.addProductOverview.sections.pricing.salePriceLabel')}
                                  </span>
                                  <span className="text-[0.85rem] font-black text-[#10B981]">
                                    {t('admin.products.item.price', { price: group.salePrice })}
                                  </span>
                                </div>
                                {group.price && (
                                  <div className="flex flex-col gap-0.5">
                                    <span className={`text-[0.5rem] font-black uppercase tracking-[0.1em] ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                      {t('admin.addProductOverview.sections.pricing.priceLabel')}
                                    </span>
                                    <span className={`text-[0.85rem] font-medium line-through ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                      {t('admin.products.item.price', { price: group.price })}
                                    </span>
                                  </div>
                                )}
                              </>
                            ) : group.price && (
                              <div className="flex flex-col gap-0.5">
                                <span className={`text-[0.5rem] font-black uppercase tracking-[0.1em] ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                  {t('admin.addProductOverview.sections.pricing.priceLabel')}
                                </span>
                                <span className="text-[0.85rem] font-black text-emerald-500">
                                  {t('admin.products.item.price', { price: group.price })}
                                </span>
                              </div>
                            )}
                            {group.stock && (
                              <div className="flex flex-col gap-0.5">
                                <span className={`text-[0.5rem] font-black uppercase tracking-[0.1em] ${homeDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                  {t('admin.addProductOverview.sections.pricing.stockLabel')}
                                </span>
                                <span className={`text-[0.85rem] font-black ${homeDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                  {group.stock} <span className="text-[0.6rem] font-bold opacity-50 uppercase ml-0.5">{t('admin.common.units')}</span>
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className={`rounded-[24px] p-4 sm:p-6 shadow-sm border ${homeDarkMode ? 'bg-[#0A1B19] border-emerald-900/20' : 'bg-white border-[#EAF1EE]'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${homeDarkMode ? 'bg-amber-950/30 text-amber-400' : 'bg-amber-50 text-amber-600'}`}>
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <p className={`text-[0.65rem] font-black uppercase tracking-[0.15em] ${homeDarkMode ? 'text-slate-300' : 'text-[#1E293B]'}`}>
                    {t('admin.products.item.specsTitle')}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className={`flex flex-col gap-1.5 pl-3 border-l-2 ${homeDarkMode ? 'border-emerald-900' : 'border-emerald-100'}`}>
                      <span className={`text-[0.52rem] font-black uppercase tracking-[0.14em] ${homeDarkMode ? 'text-slate-500' : 'text-[#9BA8A4]'}`}>
                        {t(`admin.addProductOverview.fields.${key}.label`, { defaultValue: key.replace(/([A-Z])/g, ' $1') })}
                      </span>
                      <span className={`text-[0.88rem] font-bold leading-tight ${homeDarkMode ? 'text-slate-200' : 'text-[#1E293B]'}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="h-6 md:hidden" />
          </div>
        </div>

        <div className={`shrink-0 border-t p-4 sm:p-6 md:px-10 backdrop-blur-md ${homeDarkMode ? 'bg-[#020617]/90 border-emerald-900/20' : 'bg-white/90 border-[#EAF1EE]'
          }`}>
          <div className="flex items-center gap-3 md:gap-4">
            <Motion.button
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onEdit(product)}
              className={`flex-1 h-13 flex items-center justify-center gap-3 rounded-2xl text-[0.88rem] font-black text-white shadow-xl transition ${homeDarkMode ? 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/10' : 'bg-slate-900 hover:bg-emerald-600 shadow-slate-900/10'
                }`}
            >
              <Pencil className="h-4 w-4" />
              {t('admin.products.item.editBtn')}
            </Motion.button>
            <Motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDeleteConfirm(true)}
              className={`h-13 w-13 flex items-center justify-center rounded-2xl transition ring-1 ${homeDarkMode ? 'bg-red-950/30 text-red-400 ring-red-900/20 hover:bg-red-500 hover:text-white' : 'bg-red-50 text-red-500 ring-red-100 hover:bg-red-500 hover:text-white'
                }`}
            >
              <Trash2 className="h-5 w-5" />
            </Motion.button>
          </div>
        </div>
      </div>

      <DeleteConfirmationSheet
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={() => {
          onRemove(product.id)
          setShowDeleteConfirm(false)
          toast.success(t('admin.products.item.deleteSuccess'))
          onClose() // Close the modal/page after deletion
        }}
        title={t('admin.products.item.deleteConfirmTitle')}
        description={t('admin.products.item.deleteConfirmDesc')}
        confirmText={t('admin.products.item.deleteConfirmBtn')}
        cancelText={t('admin.products.item.deleteCancelBtn')}
        isMobile={isMobile}
      />
    </Motion.div>
  )
}
