
import { login } from '@pages/LoginSwagLabsLCasco.Page'

const {baseUrl} = Cypress.env()

//const {endpoints} = loginSwagLabsLucasCasco.endpoints()

describe ('SwagLabs | Account | Iniciar sesión y BR de Accesos',()=>{

    let the 
    beforeEach('login SwagLabs',()=>{
        cy.visit(baseUrl)
        cy.url().should('contain', 'saucedemo')
        
        cy.fixture("loginSwagLabsLucasCasco").then((Date)=>{
            the = Date 
        })
    })

    it('TC1: Validar usuario inicia sesion correctamente',()=>{

        login.typeUsername(the.Data.UsuarioOK)
        login.typePassword(the.Data.passwordOK)
        login.clickSubmit(the.buttonSubmit)
        cy.url().should("contain", "inventory")
        login.ProductTitle()
    })

    it('TC2 Validar intento de inicio de sesion con cuenta bloqueada',()=>{
        
        login.typeUsername(the.Data.UsuarioBloqueado)
        login.typePassword(the.Data.passwordOK)
        login.clickSubmit(the.buttonSubmit)
        login.get.error().should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it ('TC3 Validar intento de inicio de sesion con username null y password correcto',()=>{
        login.typePassword(the.Data.passwordOK)
        login.clickSubmit(the.buttonSubmit)
        login.get.error().should('contain.text', 'Epic sadface: Username is required')
    })

    it ('TC4: validar intento de inicio de sesion con username correcto y password null', ()=>{
        login.typeUsername(the.Data.UsuarioOK)
        login.clickSubmit(the.buttonSubmit)
        login.get.error().should('contain.text', 'Epic sadface: Password is required')
    })

    it('TC5: validar intento de inicio de sesion con usuername null y password null',()=>{
        login.clickSubmit(the.buttonSubmit)
        login.get.error().should('contain.text', 'Epic sadface: Username is required')
    })

    it('TC6: Validar usuario intenta al endpoint /inventary.html',()=>{
        cy.visit(baseUrl + the.endpoints.urlInventory,{failOnStatusCode: false})
        login.get.error().should('contain.text',the.msgError.inventory)
    })
})