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
});
