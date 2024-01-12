class AccessPOM {
	get = {
		inputUserName: () => cy.get('#user-name'),
		inputPassword: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		dataError: () => cy.get('[data-test="error"]'),
		swagsWord: () => cy.get('.app_logo'),
	};

	enterUserName(name) {
		return this.get.inputUserName().type(name);
	}

	enterPassword(passw) {
		return this.get.inputPassword().type(passw);
	}

	clickOnSubmitBtn() {
		return this.get.submitButton().click();
	}
}

export const accessPOM = new AccessPOM();
