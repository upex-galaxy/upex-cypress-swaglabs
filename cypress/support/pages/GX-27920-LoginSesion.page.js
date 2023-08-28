class Login {
	get = {
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		usernameVacio: () => cy.get('#user-name'),
		passwordVacio: () => cy.get('#password'),
		Error: () => cy.get('[data-test="error"]'),
	};

	typeUsername(user) {
		this.get.username().type(user);
	}
	typeUsernameVacio() {
		this.get.usernameVacio().clear();
	}

	SubmitLogin() {
		this.get.submitButton().click();
	}

	typePassword(password) {
		this.get.password().type(password);
	}
	typePasswordVacio() {
		this.get.passwordInputEmpty().clear();
	}
}

export const login = new Login();
