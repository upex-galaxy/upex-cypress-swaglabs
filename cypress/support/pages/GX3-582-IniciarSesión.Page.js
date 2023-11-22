class IniciarSesión {
	get = {
		userName: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		successfulLogin: () => cy.get('.title'),
		loginError: () => cy.get('[data-test="error"]'),
	};

	typeUserName(userName) {
		userName && this.get.userName().type(userName);
	}

	typePassword(password) {
		password && this.get.password().type(password);
	}

	selectLoginButton() {
		this.get.loginButton().click();
	}

	successfulLoginMessage() {
		return this.get.successfulLogin();
	}

	loginErrorMessage() {
		return this.get.loginError();
	}

	login(username, password) {
		this.typeUserName(username);
		this.typePassword(password);
		this.selectLoginButton();
	}
}

export const IniciarSesiónPage = new IniciarSesión();
