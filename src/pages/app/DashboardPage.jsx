import { useLocation } from 'react-router-dom'
import { DashboardLayout } from '../../layouts/DashboardLayout'
import { Overview } from '../../components/specific/admin/Overview'
import { NotificationsOverview } from '../../components/specific/admin/NotificationsOverview'
import { BroadcastsOverview } from '../../components/specific/admin/BroadcastsOverview'
import { ReportsOverview } from '../../components/specific/admin/ReportsOverview'
import { ProfileOverview } from '../../components/specific/admin/ProfileOverview'
import { ProductsOverview } from '../../components/specific/admin/ProductsOverview'
import { ConversationsOverview } from '../../components/specific/admin/ConversationsOverview'
import { SettingsOverview } from '../../components/specific/admin/SettingsOverview'
import { useApp } from '../../context/AppProvider'
import { CelebrationModal } from '../../components/specific/admin/CelebrationModal'
import { ROUTES } from '../../utils/routes'

export function DashboardPage() {
  const { showCelebration, setShowCelebration } = useApp()
  const location = useLocation()

  const renderContent = () => {
    switch (location.pathname) {
      case ROUTES.adminProducts:
        return <ProductsOverview />
      case ROUTES.adminConversations:
        return <ConversationsOverview />
      case ROUTES.adminSettings:
        return <SettingsOverview />
      case ROUTES.adminNotifications:
        return <NotificationsOverview />
      case ROUTES.adminBroadcasts:
        return <BroadcastsOverview />
      case ROUTES.adminReports:
        return <ReportsOverview />
      case ROUTES.adminProfile:
        return <ProfileOverview />
      case ROUTES.admin:
      default:
        return <Overview />
    }
  }

  return (
    <>
      <CelebrationModal isOpen={showCelebration} onClose={() => setShowCelebration(false)} />
      <DashboardLayout>{renderContent()}</DashboardLayout>
    </>
  )
}

export default DashboardPage
