import locales from '../../i18n/locales'

export function getLocalizedUrl(url, currentLang) {
  const locale = Object.values(locales).find(
    (locale) => locale.code === currentLang
  )

  if (locale && locale.default) {
    return url
  } else {
    return `/${locale.code}${url}`
  }
}
