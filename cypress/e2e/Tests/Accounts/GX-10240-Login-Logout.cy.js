
import { initsesion } from "@pages/loginLCasco.Page"

const {login, endpoint} = Cypress.env('swagLabs')
const {baseUrl}= Cypress.env()

describe('Login Logout Swag Labs',()=>{
    beforeEach('',()=>{
        cy.visit(baseUrl)
        cy.url().should('contain','sauce')
    })

    it('GX-10240|TC1 validar login correcto standard_user',()=>{
        initsesion.inputUserName(login.users.correctUser)
        initsesion.inputPassword(login.users.correctPass)
        initsesion.clickButtonLogin()
        cy.url().should('contain','/inventory.html')
    })

    it('GX-10240|TC2 validar login correcto problem_user',()=>{
        initsesion.inputUserName(login.users.problemUser)
        initsesion.inputPassword(login.users.correctPass)
        initsesion.clickButtonLogin()
    })

    it('GX-10240|TC3 validar login correcto performance_glitch_user',()=>{
        initsesion.inputUserName(login.users.glitchUser)
        initsesion.inputPassword(login.users.correctPass)
        initsesion.clickButtonLogin()
    })


    it ('GX-10240|TC4 Validar login con cuenta bloqueada',()=>{
        initsesion.inputUserName(login.users.lockUser)
        initsesion.inputPassword(login.users.correctPass)
        initsesion.clickButtonLogin()
        initsesion.get.ErrorMsj().should('have.text',login.errorMsg.lockedUser)
    })

    it('GX-10240|TC05 validar login account y password null',()=>{
        initsesion.clickButtonLogin()
        initsesion.get.ErrorMsj().should('have.text',login.errorMsg.UserNull)
    })

    it('GX-10240|TC06 validar login account valido y password null',()=>{
        initsesion.inputUserName('problem_user')
        initsesion.clickButtonLogin()
        initsesion.get.ErrorMsj().should('have.text',login.errorMsg.PassNull)
    })

    it('GX-10240|TC07 validar login account null y password valido',()=>{
        initsesion.inputPassword(login.users.correctPass)
        initsesion.clickButtonLogin()
        initsesion.get.ErrorMsj().should('have.text',login.errorMsg.UserNull)
    })

    it('GX-10240|TC08 validar login con user inexistente y password valido',()=>{
        initsesion.inputUserName(login.users.passInv)
        initsesion.inputPassword(login.users.correctPass)
        initsesion.clickButtonLogin()
        initsesion.get.ErrorMsj().should('have.text',login.errorMsg.PassOrUserInv)
    })

    it ('GX-10240|TC09 validar login con user problem_user',()=>{
        initsesion.inputUserName(login.users.problemUser)
        initsesion.inputPassword(login.users.correctPass)
        initsesion.clickButtonLogin()
    })

    it(' GX-10240|TC10 Validar url /cart.html',()=>{
        cy.visit('https://www.saucedemo.com/cart.html',{failOnStatusCode: false})
        initsesion.get.ErrorMsj().contains(login.errorMsg.cartError)
    })

    
    it('GX-10240| TC11 Validar url /checkout-step-one.html',()=>{
        cy.visit('https://www.saucedemo.com/checkout-step-one.html',{failOnStatusCode: false})
        initsesion.get.ErrorMsj().contains(login.errorMsg.checkoutOneError)
    })

    it(' GX-10240|TC12 Validar url /checkout-step-two.html',()=>{
        cy.visit('https://www.saucedemo.com/checkout-step-two.html',{failOnStatusCode: false})
        initsesion.get.ErrorMsj().contains(login.errorMsg.checkoutTwoError)
    })

    it('GX-10240| TC13 Validar URL /checkout-complete.html',()=>{
        cy.visit('https://www.saucedemo.com/checkout-complete.html',{failOnStatusCode: false})
        initsesion.get.ErrorMsj().contains(login.errorMsg.checkoutAllError)
    })

    it('GX-10240|TC14 Validar logout correcto',()=>{
        initsesion.inputUserName('standard_user')
        initsesion.inputPassword('secret_sauce')
        initsesion.clickButtonLogin()
        cy.url().should('contain','/inventory.html')
        initsesion.clickButtonMenu()
        initsesion.clickButtonLogOut()
    })
    

})