import { memo } from 'react'

export const MockupPhoneSkeleton = memo(function MockupPhoneSkeleton({ isMobile }) {
  return (
    <div 
      className={`relative z-10 w-full max-w-[260px] sm:max-w-[340px] mx-auto`}
      style={{ perspective: 1200 }}
    >
      <div 
        className="relative overflow-hidden rounded-[44px] border-[8px] border-[#1E293B] bg-[#0F172A]"
        style={{
          boxShadow: isMobile 
            ? '0 20px 40px rgba(0,0,0,0.2)' 
            : '0 40px 80px rgba(0,0,0,0.25)',
          minHeight: isMobile ? '440px' : '580px'
        }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-2.5">
          <div className="h-[22px] w-[72px] rounded-b-[16px] bg-black" />
        </div>

        {/* Skeleton Shimmer Content */}
        <div className="flex h-full flex-col gap-4 p-5">
           {/* Header Skeleton */}
          <div className="flex items-center gap-3 opacity-20 animate-pulse">
            <div className="h-9 w-9 rounded-full bg-slate-700" />
            <div className="space-y-2">
              <div className="h-3 w-24 rounded bg-slate-700" />
              <div className="h-2 w-16 rounded bg-slate-700" />
            </div>
          </div>

          {/* Messages Skeleton */}
          <div className="mt-4 space-y-4 opacity-10 animate-pulse">
            <div className="ml-auto h-12 w-[70%] rounded-2xl rounded-tr-none bg-slate-700" />
            <div className="mr-auto h-14 w-[80%] rounded-2xl rounded-tl-none bg-slate-700" />
            <div className="ml-auto h-10 w-[60%] rounded-2xl rounded-tr-none bg-slate-700" />
          </div>

          {/* Input Bar Skeleton */}
          <div className="mt-auto h-10 w-full rounded-full bg-slate-700/30 animate-pulse" />
        </div>

        {/* Shine effect overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5" />
      </div>

      {!isMobile && (
        <div 
          className="absolute -bottom-5 left-1/2 h-6 w-[200px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,_rgba(0,0,0,0.15)_0%,_transparent_70%)] opacity-60"
        />
      )}
    </div>
  )
})
