import { login } from '../../../support/pages/GX-29123-Login.page';

describe('[Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Go to Sauce demo web, login section', () => {
		cy.visit('https://www.saucedemo.com');
		cy.url().should('include', 'sauce');
	});

	it('49541 | TC1: Check that the user can login with correct username and password.', () => {
		console.log('hello');
	});
});
