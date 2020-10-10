
const computerDate = require("../../fixtures/computerdata.json")
describe("Computer DB",function(){ //TestSuite
    before("Visit website",function(){
        cy.visit(Cypress.env("url"))
    })

    it("Add Computer", function(){
        cy.get("#add").click()
        cy.get("#name").type(computerDate.cname)
        cy.get("#introduced").type(computerDate.date)
        cy.get("#company").select(computerDate.company)
        cy.get("[Value='Create this computer']").click()
        cy.get("[class='alert-message warning']").should("include.text","Done")
    })
    
    it("Search Columbia And Search",function(){
        cy.get("#searchbox").type("Columbia")
        cy.get("#searchsubmit").click()
        cy.get("table[class='computers zebra-striped']>tbody>tr>td>").should("have.text", "Columbia")
    })

})