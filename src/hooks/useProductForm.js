import { useState, useCallback } from 'react'

export function useProductForm(initialData = null) {
  // Common Form States
  const [activeTab, setActiveTab] = useState('basic')
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    category: initialData?.category || '',
    subcategory: initialData?.subcategory || '',
    price: initialData?.price?.toString() || '',
    comparePrice: initialData?.comparePrice?.toString() || '',
    currency: initialData?.currency || 'USD',
    description: initialData?.description || '',
    stock: initialData?.stock?.toString() || '',
    sku: initialData?.sku || '',
    supplier: initialData?.supplier || '',
  })
  const [dynamicValues, setDynamicValues] = useState(initialData?.dynamicValues || {})
  const [selectedRegions, setSelectedRegions] = useState(initialData?.regions || [])
  const [gallery, setGallery] = useState(initialData?.gallery || [])
  const [viewingMedia, setViewingMedia] = useState(null)
  
  // Validation
  const [errors, setErrors] = useState({})

  const validateBasicDetails = useCallback((t) => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = t('admin.common.required')
    if (!formData.category) newErrors.category = t('admin.common.required')
    if (!formData.price || isNaN(formData.price)) newErrors.price = t('admin.common.required')
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  return {
    activeTab, setActiveTab,
    formData, setFormData,
    dynamicValues, setDynamicValues,
    selectedRegions, setSelectedRegions,
    gallery, setGallery,
    viewingMedia, setViewingMedia,
    errors, setErrors,
    validateBasicDetails
  }
}
