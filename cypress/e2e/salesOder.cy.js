/// <reference types= "cypress" />

import { LoginPage } from "../PageObject/LoginPage"
import { SalesOderPage } from "../PageObject/SalesOderPage"

const login = new LoginPage
const sales = new SalesOderPage

describe(' Login Cases ', function () {

    let email = 'Charlie@TruckMusic'
    let password = 'Artic@1313'
    beforeEach(() => {
        cy.visit('/')
    })
    it('TC_SOP_001  Check "Create New Order" is clickable  and working fine', () => {
        login.goToLogin(email,password)
        login.clickOnLoginButton()
        login.validateHomePage()
        sales.goToSalesOder()
        sales.createNewOder()
    })
    it('TC_SOP_002  Check "Create New Order" is clickable  and working fine', () => {
        login.goToLogin(email,password)
        login.clickOnLoginButton()
        login.validateHomePage()
        sales.goToSalesOder()
        sales.createNewOder()
    })
})