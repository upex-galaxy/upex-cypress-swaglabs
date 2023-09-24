class Login {
	get = {
		username: () => cy.get('[data-test="username"]'),
		password: () => cy.get('[data-test= "password"]'),
		buttonLogin: () => cy.get('[data-test="login-button"]'),
		text_error: () => cy.get('[data-test="error"]'),
		button: () => cy.get('.error_button'),
	};

	setUser(username) {
		this.get.username().type(username);
	}
	setPass(password) {
		this.get.password().type(password);
	}
	submitLogin() {
		this.get.buttonLogin().click();
	}
	errMsg() {
		this.get.text_error().click();
	}
}

export const loginAccount = new Login();
