import { Link } from 'react-router-dom'

export function CTAButton({ to, label, subtext, full = false, dark = false }) {
  return (
    <div className={full ? 'w-full sm:w-auto' : 'hidden sm:block'}>
      <Link
        to={to}
        className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-[18px] px-6 text-[1rem] font-bold transition-all active:scale-[0.97] ${
          dark
            ? 'bg-white text-[#0061FF] hover:bg-white/90'
            : 'bg-gradient-to-r from-[#0061FF] to-[#3B82F6] text-white shadow-[0_12px_24px_rgba(0,97,255,0.2)] hover:scale-[1.02]'
        }`}
      >
        {label}
      </Link>
      <p className={`mt-2 text-center text-[0.75rem] font-medium tracking-tight ${dark ? 'text-white/70' : 'text-[#6E6E73]'}`}>{subtext}</p>
    </div>
  )
}
