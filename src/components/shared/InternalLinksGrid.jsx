import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function InternalLinksGrid({ links, className = '' }) {
  return (
    <div className={`grid gap-3 md:grid-cols-2 xl:grid-cols-4 ${className}`.trim()}>
      {links.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="group rounded-[20px] border border-[#D1FAE5] bg-white p-4 shadow-[0_10px_28px_rgba(16,185,129,0.08)] transition hover:-translate-y-1 hover:border-[#10B981] hover:shadow-[0_14px_34px_rgba(16,185,129,0.14)] sm:rounded-[24px] sm:p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.9rem] font-bold text-[#1E293B] sm:text-sm">{item.label}</p>
              <p className="mt-1.5 text-[0.84rem] leading-5 text-[#48617A] sm:mt-2 sm:text-[0.92rem] sm:leading-6">{item.description}</p>
            </div>
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] transition group-hover:bg-[#10B981] group-hover:text-white sm:h-10 sm:w-10">
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
