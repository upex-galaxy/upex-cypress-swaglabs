class loginPage {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		imgItems: () => cy.get('img.inventory_item_img'),
		errorMessage: () => cy.get('div.error-message-container.error'),
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
