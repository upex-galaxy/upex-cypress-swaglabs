export class LoginQuir {
	constructor() {
		this.baseUrl = Cypress.env().baseUrl;
		this.user = '#user-name';
		this.pass = '#password';
		this.loginButton = '#login-button';
		this.logOutButton = '#logout_sidebar_link';
		this.submitButton = '[type= "submit"]';
		this.error = '[data-test="error"]';
		this.inventoryList = '.inventory_list';
	}

	login(username, password) {
		cy.visit(this.baseUrl);
		cy.url().should('contain', 'saucedemo');
		cy.get(this.user).type(username);
		cy.get(this.pass).type(password);
		cy.get(this.submitButton).click();
	}

	loginWithEmptyFields(username, password) {
		cy.visit(this.baseUrl);
		cy.url().should('contain', 'saucedemo');

		if (username !== '') {
			cy.get(this.user).clear().type(username);
		}
		if (password !== '') {
			cy.get(this.pass).clear().type(password);
		}
		cy.get(this.submitButton).click();
	}

	verifyUnauthorizedAccess(endpoint) {
		cy.visit(endpoint, { failOnStatusCode: false });
		cy.location('href').should('contain', this.baseUrl);
	}
}
