export type Language = "en" | "fr"

export const defaultLanguage: Language = "en"
export const otherLanguages: Array<Language> = ["fr"]
export const allLanguages: Array<Language> = [defaultLanguage, ...otherLanguages]

const BackOfficeLocale: { [key in Language]: string } = {
  en: "en-GB",
  fr: "fr-FR",
}

export const getBackOfficeLocale = (language: Language): string => {
  return BackOfficeLocale[language]
}

export type LanguagePaths = {
  /** For each language, the path of the corresponding page (eg. {en: '/docs/deliveroo', fr: '/fr/docs/deliveroo'}) */
  [K in Language]?: string
}
