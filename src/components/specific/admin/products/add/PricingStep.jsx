import { DollarSign, Tag, Package, Info } from 'lucide-react'
import { SectionCard } from './components/SectionCard'
import { Field } from './components/Field'
import { inputCls } from './utils'

export const PricingStep = ({ formData, set, t }) => {
  return (
    <SectionCard
      key="pricing"
      title={t('admin.addProductOverview.sections.pricing.title')}
      subtitle={t('admin.addProductOverview.sections.pricing.subtitle')}
      icon={DollarSign}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Field label={t('admin.addProductOverview.sections.pricing.priceLabel')} icon={DollarSign}>
          <div className="relative">
            <span className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 font-bold text-[#1E293B]/40">{t('admin.common.currencySymbol', '$')}</span>
            <input type="number" value={formData.price} onChange={(e) => set('price', e.target.value)} className={`${inputCls} ltr:pl-8 rtl:pr-8 rtl:text-left`} placeholder="0.00" />
          </div>
        </Field>
        <Field label={t('admin.addProductOverview.sections.pricing.salePriceLabel')} icon={Tag}>
          <div className="relative">
            <span className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 font-bold text-[#1E293B]/40">{t('admin.common.currencySymbol', '$')}</span>
            <input type="number" value={formData.salePrice} onChange={(e) => set('salePrice', e.target.value)} className={`${inputCls} ltr:pl-8 rtl:pr-8 rtl:text-left`} placeholder="0.00" />
          </div>
        </Field>
        <Field label={t('admin.addProductOverview.sections.pricing.stockLabel')} icon={Package}>
          <input type="number" value={formData.stock} onChange={(e) => set('stock', e.target.value)} className={`${inputCls} rtl:text-left`} placeholder={t('admin.addProductOverview.sections.pricing.stockPlaceholder')} />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2">
        <Field label={t('admin.addProductOverview.sections.pricing.skuLabel')} icon={Info} helpText={t('admin.addProductOverview.sections.pricing.skuHelp')}>
          <input type="text" value={formData.sku} onChange={(e) => set('sku', e.target.value)} className={inputCls} placeholder={t('admin.addProductOverview.sections.pricing.skuPlaceholder')} />
        </Field>
        <Field label={t('admin.addProductOverview.sections.pricing.minOrderLabel')} icon={Package}>
          <input type="number" value={formData.minOrder} onChange={(e) => set('minOrder', e.target.value)} className={`${inputCls} rtl:text-left`} placeholder="1" />
        </Field>
      </div>
    </SectionCard>
  )
}
