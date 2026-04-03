import { createElement } from 'react'

export function SectionHeading({ eyebrow, title, description, centered = false, as = 'h2' }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#10B981] sm:text-sm sm:tracking-[0.28em]">{eyebrow}</p>
      {createElement(
        as,
        { className: 'mt-3 font-display text-[1.55rem] font-extrabold leading-tight tracking-[-0.05em] text-[#1E293B] sm:mt-4 sm:text-4xl' },
        title
      )}
      <p className="mt-2.5 text-[0.95rem] leading-6 text-[#5a9e88] sm:mt-3 sm:text-[1.1rem] sm:leading-7">{description}</p>
    </div>
  )
}
