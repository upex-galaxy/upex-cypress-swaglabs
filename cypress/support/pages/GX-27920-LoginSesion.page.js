class Login {
	get = {
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		usernameVacio: () => cy.get('#user-name'),
		passwordVacio: () => cy.get('#password'),
		dataError: () => cy.get('[data-test="error"]'),
	};
	
	typeUsername(user) {
		this.get.username().type(user);
	}
	typeUsernameVacio() {
		this.get.usernameInputVacio().clear();
	}
	typePassword(password) {
		this.get.password().type(password);
	}
	typePasswordVacio() {
		this.get.passwordInputEmpty().clear();
	}
	SubmitLogin() {
		this.get.submitButton().click();
	}
}


export const login = new Login();
