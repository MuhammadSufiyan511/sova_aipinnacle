import { Link } from 'react-router-dom'

export function CTAButton({ to, label, subtext, full = false, dark = false }) {
  return (
    <div className={full ? 'w-full sm:w-auto' : 'hidden sm:block'}>
      <Link
        to={to}
        className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-[18px] px-6 text-[1rem] font-bold transition-all active:scale-[0.97] ${
          dark
            ? 'bg-gradient-to-r from-white to-[#F8FAFC] text-[#1E293B] shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-0.5'
            : 'bg-gradient-to-r from-[#10B981] to-[#047857] text-white shadow-[0_12px_24px_rgba(16,185,129,0.25)] hover:shadow-[0_16px_32px_rgba(16,185,129,0.35)] hover:-translate-y-0.5'
        }`}
      >
        {label}
      </Link>
      <p className={`mt-2 text-center text-[0.75rem] font-medium tracking-tight ${dark ? 'text-white/70' : 'text-[#48617A]'}`}>{subtext}</p>
    </div>
  )
}

