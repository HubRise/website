import { doesSearchTextMatch } from "./search"

describe("filterSearch", () => {
  it("should ignore dots", () => {
    expect(doesSearchTextMatch("T.A.L.C", "TALC")).toBe(true)
  })

  it("should ignore case", () => {
    expect(doesSearchTextMatch("3S POS", "3s pos")).toBe(true)
  })

  it("should ignore accents", () => {
    expect(doesSearchTextMatch("carré", "carre")).toBe(true)
  })

  it("should ignore spaces", () => {
    expect(doesSearchTextMatch("3S POS", "3SPOS")).toBe(true)
  })

  it("should ignore special characters", () => {
    expect(doesSearchTextMatch("k-series/", "kseries")).toBe(true)
  })

  it("should not always return true", () => {
    expect(doesSearchTextMatch("3S POS", "qwerty")).toBe(false)
  })
})
