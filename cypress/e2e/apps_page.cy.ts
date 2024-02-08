/// <reference types="cypress" />

describe("Apps page", () => {
  describe("Searchbar", () => {
    const appsResults = () => cy.get("[data-test='apps:result']")
    const categoryFilter = () => cy.get("[data-testid='apps:categoryfilter']")

    it("searches apps by category", () => {
      cy.visit("/apps")
      categoryFilter().find("button").click()
      categoryFilter().find("li").contains("Point of Sales").click()
      cy.get("input").should("have.value", "")
      appsResults().should("have.length.gte", 2)
    })

    it("searches apps by name", () => {
      cy.visit("/apps")
      cy.get("input").type("uber ea")
      appsResults().should("have.length", 1)
      appsResults().contains("Uber Eats")
    })
  })
})
