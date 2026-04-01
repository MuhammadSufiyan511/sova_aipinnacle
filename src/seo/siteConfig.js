const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, '')

export const siteConfig = {
  name: 'SOVA',
  siteUrl: configuredSiteUrl || 'https://sova.my',
  defaultTitle: 'SOVA | WhatsApp Automation for Sales and Support',
  defaultDescription:
    'SOVA helps businesses turn WhatsApp chats into sales with auto replies, buyer intent filtering, smart follow-ups, and simple lead handling.',
  defaultImage: '/sova.ico',
  xHandle: '@sova',
}

export function getBaseUrl() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin.replace(/\/+$/, '')
  }

  return siteConfig.siteUrl
}

export function buildAbsoluteUrl(pathname = '/') {
  const baseUrl = getBaseUrl()
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${baseUrl}${safePath}`
}
