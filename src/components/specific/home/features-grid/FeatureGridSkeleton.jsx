import { memo } from 'react'

export const FeatureGridSkeleton = memo(function FeatureGridSkeleton({ colSpan2 = false, rowSpan2 = false, variant = 'white' }) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'purple':
        return 'bg-gradient-to-br from-[#A78BFA]/20 to-[#8B5CF6]/20 border-transparent shadow-[0_20px_50px_rgba(167,139,250,0.1)]'
      case 'dark':
        return 'bg-gradient-to-br from-[#1E293B]/20 to-[#0F172A]/20 border-transparent shadow-[0_20px_50px_rgba(30,41,59,0.1)]'
      default:
        return 'bg-white border-[#E2EFEA] shadow-[0_12px_44px_rgba(0,0,0,0.03)]'
    }
  }

  return (
    <div
      className={`
        feature-card-skeleton 
        flex flex-col justify-between 
        rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] 
        border p-4 sm:p-6 lg:p-7
        ${getVariantStyles()}
        ${colSpan2 ? 'md:col-span-2' : ''}
        ${rowSpan2 ? 'md:row-span-2' : ''}
        h-full
        min-h-[228px]
        ${rowSpan2 ? 'lg:h-full lg:min-h-[516px]' : 'lg:h-[258px]'}
        ${rowSpan2 ? '2xl:h-full 2xl:min-h-[640px]' : '2xl:h-[320px]'}
        ${rowSpan2 ? '3xl:h-full 3xl:min-h-[760px]' : '3xl:h-[380px]'}
      `}
    >
      <div className="space-y-3">
        {/* Title skeleton */}
        <div className="h-6 w-[40%] animate-pulse rounded-md bg-slate-200/50" />
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-3 w-[85%] animate-pulse rounded-md bg-slate-200/30" />
          <div className="h-3 w-[70%] animate-pulse rounded-md bg-slate-200/30" />
        </div>
      </div>

      <div className={`mt-4 flex ${colSpan2 ? 'justify-between items-end' : 'justify-end'}`}>
        <div
          className={`
            animate-pulse rounded-2xl bg-slate-200/20
            ${colSpan2 ? 'h-24 w-full max-w-[200px] sm:h-28' : 'h-24 w-full max-w-[120px] sm:h-28'}
          `}
        />
        {colSpan2 && (
          <div className="hidden sm:flex flex-col gap-2 w-[180px]">
            <div className="h-8 w-full rounded-2xl bg-slate-200/20" />
            <div className="h-8 w-full rounded-2xl bg-slate-200/20" />
          </div>
        )}
      </div>
    </div>
  )
})
