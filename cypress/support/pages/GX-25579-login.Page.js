class homeSaucePage {
	elements = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginBtn: () => cy.get('#login-button'),
		itemsContainer: () => cy.get('#inventory_container'),
		errorMessage: () => cy.get('h3[data-test="error"]'),
	};

	typeUsername(username) {
		username && this.elements.usernameInput().type(username);
	}

	typePassword(password) {
		password && this.elements.passwordInput().type(password);
	}
	clickLogin() {
		this.elements.loginBtn().click();
	}
}

export const homeSagPage = new homeSaucePage();
