import { mergePaths } from "./page"

describe("mergePaths", () => {
  it("works", () => {
    expect(mergePaths("/", "/faq")).toEqual("/faq")
    expect(mergePaths("/fr", "/faq")).toEqual("/fr/faq")
    expect(mergePaths("/fr", "/")).toEqual("/fr")
    expect(mergePaths("/fr", "/faq/")).toEqual("/fr/faq")
  })
})
