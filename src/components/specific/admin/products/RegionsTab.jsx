import { memo } from 'react'
import { Check, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion as Motion } from 'framer-motion'

export const RegionsTab = memo(function RegionsTab({
  selectedRegions,
  setSelectedRegions
}) {
  const { t } = useTranslation()

  // Typically could be an API call or a global constants array
  const AVAILABLE_REGIONS = [
    { id: 'all', label: t('admin.addProductOverview.regions.list.all') },
    { id: 'na', label: t('admin.addProductOverview.regions.list.na') },
    { id: 'sa', label: t('admin.addProductOverview.regions.list.sa') },
    { id: 'eu', label: t('admin.addProductOverview.regions.list.eu') },
    { id: 'uk', label: t('admin.addProductOverview.regions.list.uk') },
    { id: 'mena', label: t('admin.addProductOverview.regions.list.mena') },
    { id: 'asia', label: t('admin.addProductOverview.regions.list.asia') },
    { id: 'anz', label: t('admin.addProductOverview.regions.list.anz') }
  ]

  const toggleRegion = (regionId) => {
    if (regionId === 'all') {
      setSelectedRegions(['all'])
      return
    }

    setSelectedRegions(prev => {
      let next = prev.filter(r => r !== 'all')
      if (next.includes(regionId)) {
        next = next.filter(r => r !== regionId)
      } else {
        next = [...next, regionId]
      }
      return next
    })
  }

  return (
    <Motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm md:p-6">
         <div className="mb-5 flex items-center justify-between">
           <h3 className="font-display text-[0.96rem] font-bold text-[#173247]">{t('admin.addProductOverview.regions.availability')}</h3>
           <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-500"><Globe className="h-4 w-4" /></span>
         </div>
         <p className="mb-5 text-[0.8rem] text-[#62808D]">{t('admin.addProductOverview.regions.desc')}</p>
         
         <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {AVAILABLE_REGIONS.map((region) => {
               const isSelected = selectedRegions.includes(region.id)
               return (
                  <button
                     key={region.id}
                     type="button"
                     onClick={() => toggleRegion(region.id)}
                     className={`flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                        isSelected ? 'border-emerald-500 bg-emerald-50 shadow-sm' : 'border-[#DDEFE7] bg-white hover:border-emerald-200 hover:bg-[#F8FAFC]'
                     }`}
                  >
                     <span className={`text-[0.76rem] font-bold ${isSelected ? 'text-emerald-700' : 'text-[#173247]'}`}>{region.label}</span>
                     <div className={`flex h-4 w-4 items-center justify-center rounded-full border ${isSelected ? 'border-emerald-500 bg-emerald-500' : 'border-[#DDEFE7]'}`}>
                        {isSelected && <Check className="h-2.5 w-2.5 text-white" />}
                     </div>
                  </button>
               )
            })}
         </div>
      </div>
    </Motion.div>
  )
})
