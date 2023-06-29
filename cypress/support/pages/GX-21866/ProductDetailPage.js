class ProductDetailPage {
	get = {
		addButton: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		removeButton: () => cy.get('#remove-sauce-labs-bolt-t-shirt'),
		itemName: () => cy.get('[class^=inventory_details_name]'),
		itemPrice: () => cy.get('.inventory_details_price'),
		continueButton: () => cy.get('[data-test=continue-shopping]'),
		backButton: () => cy.get('#back-to-products'),
		pageTitle: () => cy.get('.header_label'),
		item: () => cy.get('#inventory_item_container'),
		scBadge: () => cy.get('.shopping_cart_badge'),
		cartIcon: () => cy.get('.shopping_cart_link'),
		itemTShirt: () => cy.get('#item_1_title_link'),
	};

	addButton() {
		this.get.addButton().click();
	}

	addToCart() {
		this.get.addButton().click();
	}

	goToShoppingCart() {
		this.get.cartIcon().click();
	}

	itemTShirt() {
		this.get.itemTShirt().click();
	}
}

export const PDP = new ProductDetailPage();
