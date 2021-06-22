export type LocaleCode = 'en' | 'fr'
export const localeCodes: Array<LocaleCode> = ['en', 'fr']
export const defaultLocaleCode: LocaleCode = 'en'

export const getLocaleCodeFromAbsolutePath = (
  absolutePath: string
): LocaleCode => {
  const pathItems = absolutePath.split('/')
  return pathItems[pathItems.length - 2] as LocaleCode
}

export function getLocale(localeCode): string {
  return {
    en: 'en-GB',
    fr: 'fr-FR'
  }[localeCode]
}

export function getLocalizedUrl(url: string, localeCode: LocaleCode): string {
  if (localeCode === defaultLocaleCode) {
    return url
  } else {
    return `/${localeCode}${url}`
  }
}
