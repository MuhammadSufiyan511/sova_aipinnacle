import { motion as Motion } from 'framer-motion'
import { LogOut, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import sovaLogo from '../../assets/logos/sova.png'

export function SidebarContent({ collapseOnNavigate = false, links, location, navigate, onClose }) {
  const { t } = useTranslation()

  return (
    <div className="sidebar-container flex h-full min-h-0 flex-col bg-[#0F172A]">
      <div className="sidebar-logo-box flex h-14 shrink-0 items-center justify-between border-b border-white/[0.06] px-4">
        <Link to={ROUTES.home} onClick={onClose} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-md">
            <img src={sovaLogo} alt="SOVA" className="h-7 w-7 object-contain" />
          </span>
          <div>
            <p className="font-display text-[0.95rem] font-bold tracking-tight text-white">SOVA</p>
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.28em] text-[#10B981]">Workspace</p>
          </div>
        </Link>
        {onClose && (
          <button onClick={onClose} className="rounded-full p-1.5 text-white/40 transition hover:bg-white/10 lg:hidden">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex-1 min-h-0 px-2.5 py-3">
        <p className="mb-2 px-2 text-[0.54rem] font-bold uppercase tracking-[0.24em] text-white/30">{t('admin.nav.workspace', 'Workspace')}</p>
        <nav className="sidebar-scroll space-y-2 overflow-y-auto pr-0.5">
          {links.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={collapseOnNavigate ? onClose : undefined}
                className={`sidebar-nav-link group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.84rem] font-medium transition-all ${
                  isActive
                    ? 'is-active bg-[#10B981]/15 text-[#10B981] shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]'
                    : 'text-white/50 hover:bg-white/[0.06] hover:text-white/80'
                }`}
              >
                <link.icon className={`h-4 w-4 shrink-0 transition-all ${isActive ? 'text-[#10B981]' : 'opacity-50 group-hover:opacity-75'}`} />
                <span className="truncate">{link.label}</span>
                {isActive && (
                  <Motion.div
                    layoutId="dashboard-active-pill"
                    className="ml-auto h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_2px_rgba(16,185,129,0.5)]"
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="border-t border-white/[0.06] p-2.5">
        <button
          onClick={() => {
            navigate(ROUTES.home)
            onClose?.()
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[0.78rem] font-medium text-white/30 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut className="h-4 w-4 opacity-70" />
          {t('common.exitWorkspace', 'Exit workspace')}
        </button>
      </div>
    </div>
  )
}