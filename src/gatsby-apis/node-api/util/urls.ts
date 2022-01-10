import { defaultLocaleCode, LocaleCode } from "../../../utils/locales"

export function pathWithLocale(localeCode: LocaleCode, path: string): string {
  const pathPrefix = localeCode === defaultLocaleCode ? "" : `/${localeCode}`
  return `${pathPrefix}${path}`
}
