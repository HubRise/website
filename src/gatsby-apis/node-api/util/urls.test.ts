import { pathWithLocale } from "./urls"

describe("pathWithLocale", () => {
  test("default locale code", () => {
    expect(pathWithLocale("en", "blog")).toEqual("/blog/")
    expect(pathWithLocale("en", "/blog", "variants")).toEqual("/blog/variants/")
    expect(pathWithLocale("en", "blog", "year", 2)).toEqual("/blog/year/2/")
  })

  test("non-default locale code", () => {
    expect(pathWithLocale("fr")).toEqual("/fr/")
    expect(pathWithLocale("fr", "blog")).toEqual("/fr/blog/")
  })
})
