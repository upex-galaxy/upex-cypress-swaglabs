import { Login } from "@pages/loginFranco.Page"

describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondición: Situado en la página de Login', () => {
		cy.visit('https://www.saucedemo.com/')
        cy.url().should('contain', 'saucedemo')
	})
	it.only('6517 | TC1: Validar login con credenciales correctas standard_user.', () => {
		Login.enterUsername('standard_user')//User Correcto
		Login.enterPassword('secret_sauce')//Password Correcta
		Login.submitButton('#login-button')
		Login.urlEP()
		
	})
	it('6517 | TC2: Validar login con credenciales correctas problem_user.', () => {
		Login.enterUsername('problem_user')//User Correcto
		Login.enterPassword('secret_sauce')//Password Correcta
		Login.submitButton('#login-button')
		cy.url('https://www.saucedemo.com/inventory.html').should('include', 'inventory')
	})
	it('6517 | TC3: Validar login con credenciales correctas performance_glitch_user', () => {
		Login.enterUsername('performance_glitch_user')//User Correcto
		Login.enterPassword('secret_sauce')//Password Correcta
		Login.submitButton('#login-button')
		cy.url('https://www.saucedemo.com/inventory.html').should('include', 'inventory')
	})

	it('6517 | TC4: Validar usuario no inicia sesion con cuenta bloqueada locked_out_user', () => {
		Login.enterUsername('locked_out_user') //user incorrecta
		Login.enterPassword('secret_sauce') //password incorrecta
		Login.submitButton('#login-button')
		Login.lockedUser()
		
	})
	it('6517 | TC5: Validar usuario inicia sesion con usuario correcto y password incorrecta.', () => {
		Login.enterUsername('standard_user') //user correcto
		Login.enterPassword('asd12345') //password incorrecta
		Login.submitButton('#login-button')
		Login.PassOrUserInvalid()
	})
	it('6517 | TC6: Validar usuario inicia sesion con usuario incorrecto y password correcta.', () => {
		Login.enterUsername('usuario_incorrecto') //user incorrecto
		Login.enterPassword('secret_sauce') //password correcto
		Login.submitButton('#login-button')
		Login.PassOrUserInvalid()
	})
	it('6517 | TC7: Validar usuario inicia sesion con usuario valido y password null.', () => {
		Login.enterUsername('standard_user') //user correcto
		cy.get("[type='password']").clear().should('have.value', '') //password null
		Login.submitButton('#login-button')
		Login.PassNull()
		
	})
	it('6517 | TC8: Validar usuario inicia sesion con usuario null y password valido.', () => {
		cy.get("[type='text']").clear().should('have.value', '')//user null
		Login.enterPassword('secret_sauce') //password correcto
		Login.submitButton('#login-button')
		Login.UserNull()
	})
	it('6517 | TC9: Validar usuario inicia sesion con usuario null y password null.', () => {
		cy.get("[type='text']").clear().should('have.value', '') //user null
		cy.get("[type='password']").clear().should('have.value', '') //password null
		Login.submitButton('#login-button')
		Login.UserNull()
	})
	it('6517 | TC10: Validar usuario ingresa al endpoint /inventory.html', () => {
	
		cy.visit('inventory', {failOnStatusCode: false})
		cy.get("[data-test='error']").should('contain', "Epic sadface: You can only access '/inventory.html' when you are logged in.")
	})
	it('6517 | TC11: Validar usuario ingresa al endpoint /cart.html', () => {

        cy.visit('https://www.saucedemo.com/cart.html', {failOnStatusCode: false})
		cy.get("[data-test='error']").should('contain', "Epic sadface: You can only access '/cart.html' when you are logged in.")
	})
    
	it('6517 | TC12: Validar usuario ingresa al endpoint /checkout-step-one.html', () => {
        cy.visit('https://www.saucedemo.com/cart.html', {failOnStatusCode: false})
		cy.get("[data-test='error']").should('contain', "Epic sadface: You can only access '/cart.html' when you are logged in.")
    })
	it('6517 | TC13: Validar usuario ingresa al endpoint /checkout-step-two.html', () => {
        cy.visit('https://www.saucedemo.com/checkout-step-two.html', {failOnStatusCode: false})
		cy.get("[data-test='error']").should('contain', "Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.")
    })
	it('6517 | TC14: Validar usuario ingresa al endpoint /checkout-complete.html', () => {
        cy.visit('https://www.saucedemo.com/checkout-complete.html', {failOnStatusCode: false})
		cy.get("[data-test='error']").should('contain', "Epic sadface: You can only access '/checkout-complete.html' when you are logged in.")
    })
})
