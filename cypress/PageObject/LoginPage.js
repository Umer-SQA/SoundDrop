export class LoginPage{
    goToLogin(email,password){
        cy.get('[class="display-7  fadeInLeft mb-4"]').should('be.visible').and('contain.text','SoundDrop')
        cy.get('[href="/account/login"]').should('be.visible').invoke('removeAttr', 'target').click()
        cy.get("h5[class='text-primary']").should('be.visible').and('contain.text','Welcome !')
        cy.get("div[class='text-primary p-4'] p").should('be.visible').and('contain.text','Sign into soundDrop')
        cy.get('.form-label').eq(0).should('be.visible').and('contain.text','Email')
        cy.get('#Email').should('be.visible').type(email)
        cy.get('.form-label').eq(1).should('be.visible').and('contain.text','Password')
        cy.get('#Password').should('be.visible').type(password)
    }
    clickOnLoginButton(){
        cy.get('#Loginsubmit').should('be.visible').click()
    }
    validateHomePage(){
        cy.get("img[src='/images/logo-light.png']").should('be.visible')
    }
}