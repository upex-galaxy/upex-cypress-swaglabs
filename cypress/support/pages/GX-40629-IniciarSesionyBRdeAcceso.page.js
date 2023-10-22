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
		this.get.username().type(userName);
	}
	typePassword(password) {
		this.get.password().type(password);
	}

	typeUsernameBlock() {
		this.get.username().type(data.userBlock);
	}
	typeUsernameInvalid() {
		this.get.username().type(data.userInvalid);
	}

	typePasswordInvalid() {
		this.get.password().type(data.invalidPass);
	}

	clickUsername() {
		this.get.username().click();
	}
	clickPassword() {
		this.get.password().click();
	}
	clickLoginButton() {
		this.get.loginButton().click();
	}

	getElementLoginValid() {
		this.get.elementInSwaglabs().should('have.text', data.title);
	}
	getBr3_5() {
		this.get.rules().should('have.text', data.message.userRequired);
	}

	getBr4() {
		this.get.rules().should('have.text', data.message.paswordRequired);
	}
	getBr2() {
		this.get.rules().should('have.text', data.message.match);
	}
	getBr1() {
		this.get.rules().should('have.text', data.message.locked);
	}
	visitEndpoint1() {
		cy.visit(baseUrl + data.endpoints.endpoint1, { failOnStatusCode: false });
	}
	visitEndpoint2() {
		cy.visit(baseUrl + data.endpoints.endpoint2, { failOnStatusCode: false });
	}
	visitEndpoint3() {
		cy.visit(baseUrl + data.endpoints.endpoint3, { failOnStatusCode: false });
	}
	visitEndpoint4() {
		cy.visit(baseUrl + data.endpoints.endpoint4, { failOnStatusCode: false });
	}
	visitEndpoint5() {
		cy.visit(baseUrl + data.endpoints.endpoint5, { failOnStatusCode: false });
	}
	getMessageEndpoint1() {
		this.get.rules().should('have.text', data.message.inventory);
	}
	getMessageEndpoint2() {
		this.get.rules().should('have.text', data.message.cart);
	}
	getMessageEndpoint3() {
		this.get.rules().should('have.text', data.message.checkoutOne);
	}
	getMessageEndpoint4() {
		this.get.rules().should('have.text', data.message.checkoutTwo);
	}
	getMessageEndpoint5() {
		this.get.rules().should('have.text', data.message.complete);
	}
}

export const loginPage = new Login();
