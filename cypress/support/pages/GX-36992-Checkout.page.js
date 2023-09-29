class Checkout {
	get = {
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		btnLogin: () => cy.get('#login-button'),
		btnAddCart: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		btnSpan: () => cy.get('.shopping_cart_link> span'),
		shoppingCart: () => cy.get('#shopping_cart_container> a'),
		productoCart: () => cy.get('.inventory_item'), // requiere eq para los productos
		firstName: () => cy.get('#first-name'),
		lastName: () => cy.get('#last-name'),
		postalCode: () => cy.get('#postal-code'),
		btnCheckout: () => cy.get('#checkout'),
		btnContinue: () => cy.get('#continue'),
		btCancel: () => cy.get('#cancel'),
		btnfinish: () => cy.get('#finish'),
		label1: () => cy.get('.summary_info_label'), // requiere eq para los labels
		labelTotal: () => cy.get('summary_info_label summary_total_label'),
		h2: () => cy.get('.complete-header'),
		text: () => cy.get('.complete-text'),
	};

	username() {
		this.get.username().click();
	}
	lastName() {
		this.get.lastName().click();
	}
	btnLogin() {
		this.get.btnLogin().click();
	}
	productCart() {}
}
