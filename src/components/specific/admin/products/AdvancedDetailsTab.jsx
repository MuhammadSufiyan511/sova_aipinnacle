import { memo } from 'react'
import { DollarSign, Tag, Info, Monitor, Smartphone, Truck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { useProductCategories } from '../../../../hooks/useProductCategories'
import { ImageUploadZone } from './ImageUploadZone'

export const AdvancedDetailsTab = memo(function AdvancedDetailsTab({
  formData,
  setFormData,
  errors,
  setErrors,
  dynamicValues,
  setDynamicValues,
  gallery,
  setGallery,
  setViewingMedia,
}) {
  const { t } = useTranslation()
  const CATEGORIES = useProductCategories()

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }))
  }

  const currentCategoryConfig = formData.category ? CATEGORIES[formData.category] : null
  const dynamicFields = currentCategoryConfig?.dynamicFields || {}
  const specificSubkey = formData.subcategory && dynamicFields[formData.subcategory] ? formData.subcategory : 'custom'
  const activeFields = dynamicFields[specificSubkey] || []

  return (
    <Motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      {/* Pricing Module */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-[0.96rem] font-bold text-[#173247]">{t('admin.addProductOverview.advanced.pricing')}</h3>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-500"><DollarSign className="h-4 w-4" /></span>
          </div>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#648E89]">{t('admin.addProductOverview.advanced.priceLabel')}</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[0.85rem] font-bold text-[#86A29B]">{formData.currency}</span>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className={`h-11 w-full rounded-xl border pl-12 pr-4 text-[0.88rem] font-bold text-[#173247] outline-none transition ${
                    errors.price ? 'border-red-300 focus:border-red-500 bg-red-50/50' : 'border-[#DDEFE7] focus:border-emerald-500 bg-[#F8FAFC]'
                  }`}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#648E89]">{t('admin.addProductOverview.advanced.compareLabel')}</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[0.85rem] font-bold text-[#86A29B]">{formData.currency}</span>
                <input
                  type="number"
                  value={formData.comparePrice}
                  onChange={(e) => handleInputChange('comparePrice', e.target.value)}
                  className="h-11 w-full rounded-xl border border-[#DDEFE7] bg-[#F8FAFC] pl-12 pr-4 text-[0.88rem] font-bold text-[#1E293B] outline-none transition focus:border-cyan-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-[0.96rem] font-bold text-[#173247]">{t('admin.addProductOverview.advanced.inventory')}</h3>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-cyan-500"><Tag className="h-4 w-4" /></span>
          </div>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#648E89]">{t('admin.addProductOverview.advanced.stockLabel')}</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => handleInputChange('stock', e.target.value)}
                className="h-11 w-full rounded-xl border border-[#DDEFE7] bg-[#F8FAFC] px-4 text-[0.88rem] font-bold text-[#173247] outline-none transition focus:border-cyan-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#648E89]">{t('admin.addProductOverview.advanced.supplierLabel')}</label>
              <div className="relative">
                 <input
                  type="text"
                  value={formData.supplier}
                  onChange={(e) => handleInputChange('supplier', e.target.value)}
                  className="h-11 w-full rounded-xl border border-[#DDEFE7] bg-[#F8FAFC] px-4 text-[0.88rem] font-bold text-[#173247] outline-none transition focus:border-cyan-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {formData.category && activeFields.length > 0 && (
         <div className="rounded-[24px] border border-[#DDEFE7] bg-[#F8FAFC] p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <Monitor className="h-4.5 w-4.5 text-cyan-500" />
            <h3 className="font-display text-[0.96rem] font-bold text-[#173247]">{t('admin.addProductOverview.advanced.dynamicTitle')}</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
             {activeFields.map((field) => (
                <div key={field.key} className="space-y-1.5">
                  <label className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#648E89]">{t(`admin.addProductOverview.advanced.fields.${field.key}`, field.key)}</label>
                  {field.type === 'select' ? (
                     <select
                        value={dynamicValues[field.key] || ''}
                        onChange={(e) => setDynamicValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="h-11 w-full rounded-xl border border-[#DDEFE7] bg-white px-3.5 text-[0.82rem] font-medium text-[#173247] outline-none transition focus:border-cyan-500"
                     >
                        <option value="">{t('admin.addProductOverview.advanced.selectValue')}</option>
                        {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                     </select>
                  ) : (
                     <input
                        type="text"
                        placeholder={field.placeholder || ''}
                        value={dynamicValues[field.key] || ''}
                        onChange={(e) => setDynamicValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="h-11 w-full rounded-xl border border-[#DDEFE7] bg-white px-3.5 text-[0.82rem] text-[#173247] outline-none transition focus:border-cyan-500"
                     />
                  )}
                </div>
             ))}
          </div>
         </div>
      )}

      {/* Media Upload */}
      <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm md:p-6">
        <h3 className="font-display text-[0.96rem] font-bold text-[#173247] mb-5">{t('admin.addProductOverview.advanced.mediaGallery')}</h3>
        <ImageUploadZone t={t} gallery={gallery} setGallery={setGallery} setViewingMedia={setViewingMedia} idPrefix="upload" />
      </div>
    </Motion.div>
  )
})
