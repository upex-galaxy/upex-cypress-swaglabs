describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondición: Situado en la página de Login', () => {
		cy.visit('https://www.saucedemo.com/')
        cy.url().should('contain', 'saucedemo')
	})
	it('6517 | TC1: Validar login con credenciales correctas standard_user.', () => {
		cy.get("[type='text']").type('standard_user')
		cy.get("[type='password']").type('secret_sauce')
		cy.get('#login-button')
		cy.contains('Login').click()
		cy.url('https://www.saucedemo.com/inventory.html').should('include', 'inventory')
	})
	it('6517 | TC2: Validar login con credenciales correctas problem_user.', () => {
		cy.get("[type='text']").type('problem_user') //user correcto
		cy.get("[type='password']").type('secret_sauce') //password correcto
		cy.get('#login-button')
		cy.contains('Login').click()
		cy.url('https://www.saucedemo.com/inventory.html').should('include', 'inventory')
	})
	it('6517 | TC3: Validar login con credenciales correctas performance_glitch_user', () => {
		cy.get("[type='text']").type('performance_glitch_user') //user correcto
		cy.get("[type='password']").type('secret_sauce') //password correcto
		cy.get('#login-button')
		cy.contains('Login').click()
		cy.url('https://www.saucedemo.com/inventory.html').should('include', 'inventory')
	})

	it('6517 | TC4: Validar usuario no inicia sesion con cuenta bloqueada locked_out_user', () => {
		cy.get("[type='text']").type('locked_out_user') //user incorrecta
		cy.get("[type='password']").type('secret_sauce') //password incorrecta
		cy.get('#login-button')
		cy.contains('Login').click()
		cy.get("[data-test='error']")
		cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
	})
	it('6517 | TC5: Validar usuario inicia sesion con usuario correcto y password incorrecta.', () => {
		cy.get("[type='text']").type('standard_user') //user correcto
		cy.get("[type='password']").type('asd12345') //password incorrecta
		cy.get('#login-button')
		cy.contains('Login').click()
		cy.get("[data-test='error']")
		cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
	})
	it('6517 | TC6: Validar usuario inicia sesion con usuario incorrecto y password correcta.', () => {
		cy.get("[type='text']").type('usuario_incorrecto') //user incorrecto
		cy.get("[type='password']").type('secret_sauce') //password correcto
		cy.get('#login-button')
		cy.contains('Login').click()
		cy.get("[data-test='error']")
		cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
	})
	it('6517 | TC7: Validar usuario inicia sesion con usuario valido y password null.', () => {
		cy.get("[type='text']").type('standard_user') //user correcto
		cy.get("[type='password']").clear().should('have.value', '') //password null
		cy.get('#login-button')
		cy.contains('Login').click()
		cy.get("[data-test='error']")
		cy.contains('Epic sadface: Password is required').should('be.visible')
	})
	it('6517 | TC8: Validar usuario inicia sesion con usuario null y password valido.', () => {
		cy.get("[type='text']").clear().should('have.value', '') //user null
		cy.get("[type='password']").type('secret_sauce') //password correcto
		cy.get('#login-button')
		cy.contains('Login').click()
		cy.get("[data-test='error']")
		cy.contains('Epic sadface: Username is required').should('be.visible')
	})
	it('6517 | TC9: Validar usuario inicia sesion con usuario null y password null.', () => {
		cy.get("[type='text']").clear().should('have.value', '') //user null
		cy.get("[type='password']").clear().should('have.value', '') //password null
		cy.get('#login-button')
		cy.contains('Login').click()
		cy.get("[data-test='error']")
		cy.contains('Epic sadface: Username is required').should('be.visible')
	})
	it.only('6517 | TC10: Validar usuario ingresa al endpoint /inventory.html', () => {

		cy.visit('https://www.saucedemo.com/inventory.html', {failOnStatusCode: false})
		cy.get("[data-test='error']").should('contain', "Epic sadface: You can only access '/inventory.html' when you are logged in.")
	})
	it('6517 | TC11: Validar usuario ingresa al endpoint /cart.html', () => {})
	it('6517 | TC12: Validar usuario ingresa al endpoint /checkout-step-one.html', () => {})
	it('6517 | TC13: Validar usuario ingresa al endpoint /checkout-step-two.html', () => {})
	it('6517 | TC14: Validar usuario ingresa al endpoint /checkout-complete.html', () => {})
})
