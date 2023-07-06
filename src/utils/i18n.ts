import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import languageDetector from "i18next-browser-languagedetector"

import translationEn from "../i18n/en.json"
import translationFr from "../i18n/fr.json"

i18n
  .use(languageDetector)
  .use(initReactI18next)
  // All options: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: { translation: translationEn },
      fr: { translation: translationFr },
    },
    fallbackLng: `en`,
    whitelist: [`fr`, `en`],
    debug: false,
    interpolation: { escapeValue: false },
    returnObjects: true,
    react: { transSupportBasicHtmlNodes: false },
    detection: {
      order: ["path"],
    },
  })

export default i18n
