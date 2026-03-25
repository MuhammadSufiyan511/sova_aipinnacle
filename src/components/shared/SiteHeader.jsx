import { Link, NavLink } from 'react-router-dom'
import { CTAButton } from '../ui'
import { ROUTES } from '../../utils/routes'

const navItems = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Industries', to: ROUTES.industries },
  { label: 'Pricing', to: ROUTES.pricing },
  { label: 'Case Studies', to: ROUTES.caseStudies },
  { label: 'Terms and Policies', to: ROUTES.terms },
  { label: 'Privacy', to: ROUTES.privacyPolicy },
  { label: 'About', to: ROUTES.about },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 -mx-4 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl sm:-mx-6 lg:-mx-8">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link to={ROUTES.home} className="flex items-center gap-3 text-slate-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#10b981_0%,#06b6d4_48%,#a78bfa_100%)] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(16,185,129,0.22)]">
            S
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-[-0.03em]">Sova</p>
            <p className="text-[11px] text-slate-500">Virtual sales assistant</p>
          </div>
        </Link>

        <nav className="hidden items-center md:flex">
          {navItems.map((item, index) => (
            <div key={item.to} className="flex items-center">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-1 text-sm font-medium transition ${
                    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {index < navItems.length - 1 ? <span className="px-1 text-sm text-slate-300">|</span> : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={ROUTES.auth}
            className="hidden rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:inline-flex"
          >
            Login
          </Link>
          <CTAButton to={ROUTES.auth} label="Start Free Trial" subtext="No card required" />
        </div>
      </div>
    </header>
  )
}
