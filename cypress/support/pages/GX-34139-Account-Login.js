class loginPage {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		imgItems: () => cy.get('[id$="img_link"]>img'),
		errorMessage: () => cy.get('div.error-message-container.error'),
		dogImg: () => cy.get('[src="/static/media/sl-404.168b1cce.jpg"]'),
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
