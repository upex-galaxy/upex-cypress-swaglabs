import { login } from '../../../support/pages/GX-30139-Account-Login';

describe('TS34140 | ✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondicion: The user has register and stay in login page', () => {
		cy.fixture('data/GX-30139-Account-Login').then(data => {
			cy.visit(data.url.loginPage + data.endpoints.login);
			cy.url().should('include', 'login');
		});
	});
	it('34140 | TC01: Validate Log in with username “standard_user” and valid password', () => {
		cy.log('hola');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
