class Login {
	get = {
		userName: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		headerContainer: () => cy.get('.title'),
		loginError: () => cy.get('h3[data-test="error"]'),
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
}
export const LoginPage = new Login();
