import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export function TextLink({ to, children }) {
  return (
    <Link to={to} className="inline-flex items-center gap-2 text-sm font-semibold text-[#173247]">
      {children}
      <ChevronRight className="h-4 w-4" />
    </Link>
  )
}
