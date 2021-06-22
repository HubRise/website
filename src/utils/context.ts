import { LocaleCode } from '@utils/locales'

export type LanguagePaths = {
  /** For each locale, the path of the corresponding page (eg. {en: '/docs/deliveroo', fr: '/fr/docs/deliveroo'}) */
  [K in LocaleCode]?: string
}

export interface RootContext {
  /** Links to the related page in other languages. */
  languagePaths: LanguagePaths
  /** The version of the site (en, fr) where the page exists. */
  localeCode: LocaleCode
  /** The dominant language used in the page. Used to show a warning to the user when localeCode !== contentLocaleCode */
  contentLocaleCode?: LocaleCode
}

export interface YamlContext extends RootContext {
  id: string
}
