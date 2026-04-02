import { AnimatePresence, motion as Motion } from 'framer-motion'
import { BarChart3, Bell, ChevronDown, LayoutDashboard, LogOut, Menu, MessageSquare, Package, Radio, Settings, Sparkles, X } from 'lucide-react'
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

function SidebarContent({ location, navigate, onClose, collapseOnNavigate = false }) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex h-14 items-center justify-between border-b border-[#DDEFE7] px-3.5">
        <Link to={ROUTES.home} onClick={onClose} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-[#E3F1EC] bg-white shadow-sm shadow-emerald-500/10">
            <img src={sovaLogo} alt="SOVA logo" className="h-8 w-8 object-contain" />
          </span>
          <div>
            <p className="font-display text-[0.95rem] font-bold tracking-tight text-[#173247]">SOVA</p>
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-emerald-500">Workspace</p>
          </div>
        </Link>
        {onClose ? (
          <button onClick={onClose} className="rounded-full p-1.5 text-[#4F7281] hover:bg-[#EEF8F3]">
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <div className="flex-1 min-h-0 px-3 py-2">
        <nav className="sidebar-scroll h-full space-y-1 overflow-y-auto pr-1">
          <p className="px-2 pb-1.5 pt-1.5 text-[0.56rem] font-bold uppercase tracking-[0.2em] text-[#6D8A88]">Workspace</p>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={collapseOnNavigate ? onClose : undefined}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-all ${
                  isActive ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-[#476977] hover:bg-[#F1FBF6] hover:text-[#173247]'
                }`}
              >
                <link.icon className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.85rem] font-semibold">{link.label}</p>
                </div>
                {isActive ? <Motion.div layoutId="dashboard-active-pill" className="mt-1 h-1.5 w-1.5 rounded-full bg-white" /> : null}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="border-t border-[#DDEFE7] p-3">
        <button
          onClick={() => {
            navigate(ROUTES.home)
            onClose?.()
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[0.78rem] font-medium text-[#476977] transition hover:bg-[#FFF1F2] hover:text-[#E2556B]"
        >
          <LogOut className="h-4 w-4 opacity-60" />
          Exit workspace
        </button>
      </div>
    </div>
  )
}

export function DashboardLayout({ children }) {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useApp()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 1024 : true))
  const activeLink =
    navLinks.find((link) => location.pathname === link.path) ||
    (location.pathname === ROUTES.adminNotifications
      ? { label: 'Notifications', note: 'Lead alerts and system activity', path: ROUTES.adminNotifications }
      : location.pathname === ROUTES.adminProfile
        ? { label: 'Profile', note: 'Workspace owner and account details', path: ROUTES.adminProfile }
      : navLinks[0])
  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex min-h-screen bg-[linear-gradient(180deg,#FBFEFC_0%,#F2FBF7_100%)]">
      <AnimatePresence initial={false}>
        {desktopSidebarOpen ? (
          <Motion.aside
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.24, ease: 'easeInOut' }}
            className="fixed bottom-0 left-0 top-0 hidden w-56 flex-col border-r border-[#DDEFE7] bg-white shadow-sm lg:flex"
          >
            <SidebarContent location={location} navigate={navigate} onClose={() => setDesktopSidebarOpen(false)} />
          </Motion.aside>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#173247]/24 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <Motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              className="fixed bottom-0 left-0 top-0 z-50 w-56 bg-white shadow-2xl lg:hidden"
            >
              <SidebarContent location={location} navigate={navigate} onClose={() => setMobileOpen(false)} collapseOnNavigate />
            </Motion.aside>
          </>
        ) : null}
      </AnimatePresence>

      <Motion.div
        animate={{ paddingLeft: isDesktop && desktopSidebarOpen ? '14rem' : '0rem' }}
        transition={{ duration: 0.24, ease: 'easeInOut' }}
        className="flex flex-1 flex-col"
      >
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-[#DDEFE7] bg-white/90 px-3.5 backdrop-blur-md sm:px-4">
          <div className="flex items-center gap-3">
            {desktopSidebarOpen ? null : (
              <button
                onClick={() => {
                  if (window.innerWidth >= 1024) {
                    setDesktopSidebarOpen(true)
                  } else {
                    setMobileOpen(true)
                  }
                }}
                className="rounded-xl p-1.5 text-[#476977] hover:bg-[#EEF8F3] lg:flex"
              >
                <Menu className="h-4.5 w-4.5" />
              </button>
            )}
            {!desktopSidebarOpen ? null : (
              <button
                onClick={() => setMobileOpen(true)}
                className="rounded-xl p-1.5 text-[#476977] hover:bg-[#EEF8F3] lg:hidden"
              >
                <Menu className="h-4.5 w-4.5" />
              </button>
            )}
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-widest text-emerald-500">Current View</p>
              <h1 className="font-display text-[0.95rem] font-bold text-[#173247]">{activeLink.label}</h1>
              <p className="mt-0.5 hidden text-[0.68rem] font-medium text-[#62808D] sm:block">Live WhatsApp sales automation for your team</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button onClick={() => setLangOpen((open) => !open)} className="flex items-center gap-2 rounded-xl border border-[#DDEFE7] bg-[#F4FBF8] px-2.5 py-1.5 transition hover:bg-[#EAF8F2]">
                <span className="text-sm leading-none">{currentLanguage.flag}</span>
                <span className="text-[0.68rem] font-bold uppercase text-[#295565]">{currentLanguage.short}</span>
                <ChevronDown className={`h-3 w-3 text-[#6D8A88] transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen ? (
                  <Motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-[#DDEFE7] bg-white p-1.5 shadow-xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[0.8rem] font-medium transition ${
                          i18n.language === lang.code ? 'bg-emerald-50 text-emerald-700' : 'text-[#476977] hover:bg-[#F1FBF6]'
                        }`}
                      >
                        <span className="text-base leading-none">{lang.flag}</span>
                        <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                          <span>{lang.label}</span>
                          <span className="text-[0.68rem] font-bold uppercase text-[#6D8A88]">{lang.short}</span>
                        </div>
                      </button>
                    ))}
                  </Motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-[#E3F1EC] bg-[#F4FBF8] px-3 py-1.5 md:flex">
              <Sparkles className="h-3.5 w-3.5 text-[#10B981]" />
              <span className="text-[0.68rem] font-semibold text-[#295565]">Automation live</span>
            </div>

            <button onClick={() => setNotificationsOpen(true)} className="relative rounded-full p-1.5 text-[#62808D] transition-all hover:bg-[#EEF8F3]">
              <Bell className="h-4.5 w-4.5" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400 ring-1 ring-white" />
            </button>

            <button
              onClick={() => navigate(ROUTES.adminProfile)}
              className="ml-1 h-8 w-8 overflow-hidden rounded-full border-2 border-[#ECF8F3] bg-gradient-to-br from-emerald-400 to-teal-500 shadow-sm transition hover:scale-[1.03]"
              aria-label="Open profile"
            >
              <div className="flex h-full w-full items-center justify-center text-[0.68rem] font-bold text-white">
                {(user.name || 'U')[0]}
              </div>
            </button>
          </div>
        </header>

        <main className="flex-1 p-3 sm:p-4 lg:p-4.5">
          <div className="mx-auto w-full max-w-[74rem]">
            <AnimatePresence mode="wait">
              <Motion.div key={location.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
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
