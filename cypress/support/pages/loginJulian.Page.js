class loginPage {
	get = {
		inputUsername: () => cy.get('#user-name'),
		inputPassword: () => cy.get('#password'),
		loginBtn: () => cy.get('#login-button'),
		errorMessage: () => cy.get('[data-test="error"]'),
	};

	enterUsername(type) {
		this.get.inputUsername().type(type);
	}
	enterPassword(type) {
		this.get.inputPassword().type(type);
	}
	clickLoginBtn(type) {
		this.get.loginBtn().type(type);
	}
}

export const loginpage = new loginPage();
