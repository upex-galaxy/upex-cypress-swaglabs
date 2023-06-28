class loginPage {
	get = {
		inputUsername: () => cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		loginBtn: () => cy.get('[data-test="login-button"]'),
		errorMessage: () => cy.get('[data-test="error"]'),
	};

	enterUsername(type) {
		this.get.inputUsername().type(type);
	}
	usernameInputAssertion() {
		this.get.inputUsername().should('have.value', 'standard_user');
	}
	enterPassword(type) {
		this.get.inputPassword().type(type);
	}
	passwordInputAssertion() {
		this.get.inputPassword().should('have.value', 'secret_sauce');
	}
	clickLoginBtn() {
		this.get.loginBtn().click();
	}
	errMsg() {
		this.get.errorMessage();
	}
}

export const loginpage = new loginPage();
