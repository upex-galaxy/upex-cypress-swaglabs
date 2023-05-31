const randomItem = elementQty => Math.floor(Math.random() * elementQty);

class ProductListPage {
	get = {
		linkProduct: () => cy.get('a'),
		inventoryItem: () => cy.get('.inventory_item'),
		btnInventory: () => cy.get('.btn_inventory'),
		inventoryName: () => cy.get('.inventory_item_name'),
		inventoryPrice: () => cy.get('.inventory_item_price'),
		inventoryDesc: () => cy.get('.inventory_item_desc'),
		informationContainer: () => cy.get('.inventory_item_description'),
		addToCartButton: () => cy.get('[data-test^=add]'),
		backToProductsBtn: () => cy.get('[data-test=back-to-products'),
		cartItem: () => cy.get('.cart_item'),
	};

	ClickAddToCartButton() {
		this.get.addToCartButton().click();
	}
	addRandomItemPLP() {
		this.get.inventoryItem().then(cards => {
			const qtyCards = cards.length;
			const random = randomItem(qtyCards);
			cy.wrap(cards)
				.eq(random)
				.within(() => {
					cy.get('button').click();
					this.get
						.inventoryName()
						.then(elementName => {
							const name = elementName.text();
							return name;
						})
						.then($itemName => {
							Cypress.env('selectedItemName1', $itemName);
						});
					this.get
						.inventoryPrice()
						.then(elementPrice => {
							const name = elementPrice.text();
							return name;
						})
						.then($itemPrice => {
							Cypress.env('selectedItemPrice1', $itemPrice);
						});
					this.get
						.inventoryDesc()
						.then(elementDesc => {
							const desc = elementDesc.text();
							return desc;
						})
						.then($itemDesc => {
							Cypress.env('selectedItemDesc1', $itemDesc);
						});
				});
		});
	}

	validateItemSC() {
		this.get.cartItem().then(items => {
			cy.wrap(items).within(() => {
				this.get.inventoryName().then(actualName => {
					const addedName = actualName.text();
					expect(addedName).equal(Cypress.env('selectedItemName1'));
				});
				this.get.inventoryPrice().then(actualPrice => {
					const addedPrice = actualPrice.text();
					expect(addedPrice).equal(Cypress.env('selectedItemPrice1'));
				});
				this.get.inventoryDesc().then(actualDesc => {
					const addedDesc = actualDesc.text();
					expect(addedDesc).equal(Cypress.env('selectedItemDesc1'));
				});
			});
		});
	}
	add2RandomItemsPLP() {
		let arrayRandomItems = [];
		for (let i = 0; i < 2; i++) {
			cy.get('[data-test^=add]').then(cards => {
				const qtyCards = cards.length;
				const random = randomItem(qtyCards);
				cy.wrap(cards)
					.eq(random)
					.parentsUntil('.inventory_item')
					.last()
					.within(() => {
						this.get
							.inventoryName()

							.then(elementName => {
								const name = elementName.text();
								return name;
							})
							.then($itemName => {
								Cypress.env('selectedItemName1', $itemName);
							});
						this.get
							.inventoryPrice()

							.then(elementPrice => {
								const price = elementPrice.text();
								return price;
							})
							.then($itemPrice => {
								Cypress.env('selectedItemPrice1', $itemPrice);
							});
						this.get
							.inventoryDesc()

							.then(elementDesc => {
								const desc = elementDesc.text();
								return desc;
							})
							.then($itemDesc => {
								Cypress.env('selectedItemDesc1', $itemDesc);
							})
							.then(() => {
								const productDetails = {
									name: Cypress.env('selectedItemName1'),
									price: Cypress.env('selectedItemPrice1'),
									desc: Cypress.env('selectedItemDesc1'),
								};
								arrayRandomItems.push(productDetails);
							});
						cy.get('button').click();
					});

				cy.log(arrayRandomItems);
			});
		}
		Cypress.env('arrayRandomItems', arrayRandomItems);
	}
	validate2ItemsSC() {
		for (let i = 0; i < 2; i++) {
			this.get
				.cartItem()
				.eq(i)
				.then(cards => {
					cy.wrap(cards).within(() => {
						this.get.inventoryName().then(actualName => {
							const addedName = actualName.text();
							expect(addedName).equal(Cypress.env('arrayRandomItems')[i].name);
							cy.log(Cypress.env('arrayRandomItems'));
						});
						this.get.inventoryPrice().then(actualPrice => {
							const addedPrice = actualPrice.text();
							expect(addedPrice).equal(Cypress.env('arrayRandomItems')[i].price);
						});
						this.get.inventoryDesc().then(actualDesc => {
							const addedDesc = actualDesc.text();
							expect(addedDesc).equal(Cypress.env('arrayRandomItems')[i].desc);
						});
					});
				});
		}
	}
	ClickBackToProductBtn() {
		this.get.backToProductsBtn().click();
	}
}

export const productListPage = new ProductListPage();
