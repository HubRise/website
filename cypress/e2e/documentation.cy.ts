/// <reference types="cypress" />

describe("Documentation", () => {
  cy.intercept("https://optimizationguide-pa.googleapis.com/*", { forceNetworkError: true })

  describe("Languages", () => {
    const headerDesktop = () => cy.get("[data-testid='header:desktop']")

    it("switches language via header links", () => {
      cy.visit("/fr/apps/0test")
      cy.contains("Connecter Acme à HubRise")
      headerDesktop().contains("English").click()
      cy.contains("Connecting Acme to HubRise")
    })
  })
})
