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
						});
				})
				.then(() => {
					const productDetails = {
						name: Cypress.env('selectedItemName1'),
						price: Cypress.env('selectedItemPrice1'),
						desc: Cypress.env('selectedItemDesc1'),
					};
					arrayRandomItems.push(productDetails);
				});
			cy.log(arrayRandomItems);
		});
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
							Cypress.env('selectedItemName2', $itemName);
						});
					this.get
						.inventoryPrice()
						.then(elementPrice => {
							const name = elementPrice.text();
							return name;
						})
						.then($itemPrice => {
							Cypress.env('selectedItemPrice2', $itemPrice);
						});
					this.get
						.inventoryDesc()
						.then(elementDesc => {
							const desc = elementDesc.text();
							return desc;
						})
						.then($itemDesc => {
							Cypress.env('selectedItemDesc2', $itemDesc);
						});
				})
				.then(() => {
					const productDetails = {
						name: Cypress.env('selectedItemName2'),
						price: Cypress.env('selectedItemPrice2'),
						desc: Cypress.env('selectedItemDesc2'),
					};
					arrayRandomItems.push(productDetails);
				});
			cy.log(arrayRandomItems);
		});
	}
	validate2ItemsSC() {
		this.get
			.cartItem()
			.eq(0)
			.then(items => {
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
		this.get
			.cartItem()
			.eq(1)
			.then(items => {
				cy.wrap(items).within(() => {
					this.get.inventoryName().then(actualName => {
						const addedName = actualName.text();
						expect(addedName).equal(Cypress.env('selectedItemName2'));
					});
					this.get.inventoryPrice().then(actualPrice => {
						const addedPrice = actualPrice.text();
						expect(addedPrice).equal(Cypress.env('selectedItemPrice2'));
					});
					this.get.inventoryDesc().then(actualDesc => {
						const addedDesc = actualDesc.text();
						expect(addedDesc).equal(Cypress.env('selectedItemDesc2'));
					});
				});
			});
	}
	ClickBackToProductBtn() {
		this.get.backToProductsBtn().click();
	}
}

export const productListPage = new ProductListPage();
