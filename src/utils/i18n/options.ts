import { InitOptions } from "i18next"

import { allLanguages, defaultLanguage } from "@utils/locales"
import translationEn from "locales/en.json"
import translationFr from "locales/fr.json"

const options: InitOptions = {
  resources: {
    en: { translation: translationEn },
    fr: { translation: translationFr },
  },
  fallbackLng: defaultLanguage,
  supportedLngs: allLanguages,
  returnObjects: true,
}

export default options
