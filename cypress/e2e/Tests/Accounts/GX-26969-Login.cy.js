import { logOut, login } from '../../../support/pages/GX-26969-Login.page';
import  data from 'cypress/fixtures/data/GX-26969-Login.json';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();



describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('visitar la página de SwagLabs', () => {
		cy.visit('/');
		cy.url().should('include', data.swabLabs);
	});

	it('26970 | TC1: Validar que se pueda iniciar sesión con las credenciales correctas al hacer click en el botón “Login“.', () => {
		login.enterUsername(data.dataValida.userName1);
		login.get.usernameInput().should('have.value', data.dataValida.userName1);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.SubmitLogin();
		cy.url().should('include', data.endpointInventory);
		logOut.ingresoAlMenu();
		logOut.cierreDeSesion();
		login.enterUsername(data.dataValida.userName2);
		login.get.usernameInput().should('have.value', data.dataValida.userName2);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.SubmitLogin();
		cy.url().should('include', data.endpointInventory);
		logOut.ingresoAlMenu();
		logOut.cierreDeSesion();
		login.enterUsername(data.dataValida.userName3);
		login.get.usernameInput().should('have.value', data.dataValida.userName3);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.SubmitLogin();
		cy.url().should('include', data.endpointInventory);
	});
});