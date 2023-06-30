class LoginPage {
	get = {
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		headTitle: () => cy.get('.header_label'),
	};

	loginPageLogin() {
		this.get.username().type(the.username.data.valid);
		this.get.password().type(the.password.data.valid);
		this.get.loginButton().click();
	}

	headTitle() {
		this.get.headTitle().should('have.text', 'Swag Labs');
	}
}

export const LP = new LoginPage();
import the from '../../../fixtures/data/GX-21866/DataAddToCard.json';
