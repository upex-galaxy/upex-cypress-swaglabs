const datas = require('../../')

describe('login - swaglabs', () => {
	beforeEach('precondicion: visitar sitio login', () => {
		cy.visit('https://www.saucedemo.com/')
		//cy.url().should('login')
	})

	it('TC#1: poder registrarse exitosamente', () => {
		cy.get("[id='user-name']").type('standard_user')
		cy.get("[id='password']").type('secret_sauce')
		cy.get("[id='login-button']").click()
	})

	it('TC#2: usuario intenta iniciar sesión con cuenta bloqueada', () => {
		cy.get("[id='user-name']").type('locked_out_user')
		cy.get("[id='password']").type('secret_sauce')
		cy.get("[id='login-button']").click()
		cy.get('[data-test="error"]').should('include.text', 'Epic sadface: Sorry, this user has been locked out.')
	})

	it('TC#3: usuario intenta iniciar sesión con un cuenta incorrecta o inexistente', () => {
		cy.get("[id='user-name']").type('usuario578')
		cy.get("[id='password']").type('secret_sauce')
		cy.get("[id='login-button']").click()
		cy.get('[data-test="error"]').should('include.text', 'Epic sadface: Username and password do not match any user in this service')
	})

	it('TC#4: usuario intenta iniciar sesión dejando el campo username vacío en el formulario', () => {
		cy.get("[id='user-name']")
		cy.get("[id='password']").type('secret_sauce')
		cy.get("[id='login-button']").click()
		cy.get('[data-test="error"]').should('include.text', 'Epic sadface: Username is required')
	})

	it('TC#5: usuario intenta iniciar sesión dejando el campo password vacío en el formulario', () => {
		cy.get("[id='user-name']").type('standard_user')
		cy.get("[id='password']")
		cy.get("[id='login-button']").click()
		cy.get('[data-test="error"]').should('include.text', 'Epic sadface: Password is required')
	})
	it('TC#6: usuario intenta iniciar sesión dejando campos vacíos en el formulario', () => {
		cy.get("[id='user-name']")
		cy.get("[id='password']")
		cy.get("[id='login-button']").click()
		cy.get('[data-test="error"]').should('include.text', 'Epic sadface: Username is required')
	})
})
