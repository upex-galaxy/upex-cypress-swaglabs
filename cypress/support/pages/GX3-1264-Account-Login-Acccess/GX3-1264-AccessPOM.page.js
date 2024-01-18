class AccessPOM {
	get = {
		inputUserName: () => cy.get('#user-name'),
		inputPassword: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		dataError: () => cy.get('[data-test="error"]'),
		titleProducts: () => cy.get('.title'),
	};

	enterUserName(name) {
		this.get.inputUserName().type(name);
		this.get.inputUserName().should('have.value', name);
	}

	enterPassword(password) {
		this.get.inputPassword().type(password);
		this.get.inputPassword().should('have.value', password);
	}

	clickOnSubmitBtn() {
		this.get.submitButton().click();
	}
}

export const accessPOM = new AccessPOM();
