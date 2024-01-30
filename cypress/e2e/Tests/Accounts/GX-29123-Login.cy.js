import { login } from '@pages/GX-29123-Login.page';
import data from '../../../fixtures/data/GX-29123-Login.json';

describe('[Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Go to Sauce demo web, login section', () => {
		cy.visit('https://www.saucedemo.com');
		cy.url().should('include', 'sauce');
	});

	it('49541 | TC1: Check that the user can login with correct username and password (standard_user)', () => {
		login.loginCorrectly(data.validUsernames.standardUser, data.validPassword);
		login.get.logOutButton().should('exist');
	});
	it('49541 | TC2: Check that the user can login with correct username and password (problem_user))', () => {
		login.loginCorrectly(data.validUsernames.problemUser, data.validPassword);
		login.get.logOutButton().should('exist');
	});
	it.skip('49541 | TC3: Check that the user can login with correct username and password (performance_glitch_user))', () => {
		login.loginCorrectly(data.validUsernames.performanceUser, data.validPassword);
		login.get.logOutButton().should('exist');
	});
	it('49541 | TC4: Check that an error message is shown when trying to login as “locked_out_user” and correct password. ', () => {
		login.loginCorrectly(data.lockedUser, data.validPassword);
		login.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.lockedOutMessage);
	});
	it('49541 | TC5: Check that an error message is shown when trying to login with null username and valid password', () => {
		login.loginWithoutUsername(data.validPassword);
		login.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.requiredUsername);
	});
	it('49541 | TC6: Check that an error message is shown when trying to login with valid username and null password', () => {
		login.loginWithoutPassword(data.validUsernames.standardUser);
		login.get.errorMessage().should('be.visible').and('have.text', data.errorMessages.requiredPassword);
	});
});
