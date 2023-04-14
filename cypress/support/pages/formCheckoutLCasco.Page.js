class FormCheckPage {
	get = {
		intoShoppingCart: () => cy.get('.shopping_cart_container'),
		intoFormCheckOutButton: () => cy.get('[data-test="checkout"]'),
		inputName: () => cy.get('[data-test="firstName"]'),
		inputLastName: () => cy.get('[data-test="lastName"]'),
		inputCP: () => cy.get('[data-test="postalCode"]'),
		btnContinuo: () => cy.get('[data-test="continue"]'),
	};

	gotoShoppingCart() {
		this.get.intoShoppingCart().click();
	}

	gotoCheckoutForm() {
		this.get.intoFormCheckOutButton().click();
	}

	typeName(text) {
		this.get.inputName().type(text);
	}

	typeLastName(text) {
		this.get.inputLastName().type(text);
	}

	typeCP(text) {
		this.get.inputCP().type(text);
	}

	ClickBtnContinuo() {
		this.get.btnContinuo().click();
	}
}

export const formCheck = new FormCheckPage();
