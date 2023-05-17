export class LoginQuir {
	constructor() {
		this.baseUrl = Cypress.env().baseUrl;
		this.errorUserNull = Cypress.env('swagLabs').login.errorMsg.UserNull;
		this.errorPassNull = Cypress.env('swagLabs').login.errorMsg.PassNull;
		this.user = '#user-name';
		this.pass = '#password';
		this.loginButton = '#login-button';
		this.logOutButton = '#logout_sidebar_link';
		this.submitButton = '[type= "submit"]';
		this.error = '[data-test="error"]';
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

		const enterCredentialsAndSubmit = () => {
			if (username !== '') {
				cy.get(this.user).clear().type(username);
			}
			if (password !== '') {
				cy.get(this.pass).clear().type(password);
			}
			cy.get(this.submitButton).click();
		};

		if (username === '' && password === '') {
			enterCredentialsAndSubmit();
			cy.get(this.error).should('exist').and('contain', this.errorUserNull);
		} else if (username === '') {
			enterCredentialsAndSubmit();
			cy.get(this.error).should('exist').and('contain', this.errorUserNull);
		} else if (password === '') {
			enterCredentialsAndSubmit();
			cy.get(this.error).should('exist').and('contain', this.errorPassNull);
		} else {
			this.login(username, password);
		}
	}

	verifyUnauthorizedAccess(endpoint, errorMessage) {
		cy.visit(endpoint, { failOnStatusCode: false });
		cy.location('href').should('contain', this.baseUrl);
		cy.get(this.error).should('contain', errorMessage);
	}
}
