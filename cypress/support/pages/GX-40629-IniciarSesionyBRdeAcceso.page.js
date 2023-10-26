import data from '@data/GX-40629-IniciarSesionyBRdeAcceso.json';
const { baseUrl } = Cypress.env();
class Login {
	get = {
		endpoint: () => cy.visit('https://www.saucedemo.com'),
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		elementInSwaglabs: () => cy.get('div.app_logo'),
		rules: () => cy.get('h3[data-test="error"]'),
	};

	typeUsername(userName) {
		userName && this.get.username().type(userName);
	}
	typePassword(password) {
		password && this.get.password().type(password);
	}
	clickLoginButton() {
		this.get.loginButton().click();
	}
	
}

export const loginPage = new Login();
