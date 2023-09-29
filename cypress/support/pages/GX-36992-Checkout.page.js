class Checkout {
	get = {
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		btnLogin: () => cy.get('#login-button'),
		btnSpan: () => cy.get('.shopping_cart_link> span'),
		productoBack: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		productoTshirt: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		productBike: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
		productJacket: () => cy.get('add-to-cart-sauce-labs-fleece-jacket'),
		productTshitRed: () => cy.get('add-to-cart-test.allthethings()-t-shirt-(red)'),
		shoppingCart: () => cy.get('#shopping_cart_container> a'),
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
		this.get.username().type();
	}
	lastName() {
		this.get.password().type();
	}
	btnLogin() {
		this.get.btnLogin().click();
	}

	checkProduct() {
		this.get.productoCart().click();
	}
	clickBtnCheckout() {
		this.get.productoCart().click();
	}
	selectProduct() {
		const productos = [productoBack(), productoTshirt(), productBike(), productJacket(), productTshitRed()];
		const indexProduc = Math.floor(Math.random() * productos.length);
		productos.eq(indexProduc).click();
	}
	btnCartShopping() {
		this.get.btnCheckout().click();
	}
	firstName() {
		this.get.firstName().type();
	}
	lastName() {
		this.get.lasttName().type();
	}
	codePostal() {
		this.get.postalCode().type();
	}
	btnContinue() {
		this.get.btnContinue().click();
	}
}

export const checkout = new Checkout();
