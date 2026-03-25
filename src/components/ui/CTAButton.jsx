import { Link } from 'react-router-dom'

export function CTAButton({ to, label, subtext, full = false, dark = false }) {
  return (
    <div className={full ? 'w-full sm:w-auto' : 'hidden sm:block'}>
      <Link
        to={to}
        className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${
          dark
            ? 'bg-white text-slate-950 hover:bg-slate-100'
            : 'bg-[linear-gradient(135deg,#10b981_0%,#06b6d4_100%)] text-white shadow-[0_14px_32px_rgba(16,185,129,0.22)] hover:translate-y-[-1px]'
        }`}
      >
        {label}
      </Link>
      <p className={`mt-1 text-center text-[11px] ${dark ? 'text-white/70' : 'text-slate-500'}`}>{subtext}</p>
    </div>
  )
}
