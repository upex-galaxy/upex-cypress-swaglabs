class homeSaucePage {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginBtn: () => cy.get('#login-button'),
		errorMessage: () => cy.get('h3[data-test="error"]'),
	};

	typeUsername(username) {
		this.get.usernameInput().type(username);
	}

	typePassword(password) {
		this.get.passwordInput().type(password);
	}

	clickLogin() {
		this.get.loginBtn().click();
	}
}
export const homeSaucePag = new homeSaucePage();
