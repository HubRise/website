import { doesSearchTextMatch } from "./search"

describe("filterSearch", () => {
  it("should tell if texts match", () => {
    expect(doesSearchTextMatch("T.A.L.C", "talc")).toBe(true)
    expect(doesSearchTextMatch("3S POS", "asd")).toBe(false)
    expect(doesSearchTextMatch("Carré POS", "carre")).toBe(true)
  })
})
