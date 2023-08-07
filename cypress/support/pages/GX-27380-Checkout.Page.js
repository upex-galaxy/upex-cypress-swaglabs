class Login {
	get = {
		userNameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
	};

	enterUsername(user) {
		this.get.userNameInput().type(user);
	}
	enterPassword(password) {
		this.get.passwordInput().type(password);
	}
	buttonLogin() {
		this.get.loginButton().click();
	}
} 

export const login = new Login();