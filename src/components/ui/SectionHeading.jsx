export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  )
}
