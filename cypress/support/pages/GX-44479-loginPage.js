//  POM

class userAccess {
	// Agarables de Cypress
	// Elementos , propiedades
	get = {
		endpoint: () => cy.visit(''), // baseUrl
		usernameInput: () => cy.get('[name="user-name"]'),
		passwordInput: () => cy.get('[name="password"]'),
		submitButton: () => cy.get('[type="submit"]'),
		messContainer: () => cy.get('.error-message-container'),
		loginBox: () => cy.get('.login-box'),
	};
	//  Accionables de Cypress
	//  Method, Function
	typeUsername(data) {
		this.get.usernameInput().type(data);
	}
	typePassword(data) {
		this.get.passwordInput().type(data);
	}
	submitLogin() {
		this.get.submitButton().click();
	}
}

export const newAccess = new userAccess();
