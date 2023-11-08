import { doesSearchTextMatch, normalizeText } from "./search"

describe("filterSearch", () => {
  it("should normalize string for search", () => {
    expect(normalizeText("T.A.L.C")).toBe("talc")
    expect(normalizeText("k-series")).toBe("kseries")
    expect(normalizeText("3S POS")).toBe("3spos")
  })

  it("should tell if texts match", () => {
    expect(doesSearchTextMatch("T.A.L.C", "talc")).toBe(true)
    expect(doesSearchTextMatch("3S POS", "asd")).toBe(false)
    expect(doesSearchTextMatch("Carré POS", "carre")).toBe(true)
  })
})
