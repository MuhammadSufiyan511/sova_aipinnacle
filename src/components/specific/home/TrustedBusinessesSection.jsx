import { useState } from 'react'
import { trustedBusinesses } from '../../../data'

export function TrustedBusinessesSection() {
  const [isPaused, setIsPaused] = useState(false)
  const doubled = [...trustedBusinesses, ...trustedBusinesses, ...trustedBusinesses, ...trustedBusinesses]

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#E8F0FF] to-white py-6">
      {/* Label */}
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#6E6E73]">
        Trusted by growing businesses
      </p>

      {/* Ticker strip */}
      <div
        className="relative flex overflow-hidden"
        onPointerEnter={() => setIsPaused(true)}
        onPointerLeave={() => setIsPaused(false)}
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div
          className="flex w-max shrink-0 items-center gap-4"
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          style={{ animation: 'ticker 32s linear infinite', animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {doubled.map((business, index) => (
            <div
              key={`${business}-${index}`}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-[#D6E6FF] bg-white/90 px-5 py-3 shadow-[0_2px_12px_rgba(0,97,255,0.06)] backdrop-blur"
            >
              {/* Mini icon dot */}
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#0061FF] to-[#00C6FF]" />
              <span className="whitespace-nowrap text-[0.85rem] font-semibold text-[#1D1D1F]">{business}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="mx-auto mt-8 flex max-w-[900px] flex-wrap items-center justify-center gap-6 px-5">
        {[
          { stat: '60%', label: 'Rise in Productivity' },
          { stat: '3x', label: 'Faster Response Time' },
          { stat: '90%', label: 'Higher Conversion Rate' },
          { stat: '24/7', label: 'Always Online' },
        ].map(({ stat, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-0.5 rounded-2xl border border-[#D6E6FF] bg-white/80 px-7 py-4 shadow-[0_4px_18px_rgba(0,97,255,0.07)] backdrop-blur"
          >
            <span className="font-display text-2xl font-extrabold text-[#0061FF]">{stat}</span>
            <span className="text-xs font-medium text-[#6E6E73]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
