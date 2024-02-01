class Login {
	get = {
		inputUsername: () => cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		loginButton: () => cy.get('[data-test="login-button"]'),
		errorMessage: () => cy.get('[data-test="error"]'),
		logOutButton: () => cy.get('#logout_sidebar_link'),
	};
	//Methods
	login(username, password) {
		username && this.get.inputUsername().should('be.visible').type(username);
		password && this.get.inputPassword().should('be.visible').type(password);
		this.get.loginButton().should('be.visible').click();
	}
}
export const loginPage = new Login();
