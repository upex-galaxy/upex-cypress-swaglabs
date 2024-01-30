class Login {
	get = {
		inputUsername: () => cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		loginButton: () => cy.get('[data-test="login-button"]'),
		errorMessage: () => cy.get('[data-test="error"]'),
		logOutButton: () => cy.get('#logout_sidebar_link'),
	};
	//Methods
	loginWithoutUsername(password) {
		this.get.inputPassword().type(password);
		this.get.loginButton().click();
	}
	loginWithoutPassword(username) {
		this.get.inputUsername().type(username);
		this.get.loginButton().click();
	}
	loginCorrectly(username, password) {
		this.get.inputUsername().should('be.visible').type(username);
		this.get.inputPassword().should('be.visible').type(password);
		this.get.loginButton().should('be.visible').click();
	}
}
export const login = new Login();
