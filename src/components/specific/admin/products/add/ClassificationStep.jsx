import { Layers, Package, ChevronRight, Tag, Info, Trash2, Plus, Check, X } from 'lucide-react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { SectionCard } from './components/SectionCard'
import { Field } from './components/Field'
import { TagInput } from './components/TagInput'
import { inputCls, selectCls } from './utils'

export const ClassificationStep = ({
  formData,
  setFormData,
  industryCategories,
  nestedOptions,
  nonVariantFields,
  variantFields,
  expandedGroups,
  toggleGroup,
  expandAll,
  collapseAll,
  addVariantGroup,
  set,
  t,
  formatFieldLabel // Helper for variant labels
}) => {
  return (
    <SectionCard
      key="classification"
      title={t('admin.addProductOverview.sections.category.title')}
      subtitle={t('admin.addProductOverview.sections.category.subtitle')}
      icon={Layers}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={t('admin.addProductOverview.sections.category.categoryLabel')} icon={Package}>
          <div className="relative">
            <select
              value={formData.category}
              onChange={(e) => {
                const nextVal = e.target.value
                setFormData((prev) => ({
                  ...prev,
                  category: nextVal,
                  subCategory: '',
                  customCategory: '',
                  customSubCategory: '',
                  specs: {},
                }))
              }}
              className={selectCls}
            >
              <option value="">{t('admin.addProductOverview.sections.category.categoryPlaceholder')}</option>
              {industryCategories.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
              <option value="custom" className="text-[#1E293B]/80 font-bold">+ {t('admin.addProductOverview.sections.category.categoryLabel')}</option>
            </select>
            <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-[#1E293B]/50" />
          </div>
        </Field>

        <AnimatePresence>
          {(formData.category && formData.category !== 'custom') && (
            <Motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Field label={t('admin.addProductOverview.sections.category.subCategoryLabel')} icon={Tag}>
                <div className="relative">
                  <select
                    value={formData.subCategory}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, subCategory: e.target.value, customSubCategory: '' }))
                    }}
                    className={selectCls}
                  >
                    <option value="">{t('admin.addProductOverview.sections.category.subCategoryPlaceholder')}</option>
                    {nestedOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                    <option value="custom" className="text-[#1E293B]/80 font-bold">+ {t('admin.addProductOverview.sections.category.newSubCategory')}</option>
                  </select>
                  <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-[#1E293B]/50" />
                </div>
              </Field>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {formData.category === 'custom' && (
          <Motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-2">
            <Field label={t('admin.addProductOverview.sections.category.customCategoryLabel')}>
              <input
                type="text"
                value={formData.customCategory}
                onChange={(e) => set('customCategory', e.target.value)}
                placeholder={t('admin.addProductOverview.sections.category.customCategoryPlaceholder')}
                className={inputCls}
              />
            </Field>
          </Motion.div>
        )}

        {formData.subCategory === 'custom' && (
          <Motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-2">
            <Field label={t('admin.addProductOverview.sections.category.customSubCategoryLabel')}>
              <input
                type="text"
                value={formData.customSubCategory}
                onChange={(e) => set('customSubCategory', e.target.value)}
                placeholder={t('admin.addProductOverview.sections.category.customSubCategoryPlaceholder')}
                className={inputCls}
              />
            </Field>
          </Motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {nonVariantFields.length > 0 && (
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-3xl bg-emerald-50/50 p-4 md:p-6 ring-1 ring-emerald-100"
          >
            {nonVariantFields.map((field) => {
              const value = formData.specs[field.key] || ''
              const isCustomVal = field.type === 'select' && value && !field.options.includes(value)
              const selectValue = isCustomVal ? 'Custom' : value

              return (
                <Field key={field.key} label={field.label}>
                  {field.type === 'select' ? (
                    <div className="relative">
                      <select
                        value={selectValue}
                        onChange={(e) => {
                          const val = e.target.value
                          setFormData((prev) => ({
                            ...prev,
                            specs: { ...prev.specs, [field.key]: val === 'Custom' ? '' : val },
                          }))
                        }}
                        className={selectCls}
                      >
                        <option value="">{field.placeholder || t('admin.addProductOverview.fields.selectOption')}</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                        <option value="Custom">{t('admin.addProductOverview.fields.customValue')}</option>
                      </select>
                      <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-[#1E293B]/50" />

                      {selectValue === 'Custom' && (
                        <Motion.input
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          type="text"
                          autoFocus
                          className={`${inputCls} mt-2 border-emerald-200 bg-white shadow-sm ring-1 ring-emerald-50`}
                          placeholder={t('admin.addProductOverview.fields.customValuePlaceholder')}
                          onChange={(e) => setFormData(prev => ({ ...prev, specs: { ...prev.specs, [field.key]: e.target.value } }))}
                          value={value}
                        />
                      )}
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setFormData((prev) => ({ ...prev, specs: { ...prev.specs, [field.key]: e.target.value } }))}
                      placeholder={field.placeholder}
                      className={inputCls}
                    />
                  )}
                </Field>
              )
            })}
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Variant Groups Section */}
      {variantFields.length > 0 ? (
        <div className="space-y-6 pt-6">
          <div className="flex flex-col gap-4 border-b border-emerald-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="admin-variant-main-title text-[1rem] font-black uppercase tracking-[0.2em] text-emerald-900">Product Variations</h3>
              <p className="admin-variant-sub-title mt-1 text-[0.85rem] font-medium text-emerald-800/70 italic">Define multiple sets of sizes, colors, and materials</p>
            </div>
            <div className="flex items-center gap-2">
              {formData.variantGroups.length > 2 && (
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-50/80 p-1.5 ltr:mr-2 rtl:ml-2 border border-emerald-100/50">
                  <button
                    type="button"
                    onClick={expandAll}
                    className="px-4 py-1.5 text-[0.7rem] font-black text-emerald-700 hover:text-emerald-900 transition-colors"
                  >
                    Expand All
                  </button>
                  <div className="h-4 w-[1px] bg-emerald-200" />
                  <button
                    type="button"
                    onClick={collapseAll}
                    className="px-4 py-1.5 text-[0.7rem] font-black text-emerald-700 hover:text-emerald-900 transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {formData.variantGroups.map((group, groupIdx) => {
                const isExpanded = expandedGroups.includes(group.id)
                const sizeVal = group.attributes.size
                const colorVals = group.attributes.color || []
                const summaryText = [
                  sizeVal && `Size: ${sizeVal}`,
                  colorVals.length > 0 && `${colorVals.length} Color${colorVals.length > 1 ? 's' : ''}`
                ].filter(Boolean).join(' | ')

                return (
                  <Motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="admin-variant-card relative overflow-hidden rounded-[24px] border border-emerald-100 bg-white shadow-sm transition-all hover:shadow-md"
                  >
                    <div
                      className={`flex cursor-pointer items-center justify-between p-5 transition-colors ${isExpanded ? 'border-b border-emerald-100 bg-emerald-50/30' : 'hover:bg-emerald-50/10'}`}
                      onClick={() => toggleGroup(group.id)}
                    >
                      <div className="flex items-center gap-4">
                        <span className="admin-variant-badge flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-[0.8rem] font-black text-emerald-900 shadow-sm border border-emerald-200">
                          {groupIdx + 1}
                        </span>
                        {!isExpanded && summaryText && (
                          <Motion.p
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="admin-variant-summary-text text-[0.95rem] font-black text-emerald-900"
                          >
                            {summaryText}
                          </Motion.p>
                        )}
                        {!isExpanded && !summaryText && (
                          <p className="admin-variant-new-label text-[0.95rem] text-emerald-900/40 italic font-bold">New Variation Group</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        {formData.variantGroups.length > 1 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setFormData(prev => ({
                                ...prev,
                                variantGroups: prev.variantGroups.filter((_, i) => i !== groupIdx)
                              }))
                            }}
                            className="admin-variant-delete-btn rounded-xl p-2.5 text-red-500/80 transition-colors hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="h-6 w-6" />
                          </button>
                        )}
                        <div className={`admin-variant-chevron-wrapper flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${isExpanded ? 'rotate-180 bg-emerald-600 text-white shadow-lg' : 'bg-emerald-100 text-emerald-900 font-bold'}`}>
                          <ChevronRight className="h-6 w-6 rotate-90" />
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <Motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
                            {variantFields.map((field) => {
                              const isMulti = ['color', 'material', 'fabric', 'strapMaterial', 'steelGrade'].includes(field.key)
                              const value = group.attributes[field.key] || (isMulti ? [] : '')

                              return (
                                <Field key={field.key} label={field.label}>
                                  {isMulti ? (
                                    <TagInput
                                      value={value}
                                      isColor={field.key === 'color'}
                                      onChange={(newVal) => {
                                        const newGroups = [...formData.variantGroups]
                                        newGroups[groupIdx].attributes[field.key] = newVal
                                        setFormData(prev => ({ ...prev, variantGroups: newGroups }))
                                      }}
                                      placeholder={field.placeholder}
                                    />
                                  ) : (
                                    <div className="relative">
                                      {field.type === 'select' ? (
                                        <>
                                          <select
                                            value={value}
                                            onChange={(e) => {
                                              const newGroups = [...formData.variantGroups]
                                              newGroups[groupIdx].attributes[field.key] = e.target.value
                                              setFormData(prev => ({ ...prev, variantGroups: newGroups }))
                                            }}
                                            className={selectCls}
                                          >
                                            <option value="">{field.placeholder || t('admin.addProductOverview.fields.selectOption')}</option>
                                            {field.options.map((opt) => (
                                              <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                          </select>
                                          <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-emerald-900/40" />
                                        </>
                                      ) : (
                                        <input
                                          type="text"
                                          value={value}
                                          onChange={(e) => {
                                            const newGroups = [...formData.variantGroups]
                                            newGroups[groupIdx].attributes[field.key] = e.target.value
                                            setFormData(prev => ({ ...prev, variantGroups: newGroups }))
                                          }}
                                          placeholder={field.placeholder}
                                          className={inputCls}
                                        />
                                      )}
                                    </div>
                                  )}
                                </Field>
                              )
                            })}
                          </div>
                          <div className="flex justify-end px-5 pb-5">
                            <button
                              type="button"
                              onClick={() => toggleGroup(group.id)}
                              className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-[0.8rem] font-bold text-white shadow-sm transition-all hover:bg-emerald-600"
                            >
                              <Check className="h-4 w-4" />
                              {t('admin.addProductOverview.sections.variants.saveVariant')}
                            </button>
                          </div>
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </Motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={addVariantGroup}
            className="admin-add-variant-group-btn mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 px-6 py-3.5 text-[0.9rem] font-bold text-emerald-700 transition-all hover:border-emerald-400 hover:bg-emerald-100 hover:text-emerald-900"
          >
            <Plus className="h-5 w-5" />
            {t('admin.addProductOverview.sections.variants.addGroup')}
          </button>
        </div>
      ) : (
        <div className="admin-no-variants-message rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 md:p-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Info className="h-7 w-7" />
            </div>
            <p className="text-[0.9rem] md:text-[1rem] font-bold text-emerald-900">
              {t('admin.addProductOverview.sections.variants.noVariantFields')}
            </p>
            <p className="text-[0.8rem] md:text-[0.85rem] text-emerald-800/70">
              {t('admin.addProductOverview.sections.variants.noVariantFieldsSubtitle')}
            </p>
          </div>
        </div>
      )}

      {/* Custom Fields Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">{t('admin.addProductOverview.sections.category.customFieldsTitle')}</h3>
          <button
            type="button"
            onClick={() => setFormData(prev => ({
              ...prev,
              customFields: [...prev.customFields, { id: Date.now(), label: '', value: '' }]
            }))}
            className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-black text-[#1E293B]/80 transition-all hover:bg-emerald-100"
          >
            <Plus className="h-3 w-3" />
            {t('admin.addProductOverview.sections.category.addFieldBtn')}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <AnimatePresence>
            {formData.customFields.map((field, idx) => (
              <Motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={field.id}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl bg-emerald-50 p-3 transition-all hover:bg-emerald-50/30"
              >
                <input
                  type="text"
                  value={field.label}
                  onChange={(e) => {
                    const newFields = [...formData.customFields]
                    newFields[idx].label = e.target.value
                    setFormData(prev => ({ ...prev, customFields: newFields }))
                  }}
                  placeholder={t('admin.addProductOverview.sections.category.fieldLabelPlaceholder')}
                  className="w-full sm:w-1/3 bg-transparent px-3 py-1 text-[0.88rem] font-bold text-[#1E293B]/90 outline-none placeholder:text-[#1E293B]/40"
                />
                <div className="hidden sm:block h-6 w-[2px] bg-emerald-200" />
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => {
                    const newFields = [...formData.customFields]
                    newFields[idx].value = e.target.value
                    setFormData(prev => ({ ...prev, customFields: newFields }))
                  }}
                  placeholder={t('admin.addProductOverview.sections.category.fieldValuePlaceholder')}
                  className="flex-1 bg-transparent px-3 py-1 text-[0.88rem] text-[#1E293B]/80 outline-none placeholder:text-[#1E293B]/40"
                />
                <button
                  onClick={() => setFormData(prev => ({ ...prev, customFields: prev.customFields.filter((_, i) => i !== idx) }))}
                  className="self-end sm:self-center h-8 w-8 items-center justify-center rounded-xl bg-white text-[#1E293B]/40 transition-all hover:text-red-500 flex shadow-sm sm:opacity-0 group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </Motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </SectionCard>
  )
}
