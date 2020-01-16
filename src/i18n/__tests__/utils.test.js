import { getLanguage } from '../utils'
import locales from '../locales'

describe(`getLanguage`, () => {
  it(`should return default language code if path prefix is absent`, () => {
    const [{ code: defaultLanguageCode }] = Object.values(locales).filter(
      (info) => info.default === true
    )

    expect(getLanguage(`/api/general-concepts`)).toBe(defaultLanguageCode)
  })

  it(`should return respective language code based on path prefix`, () => {
    expect(getLanguage(`/fr/apps/ikentoo`)).toBe(`fr`)
  })
})
