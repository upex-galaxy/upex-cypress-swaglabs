class LoginPage {
	get = {
		inputUsername: () => cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		loginBtn: () => cy.get('[data-test="login-button"]'),
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

export const loginPage = new LoginPage();
