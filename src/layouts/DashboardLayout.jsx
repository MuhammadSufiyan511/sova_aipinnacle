import { AnimatePresence, motion as Motion } from 'framer-motion'
import { BarChart3, Bell, ChevronDown, LayoutDashboard, LogOut, Menu, MessageSquare, Moon, Package, Radio, Settings, Sparkles, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NotificationDrawer } from '../components/specific/admin/NotificationDrawer'
import { useApp } from '../context/AppProvider'
import { ROUTES } from '../utils/routes'
import sovaLogo from '../assets/logos/sova.png'

const navLinks = [
  { icon: LayoutDashboard, label: 'Sales Overview', path: ROUTES.admin },
  { icon: Package, label: 'Product Catalog', path: ROUTES.adminProducts },
  { icon: MessageSquare, label: 'WhatsApp Inbox', path: ROUTES.adminConversations },
  { icon: Radio, label: 'Broadcast Campaigns', path: ROUTES.adminBroadcasts },
  { icon: BarChart3, label: 'Sales Reports', path: ROUTES.adminReports },
  { icon: Settings, label: 'Automation Settings', path: ROUTES.adminSettings },
]

const languages = [
  { code: 'en', short: 'ENG', label: 'English', flag: '🇬🇧' },
  { code: 'ur', short: 'اردو', label: 'Urdu', flag: '🇵🇰' },
  { code: 'ar', short: 'AR', label: 'Arabic', flag: '🇸🇦' },
  { code: 'hi', short: 'हिं', label: 'Hindi', flag: '🇮🇳' },
  { code: 'bn', short: 'বাং', label: 'Bangla', flag: '🇧🇩' },
  { code: 'de', short: 'DE', label: 'German', flag: '🇩🇪' },
]

