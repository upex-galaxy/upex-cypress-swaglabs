const data = require('../../../../fixtures/DOM/Account/GX-4127/loginPage.Page.json')

describe(data.test.us, () => {
	beforeEach('precondicion: visitar sitio login', () => {
		cy.visit('https://www.saucedemo.com/')
		cy.url().should('contain', 'saucedemo')
	})

	it(data.test.TC1,() => {
		cy.get(data.username.input).type(data.username.data1)
		cy.get(data.password.input).type(data.password.data)
		cy.get(data.buttonlogin).click()
        cy.url().should('contain','inventory.html')
	})

	it(data.test.TC2, () => {
		cy.get(data.username.input).type(data.username.data2)
		cy.get(data.password.input).type(data.password.data)
		cy.get(data.buttonlogin).click()
		cy.get(data.error.input).should('include.text', data.error.msj1)
	})

	it(data.test.TC3,() => {
		cy.get(data.username.input).type(data.username.data3)
		cy.get(data.password.input).type(data.password.data)
		cy.get(data.buttonlogin).click()
		cy.get(data.error.input).should('include.text', data.error.msj2)
	})

	it(data.test.TC4, () => {
		cy.get(data.password.input).type(data.password.data)
		cy.get(data.buttonlogin).click()
		cy.get(data.error.input).should('include.text', data.error.msj3)
	})

	it(data.test.TC5, () => {
		cy.get(data.username.input).type(data.username.data5)
		cy.get(data.password.input)
		cy.get(data.buttonlogin).click()
		cy.get(data.error.input).should('include.text', data.error.msj4)
	})
	it(data.test.TC6, () => {
		cy.get(data.username.input)
		cy.get(data.password.input)
		cy.get(data.buttonlogin).click()
		cy.get(data.error.input).should('include.text', data.error.msj3)
	})
})
