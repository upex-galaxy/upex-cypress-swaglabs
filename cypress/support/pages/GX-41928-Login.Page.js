//import data from 'GX-41928-Logincypress/fixtures/data/GX-41928-Login.json';
//const { baseUrl } = Cypress.env();

class Login {
	get = {
		endpoint: () => cy.visit('https://www.saucedemo.com'),
		endpointInventory: () => cy.visit('https://www.saucedemo.com/inventory.html'),
		userName: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		headerContainer: () => cy.get('div.login_logo'),
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
	endpoint() {
		cy.visit.endpoint();
	}
	exitLogin() {
		cy.visit.endpointInventory();
	}
}

export const loginPage = new Login();
