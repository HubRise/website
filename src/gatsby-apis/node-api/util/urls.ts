import { defaultLocaleCode, LocaleCode } from "../../../utils/locales"

/**
 * Returns a path with a locale code prefix. If the locale code is the default locale code, the path is returned unchanged.
 * @example pathWithLocale("fr", "blog", "variants") => "/fr//blog/variants/"
 * @param localeCode
 * @param paths
 */
export function pathWithLocale(localeCode: LocaleCode, ...paths: Array<string | number>): string {
  const toString = (p) => p.toString()
  const noSlash = (p) => p.replace(/^\//, "").replace(/\/$/, "")
  const path = paths.map(toString).map(noSlash).join("/")
  return (localeCode === defaultLocaleCode ? "" : `/${localeCode}`) + (path === "" ? "/" : `/${path}/`)
}
