import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function InternalLinksGrid({ links, className = '' }) {
  return (
    <div className={`grid gap-4 md:grid-cols-2 xl:grid-cols-4 ${className}`.trim()}>
      {links.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="group rounded-[24px] border border-[#D1FAE5] bg-white p-5 shadow-[0_10px_28px_rgba(16,185,129,0.08)] transition hover:-translate-y-1 hover:border-[#10B981] hover:shadow-[0_14px_34px_rgba(16,185,129,0.14)]"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-[#1E293B]">{item.label}</p>
              <p className="mt-2 text-[0.92rem] leading-6 text-[#48617A]">{item.description}</p>
            </div>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] transition group-hover:bg-[#10B981] group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
