class Checkout {
	get = {
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		btnLogin: () => cy.get('#login-button'),
		btnSpan: () => cy.get('.shopping_cart_badge'),
		productoBack: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		productoRemera: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		productBike: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
		productJacket: () => cy.get('#add-to-cart-sauce-labs-fleece-jacket'),
		productRemeraRed: () => cy.get('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
		shoppingCart: () => cy.get('#shopping_cart_container> a'),
		firstName: () => cy.get('#first-name'),
		lastName: () => cy.get('#last-name'),
		postalCode: () => cy.get('#postal-code'),
		btnCheckout: () => cy.get('#checkout'),
		btnContinue: () => cy.get('#continue'),
		btnCancel: () => cy.get('#cancel'),
		btnfinish: () => cy.get('#finish'),
		showLabels: () => cy.get('.inventory_item_name'),
		labelTotal: () => cy.get('.inventory_item_price'),
		img: () => cy.get('.pony_express'),
		h2: () => cy.get('.complete-header'),
		text: () => cy.get('.complete-text'),
	};

	username(username) {
		this.get.username().type(username);
	}
	password(password) {
		this.get.password().type(password);
	}
	btnLogin() {
		this.get.btnLogin().click();
	}

	selectProduct() {
		const productos = [this.get.productoBack, this.get.productRemera, this.get.productBike, this.get.productJacket, this.get.productRemeraRed];
		const indexProduct = Math.floor(Math.random() * productos.length);
		productos[indexProduct]().click();
	}
	btnCartShopping() {
		this.get.shoppingCart().click();
	}

	clickBtnCheckout() {
		this.get.btnCheckout().click();
	}

	firstName(firstName) {
		this.get.firstName().type(firstName);
	}
	lastName(lastName) {
		this.get.lastName().type(lastName);
	}
	codePostal(postalCode) {
		this.get.postalCode().type(postalCode);
	}
	btnContinue() {
		this.get.btnContinue().click();
	}

	selectLabels() {
		const labels = ['SauceCard #31337', 'Shipping Information', 'Price Total', 'Total'];
		const indexLabels = Math.floor(Math.random() * labels.length);
		return labels[indexLabels];
	}
	clickBtnFinish() {
		this.get.btnfinish().click();
	}
	clickH2() {
		this.get.h2().click();
	}
	clickText() {
		this.get.text().click();
	}
	clickImg() {
		this.get.img().click();
	}
	clickBtnCancel() {
		this.get.btnCancel().click();
	}
}

export const checkout = new Checkout();
