import { useTranslation } from 'react-i18next'
import { Activity, Box, Clock3, Files, MessageCircle, Settings, Users } from 'lucide-react'

export function useOverviewData() {
  const { t } = useTranslation()

  const mockOverview = t('admin.mockData.overview', { returnObjects: true }) || {}
  const mockStats = mockOverview.stats || {}
  const mockActivity = mockOverview.activity || []

  const stats = [
    { name: t('admin.overview.stats.activeConversations'), value: mockStats.active || '142', change: mockStats.activeChange || '+12.5%', icon: MessageCircle, color: 'bg-emerald-50 text-emerald-500' },
    { name: t('admin.overview.stats.qualifiedLeads'), value: mockStats.leads || '89', change: mockStats.leadsChange || '+5.2%', icon: Users, color: 'bg-sky-50 text-sky-500' },
    { name: t('admin.overview.stats.automatedReplies'), value: mockStats.replies || '1,204', change: mockStats.repliesChange || '+24.1%', icon: Activity, color: 'bg-violet-50 text-violet-500' },
    { name: t('admin.overview.stats.avgResponseTime'), value: mockStats.time || '11s', change: mockStats.timeChange || '-34%', icon: Clock3, color: 'bg-amber-50 text-amber-500' },
  ]

  const quickTabs = [
    { label: t('admin.overview.quickActions.businessSettings', { defaultValue: 'Business settings' }), icon: Settings, action: 'settings' },
    { label: t('admin.overview.quickActions.products', { defaultValue: 'View products' }), icon: Box, action: 'products' },
    { label: t('admin.overview.quickActions.files', { defaultValue: 'View files' }), icon: Files, action: 'files' },
  ]

  const activityFeed = [
    { time: mockActivity[0]?.time || '2 mins ago', title: t('admin.overview.activity.feeds.order'), meta: mockActivity[0]?.meta || 'Electronics - 5 unit bulk request' },
    { time: mockActivity[1]?.time || '9 mins ago', title: t('admin.overview.activity.feeds.followup'), meta: mockActivity[1]?.meta || 'Clothing - cart recovery campaign' },
    { time: mockActivity[2]?.time || '14 mins ago', title: t('admin.overview.activity.feeds.spam'), meta: mockActivity[2]?.meta || 'Repeated low-value message removed' },
  ]

  return { stats, quickTabs, activityFeed, t }
}
