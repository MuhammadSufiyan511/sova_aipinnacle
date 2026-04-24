import { Info, Tag, FileText, Star, Layers, Check } from 'lucide-react'
import { SectionCard } from './components/SectionCard'
import { Field } from './components/Field'
import { inputCls } from './utils'

export const BasicsStep = ({ formData, set, t }) => {
  return (
    <SectionCard
      key="basics"
      title={t('admin.addProductOverview.sections.basics.title')}
      subtitle={t('admin.addProductOverview.sections.basics.subtitle')}
      icon={Info}
    >
      <Field label={t('admin.addProductOverview.sections.basics.nameLabel')} icon={Tag}>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => set('name', e.target.value)}
          placeholder={t('admin.addProductOverview.sections.basics.namePlaceholder')}
          className={inputCls}
        />
      </Field>
      <Field label={t('admin.addProductOverview.sections.basics.descriptionLabel')} icon={FileText}>
        <textarea
          rows={4}
          value={formData.description}
          onChange={(e) => set('description', e.target.value)}
          placeholder={t('admin.addProductOverview.sections.basics.descriptionPlaceholder')}
          className={`${inputCls} resize-none`}
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t('admin.addProductOverview.sections.basics.brandLabel')} icon={Star}>
          <input
            type="text"
            value={formData.brand}
            onChange={(e) => set('brand', e.target.value)}
            placeholder={t('admin.addProductOverview.sections.basics.brandPlaceholder')}
            className={inputCls}
          />
        </Field>
        <Field label={t('admin.addProductOverview.sections.summary.industryLabel', { defaultValue: 'Business Category' })} icon={Layers}>
          <div className="flex h-[52px] items-center gap-3 rounded-2xl bg-emerald-50/50 px-5 ring-1 ring-emerald-100/50 admin-business-category-box transition-colors">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-[#1E293B]/80 admin-business-category-icon transition-colors">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span className="text-[0.9rem] font-bold capitalize text-[#1E293B]/90 truncate admin-business-category-text transition-colors">
              {t(`onboarding.business.categories.${formData.industry}.label`, formData.industry.replace('-', ' '))}
            </span>
          </div>
        </Field>
      </div>
    </SectionCard>
  )
}
