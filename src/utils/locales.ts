import { useTranslation } from "react-i18next"

export type LocaleCode = "en" | "fr"

const LocaleMapping: { [key in LocaleCode]: string } = {
  en: "en-GB",
  fr: "fr-FR",
}

export const localeCodes: Array<LocaleCode> = ["en", "fr"]
export const defaultLocaleCode: LocaleCode = "en"

export const getLocaleCodeFromAbsolutePath = (absolutePath: string): LocaleCode => {
  const pathItems = absolutePath.split("/")
  return pathItems[pathItems.length - 2] as LocaleCode
}

export const getLocale = (localeCode: string): string => {
  return LocaleMapping[localeCode]
}

export const getLocalizedUrl = (url: string, localeCode: LocaleCode): string => {
  if (localeCode === defaultLocaleCode) {
    return url
  } else {
    return `/${localeCode}${url}`
  }
}

export const useLocaleCode = (): LocaleCode => {
  const {
    i18n: { language: localeCode },
  } = useTranslation()
  return localeCode as LocaleCode
}
