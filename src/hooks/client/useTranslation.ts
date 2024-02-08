import { useTranslation as useTranslationOrg } from "react-i18next"

import { useLayoutContext } from "@components/LayoutContext"

import "@utils/i18n/client"

const useTranslation = () => {
  const translation = useTranslationOrg()
  const { language } = useLayoutContext()

  const { i18n } = translation
  if (i18n.resolvedLanguage !== language) {
    i18n.changeLanguage(language)
  }

  return translation
}

export default useTranslation
