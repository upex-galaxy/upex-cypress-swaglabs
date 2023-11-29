import { removeLogs } from "@helper/RemoveLogs";
import data from '../../../fixtures/data/GX3-756-Login.json';

removeLogs()

describe(" GX3-756 [Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos", ()=> {
    beforeEach('Usuario debe estar en la página de Login', ()=> {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('contain','demo')
    })

    it('GX3-756 | TC1: Validar iniciar sesión correctamente', () => {
        cy.get('#user-name').type(data.userName.validUser)
        cy.get('#password').type(data.password.validPassword)
        cy.get('#login-button').click()
        
        
    });

    it('GX3-756 | TC2: Validar no poder iniciar  sesión con locked_out_user', () => {
        cy.get('#user-name').type(data.userName.lockedUser)
        cy.get('#password').type(data.password.validPassword)
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', data.errorMessage.lockedMessage)
  
    });

    it('TC3: Validar no poder iniciar sesión cuando el campo Username es incorrecto', () => {
        cy.get('#user-name').type(data.userName.incorrectUser)
        cy.get('#password').type(data.password.validPassword)
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', data.errorMessage.noMatchMessage)
    });

    it('TC4: Validar no poder iniciar sesión cuando el campo password es incorrecto', () => {
        cy.get('#user-name').type(data.userName.validUser)
        cy.get('#password').type(data.password.incorrectPassword)
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', data.errorMessage.noMatchMessage)
    });

    it('GX3-756 | TC5: Validar no poder iniciar sesión cuando el campo Username está vacío', () => {
        
        cy.get('#password').type(data.password.validPassword)
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', data.errorMessage.emptyUsernameMessage)
    });

    it('GX3-756 | TC6: Validar no poder iniciar sesión cuando el campo Password está vacío', () => {
        cy.get('#user-name').type(data.userName.validUser)
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', data.errorMessage.emptyPasswordMessage)
    });

    it('GX3-756 | TC7: Validar no poder iniciar sesión cuando los  campos Username y Password están vacíos', () => {
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', data.errorMessage.emptyFields)
    });

    it('GX3-756 | TC8: Validar no poder ingresar al endpoint “/inventory.html” sin haber iniciado sesión ', () => {
       cy.visit(data.url.inventory, { failOnStatusCode: false })
       cy.get('[data-test="error"]').should('have.text',data.endpointMessage.inventory )
  
    });
    it('GX3-756 | TC9: Validar ingresar al endpoint “/cart.html” sin haber iniciado sesión ', () => {
        cy.visit(data.url.cart, { failOnStatusCode: false })
       cy.get('[data-test="error"]').should('have.text',data.endpointMessage.cart )
    });
    it('GX3-756 | TC10: Validar ingresar al endpoint “ /checkout-step-one.html” sin haber iniciado sesión', () => {
        cy.visit(data.url.checkoutOne, { failOnStatusCode: false })
       cy.get('[data-test="error"]').should('have.text',data.endpointMessage.checkoutOne )
    });
    it('GX3-756 | TC11: Validar ingresar al endpoint “ /checkout-step-two.html” sin haber iniciado sesión', () => {
        cy.visit(data.url.checkoutTwo, { failOnStatusCode: false })
       cy.get('[data-test="error"]').should('have.text',data.endpointMessage.checkoutTwo)
    });
    it('GX3-756 | TC12: Validar ingresar al endpoint “/checkout-complete.html” sin haber iniciado sesión'
    , () => {
        cy.visit(data.url.checkoutComplete, { failOnStatusCode: false })
       cy.get('[data-test="error"]').should('have.text',data.endpointMessage.checkoutComplete)
    });

    


    


})
