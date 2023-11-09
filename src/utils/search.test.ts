import { doesSearchTextMatch } from "./search"

describe("filterSearch", () => {
  it("should ignore dots", () => {
    expect(doesSearchTextMatch("T.A.L.C", "talc")).toBe(true)
  })
  it("should ignore accents", () => {
    expect(doesSearchTextMatch("Carré", "carre")).toBe(true)
  })
  it("should ignore spaces", () => {
    expect(doesSearchTextMatch("3S POS", "3spos")).toBe(true)
  })
  it("should ignore special characters", () => {
    expect(doesSearchTextMatch("K-Series/", "kseries")).toBe(true)
  })
  it("should not find a match", () => {
    expect(doesSearchTextMatch("3S POS", "qwerty")).toBe(false)
  })
})
