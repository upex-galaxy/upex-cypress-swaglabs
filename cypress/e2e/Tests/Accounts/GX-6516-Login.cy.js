import { Login } from '@pages/loginFranco.Page'
const { inventoryError, cartError, checkoutOneError, checkoutTwoError, checkoutAllError } = Cypress.env('errorEP')
const { inventory, cart, checkoutOne, checkoutTwo, checkoutAll } = Cypress.env('swagLabsEP')
const { UserNull, PassNull, PassOrUserInv, lockedUser } = Cypress.env('flagsErrorSL')

describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondición: Situado en la página de Login', () => {
		cy.visit('https://www.saucedemo.com/')
		cy.url().should('contain', 'saucedemo')
	})
	it.only('6517 | TC1: Validar login con credenciales correctas standard_user.', () => {
		Login.enterUsername('standard_user') //User Correcto
		Login.enterPassword('secret_sauce') //Password Correcta
		Login.submitButton('#login-button')
		cy.should('contain', inventory)
	})
	it('6517 | TC2: Validar login con credenciales correctas problem_user.', () => {
		Login.enterUsername('problem_user') //User Correcto
		Login.enterPassword('secret_sauce') //Password Correcta
		Login.submitButton('#login-button')
		cy.should('contain', inventory)
	})
	it('6517 | TC3: Validar login con credenciales correctas performance_glitch_user', () => {
		Login.enterUsername('performance_glitch_user') //User Correcto
		Login.enterPassword('secret_sauce') //Password Correcta
		Login.submitButton('#login-button')
		cy.should('contain', inventory)
	})

	it('6517 | TC4: Validar no iniciar sesion con cuenta bloqueada locked_out_user', () => {
		Login.enterUsername('locked_out_user') //user incorrecta
		Login.enterPassword('secret_sauce') //password incorrecta
		Login.submitButton('#login-button')
	})

	it('6517 | TC5: Validar no iniciar sesion con usuario correcto y password incorrecta.', () => {
		Login.enterUsername('standard_user') //user correcto
		Login.enterPassword('asd12345') //password incorrecta
		Login.submitButton('#login-button')
		Login.get.error().should('contain', PassOrUserInv)
	})
	it('6517 | TC6: Validar no iniciar sesion con usuario incorrecto y password correcta.', () => {
		Login.enterUsername('usuario_incorrecto') //user incorrecto
		Login.enterPassword('secret_sauce') //password correcto
		Login.submitButton('#login-button')
		Login.get.error().should('contain', PassOrUserInv)
	})
	it('6517 | TC7: Validar no iniciar sesion con username valido y password null.', () => {
		Login.enterUsername('standard_user') //user correcto
		//password null
		Login.submitButton('#login-button')
		Login.get.error().should('contain', PassNull)
	})
	it('6517 | TC8: Validar no iniciar sesion con username null y password valido.', () => {
		//User Null
		Login.enterPassword('secret_sauce') //password correcto
		Login.submitButton('#login-button')
		Login.get.error().should('contain', UserNull)
	})
	it('6517 | TC9: Validar no iniciar sesion con usuario null y password null.', () => {
		//USER NULL
		//PASSWORD NULL
		Login.submitButton('#login-button')
		Login.get.error().should('contain', UserNull)
	})
	it('6517 | TC10: Validar usuario ingresa al endpoint /inventory.html', () => {
		cy.visit(inventory, { failOnStatusCode: false })
		Login.get.error().should('contain', inventoryError)
	})
	it('6517 | TC11: Validar usuario ingresa al endpoint /cart.html', () => {
		cy.visit(cart, { failOnStatusCode: false })
		Login.get.error.should('contain', cartError)
	})

	it('6517 | TC12: Validar usuario ingresa al endpoint /checkout-step-one.html', () => {
		cy.visit(checkoutOne, { failOnStatusCode: false })
		Login.get.error().should('contain', checkoutOneError)
	})
	it('6517 | TC13: Validar usuario ingresa al endpoint /checkout-step-two.html', () => {
		cy.visit(checkoutTwo, { failOnStatusCode: false })
		Login.get.error().should('contain', checkoutTwoError)
	})
	it('6517 | TC14: Validar usuario ingresa al endpoint /checkout-complete.html', () => {
		cy.visit(checkoutAll, { failOnStatusCode: false })
		Login.get.error().should('contain', checkoutAllError)
	})
})
