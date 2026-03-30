import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { trustedBusinesses } from '../../../data'

function BusinessTrack({ items }) {
  return (
    <div className="flex shrink-0 items-center gap-4 pe-4">
      {items.map((business, index) => (
        <div
          key={`${business}-${index}`}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-[#D1FAE5] bg-white/90 px-5 py-3 shadow-[0_2px_12px_rgba(16,185,129,0.08)] backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#10B981] to-[#F59E0B]" />
          <span className="whitespace-nowrap text-[0.85rem] font-semibold text-[#1E293B]">{business}</span>
        </div>
      ))}
    </div>
  )
}

export function TrustedBusinessesSection() {
  const { t } = useTranslation()
  const [isPaused, setIsPaused] = useState(false)
  const copy = t('content.trustedBusinesses', { returnObjects: true }) || {}
  const businessItems = copy.items || trustedBusinesses
  const stats = copy.stats || []

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-6">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#48617A]">
        {copy.label || 'Trusted by growing businesses'}
      </p>

      <div
        className="relative overflow-hidden"
        dir="ltr"
        onPointerEnter={() => setIsPaused(true)}
        onPointerLeave={() => setIsPaused(false)}
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div
          className="flex w-max items-center"
          style={{ animation: 'ticker 32s linear infinite', animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          <BusinessTrack items={businessItems} />
          <BusinessTrack items={businessItems} />
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[900px] flex-wrap items-center justify-center gap-6 px-5">
        {stats.map(({ stat, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-0.5 rounded-2xl border border-[#D1FAE5] bg-white/80 px-7 py-4 shadow-[0_4px_18px_rgba(16,185,129,0.08)] backdrop-blur"
          >
            <span className="font-display text-2xl font-extrabold text-[#10B981]">{stat}</span>
            <span className="text-xs font-medium text-[#48617A]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

