class Checkout {
	get = {
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		btnLogin: () => cy.get('#login-button'),
		btnSpan: () => cy.get('.shopping_cart_badge'),
		productoBack: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		productoTshirt: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		productBike: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
		productJacket: () => cy.get('#add-to-cart-sauce-labs-fleece-jacket'),
		productTshitRed: () => cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)'),
		shoppingCart: () => cy.get('#shopping_cart_container> a'),
		firstName: () => cy.get('#first-name'),
		lastName: () => cy.get('#last-name'),
		postalCode: () => cy.get('#postal-code'),
		btnCheckout: () => cy.get('#checkout'),
		btnContinue: () => cy.get('#continue'),
		btCancel: () => cy.get('#cancel'),
		btnfinish: () => cy.get('#finish'),
		showLabels: () => cy.get('.inventory_item_name'),
		labelTotal: () => cy.get('.inventory_item_price'),
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
		const productos = [this.get.productoBack, this.get.productoTshirt, this.get.productBike, this.get.productJacket, this.get.productTshitRed];
		const indexProduc = Math.floor(Math.random() * productos.length);
		productos[indexProduc]().click();
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

	// showTotal() {
	// 	this.get.labelTotal().click();
	// }
}

export const checkout = new Checkout();
