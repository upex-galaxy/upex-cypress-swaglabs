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

	SubmitLogin() {
		this.get.submitButton().click();
	}

	typePassword(password) {
		this.get.password().type(password);
	}
}

export const login = new Login();
