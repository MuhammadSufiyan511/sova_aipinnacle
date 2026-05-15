import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/index'   // EN loaded eagerly — it's the default/fallback

export const rtlLanguages = ['ur', 'ar', 'bn', 'hi']

// Initialise with English only. Other languages are fetched on demand.
i18n.use(initReactI18next).init({
  resources: { en },
  lng: localStorage.getItem('sova-language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
    format: (value, format, lng) => {
      if (value instanceof Date) {
        return new Intl.DateTimeFormat(lng).format(value)
      }
      return value
    },
  },
})

// Lazy-load map — only the modules that actually exist
const localeLoaders = {
  ur: () => import('./locales/ur/index'),
  ar: () => import('./locales/ar/index'),
  hi: () => import('./locales/hi/index'),
  bn: () => import('./locales/bn/index'),
  de: () => import('./locales/de/index'),
}

/**
 * Load a language bundle on demand and activate it.
 * Called by the language switcher UI component.
 */
export async function loadAndSetLanguage(lng) {
  if (lng === 'en' || i18n.hasResourceBundle(lng, 'translation')) {
    i18n.changeLanguage(lng)
    return
  }

  const loader = localeLoaders[lng]
  if (!loader) {
    console.warn(`No locale loader for "${lng}", falling back to en`)
    i18n.changeLanguage('en')
    return
  }

  try {
    const mod = await loader()
    const bundle = mod.default ?? mod
    i18n.addResourceBundle(lng, 'translation', bundle.translation ?? bundle, true, true)
    i18n.changeLanguage(lng)
  } catch (err) {
    console.error(`Failed to load locale "${lng}":`, err)
    i18n.changeLanguage('en')
  }
}

// If user already has a non-EN language saved, load it immediately (but async)
const savedLang = localStorage.getItem('sova-language')
if (savedLang && savedLang !== 'en' && localeLoaders[savedLang]) {
  loadAndSetLanguage(savedLang)
}

i18n.on('languageChanged', (language) => {
  localStorage.setItem('sova-language', language)
})

export default i18n
