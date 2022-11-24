import {And, Given, Then, When} from '@badeball/cypress-cucumber-preprocessor'
import {faker} from '@faker-js/faker'
let the
	before(() => {
		cy.fixture('DOM/SCP/Checkckout2.Page').then((data) => {
			the = data
		})
	})

context('✅SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {

	Given('user must be logged in', () => {
		cy.visit('/')
		cy.url().should('contain', 'saucedemo')
		cy.clearCookies()
		cy.clearLocalStorage()
	})
	And('user must add some items to Cart at least', () => {
		cy.get(the.login.username).type('standard_user')
		cy.get(the.login.password).type('secret_sauce')
		cy.get(the.login.submit).click()
	})
	And('user must complete the checkout process until step-two', () => {
		function addtoCart() {
			cy.get(the.item.add).then(($item) => {
				const $i = Math.floor(Math.random() * $item.length + 1) - 1
				cy.wrap($item).eq($i).click()
			})
		}
		addtoCart()
		addtoCart()
		addtoCart()

		cy.get(the.Cart).click()
		cy.url().should('contain', 'cart.html')

		cy.get(the.checkout).click()

		cy.get(the.form.firstName).type(faker.name.firstName())
		cy.get(the.form.lastName).type(faker.name.lastName())
		cy.get(the.form.postalCode).type(faker.address.zipCode())
		cy.get(the.form.continue).click()

		cy.url().should('contain', 'checkout-step-two.html')
	})
	describe('3600 | TC1: Check Finish Checkout button when there are multiple added items.', () => {
		When('user clicks on the Finish as {string} button', (btnName) => {
			cy.get(the.checkout2.finish).should('have.text', btnName).click()
		})
		Then('user should visit the final stage complete checkout page', () => {
			cy.url().should('contain', 'checkout-complete.html')
			cy.contains('THANK YOU FOR YOUR ORDER').should('exist')
		})
		And('items should be bought and they should not be on cart any more', () => {
			cy.get(the.AddedItems).should('not.exist')
		})
	})
	describe('3600 | TC2: Check Cancel Checkout button when there are multiple added items.', () => {
		When('user clicks on the Cancel as {string} button', (btnName) => {
			cy.get(the.checkout2.cancel).within((btn) => {
				cy.contains(btnName).should('exist')
				cy.wrap(btn).click()
			})
		})
		Then('user should go back to the product list page', () => {
			cy.url().should('contain', 'inventory.html')
		})
		And('items should keep added to the cart', () => {
			cy.get(the.AddedItems).then((item) => {
				expect(parseInt(item.text())).to.be.greaterThan(1)
			})
		})
	})
})
