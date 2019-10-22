import locales from './locales'

/**
 * Determines language code based on provided path.
 * If there is no prefix in path, finds and returns default value.
 *
 * @example:
 *  '/es/applicaciones' => 'es'.
 *
 * @param   {string} path - page URL.
 * @returns {string} Short language code.
 */
export const getLanguage = (path) => {
  const regex = /\/(?<languageCode>[a-z]{2})\//
  const result = regex.exec(path)

  if (result) {
    return result.groups.languageCode
  } else {
    const [{ code }] = Object.values(locales).filter((info) => info.default === true)
    return code
  }
}
