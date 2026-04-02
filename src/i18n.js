import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { localeResources } from './locales'

export const rtlLanguages = ['ur', 'ar', 'bn', 'hi']

i18n.use(initReactI18next).init({
  resources: localeResources,
  lng: localStorage.getItem('sova-language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  localStorage.setItem('sova-language', language)
})

export default i18n
