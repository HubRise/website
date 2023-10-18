/// <reference types="cypress" />

describe("Searchbar", () => {
  const appsResults = () => cy.get("[data-testid='apps:results']")
  const categoryFitler = () => cy.get("[data-testid='apps:categoryfilter']")

  it("searches apps by category", () => {
    cy.visit("/apps")
    categoryFitler().find("button").click()
    categoryFitler().find("li").contains("Point of Sales").click()
    cy.get("input").should("have.value", "")
    appsResults().get("a").should("have.length.gte", 2)
  })

  it("searches apps by name", () => {
    cy.visit("/apps")
    cy.get("input").type("deliver")
    appsResults().contains("Deliveroo")
  })
})
