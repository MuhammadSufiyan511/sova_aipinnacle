import { Briefcase, DollarSign, Layout, Info } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import { useTranslation } from 'react-i18next'

export function MobileBottomNav() {
  const { t } = useTranslation()
  const location = useLocation()

  const navItems = [
    { label: t('nav.industries'), to: ROUTES.industries, icon: Briefcase },
    { label: t('nav.pricing'), to: '/#pricing', icon: DollarSign },
    { label: t('nav.caseStudies'), to: ROUTES.caseStudies, icon: Layout },
    { label: t('nav.about'), to: ROUTES.about, icon: Info },
  ]

  const isActive = (to) => {
    if (to.startsWith('/#')) {
      return location.pathname === '/' && location.hash === to.substring(1)
    }
    return location.pathname === to
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[60] border-t border-[#E2EFEA] bg-white/90 pb-safe-area pt-1.5 shadow-[0_-10px_30px_rgba(16,185,129,0.08)] backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-around px-1.5">
        {navItems.map((item) => {
          const active = isActive(item.to)
          const Icon = item.icon
          
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex min-w-0 flex-1 flex-col items-center gap-1 px-1.5 py-1 transition-all ${
                active ? 'text-[#10B981]' : 'text-[#48617A] opacity-70'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'fill-current opacity-20' : ''}`} />
              <span className="max-w-full truncate text-[0.56rem] font-bold uppercase tracking-[0.14em]">{item.label}</span>
              {active && (
                <span className="h-1 w-1 rounded-full bg-[#10B981]" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
