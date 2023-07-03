class LoginPage {
	get = {
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		headTitle: () => cy.get('.header_label'),
	};

	login(username, password) {
		this.get.username().type(username);
		this.get.password().type(password);
		this.get.loginButton().click();
	}
}

export const loginPage = new LoginPage();
