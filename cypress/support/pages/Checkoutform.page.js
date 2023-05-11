class checkout {
	get = {
		firstname: () => cy.get('#first-name'),
		lastname: () => cy.get('#last-name'),
		codepostal: () => cy.get('#postal-code'),
		continueBtn: () => cy.get('#continue'),
		errorContainer: () => cy.get('[data-test*=error]'),
		complete: () => cy.get('#finish'),
	};

	TypeFirstName(type) {
		this.get.firstname().type(type);
	}
	TypeLastName(type) {
		this.get.lastname().type(type);
	}
	TypePostalCode(type) {
		this.get.codepostal().type(type);
	}
	SubmitCheckout() {
		this.get.continueBtn().click();
	}
}
export const Checkout = new checkout();
