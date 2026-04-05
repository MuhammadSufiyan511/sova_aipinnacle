import { memo } from 'react'

const businessLogoStyles = [
  'from-[#10B981] to-[#06B6D4]',
  'from-[#A78BFA] to-[#06B6D4]',
  'from-[#F59E0B] to-[#10B981]',
  'from-[#1E293B] to-[#10B981]',
  'from-[#FB7185] to-[#A78BFA]',
  'from-[#06B6D4] to-[#1E293B]',
]

function getBusinessMonogram(name) {
  const words = String(name || '')
    .split(' ')
    .filter(Boolean)

  if (words.length === 0) return 'SV'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()

  return `${words[0][0] || ''}${words[1][0] || ''}`.toUpperCase()
}

const HeroBusinessTrack = memo(function HeroBusinessTrack({ items }) {
  return (
    <div className="flex shrink-0 items-center gap-4 pe-4">
      {items.map((business, index) => (
        <div
          key={`${business}-${index}`}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-[#DDEFE7] bg-white px-3.5 py-1.5 shadow-sm shadow-emerald-500/5"
        >
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br text-[0.58rem] font-extrabold text-white shadow-sm ${businessLogoStyles[index % businessLogoStyles.length]}`}
            aria-hidden="true"
          >
            {getBusinessMonogram(business)}
          </span>
          <span className="whitespace-nowrap text-[0.72rem] font-bold text-[#295565]">
            {business}
          </span>
        </div>
      ))}
    </div>
  )
})

export function HeroBusinessTicker({ items, label }) {
  return (
    <>
      <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#F1990A]">
        {label}
      </p>
      <div
        className="group relative flex overflow-hidden"
        dir="ltr"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div
          className="flex w-max items-center py-2"
          style={{ animation: 'ticker 30s linear infinite' }}
        >
          <HeroBusinessTrack items={items} />
          <HeroBusinessTrack items={items} />
        </div>
      </div>
    </>
  )
}
