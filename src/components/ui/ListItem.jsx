import { Check } from 'lucide-react'

export function ListItem({ children }) {
  return (
    <div className="flex items-start gap-4 rounded-[22px] bg-[#F8FAFC] px-6 py-5 text-[1rem] leading-[1.65] text-[#48617A] border border-[#E2EFEA] shadow-sm">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
        <Check className="h-4 w-4" />
      </span>
      <span className="font-medium text-[#0F172A]">{children}</span>
    </div>
  )
}

