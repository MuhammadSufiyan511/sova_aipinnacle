import { DollarSign, Tag, Package, Info } from 'lucide-react'
import { SectionCard } from './components/SectionCard'
import { Field } from './components/Field'
import { inputCls } from './utils'

export const PricingStep = ({ formData, set, t }) => {
  const validVariantGroups = formData.variantGroups?.filter(g => Object.keys(g.attributes || {}).length > 0) || []
  const hasVariants = validVariantGroups.length > 0

  const totalStock = validVariantGroups.reduce((acc, g) => acc + (parseInt(g.stock) || 0), 0)
  const prices = validVariantGroups.map(g => parseFloat(g.price)).filter(p => !isNaN(p))
  const minPrice = prices.length > 0 ? Math.min(...prices) : ''

  const salePrices = validVariantGroups.map(g => parseFloat(g.salePrice)).filter(p => !isNaN(p))
  const minSalePrice = salePrices.length > 0 ? Math.min(...salePrices) : ''

  const displayStock = hasVariants ? totalStock : formData.stock
  const displayPrice = hasVariants ? minPrice : formData.price
  const displaySalePrice = hasVariants ? minSalePrice : formData.salePrice

  return (
    <SectionCard
      key="pricing"
      title={t('admin.addProductOverview.sections.pricing.title')}
      subtitle={t('admin.addProductOverview.sections.pricing.subtitle')}
      icon={DollarSign}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <Field
          label={
            <div className="flex items-center gap-2">
              {t('admin.addProductOverview.sections.pricing.priceLabel')}
              {hasVariants && <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[0.6rem] font-black text-emerald-700 uppercase tracking-wider">{t('admin.addProductOverview.sections.pricing.autoLabel', 'Auto')}</span>}
            </div>
          }
          icon={DollarSign}
        >
          <div className="relative">
            <span className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 font-bold text-[#1E293B]/40">{t('admin.common.currencySymbol', '$')}</span>
            <input
              type="number"
              value={displayPrice}
              onChange={(e) => !hasVariants && set('price', e.target.value)}
              className={`${inputCls} ltr:pl-8 rtl:pr-8 rtl:text-left ${hasVariants ? 'bg-slate-50 opacity-70 cursor-not-allowed' : ''}`}
              placeholder="0.00"
              readOnly={hasVariants}
            />
          </div>
        </Field>
        <Field
          label={
            <div className="flex items-center gap-2">
              {t('admin.addProductOverview.sections.pricing.salePriceLabel')}
              {/* {hasVariants && <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[0.6rem] font-black text-emerald-700 uppercase tracking-wider">{t('admin.addProductOverview.sections.pricing.autoLabel', 'Auto')}</span>} */}
            </div>
          }
          icon={Tag}
        >
          <div className="relative">
            <span className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 font-bold text-[#1E293B]/40">{t('admin.common.currencySymbol', '$')}</span>
            <input
              type="number"
              value={displaySalePrice}
              onChange={(e) => !hasVariants && set('salePrice', e.target.value)}
              className={`${inputCls} ltr:pl-8 rtl:pr-8 rtl:text-left ${hasVariants ? 'bg-slate-50 opacity-70 cursor-not-allowed' : ''}`}
              placeholder="0.00"
              readOnly={hasVariants}
            />
            {displayPrice > 0 && displaySalePrice > 0 && displaySalePrice < displayPrice && (
              <span className="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 rounded-md bg-rose-50 px-2 py-1 text-[0.65rem] font-black text-rose-500 shadow-sm border border-rose-100 animate-in fade-in zoom-in duration-300">
                -{Math.round((1 - displaySalePrice / displayPrice) * 100)}%
              </span>
            )}
          </div>
        </Field>
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
          <Field
            label={
              <div className="flex items-center gap-2">
                {t('admin.addProductOverview.sections.pricing.stockLabel')}
                {hasVariants && <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[0.6rem] font-black text-emerald-700 uppercase tracking-wider">{t('admin.addProductOverview.sections.pricing.autoLabel', 'Auto')}</span>}
              </div>
            }
            icon={Package}
          >
            <input
              type="number"
              value={displayStock}
              onChange={(e) => !hasVariants && set('stock', e.target.value)}
              className={`${inputCls} rtl:text-left ${hasVariants ? 'bg-slate-50 opacity-70 cursor-not-allowed' : ''}`}
              placeholder={t('admin.addProductOverview.sections.pricing.stockPlaceholder')}
              readOnly={hasVariants}
            />
          </Field>
        </div>
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
