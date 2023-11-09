/// <reference types="cypress" />

describe("Documentation", () => {
  describe("Languages", () => {
    const headerDesktop = () => cy.get("[data-testid='header:desktop']")

    it("switches language via header links", () => {
      cy.visit("/fr/apps/0test")
      cy.contains("Connecter Acme à HubRise")
      headerDesktop().contains("English").click()
      cy.contains("Connecting Acme to HubRise")
    })

    it("switches language via <Link href='...'>", () => {
      cy.visit("/fr/apps/0test")
      cy.contains("en anglais uniquement").click()
      cy.contains("Connecting Acme to HubRise")
    })

    it("shows a warning on non translated pages (copy_files_from: en)", () => {
      cy.visit("/fr/developers/api/accounts")
      cy.contains("Cette documentation est disponible en anglais uniquement.")
    })
  })

  describe("Links", () => {
    it("opens external links in a new tab", () => {
      cy.visit("/apps/0test")
      cy.get("a").contains("external link").should("have.attr", "target", "_blank")
    })

    it("allows local links to be defined by filepath", () => {
      cy.visit("/fr/apps/0test")
      cy.get("a")
        .contains("lien local par chemin de fichier")
        .should("have.attr", "href", "/fr/apps/0test/connexion-hubrise")
        .should("not.have.attr", "target")
    })

    it("allows local links to contain anchors", () => {
      cy.visit("/fr/apps/0test")
      cy.get("a")
        .contains("lien local avec ancre")
        .should("have.attr", "href", "/fr/apps/0test/connexion-hubrise#se-connecter")
        .should("not.have.attr", "target")
    })

    it("allows local links to be just an anchor", () => {
      cy.visit("/fr/apps/0test")
      cy.get("a").contains("ancre seule").should("have.attr", "href", "#description").should("not.have.attr", "target")
    })
  })

  describe("Header anchors", () => {
    it("generates localised header anchors", () => {
      cy.visit("/fr/apps/0test")
      cy.get("#pourquoi-se-connecter").contains("Pourquoi se connecter ?")
    })

    it("generates localised header anchors even with custom anchors", () => {
      cy.visit("/fr/apps/0test")
      cy.get("#fonctionnalites-de-l-integration").contains("Fonctionnalités de l'intégration")
    })

    it("navigates via custom anchors", () => {
      cy.visit("/fr/apps/0test/connexion-hubrise")
      cy.contains("section fonctionnalités").click()
      cy.contains("Fonctionnalités de l'intégration")
    })
  })
})
