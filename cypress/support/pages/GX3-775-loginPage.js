class Login {
	//obtener elementos
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
	};

	//metodos
	enterUsername(type) {
		this.get.usernameInput().type(type);
	}
	enterPassword(type) {
		this.get.passwordInput().type(type);
	}
	submitLogin() {
		this.get.loginButton().click();
	}
}

//exportar
export const login = new Login();
