class ShoppingCart {
	get = {
		products: () => cy.get('[class="inventory_details_desc_container"]'),
		name: () => cy.get('[class$="item_name"]'),
		description: () => cy.get('[class$="item_desc"]'),
		price: () => cy.get('[class$="item_price"]'),
		button: () => cy.get('[data-test^="remove"]'),
		continueShopping: () => cy.get('[data-test="continue-shopping"]'),
	};

	obtainName() {
		return this.get.name().invoke('text');
	}

	obtainDescription() {
		return this.get.description().invoke('text');
	}

	obtainPrice() {
		return this.get.price().invoke('text');
	}

	goToProductList() {
		this.get.continueShopping().click();
	}
}

export const scp = new ShoppingCart();
