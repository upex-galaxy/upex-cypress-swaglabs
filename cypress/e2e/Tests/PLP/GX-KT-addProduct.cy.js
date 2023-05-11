import { login } from '@pages/Login.Page';
const { correctUser, correctPass } = Cypress.env('swagLabs').login.users;

const randomIndexByElements = length => Math.floor(Math.random() * length);

describe('KT Example Test: Add Product to the Shopping Cart', () => {
	beforeEach(() => {
		// runs before every it() test block}
		cy.visit('/');
		login.enterUsername(correctUser);
		login.enterPassword(correctPass);
		login.submitLogin();
	});
	// -- Start: Cypress Tests --
	it('Should add a product to the SCP and persists the same price items values', () => {
		// Write your test case one here
		cy.get('.inventory_item').then(cards => {
			const cantidad = cards.length;
			const randomIndex = randomIndexByElements(cantidad);
			let itemPrice;
			cy.wrap(cards)
				.eq(randomIndex)
				.within(() => {
					cy.get('button').click();
					cy.get('.inventory_item_price')
						.then(elementPrice => {
							itemPrice = elementPrice.text();
							return itemPrice;
						})
						.then($price => {
							itemPrice = $price;
						});
				});

			cy.get('#shopping_cart_container').click();
			cy.url().should('contain', 'cart.html');

			cy.get('.inventory_item_price').then(actualPrice => {
				const addedPrice = actualPrice.text();
				expect(addedPrice).equal(itemPrice);
			});
		});
	});
});
