import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ChevronDown, LogOut, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import sovaLogo from '../../assets/logos/sova.webp'

export function SidebarContent({ collapseOnNavigate = false, links, location, navigate, onClose }) {
  const { t } = useTranslation()
  const [openGroups, setOpenGroups] = useState({})

  const toggleGroup = (label, fallbackOpen) => {
    setOpenGroups((current) => ({ ...current, [label]: !(current[label] ?? fallbackOpen) }))
  }

  return (
    <div className="sidebar-container flex h-full min-h-0 flex-col bg-[#0F172A]">
      <div className="sidebar-logo-box flex h-14 shrink-0 items-center justify-between border-b border-white/[0.06] px-4">
        <Link to={ROUTES.home} onClick={onClose} className="flex items-center gap-2.5">
          {/* <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
  <img 
    src={sovaLogo} 
    alt="SOVA" 
    className="h-full w-full object-cover rounded-full scale-90"
  />
</span> */}
          <img src={sovaLogo} alt={t('common.brand')} width="56" height="32" loading="eager" decoding="async" draggable="false" className="h-7 w-10 rounded-lg sm:h-8 sm:w-14 sm:rounded-xl shadow-sm" />
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
        <p className="mb-2 px-2 text-[0.54rem] font-bold uppercase tracking-[0.24em] text-white">{t('admin.nav.workspace', 'Workspace')}</p>
        <nav className="sidebar-scroll space-y-2 overflow-y-auto pr-0.5">
          {links.map((link) => {
            const hasChildren = Boolean(link.children?.length)
            const isActive = hasChildren ? link.children.some((child) => location.pathname === child.path) : location.pathname === link.path
            const isOpen = hasChildren ? (openGroups[link.label] ?? isActive) : false

            if (hasChildren) {
              return (
                <div key={link.label} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => toggleGroup(link.label, isActive)}
                    className={`sidebar-group-trigger group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[0.84rem] font-medium transition-all ${isActive
                      ? 'is-active bg-[#10B981]/15 text-[#10B981] shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]'
                      : 'text-white hover:bg-white/[0.06] hover:text-white/80'
                      }`}
                  >
                    <link.icon className={`h-4 w-4 shrink-0 transition-all ${isActive ? 'text-[#10B981]' : 'opacity-60 group-hover:opacity-80'}`} />
                    <span className="sidebar-nav-group-label flex-1 truncate text-start">{link.label}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <Motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1 pl-4 pr-1">
                          {link.children.map((child) => {
                            const childActive = location.pathname === child.path
                            return (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={collapseOnNavigate ? onClose : undefined}
                                className={`sidebar-nav-child group flex items-center gap-3 rounded-xl px-3 py-2 text-[0.8rem] font-medium transition-all ${childActive
                                  ? 'is-active bg-[#10B981]/12 text-[#A7F3D0] shadow-[inset_0_0_0_1px_rgba(16,185,129,0.18)]'
                                  : 'text-white hover:bg-white/[0.05] hover:text-white/75'
                                  }`}
                              >
                                <child.icon className={`h-3.5 w-3.5 shrink-0 ${childActive ? 'text-[#34D399]' : 'opacity-60 group-hover:opacity-80'}`} />
                                <span className="truncate">{child.label}</span>
                                {childActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#34D399]" />}
                              </Link>
                            )
                          })}
                        </div>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={collapseOnNavigate ? onClose : undefined}
                className={`sidebar-nav-link group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.84rem] font-medium transition-all ${isActive
                  ? 'is-active bg-[#10B981]/15 text-[#10B981] shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]'
                  : 'text-white hover:bg-white/[0.06] hover:text-white/80'
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
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[0.78rem] font-medium text-white transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut className="h-4 w-4 opacity-70" />
          {t('common.logout', 'Logout')}
        </button>
      </div>
    </div>
  )
}
