export class SalesOderPage{
    goToSalesOder(){
        cy.get('[class="has-arrow waves-effect"]').should('be.visible').contains('OrderBook').click()
        cy.get("a[href='/OrderBook/Order']").should('be.visible').click()
        cy.get('[class="card-title"]').should('be.visible').and('contain.text','Sales Order')
    }
    createNewOder(){
        //cy.get('.h3.text-primary').should('be.visible').and('not.exist')
        cy.get("button[class='btn btn-primary btn-rounded']").should('be.visible').click()
        cy.get('.me-3.m-0').should('be.visible').and('contain.text','Order ID : ')
    }
}