const randomItem = elementQty => Math.floor(Math.random() * elementQty);

class ProductDetailPage {
	get = {
		inventoryContainer: () => cy.get('.inventory_details_desc_container'),
		inventoryDetailName: () => cy.get('div[class^="inventory_details_name"]'),
		inventoryDetailPrice: () => cy.get('div[class="inventory_details_price"]'),
		inventoryDetailDesc: () => cy.get('div[class^="inventory_details_desc"]'),
		inventoryItem: () => cy.get('.inventory_item'),
		inventoryName: () => cy.get('.inventory_item_name'),
		inventoryPrice: () => cy.get('.inventory_item_price'),
		inventoryDesc: () => cy.get('.inventory_item_desc'),
		btnInventory: () => cy.get('.btn_inventory'),
		informationContainer: () => cy.get('.inventory_item_description'),
		addToCartButton: () => cy.get('button[data-test^=add-to-cart]'),
		backToProductsBtn: () => cy.get('[data-test=back-to-products'),
		cartItem: () => cy.get('.cart_item'),
	};

	addRandomItemPDP() {
		this.get.informationContainer().then(cards => {
			const qtyCards = cards.length;
			const random = randomItem(qtyCards);
			cy.wrap(cards)
				.eq(random)
				.within(() => {
					cy.get('a[id^="item"]').click();
				});
		});
		this.get.inventoryContainer().within(() => {
			this.get.addToCartButton().click;
			this.get
				.inventoryDetailName()
				.then(elementName => {
					const name = elementName.text();
					return name;
				})
				.then($itemName => {
					Cypress.env('selectedItemName1', $itemName);
				});
			this.get
				.inventoryDetailPrice()
				.then(elementPrice => {
					const name = elementPrice.text();
					return name;
				})
				.then($itemPrice => {
					Cypress.env('selectedItemPrice1', $itemPrice);
				});
			this.get
				.inventoryDetailDesc()
				.then(elementDesc => {
					const desc = elementDesc.text();
					return desc;
				})
				.then($itemDesc => {
					Cypress.env('selectedItemDesc1', $itemDesc);
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
	add2RandomItemsPDPinTheSC() {
		let arrayRandomItems = [];
		this.get.informationContainer().then(cards => {
			const qtyCards = cards.length;
			const random = randomItem(qtyCards);
			cy.wrap(cards)
				.eq(random)
				.within(() => {
					cy.get('a[id^="item"]').click();
				});
		});
		this.get
			.inventoryContainer()
			.within(() => {
				this.get.addToCartButton().click();
				this.get
					.inventoryDetailName()
					.then(elementName => {
						const name = elementName.text();
						return name;
					})
					.then($itemName => {
						Cypress.env('selectedItemName1', $itemName);
					});
				this.get
					.inventoryDetailPrice()
					.then(elementPrice => {
						const price = elementPrice.text();
						return price;
					})
					.then($itemPrice => {
						Cypress.env('selectedItemPrice1', $itemPrice);
					});
				this.get
					.inventoryDetailDesc()
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
		this.get.backToProductsBtn().click();
		this.get.informationContainer().then(cards => {
			const qtyCards = cards.length;
			const random = randomItem(qtyCards);
			cy.wrap(cards)
				.eq(random)
				.within(() => {
					cy.get('a[id^="item"]').click();
				});
		});
		this.get
			.inventoryContainer()
			.within(() => {
				this.get.addToCartButton().click();
				this.get
					.inventoryDetailName()
					.then(elementName => {
						const name = elementName.text();
						return name;
					})
					.then($itemName => {
						Cypress.env('selectedItemName2', $itemName);
					});
				this.get
					.inventoryDetailPrice()
					.then(elementPrice => {
						const price = elementPrice.text();
						return price;
					})
					.then($itemPrice => {
						Cypress.env('selectedItemPrice2', $itemPrice);
					});
				this.get
					.inventoryDetailDesc()
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
	}
}

export const productDetailPage = new ProductDetailPage();
