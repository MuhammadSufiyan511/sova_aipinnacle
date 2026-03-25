export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f9f8f]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#173247] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-[#f59e0b] sm:text-base">{description}</p>
    </div>
  )
}
