import { LoginBR } from 'cypress/support/pages/LoginBR.Page';

describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('User must be in the Login page', () => {
		cy.visit('/');
		cy.url().should('contain', 'saucedemo');
	});

	it('17549 | TC1: Validate User can log in successfully', () => {
		LoginBR.HappyPath();
		cy.url().should('contain', '/inventory.html');
	});
	it('17549 | TC2: Validate user cannot log in with empty data and BR5 is displayed', () => {
		LoginBR.emptyFields();
		cy.get('.error-message-container.error').should('contain', 'Username is required');
	});
	it('17549 | TC3: Validate user cannot log in with Only number in Username field and BR2 is displayed', () => {
		LoginBR.UserNumberOnly();
		cy.get('.error-message-container.error').should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC4: Validate user cannot log in with Especial Characters in Username field and BR2 is displayed', () => {
		LoginBR.UserEspCharacterOnly();
		cy.get('.error-message-container.error').should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC5: Validate user cannot log in with invalid Username only and BR2 is displayed', () => {
		LoginBR.invalidUserOnly();
		cy.get('.error-message-container.error').should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC6: Validate user cannot log in with invalid Password only and BR2 is displayed', () => {
		LoginBR.invalidPswdOnly();
		cy.get('.error-message-container.error').should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC7: Validate user cannot log in with empty Username field only and BR3 is displayed ', () => {
		LoginBR.emptyUserOnly();
		cy.get('.error-message-container.error').should('contain', 'Username is required');
	});
	it('17549 | TC8: Validate user cannot log in with empty Password field only and BR4 is displayed', () => {
		LoginBR.emptyPswdOnly();
		cy.get('.error-message-container.error').should('contain', 'Password is required');
	});
	it('17549 | TC9: Validate user cannot log in with Locked User credentials and BR1 is displayed', () => {
		LoginBR.LockedUser();
		cy.get('.error-message-container.error').should('contain', 'Sorry, this user has been locked out.');
	});
	it.skip('17549 | TC10: Validate User cannot access an Endpoint without Login', () => {
		LoginBR.Endpoint();
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
