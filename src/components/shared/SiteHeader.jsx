import { Link, NavLink } from 'react-router-dom'
import { CTAButton } from '../ui'
import { ROUTES } from '../../utils/routes'
import sovaLogo from '../../assets/logos/sova.png'

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
    <header className="sticky top-0 z-50 -mx-4 border-b border-[#cfe6e9]/70 bg-white/88 backdrop-blur-xl sm:-mx-6 lg:-mx-8">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link to={ROUTES.home} className="flex items-center gap-3 text-[#173247]">
          <img src={sovaLogo} alt="Sova logo" className="h-10 w-10 rounded-xl object-cover shadow-[0_10px_24px_rgba(16,185,129,0.18)]" />
          <div>
            <p className="font-display text-lg font-semibold tracking-[-0.03em]">Sova</p>
            <p className="text-[11px] text-[#0f9f8f]">Virtual sales assistant</p>
          </div>
        </Link>

        <nav className="hidden items-center md:flex">
          {navItems.map((item, index) => (
            <div key={item.to} className="flex items-center">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-1 text-sm font-medium transition ${
                    isActive ? 'text-[#0f9f8f]' : 'text-[#305365] hover:text-[#0f9f8f]'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {index < navItems.length - 1 ? <span className="px-1 text-sm text-[#f59e0b]">|</span> : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={ROUTES.auth}
            className="hidden rounded-full px-3.5 py-2 text-sm font-medium text-[#305365] transition hover:bg-[#e6fbf7] hover:text-[#0f9f8f] sm:inline-flex"
          >
            Login
          </Link>
          <CTAButton to={ROUTES.auth} label="Start Free Trial" subtext="No card required" />
        </div>
      </div>
    </header>
  )
}
