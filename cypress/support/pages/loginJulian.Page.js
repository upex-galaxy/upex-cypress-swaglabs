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
	clickLoginBtn() {
		this.get.loginBtn().click();
	}
	errMsg() {
		this.get.errorMessage();
	}
}

export const loginpage = new loginPage();
