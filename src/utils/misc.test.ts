import { createHeaderAnchor, slugify } from "./misc"

describe("createSlug", () => {
  it("should transform regular string", () => {
    expect(slugify("Quick Start Guide")).toBe("quick-start-guide")
  })

  it("should strip non alpha characters", () => {
    expect(slugify("Order items (deal line)")).toBe("order-items-deal-line")
  })

  it("should convert accented characters", () => {
    expect(slugify("Chapître: L'Éléphant, le Ça et l'Être")).toBe("chapitre-l-elephant-le-ca-et-l-etre")
  })
})

describe("createHeaderAnchor", () => {
  it("should remove numbering", () => {
    expect(createHeaderAnchor("4. Overriding HTTP method")).toBe("overriding-http-method")
  })
})
