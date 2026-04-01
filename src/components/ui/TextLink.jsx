import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function TextLink({ to, children }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'

  return (
    <Link to={to} className="inline-flex items-center gap-2 text-sm font-semibold text-[#173247]">
      {children}
      <ChevronRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
    </Link>
  )
}
