import { AnimatePresence, motion as Motion } from 'framer-motion'
import { BarChart3, LayoutDashboard, MessageSquare, Package, Radio, Settings } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NotificationDrawer } from '../components/specific/admin/NotificationDrawer'
import { useApp } from '../context/AppProvider'
import { ROUTES } from '../utils/routes'
import { LANGUAGES, RTL_LANGUAGES } from './dashboard/constants'
import { DashboardHeader } from './dashboard/DashboardHeader'
import { SidebarContent } from './dashboard/SidebarContent'

export function DashboardLayout({ children }) {
  const { i18n, t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { user, homeDarkMode, setHomeDarkMode } = useApp()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 1024 : true))
  const langMenuRef = useRef(null)

  const isRTL = RTL_LANGUAGES.includes(i18n.language)

  const links = [
    { icon: LayoutDashboard, label: t('admin.nav.overview'), path: ROUTES.admin },
    { icon: Package, label: t('admin.nav.products'), path: ROUTES.adminProducts },
    { icon: MessageSquare, label: t('admin.nav.chat'), path: ROUTES.adminConversations },
    { icon: Radio, label: t('admin.nav.broadcasts'), path: ROUTES.adminBroadcasts },
    { icon: BarChart3, label: t('admin.nav.reports'), path: ROUTES.adminReports },
    { icon: Settings, label: t('admin.nav.settings'), path: ROUTES.adminSettings },
  ]

  const activeLink =
    links.find((link) => location.pathname === link.path) ||
    (location.pathname === ROUTES.adminNotifications
      ? { label: t('admin.nav.notifications'), path: ROUTES.adminNotifications }
      : location.pathname === ROUTES.adminProfile
        ? { label: t('admin.nav.profile'), path: ROUTES.adminProfile }
        : links[0])

  const currentLanguage = LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0]

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

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!langMenuRef.current?.contains(event.target)) {
        setLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [])

  return (
    <div className="dashboard-layout-shell flex min-h-screen bg-[#F2FBF7]">
      <AnimatePresence initial={false}>
        {desktopSidebarOpen && (
          <Motion.aside
            initial={{ x: isRTL ? 224 : -224 }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? 224 : -224 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className={`fixed bottom-0 top-0 hidden w-56 shadow-[4px_0_24px_rgba(15,23,42,0.12)] lg:block ${
              isRTL ? 'right-0' : 'left-0'
            }`}
          >
            <SidebarContent links={links} location={location} navigate={navigate} onClose={null} />
          </Motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#0F172A]/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <Motion.aside
              initial={{ x: isRTL ? 224 : -224 }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? 224 : -224 }}
              transition={{ type: 'spring', stiffness: 360, damping: 36 }}
              className={`fixed bottom-0 top-0 z-50 w-56 shadow-2xl lg:hidden ${
                isRTL ? 'right-0' : 'left-0'
              }`}
            >
              <SidebarContent
                collapseOnNavigate
                links={links}
                location={location}
                navigate={navigate}
                onClose={() => setMobileOpen(false)}
              />
            </Motion.aside>
          </>
        )}
      </AnimatePresence>

      <Motion.div
        animate={{
          paddingLeft: isRTL ? '0rem' : (isDesktop && desktopSidebarOpen ? '14rem' : '0rem'),
          paddingRight: isRTL ? (isDesktop && desktopSidebarOpen ? '14rem' : '0rem') : '0rem',
        }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
        className="flex flex-1 flex-col"
      >
        <DashboardHeader
          activeLabel={activeLink.label}
          currentLanguage={currentLanguage}
          homeDarkMode={homeDarkMode}
          isDesktop={isDesktop}
          isRTL={isRTL}
          langMenuRef={langMenuRef}
          langOpen={langOpen}
          languages={LANGUAGES}
          onChangeLanguage={changeLanguage}
          onOpenMobile={() => setMobileOpen(true)}
          onOpenNotifications={() => setNotificationsOpen(true)}
          onToggleDesktopSidebar={() => setDesktopSidebarOpen((v) => !v)}
          onToggleLangOpen={() => setLangOpen((v) => !v)}
          onToggleTheme={() => setHomeDarkMode(!homeDarkMode)}
          onViewProfile={() => navigate(ROUTES.adminProfile)}
          t={t}
          userInitial={(user.name || 'U')[0]}
        />

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
