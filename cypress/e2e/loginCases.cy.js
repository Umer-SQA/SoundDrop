/// <reference types= "cypress" />

import { LoginPage } from "../PageObject/LoginPage"

const login = new LoginPage

describe(' Login Cases ', function () {

    let email = 'Charlie@TruckMusic'
    let password = 'Artic@1313'
    beforeEach(() => {
        cy.visit('/')
    })
    it('TC_LP_001 Validate that when user access the website URL it landed on the login page', () => {
        login.goToLogin(email,password)
        login.clickOnLoginButton()
        login.validateHomePage()
    })
})