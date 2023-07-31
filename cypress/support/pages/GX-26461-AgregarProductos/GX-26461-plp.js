class ProductList {
	get = {
		anyItem: () => cy.get('[class$="item_description"]'),
		itemName: () => cy.get('[class$="item_name"]'),
		itemDescription: () => cy.get('[class$="item_desc"]'),
		itemButtons: () => cy.get('[class$="btn_small btn_inventory"]'),
		cartIconLink: () => cy.get('[class="shopping_cart_link"]'),
		added: () => cy.get('[class="shopping_cart_badge"]'),
	};

	addToCart() {
		return this.randomAdd().then(r => {
			this.get.itemButtons().eq(r).click();
			return this.get.itemButtons().eq(r).invoke('text');
		});
	}

	addedProducts() {
		return this.get.added().invoke('text');
	}

	randomAdd() {
		return this.get.itemButtons().then(index => {
			const position = index.length - 1;
			const ran = Cypress._.random(0, position);
			return ran;
		});
	}

	goToCart() {
		this.get.cartIconLink().click();
	}
}

export const plp = new ProductList();
