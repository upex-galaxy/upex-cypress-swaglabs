class SwagLabsPLP {
	get = {
		buttonShoppingCart: () => cy.get('#shopping_cart_container'),
		listItemsPLP: () => cy.get('[class="inventory_item"]'),
		listItemName: () => cy.get('[class*="item_name"]'),
		listItemPrice: () => cy.get('[class*="_item_price"]'),
		badgeButtonShoppingCart: () => cy.get('[class="shopping_cart_badge"]'),
		buttonAddItem: () => cy.get('[id^="add-to-cart"]'),
		parentElementNoButtonRemove: index =>
			cy.get('[class="inventory_item_name"]').parent().parent().parent().find('button:not([id*="remove"])').eq(`${index}`),
	};

	clickButtonShoppingCart() {
		this.get.buttonShoppingCart().click();
	}

	AddItem({ randomIndexOptional: randomIndex = '' }) {
		let itemName;
		let itemPrice;

		return this.get
			.listItemsPLP()
			.then($elements => {
				const length = $elements.length;

				randomIndex == '' ? (randomIndex = Cypress._.random(0, length - 1)) : randomIndex;

				this.get.parentElementNoButtonRemove(randomIndex).parent().parent().parent().find('[class*="item_name"]').invoke('text');
			})
			.then(name => {
				itemName = name;

				this.get.parentElementNoButtonRemove(randomIndex).parent().parent().parent().find('[class*="_item_price"]').invoke('text');
			})
			.then(price => {
				itemPrice = price;
			})
			.then(() => {
				this.get.buttonAddItem().eq(randomIndex).click();
			})
			.then(() => {
				return [itemName, itemPrice, randomIndex];
			});
	}
	GenerateNewIndex({ oldRandomIndex: oldRandomIndex }) {
		let newRandomIndex;
		return this.get.buttonAddItem().then($elements => {
			const length = $elements.length - 1;

			do {
				newRandomIndex = Math.floor(Math.random() * length);
			} while (newRandomIndex === oldRandomIndex);

			return newRandomIndex;
		});
	}
}

export const swagLabPLPpage = new SwagLabsPLP();
