class LoginPage {
	elements = {
		userName : () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		submit: () => cy.get('#login-button'),
		labelError: () => cy.get('.error-message-container.error'),
		tittlePage1: () => cy.get('[data-test="title"]'),
		mensError: () => cy.get('.error-message-container.error')
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