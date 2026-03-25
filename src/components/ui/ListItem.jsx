import { Check } from 'lucide-react'

export function ListItem({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-[24px] bg-[#f4fbfb] px-5 py-4 text-sm leading-7 text-[#4e6b79]">
      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#173247]">
        <Check className="h-4 w-4" />
      </span>
      <span>{children}</span>
    </div>
  )
}
