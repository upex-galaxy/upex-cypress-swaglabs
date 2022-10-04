//const { get } = require("cypress/types/lodash")

describe('GX-935 : SwagLabs | Menu | Hacer varias Acciones desde un Burger Menu', () =>
{
	beforeEach('Precondición: El usiario debe estar logueado', () =>
	{
		cy.visit('https://www.saucedemo.com/') 
		cy.get('#user-name').type('standard_user')
		cy.get('#password').type('secret_sauce')
		cy.get('#login-button').click()
		cy.title().should('eq', 'Swag Labs')
	})
	it('GX-935|TS-936|TC01 Validar ir a PLP al seleccionar "All items" desde una PDP.', () =>
	{
		cy.get('.shopping_cart_link').click()
		cy.location('pathname').should('eq', '/cart.html')
		cy.get('#react-burger-menu-btn').click()
		cy.get('#inventory_sidebar_link').click()
		cy.location('pathname').should('eq', '/inventory.html')

			})	
		
			
	it('GX-935|TS-936|TC02 Validar ir a la pagina saucelabs.com al seleccionar "About"', () =>
	{
		cy.get('#react-burger-menu-btn').click()
		cy.get('#about_sidebar_link')
			.then((link) => {
				cy.request(link.prop('href'))
					.its('status').should('eq', 200)
				})			
	})
	it('GX-935|TS-936|TC03 Validar desloguearse al seleccionar "Logout"', () =>
	{
		cy.get('#react-burger-menu-btn').click()
		cy.get('#logout_sidebar_link').click()
		cy.url().should('eq', 'https://www.saucedemo.com/')
	})
	it('GX-935|TS-936|TC04 Validar vaciar el shoppinCart al seleccionar "Reset App State"', () =>
	{
		cy.get('#react-burger-menu-btn').click()
		cy.get('#add-to-cart-sauce-labs-bike-light').click()
		cy.get('.shopping_cart_badge').should('exist')
		cy.get('#reset_sidebar_link').click()
		cy.get('.shopping_cart_badge').should('not.exist')

	})
})
