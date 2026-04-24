import { useMemo, useRef, useState, useEffect, memo } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useApp } from '../../../context/AppProvider'
import { ROUTES } from '../../../utils/routes'

// Modular Components
import { BasicsStep } from './products/add/BasicsStep'
import { ClassificationStep } from './products/add/ClassificationStep'
import { PricingStep } from './products/add/PricingStep'
import { MediaSidebar } from './products/add/MediaSidebar'
import { WizardNavigation } from './products/add/WizardNavigation'
import { STEPS, buildCategoryConfig, VARIANT_KEYS } from './products/add/utils'

export const AddProductOverview = memo(function AddProductOverview({ isOnboarding = false, onSave, onCancel, fixedIndustry: fixedIndustryProp }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id } = useParams()
  const { businessProfile, products, addProduct, updateProduct } = useApp()
  const fileInputRef = useRef(null)

  const initialProduct = useMemo(() => {
    if (!id) return null
    return products.find((p) => String(p.id) === String(id)) || null
  }, [id, products])

  const isEditMode = Boolean(initialProduct)
  const categoryConfig = useMemo(() => buildCategoryConfig(t), [t])
  const [currentStep, setCurrentStep] = useState('basics')
  const fixedIndustry = fixedIndustryProp || businessProfile?.type || 'clothing'

  const [formData, setFormData] = useState({
    name: initialProduct?.name || '',
    description: initialProduct?.description || '',
    industry: initialProduct?.industry || fixedIndustry,
    category: initialProduct?.categoryAt || '',
    subCategory: initialProduct?.subCategoryAt || '',
    customCategory: initialProduct?.customCategory || '',
    customSubCategory: initialProduct?.customSubCategory || '',
    customFields: initialProduct?.customFields || [],
    price: initialProduct?.price || '',
    salePrice: initialProduct?.salePrice || '',
    stock: initialProduct?.stock || '',
    minStock: initialProduct?.minStock || '',
    sku: initialProduct?.sku || '',
    minOrder: initialProduct?.minOrder || '1',
    discount: initialProduct?.discount || '0%',
    brand: initialProduct?.brand || '',
    specs: initialProduct?.specs || {},
    variantGroups: initialProduct?.variantGroups || [{
      id: Math.random().toString(36).slice(2, 11),
      attributes: {}
    }],
    gallery: initialProduct?.gallery || (initialProduct?.imagePreview ? [{
      id: 'legacy',
      preview: initialProduct.imagePreview,
      type: initialProduct.mediaType || 'image',
      name: initialProduct.mediaName || 'Primary',
      isPrimary: true,
    }] : []),
  })

  const [expandedGroups, setExpandedGroups] = useState([formData.variantGroups[0]?.id].filter(Boolean))

  useEffect(() => {
    if (initialProduct) {
      setFormData({
        name: initialProduct.name || '',
        description: initialProduct.description || '',
        industry: initialProduct.industry || fixedIndustry,
        category: initialProduct.categoryAt || '',
        subCategory: initialProduct.subCategoryAt || '',
        customCategory: initialProduct.customCategory || '',
        customSubCategory: initialProduct.customSubCategory || '',
        customFields: initialProduct.customFields || [],
        price: initialProduct.price || '',
        salePrice: initialProduct.salePrice || '',
        stock: initialProduct.stock || '',
        minStock: initialProduct.minStock || '',
        sku: initialProduct.sku || '',
        minOrder: initialProduct.minOrder || '1',
        discount: initialProduct.discount || '0%',
        brand: initialProduct.brand || '',
        specs: initialProduct.specs || {},
        variantGroups: initialProduct.variantGroups || [{
          id: Math.random().toString(36).slice(2, 11),
          attributes: {}
        }],
        gallery: initialProduct.gallery || (initialProduct.imagePreview ? [{
          id: 'legacy',
          preview: initialProduct.imagePreview,
          type: initialProduct.mediaType || 'image',
          name: initialProduct.mediaName || 'Primary',
          isPrimary: true,
        }] : []),
      })
    }
  }, [initialProduct, fixedIndustry])

  const currentIndustryConfig = categoryConfig[formData.industry] || categoryConfig['clothing']
  const industryCategories = useMemo(() => currentIndustryConfig?.subcategories || [], [currentIndustryConfig])
  const selectedCategoryItem = useMemo(() => industryCategories.find(c => c.value === formData.category), [industryCategories, formData.category])
  const nestedOptions = useMemo(() => selectedCategoryItem?.nested || [], [selectedCategoryItem])
  const categorySpecs = useMemo(() => {
    if (!formData.category || formData.category === 'custom' || !currentIndustryConfig) return []
    return currentIndustryConfig.dynamicFields[formData.category] || currentIndustryConfig.dynamicFields['custom'] || []
  }, [formData.category, currentIndustryConfig])

  const currentDynamicFields = useMemo(() => categorySpecs.map((def) => ({
    ...def,
    label: t(`admin.addProductOverview.fields.${def.key}.label`, def.key.charAt(0).toUpperCase() + def.key.slice(1).replace(/([A-Z])/g, ' $1')),
    placeholder: t(`admin.addProductOverview.fields.${def.key}.placeholder`, `Enter ${def.key}`),
  })), [categorySpecs, t])

  const variantFields = useMemo(() => currentDynamicFields.filter(f => VARIANT_KEYS.includes(f.key)), [currentDynamicFields])
  const nonVariantFields = useMemo(() => currentDynamicFields.filter(f => !VARIANT_KEYS.includes(f.key)), [currentDynamicFields])

  const set = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }))

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files || [])
    if (!files.length) return
    const allValid = files.every((f) => f.type.startsWith('image/') || f.type.startsWith('video/') || f.type === 'application/pdf')
    if (!allValid) { toast.error(t('onboarding.products.modal.invalidMediaType')); e.target.value = ''; return }
    const newMedia = files.map((file) => ({
      id: Math.random().toString(36).slice(2, 11),
      preview: URL.createObjectURL(file),
      type: file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : 'file',
      name: file.name,
      isPrimary: formData.gallery.length === 0,
    }))
    setFormData((prev) => ({ ...prev, gallery: [...prev.gallery, ...newMedia] }))
    e.target.value = ''
  }

  const setPrimaryMedia = (id) => setFormData((prev) => ({
    ...prev,
    gallery: prev.gallery.map((item) => ({ ...item, isPrimary: item.id === id })),
  }))

  const removeMedia = (id) => setFormData((prev) => {
    const next = prev.gallery.filter((item) => item.id !== id)
    if (next.length && !next.some((i) => i.isPrimary)) next[0] = { ...next[0], isPrimary: true }
    return { ...prev, gallery: next }
  })

  const handleSubmit = () => {
    if (!formData.name.trim()) { setCurrentStep('basics'); toast.error(t('admin.addProductOverview.validation.nameRequired')); return }
    if (!formData.description.trim()) { setCurrentStep('basics'); toast.error(t('admin.addProductOverview.validation.descriptionRequired')); return }
    if (formData.gallery.length === 0) { setCurrentStep('basics'); toast.error(t('admin.addProductOverview.validation.mediaRequired')); return }
    if (!formData.category) { setCurrentStep('classification'); toast.error(t('admin.addProductOverview.validation.categoryRequired')); return }
    if (nestedOptions.length > 0 && !formData.subCategory) { setCurrentStep('classification'); toast.error(t('admin.addProductOverview.validation.subCategoryRequired')); return }
    if (!formData.price || isNaN(parseFloat(formData.price)) || parseFloat(formData.price) < 0) { setCurrentStep('pricing'); toast.error(t('admin.addProductOverview.validation.priceRequired')); return }
    if (formData.stock === '' || formData.stock === null || formData.stock === undefined) { setCurrentStep('pricing'); toast.error(t('admin.addProductOverview.validation.stockRequired')); return }

    const finalSpecs = { ...formData.specs }
    formData.customFields.forEach(field => {
      if (field.label.trim() && field.value.trim()) finalSpecs[field.label] = field.value
    })

    const primary = formData.gallery.find((i) => i.isPrimary) || formData.gallery[0]
    const payload = {
      ...formData,
      id: initialProduct?.id || Date.now().toString(),
      industry: formData.industry,
      categoryAt: formData.category,
      subCategoryAt: formData.subCategory,
      category: formData.industry,
      subCategory: formData.category === 'custom' ? formData.customCategory : `${formData.category}${formData.subCategory && formData.subCategory !== 'custom' ? ` - ${formData.subCategory}` : ''}`,
      variantGroups: formData.variantGroups,
      specs: finalSpecs,
      imagePreview: primary?.preview || null,
      mediaType: primary?.type || null,
      mediaName: primary?.name || '',
    }

    if (isEditMode) {
      updateProduct(payload); toast.success(t('admin.addProductOverview.validation.updateSuccess'))
    } else {
      addProduct(payload); toast.success(t('admin.addProductOverview.validation.createSuccess'))
    }

    if (isOnboarding && onSave) onSave(payload)
    else navigate(ROUTES.adminProducts)
  }

  const handleNextStep = () => {
    if (currentStep === 'basics') {
      if (!formData.name.trim()) { toast.error(t('admin.addProductOverview.validation.nameRequired')); return }
      if (!formData.description.trim()) { toast.error(t('admin.addProductOverview.validation.descriptionRequired')); return }
      if (formData.gallery.length === 0) { toast.error(t('admin.addProductOverview.validation.mediaRequired')); return }
    }
    if (currentStep === 'classification') {
      if (!formData.category) { toast.error(t('admin.addProductOverview.validation.categoryRequired')); return }
      if (nestedOptions.length > 0 && !formData.subCategory) { toast.error(t('admin.addProductOverview.validation.subCategoryRequired')); return }
    }
    setCurrentStep(STEPS[currentStepIndex + 1].id)
  }

  const currentStepIndex = STEPS.findIndex(s => s.id === currentStep)
  const isLastStep = currentStepIndex === STEPS.length - 1

  return (
    <div className="admin-product-wizard min-h-screen bg-white md:bg-emerald-50/40">
      <main className="mx-auto max-w-[1440px] px-4 py-6 md:px-8 md:py-10">
        <Motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => isOnboarding && onCancel ? onCancel() : navigate(ROUTES.adminProducts)}
          className="group mb-6 md:mb-8 flex items-center gap-2 text-[0.78rem] md:text-[0.82rem] font-bold text-[#1E293B]/80 transition-all hover:text-[#1E293B]/80"
        >
          <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-xl bg-white text-[#1E293B] shadow-sm ring-1 ring-emerald-100 transition-all group-hover:bg-emerald-50 group-hover:ring-emerald-200">
            <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </div>
          {t('admin.addProductOverview.backToCatalog')}
        </Motion.button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-xl font-black tracking-tight text-[#1E293B] md:text-3xl">
                  {isEditMode ? formData.name || t('admin.addProductOverview.titleEdit') : t('admin.addProductOverview.titleAdd')}
                </h1>
                <p className="mt-1 text-[0.82rem] md:text-[0.9rem] font-medium text-[#1E293B]/80">
                  {isEditMode ? t('admin.addProductOverview.subtitleEdit') : t('admin.addProductOverview.subtitleAdd')}
                </p>
              </div>
              <WizardNavigation steps={STEPS} currentStep={currentStep} setCurrentStep={setCurrentStep} t={t} />
            </div>

            <AnimatePresence mode="wait">
              {currentStep === 'basics' && <BasicsStep key="basics" formData={formData} set={set} t={t} />}
              {currentStep === 'classification' && (
                <ClassificationStep
                  key="classification"
                  formData={formData}
                  setFormData={setFormData}
                  industryCategories={industryCategories}
                  nestedOptions={nestedOptions}
                  nonVariantFields={nonVariantFields}
                  variantFields={variantFields}
                  expandedGroups={expandedGroups}
                  toggleGroup={(gid) => setExpandedGroups(prev => prev.includes(gid) ? prev.filter(id => id !== gid) : [...prev, gid])}
                  expandAll={() => setExpandedGroups(formData.variantGroups.map(g => g.id))}
                  collapseAll={() => setExpandedGroups([])}
                  addVariantGroup={() => {
                    const newId = Math.random().toString(36).slice(2, 11)
                    setFormData(prev => ({ ...prev, variantGroups: [...prev.variantGroups, { id: newId, attributes: {} }] }))
                    setExpandedGroups(prev => [...prev, newId])
                  }}
                  set={set}
                  t={t}
                />
              )}
              {currentStep === 'pricing' && <PricingStep key="pricing" formData={formData} set={set} t={t} />}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <button
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStep(STEPS[currentStepIndex - 1].id)}
                className="admin-cta-secondary flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-4 font-bold text-[#1E293B]/50 transition-all hover:text-[#1E293B]/80 disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" /> {t('common.previous')}
              </button>
              <div className="flex w-full sm:w-auto gap-4">
                {!isLastStep ? (
                  <button onClick={handleNextStep} className="admin-cta-premium flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-10 py-4 font-bold text-white shadow-xl transition-all sm:flex-none">
                    {t('common.next')} <ChevronRight className="h-5 w-5" />
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="admin-cta-premium flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-10 py-4 font-bold text-white shadow-xl shadow-emerald-500/20 transition-all sm:flex-none">
                    <Check className="h-5 w-5" />
                    {isEditMode ? t('admin.addProductOverview.sections.actions.submitEdit') : t('admin.addProductOverview.sections.actions.submitAdd')}
                  </button>
                )}
              </div>
            </div>
          </div>

          <MediaSidebar
            formData={formData}
            fileInputRef={fileInputRef}
            handleMediaUpload={handleMediaUpload}
            removeMedia={removeMedia}
            setPrimaryMedia={setPrimaryMedia}
            t={t}
          />
        </div>
      </main>
    </div>
  )
})
