import { createElement } from 'react'

export function SectionHeading({ eyebrow, title, description, centered = false, as = 'h2' }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#10B981]">{eyebrow}</p>
      {createElement(
        as,
        { className: 'mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.05em] text-[#1E293B] sm:text-4xl' },
        title
      )}
      <p className="mt-3 text-[1.1rem] leading-7 text-[#5a9e88]">{description}</p>
    </div>
  )
}
