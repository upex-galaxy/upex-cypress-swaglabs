const randomIndexByElements = elementQty => Math.floor(Math.random() * elementQty);

describe('KT Example Test: Add Product to the Shopping Cart', () => {
	beforeEach(() => {
		// runs before every it() test block}
		cy.loginSuccess();
		// Write your test case one here
		cy.get('.inventory_item')
			.then(cards => {
				const cantidad = cards.length;
				const randomIndex = randomIndexByElements(cantidad);
				cy.wrap(cards)
					.eq(randomIndex)
					.within(() => {
						cy.get('button').click();
						cy.get('.inventory_item_price')
							.then(elementPrice => {
								return elementPrice.text();
							})
							.then($price => {
								Cypress.env('selectedItemPrice', $price);
							});
					});
			})
			.then(() => {
				cy.log(Cypress.env('selectedItemPrice'));
			});
	});
	// -- Start: Cypress Tests --
	it.skip('Should add a product to the SCP and persists the same price items values', () => {
		cy.get('#shopping_cart_container').click();
		cy.url().should('contain', 'cart.html');

		//todo: ShoppingCart
		cy.get('.inventory_item_price').then(actualPrice => {
			const addedPrice = actualPrice.text();
			const expectedPrice = Cypress.env('selectedItemPrice');
			expect(addedPrice).equal(expectedPrice);
		});
	});

	it(' Get all elements and filter by Option', () => {
		function getListOfItemDetails() {
			let ProductListDatabase = [];
			return cy
				.get('.inventory_item')
				.then(items => {
					const quantity = items.length;
					for (let index = 0; index < quantity; index++) {
						cy.wrap(items)
							.eq(index)
							.within(() => {
								cy.get('.inventory_item_name')
									.then(element => {
										return element.text();
									})
									.then($itemName => Cypress.env('itemName', $itemName));

								cy.get('.inventory_item_price')
									.then(element => {
										return parseFloat(element.text().replace('$', ''));
									})
									.then($itemPrice => Cypress.env('itemPrice', $itemPrice));

								cy.get('.inventory_item_desc')
									.then(element => {
										return element.text();
									})
									.then($itemDesc => Cypress.env('itemDesc', $itemDesc));
							})
							.then(() => {
								//todo: construir el objeto del item con las variables de atributos
								const productDetails = {
									name: Cypress.env('itemName'),
									price: Cypress.env('itemPrice'),
									description: Cypress.env('itemDesc'),
								};
								cy.log(productDetails);
								//todo: agregar el objeto al array de database
								ProductListDatabase.push(productDetails);
							});
					} // Close Loop
				})
				.then(() => {
					return ProductListDatabase;
				});
		}

		getListOfItemDetails().then(database => {
			cy.log(database);
		});
	});
});
