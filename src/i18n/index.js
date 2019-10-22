import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetector from 'i18next-browser-languagedetector'

import translationEn from '../../public/locales/en/translation'
import translationFr from '../../public/locales/fr/translation'

i18n
  .use(languageDetector)
  .use(initReactI18next)
  // All options: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: { translation: translationEn },
      fr: { translation: translationFr }
    },
    fallbackLng: `en`,
    whitelist: [`fr`, `en`],
    debug: false,
    interpolation: { escapeValue: false },
    returnObjects: true,
    react: { transSupportBasicHtmlNodes: false },
    detection: {
      // All available parameters:
      // 'querystring', 'cookie', 'localStorage', 'navigator', 'path', 'subdomain'
      order: ['path']
    }
  })

export default i18n
