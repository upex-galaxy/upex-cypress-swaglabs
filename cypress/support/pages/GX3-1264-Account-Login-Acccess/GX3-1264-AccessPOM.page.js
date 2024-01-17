class AccessPOM {
	get = {
		inputUserName: () => cy.get('#user-name'),
		inputPassword: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		dataError: () => cy.get('[data-test="error"]'),
		titleProducts: () => cy.get('.title'),
	};

	enterUserName(name) {
		return this.get.inputUserName().type(name);
	}

	enterPassword(password) {
		return this.get.inputPassword().type(password);
	}

	clickOnSubmitBtn() {
		return this.get.submitButton().click();
	}
}

export const accessPOM = new AccessPOM();
