class ProductDetailPage {
	get = {
		addButton: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		removeButton: () => cy.get('#remove-sauce-labs-bolt-t-shirt'),
		itemName: () => cy.get('[class^=inventory_details_name]'),
		itemPrice: () => cy.get('.inventory_details_price'),
		continueButton: () => cy.get('[class^="btn btn_secondary back btn_medium"]'),
		backButton: () => cy.get('#back-to-products'),
		pageTitle: () => cy.get('.header_label'),
		item: () => cy.get('#inventory_item_container'),
	};

	addButton() {
		this.get.addButton().click();
	}

	addToCart() {
		this.get.addButton().click();
	}
}

export const PDP = new ProductDetailPage();
