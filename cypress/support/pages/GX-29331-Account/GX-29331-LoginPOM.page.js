class LoginPOM {
	elements = {
		usernameInput: () => cy.get('[data-test="username"]'),
		passwordInput: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		dataError: () => cy.get('[data-test="error"]'),
		swagsWord: () => cy.get('.app_logo'),
	};

	enterUsername(username) {
		this.elements.usernameInput().type(username);
	}

	enterPassword(password) {
		this.elements.passwordInput().type(password);
	}

	clickOnSubmitBtn() {
		this.elements.submitButton().click();
	}
}
export const loginPOM = new LoginPOM();