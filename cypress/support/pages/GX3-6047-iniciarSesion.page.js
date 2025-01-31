class LoginPage {
	elements = {
		userName : () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		submit: () => cy.get('#login-button'),
		labelError: () => cy.get('button.error-button'),
		tittlePage1: () => cy.get('[data-test="title"]')
	};

	typeUserName (userName) {
		this.elements.userName().type(userName);
	}
	typePassword (password) {
		this.elements.password().type(password);
	}
	clicksubmit () {
		this.elements.submit().click();
	}
}
export const loginPage = new LoginPage;