/// <reference types="cypress" />

describe("Pages", () => {
  ;[
    ["/", "Seamless Integration for Restaurants and Retail"],
    ["/apps", "Integrated Apps", "LivePepper"],
    ["/pricing", "Simple, Fair and Transparent Pricing"],
    ["/blog", "The HubRise Blog"],
    ["/blog/catalog-variants", "Catalog Variants"],
    ["/apps/livepepper", "Overview"],
    ["/apps/livepepper/connect-hubrise", "Connect to HubRise"],
    ["/developers", "Quick Start"],
    ["/developers/api/accounts", "Locations, Accounts and Users"],
    ["/fr", "Seamless Integration for Restaurants and Retail"], // TODO: Need to translate
    ["/fr/apps", "Applications intégrées"],
  ].forEach(([page, ...keywords]) => {
    it(`renders ${page}`, () => {
      cy.visit(page)
      keywords.forEach((keyword) => cy.contains(keyword))
    })
  })
})

describe("404", () => {
  it("renders 404 page in English", () => {
    cy.visit("/some_page_that_does_not_exist")
    cy.contains("Head back to the homepage")
  })

  it("renders 404 page in French", () => {
    cy.visit("/fr/dossier/page_inconnue")
    cy.contains("Retournez à la page d'accueil")
  })
})
