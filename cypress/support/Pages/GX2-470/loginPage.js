export class loginPage {
	elemento = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		errorMessage: () => cy.get('h3[data-test="error"]'),
		url: () => cy.url(),
	}

	typeUsername(username) {
		this.elemento.usernameInput().type(username)
	}

	typePassword(password) {
		this.elemento.passwordInput().type(password)
	}

	clickLoginButton() {
		this.elemento.loginButton().click()
	}
}
