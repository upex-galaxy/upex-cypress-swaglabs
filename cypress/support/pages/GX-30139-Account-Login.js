class loginPage {
	get = {
		usernameInput: () => cy.get('#username'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
	};
	typeUsername(username) {
		this.get.usernameInput().type(username);
	}
	typePassword(password) {
		this.get.passwordInput().type(password);
	}
	clickLoginButton() {
		this.get.loginButton().click();
	}
}
export const login = new loginPage();
