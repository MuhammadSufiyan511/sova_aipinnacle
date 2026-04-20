import { memo } from 'react'
import { Info, Tag, Bookmark, Layers } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { useProductCategories } from '../../../../hooks/useProductCategories'

export const BasicDetailsTab = memo(function BasicDetailsTab({
  formData,
  setFormData,
  errors,
  setErrors,
  dynamicValues,
  setDynamicValues,
}) {
  const { t } = useTranslation()
  const CATEGORIES = useProductCategories()

  const currentCategoryConfig = formData.category ? CATEGORIES[formData.category] : null
  const subcategories = currentCategoryConfig?.subcategories || []
  
  const currentSubcategory = subcategories.find(sub => sub.value === formData.subcategory)
  const nestedOptions = currentSubcategory?.nested || []

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }))
  }

  const handleCategoryChange = (e) => {
    handleInputChange('category', e.target.value)
    handleInputChange('subcategory', '')
    handleInputChange('nestedCategory', '')
    setDynamicValues({})
  }

  const handleSubcategoryChange = (e) => {
    handleInputChange('subcategory', e.target.value)
    handleInputChange('nestedCategory', '')
    setDynamicValues({})
  }

  return (
    <Motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      {/* Name & SKU */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-[0.76rem] font-bold text-[#173247]">{t('admin.addProductOverview.basic.nameLabel')}</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`admin-input-field h-12 w-full rounded-2xl border bg-white px-4 text-[0.88rem] text-[#173247] shadow-sm outline-none transition focus:bg-white ${
              errors.name ? 'border-red-300 focus:border-red-500' : 'border-[#DDEFE7] focus:border-emerald-500'
            }`}
          />
          <AnimatePresence>
            {errors.name && (
              <Motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[0.7rem] text-red-500">{errors.name}</Motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <label className="text-[0.76rem] font-bold text-[#173247]">{t('admin.addProductOverview.basic.skuLabel')} <span className="text-[#86A29B] font-normal ml-1">({t('admin.addProductOverview.advanced.optional')})</span></label>
          <div className="relative">
             <input
              type="text"
              value={formData.sku}
              onChange={(e) => handleInputChange('sku', e.target.value)}
              className="admin-input-field h-12 w-full rounded-2xl border border-[#DDEFE7] bg-white pl-10 pr-4 text-[0.88rem] text-[#173247] shadow-sm outline-none transition focus:border-emerald-500 focus:bg-white uppercase"
            />
            <Bookmark className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#86A29B]" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-[0.76rem] font-bold text-[#173247]">{t('admin.addProductOverview.basic.descLabel')}</label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={4}
          className="admin-input-field w-full rounded-2xl border border-[#DDEFE7] bg-white p-4 text-[0.88rem] text-[#173247] shadow-sm outline-none transition focus:border-emerald-500 focus:bg-white resize-none"
        />
      </div>

      {/* Category Dropdowns */}
      <div className="rounded-[24px] border border-[#DDEFE7] bg-[#F8FAFC] p-5 md:p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <Layers className="h-4.5 w-4.5 text-emerald-500" />
          <h3 className="font-display text-[0.96rem] font-bold text-[#173247]">{t('admin.addProductOverview.basic.categorization')}</h3>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <label className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#648E89]">{t('admin.addProductOverview.basic.catLabel')}</label>
            <select
              value={formData.category}
              onChange={handleCategoryChange}
              className={`h-11 w-full rounded-xl border bg-white px-3.5 text-[0.82rem] font-medium text-[#173247] outline-none transition focus:border-emerald-500 ${
                errors.category ? 'border-red-300' : 'border-[#DDEFE7]'
              }`}
            >
              <option value="">{t('admin.addProductOverview.basic.selectCat')}</option>
              {Object.entries(CATEGORIES).map(([key, config]) => (
                <option key={key} value={key}>{config.label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#648E89]">{t('admin.addProductOverview.basic.subcatLabel')}</label>
            <select
              value={formData.subcategory}
              onChange={handleSubcategoryChange}
              disabled={!subcategories.length}
              className="h-11 w-full rounded-xl border border-[#DDEFE7] bg-white px-3.5 text-[0.82rem] font-medium text-[#173247] outline-none transition focus:border-emerald-500 disabled:opacity-50"
            >
              <option value="">{t('admin.addProductOverview.basic.selectSub')}</option>
              {subcategories.map((sub) => (
                <option key={sub.value} value={sub.value}>{sub.label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#648E89]">{t('admin.addProductOverview.basic.nestedCatLabel', 'Product Type')}</label>
            <select
              value={formData.nestedCategory || ''}
              onChange={(e) => handleInputChange('nestedCategory', e.target.value)}
              disabled={!nestedOptions.length}
              className="h-11 w-full rounded-xl border border-[#DDEFE7] bg-white px-3.5 text-[0.82rem] font-medium text-[#173247] outline-none transition focus:border-emerald-500 disabled:opacity-50"
            >
              <option value="">{t('admin.addProductOverview.basic.selectNested', 'Select Type...')}</option>
              {nestedOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Motion.div>
  )
})
