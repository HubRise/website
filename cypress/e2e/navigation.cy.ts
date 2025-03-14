/// <reference types="cypress" />

describe("Navigation", () => {
  const headerDesktop = () => cy.get("[data-testid='header:desktop']")

  it("navigates to the apps page", () => {
    cy.visit("/")
    headerDesktop().contains("Integrations").click()
    cy.url().should("include", "/apps")
  })
})
