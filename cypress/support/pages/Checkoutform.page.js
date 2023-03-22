class checkout {
	get = {
		firstname1: () => cy.get('#first-name'),
		lastname2: () => cy.get('#last-name'),
		codepostal: () => cy.get('#postal-code'),
		continue1: () => cy.get('#continue'),
		br: () => cy.get('[class="error-message-container error"]'),
		complete: () => cy.get('#finish'),
	};

	firstname(text) {
		this.get.firstname1(text).type(text);
	}
	lastname(text) {
		this.get.lastname2(text).type(text);
	}
	postalCode(text) {
		this.get.codepostal(text).type(text);
	}
	continue() {
		this.get.continue1().click();
	}
	FBR2() {
		this.get.br().should('contain', 'Error: First Name is required');
	}
	FBR3() {
		this.get.br().should('contain', 'Error: Last Name is required');
	}
	FBR4() {
		this.get.br().should('contain', 'Error: Postal Code is required');
	}
	Finish() {
		this.get.complete().should('contain', 'Finish');
	}
}

export const Checkout = new checkout();
