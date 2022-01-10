describe("doesn't crash and burn", () => {
  const pages = [
    "/",
    "/apps",
    "/pricing",
    "/apps/livepepper",
    "/apps/livepepper/connect-hubrise",
    "/developers",
    "/developers/api/account-management",
    "/fr",
    "/fr/apps",
    "/fr/developers/api/account-management",
  ]

  pages.forEach((page) => {
    it(`renders ${page}`, () => {
      cy.visit(page)
      cy.contains("Apps")
    })
  })
})

it("renders elements, allows interaction and navigation between various pages", () => {
  cy.viewport(1024, 660)

  cy.visit("/")
  cy.contains("Integration for retail")
  cy.contains("li", "Developers").click()
  cy.contains("Contact us").click()
  cy.get("[role='modal']").should("be.visible")

  cy.visit("/fr")
  cy.contains("li", "Apps").click()
  cy.contains("LivePepper")

  cy.visit("/fr/developers/api/catalog-management")
  cy.get("h2#skus a").click()
  cy.url().should("include", "#skus")
})
