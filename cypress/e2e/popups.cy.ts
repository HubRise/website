/// <reference types="cypress" />

describe("Contact popup", () => {
  it("opens the 'Contact us' modal and closes it", () => {
    const modal = () => cy.get("[role='modal']")

    cy.visit("/developers")
    cy.contains("button", "Contact us").click()
    modal().should("be.visible")

    modal().find("[data-testid='icon:close']").click()
    modal().should("not.exist")
  })
})
