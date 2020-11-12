///<reference types="Cypress"/>
describe("Verify google", function () {
    it("Verify URL of google", function () {
    cy.visit("https://www.google.com/")
    cy.url().should("contain", "google")
    })
    })