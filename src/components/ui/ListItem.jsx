import { Check } from 'lucide-react'

export function ListItem({ children }) {
  return (
    <div className="flex items-start gap-4 rounded-[22px] bg-[#F8FAFF] px-6 py-5 text-[1rem] leading-[1.65] text-[#6E6E73] border border-black/5 shadow-sm">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0061FF] text-white">
        <Check className="h-4 w-4" />
      </span>
      <span className="font-medium text-[#111827]">{children}</span>
    </div>
  )
}
