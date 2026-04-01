import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { buildAbsoluteUrl, getBaseUrl, siteConfig } from '../../seo/siteConfig'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function setStructuredData(schema) {
  const existingNodes = document.head.querySelectorAll('script[data-sova-schema="true"]')
  existingNodes.forEach((node) => node.remove())

  schema.forEach((item, index) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.sovaSchema = 'true'
    script.dataset.schemaIndex = String(index)
    script.textContent = JSON.stringify(item)
    document.head.appendChild(script)
  })
}

export function SeoHead({
  title,
  description,
  pathname,
  image = siteConfig.defaultImage,
  type = 'website',
  robots = 'index,follow',
  schema = [],
}) {
  const location = useLocation()

  useEffect(() => {
    const currentPath = pathname || `${location.pathname}${location.hash || ''}`
    const pageTitle = title || siteConfig.defaultTitle
    const pageDescription = description || siteConfig.defaultDescription
    const canonicalUrl = buildAbsoluteUrl(location.pathname || currentPath)
    const imageUrl = image.startsWith('http') ? image : `${getBaseUrl()}${image}`

    document.title = pageTitle

    upsertMeta('meta[name="description"]', { name: 'description', content: pageDescription })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: pageDescription })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteConfig.name })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: pageDescription })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    upsertMeta('meta[name="twitter:site"]', { name: 'twitter:site', content: siteConfig.xHandle })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })

    setStructuredData(schema)

    return () => {
      const existingNodes = document.head.querySelectorAll('script[data-sova-schema="true"]')
      existingNodes.forEach((node) => node.remove())
    }
  }, [description, image, location.hash, location.pathname, pathname, robots, schema, title, type])

  return null
}
