export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#10B981]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-0.05em] text-[#1E293B] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-[1.1rem] leading-7 text-[#48617A]">{description}</p>
    </div>
  )
}