// ─── Dark Navy Sidebar ────────────────────────────────────────────────────────
function SidebarContent({ location, navigate, onClose, collapseOnNavigate = false }) {
  return (
    <div className="sidebar-container   flex h-full min-h-0 flex-col bg-[#0F172A]">
      {/* Logo */}
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

      {/* Nav */}
      <div className="flex-1 min-h-0 px-2.5 py-3">
        <p className="mb-2 px-2 text-[0.54rem] font-bold uppercase tracking-[0.24em] text-white/30">Workspace</p>
        <nav className="sidebar-scroll space-y-2 overflow-y-auto pr-0.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={collapseOnNavigate ? onClose : undefined}
                className={`sidebar-nav-link group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.84rem] font-medium transition-all ${isActive
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

      {/* SOVA Status Badge
      <div className="mx-3 mb-3 flex items-center gap-2.5 rounded-xl border border-[#10B981]/20 bg-[#10B981]/10 px-3.5 py-3">
        <div className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_8px_2px_rgba(16,185,129,0.5)]" />
        <div className="min-w-0">
          <p className="text-[0.72rem] font-bold text-[#10B981]">Automation active</p>
          <p className="truncate text-[0.62rem] text-white/30">142 conversations handled</p>
        </div>
      </div> */}

      {/* Exit */}
      <div className="border-t border-white/[0.06] p-2.5">
        <button
          onClick={() => { navigate(ROUTES.home); onClose?.() }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[0.78rem] font-medium text-white/30 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut className="h-4 w-4 opacity-70" />
          Exit workspace
        </button>
      </div>
    </div>
  )
}

// ─── Main Layout ──────────────────────────────────────────────────────────────
export function DashboardLayout({ children }) {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { user, homeDarkMode, setHomeDarkMode } = useApp()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 1024 : true))

  const activeLink =
    navLinks.find((link) => location.pathname === link.path) ||
    (location.pathname === ROUTES.adminNotifications
      ? { label: 'Notifications', path: ROUTES.adminNotifications }
      : location.pathname === ROUTES.adminProfile
        ? { label: 'Profile', path: ROUTES.adminProfile }
        : navLinks[0])

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
  }

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="dashboard-layout-shell  flex min-h-screen bg-[#F2FBF7]">

      {/* Desktop Sidebar */}
      <AnimatePresence initial={false}>
        {desktopSidebarOpen && (
          <Motion.aside
            initial={{ x: -224 }}
            animate={{ x: 0 }}
            exit={{ x: -224 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="fixed bottom-0 left-0 top-0 hidden  w-56 shadow-[4px_0_24px_rgba(15,23,42,0.12)] lg:block"
          >
            <SidebarContent location={location} navigate={navigate} onClose={null} />
          </Motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <Motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#0F172A]/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <Motion.aside
              initial={{ x: -224 }} animate={{ x: 0 }} exit={{ x: -224 }}
              transition={{ type: 'spring', stiffness: 360, damping: 36 }}
              className="fixed bottom-0 left-0 top-0 z-50 w-56 shadow-2xl lg:hidden"
            >
              <SidebarContent location={location} navigate={navigate} onClose={() => setMobileOpen(false)} collapseOnNavigate />
            </Motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <Motion.div
        animate={{ paddingLeft: isDesktop && desktopSidebarOpen ? '14rem' : '0rem' }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
        className="flex flex-1 flex-col"
      >
        {/* Top Header */}
        <header className="dashboard-header sticky top-0 z-30 flex min-h-[3.25rem] items-center justify-between gap-3 border-b border-slate-200/70 bg-white/95 px-3 py-2 shadow-sm backdrop-blur-md sm:px-5">
          <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
            {/* Hamburger — always shown on mobile, shown on desktop when sidebar collapsed */}
            <button
              onClick={() => { if (isDesktop) { setDesktopSidebarOpen(v => !v) } else { setMobileOpen(true) } }}
              className="rounded-xl p-1.5 text-slate-500 transition hover:bg-slate-100"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
            <div className="min-w-0">
              <p className="text-[0.54rem] font-bold uppercase tracking-[0.2em] text-[#10B981] sm:text-[0.6rem]">Current View</p>
              <h1 className="truncate font-display text-[0.92rem] font-bold text-slate-800 sm:text-[0.95rem]">{activeLink.label}</h1>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setHomeDarkMode(!homeDarkMode)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-emerald-600 sm:h-9 sm:w-9"
              aria-label={homeDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {homeDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* Automation live badge */}
            <div className="hidden items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-3 py-1.5 md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_4px_2px_rgba(16,185,129,0.4)]" />
              <span className="text-[0.68rem] font-semibold text-[#10B981]">Automation live</span>
            </div>

            {/* Lang selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(v => !v)}
                className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 transition hover:bg-slate-100 sm:gap-1.5 sm:px-2.5"
              >
                <span className="text-sm leading-none">{currentLanguage.flag}</span>
                <span className="text-[0.68rem] font-bold text-slate-600">{currentLanguage.short}</span>
                <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <Motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                    className="language-selector-dropdown absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-2xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`language-option-btn flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[0.8rem] transition ${i18n.language === lang.code ? 'is-active bg-emerald-50 font-bold text-emerald-700' : 'font-medium text-slate-600 hover:bg-slate-50'
                          }`}
                      >
                        <span className="text-base leading-none">{lang.flag}</span>
                        <span className="flex-1 text-left">{lang.label}</span>
                        <span className="text-[0.62rem] font-bold uppercase text-slate-400">{lang.short}</span>
                      </button>
                    ))}
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notifications */}
            <button
              onClick={() => setNotificationsOpen(true)}
              className="relative rounded-full p-1.5 text-slate-500 transition hover:bg-slate-100"
            >
              <Bell className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {/* Avatar */}
            <button
              onClick={() => navigate(ROUTES.adminProfile)}
              className="h-8 w-8 overflow-hidden rounded-full border-2 border-emerald-200 bg-gradient-to-br from-emerald-400 to-teal-600 shadow-sm transition hover:scale-[1.05]"
              aria-label="Profile"
            >
              <div className="flex h-full w-full items-center justify-center text-[0.7rem] font-bold text-white">
                {(user.name || 'U')[0]}
              </div>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 w-full min-w-0 overflow-x-hidden p-3 sm:p-6 lg:p-8">
          <div className="mx-auto w-full min-w-0 max-w-[76rem] 2xl:max-w-[90rem] 3xl:max-w-[110rem]">
            <AnimatePresence mode="wait">
              <Motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="w-full min-w-0"
              >
                {children}
              </Motion.div>
            </AnimatePresence>
          </div>
        </main>
      </Motion.div>

      <NotificationDrawer isOpen={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
    </div>
  )
}
