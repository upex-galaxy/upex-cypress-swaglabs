import { loginPage } from '@pages/GX3-1882-Login.page';
import data from '../../../fixtures/data/GX3-1882-Login.json';

describe('[Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	const invalidEndpointMessage = endpoint => {
		loginPage.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.endpointMessage.replace('{{endpoint}}', endpoint));
	};
	beforeEach('Go to Sauce demo web, login section', () => {
		cy.visit('https://www.saucedemo.com');
		cy.url().should('include', 'sauce');
	});

	it('49541 | TC1: Check that the user can login with correct username and password (standard_user)', () => {
		loginPage.login(data.validUsernames.standardUser, data.validPassword);
		loginPage.get.logOutButton().should('exist');
	});
	it('49541 | TC2: Check that the user can login with correct username and password (problem_user))', () => {
		loginPage.login(data.validUsernames.problemUser, data.validPassword);
		loginPage.get.logOutButton().should('exist');
	});
	it('49541 | TC3: Check that the user can login with correct username and password (performance_glitch_user))', () => {
		loginPage.login(data.validUsernames.performanceUser, data.validPassword);
		loginPage.get.logOutButton().should('exist');
	});
	it('49541 | TC4: Check that an error message is shown when trying to login as “locked_out_user” and correct password. ', () => {
		loginPage.login(data.lockedUser, data.validPassword);
		loginPage.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.lockedOutMessage);
	});
	it('49541 | TC5: Check that an error message is shown when trying to login with null username and valid password', () => {
		loginPage.login('', data.validPassword);
		loginPage.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.requiredUsername);
	});
	it('49541 | TC6: Check that an error message is shown when trying to login with valid username and null password', () => {
		loginPage.login(data.validUsernames.standardUser, '');
		loginPage.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.requiredPassword);
	});
	it('49541 | TC7: Check that an error message is shown when trying to login with null username and null password ', () => {
		loginPage.get.loginButton().click();
		loginPage.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.requiredUsername);
	});
	it('49541 | TC8: Check that an error message is shown when trying to login with invalid username and valid password', () => {
		loginPage.login(data.unregisteredUsername, data.validPassword);
		loginPage.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.noRegisteredUser);
	});
	it('49541 | TC9: Check that an error message is shown when trying to login with valid username and invalid password', () => {
		loginPage.login(data.validUsernames.standardUser, data.invalidPassword);
		loginPage.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.noRegisteredUser);
	});
	it('49541 | TC10: Check that a friendly message is shown when trying to access an endpoint that requires the user to be logged in: "/inventory.html"', () => {
		cy.visit('www.saucedemo.com' + data.endpoints.inventory, { failOnStatusCode: false });
		invalidEndpointMessage(data.endpoints.inventory);
	});
	it('49541 | TC11: Check that a friendly message is shown when trying to access an endpoint that requires the user to be logged in: "/cart.html"', () => {
		cy.visit('www.saucedemo.com' + data.endpoints.cart, { failOnStatusCode: false });
		invalidEndpointMessage(data.endpoints.cart);
	});
	it('49541 | TC12: Check that a friendly message is shown when trying to access an endpoint that requires the user to be logged in: "/checkout-step-one.html"', () => {
		cy.visit('www.saucedemo.com' + data.endpoints.checkoutStepOne, { failOnStatusCode: false });
		invalidEndpointMessage(data.endpoints.checkoutStepOne);
	});
	it('49541 | TC13: Check that a friendly message is shown when trying to access an endpoint that requires the user to be logged in: "/checkout-step-two.html"', () => {
		cy.visit('www.saucedemo.com' + data.endpoints.checkoutStepTwo, { failOnStatusCode: false });
		invalidEndpointMessage(data.endpoints.checkoutStepTwo);
	});
	it('49541 | TC14: Check that a friendly message is shown when trying to access an endpoint that requires the user to be logged in: "/checkout-complete.html"', () => {
		cy.visit('www.saucedemo.com' + data.endpoints.checkoutComplete, { failOnStatusCode: false });
		invalidEndpointMessage(data.endpoints.checkoutComplete);
	});
});
