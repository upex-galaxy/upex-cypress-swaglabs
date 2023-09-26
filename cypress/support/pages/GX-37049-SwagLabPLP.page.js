class SwagLabsPLP {
	get = {
		buttonShoppingCart: () => cy.get('#shopping_cart_container'),
		listItemsPLP: () => cy.get('[class="inventory_item"]'),
		listItemName: () => cy.get('[class*="item_name"]'),
		listItemPrice: () => cy.get('[class*="_item_price"]'),
		badgeButtonShoppingCart: () => cy.get('[class="shopping_cart_badge"]'),
		buttonAddItem: () => cy.get('[id^="add-to-cart"]'),
	};

	clickButtonShoppingCart() {
		this.get.buttonShoppingCart().click();
	}

	AddItem() {
		let randomIndex;

		let itemName;
		let itemPrice;

		return this.get
			.listItemsPLP()
			.then($elements => {
				const length = $elements.length;

				randomIndex = Cypress._.random(0, length - 1);
				this.get.listItemsPLP().eq(randomIndex);

				this.get.listItemName().eq(randomIndex).invoke('text');
			})
			.then(name => {
				itemName = name;

				this.get.listItemsPLP().eq(randomIndex);
				this.get.listItemPrice().eq(randomIndex).invoke('text');
			})
			.then(price => {
				itemPrice = price;
			})
			.then(() => {
				this.get.listItemsPLP().eq(randomIndex);
				this.get.buttonAddItem().eq(randomIndex).click();
				this.get.buttonShoppingCart().click();
			})
			.then(() => {
				return [itemName, itemPrice];
			});
	}
}

export const swagLabPLPpage = new SwagLabsPLP();
