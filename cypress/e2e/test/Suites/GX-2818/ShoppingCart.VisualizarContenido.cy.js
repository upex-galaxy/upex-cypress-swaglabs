describe('GX-2818: SwagLabs | SCP | Acceder al Shopping Cart y visualizar contenido', () => {
	// SH + ALT + F
	beforeEach('Precondición: El usiario debe estar logueado', () => {
		cy.visit('https://www.saucedemo.com/')
		cy.get('#user-name').type('standard_user')
		cy.get('#password').type('secret_sauce')
		cy.get('#login-button').click()
		cy.title().should('eq', 'Swag Labs')
	})
	it('2818 | TC1: Validar elementos de seccion Carrito vacio', () => {
		cy.get('#shopping_cart_container').click()
		cy.get('.title').contains('Your Cart')
		cy.get('.cart_quantity_label').contains('QTY')
		cy.get('.cart_desc_label').contains('DESCRIPTION')
		cy.get('#continue-shopping').contains('Continue Shopping')
		cy.get('#checkout').contains('Checkout')
	})
	it('2818 | TC2: Validar elementos de seccion Carrito con item', () => {
		cy.get('#item_0_title_link').click()
		cy.get('#add-to-cart-sauce-labs-bike-light').click()
		cy.get('#shopping_cart_container').click()
		cy.get('.title').contains('Your Cart')
		cy.get('.cart_quantity_label').contains('QTY')
		cy.get('.cart_desc_label').contains('DESCRIPTION')
		cy.get('#continue-shopping').contains('Continue Shopping')
		cy.get('#checkout').contains('Checkout')
		cy.get('#remove-sauce-labs-bike-light').contains('Remove')

	})
	
})
