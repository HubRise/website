/// <reference types="cypress" />

describe("Documentation", () => {
  describe("Languages", () => {
    it("opens external links in a new tab", () => {
      cy.visit("/apps/0test")
      cy.get("a").contains("external link").should("have.attr", "target", "_blank")
    })
  })
})
