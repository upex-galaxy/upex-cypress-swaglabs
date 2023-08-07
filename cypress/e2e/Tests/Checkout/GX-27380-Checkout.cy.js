import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import data from '../../../fixtures/data/GX-27380-Checkout.json';
import { login } from '../../../support/pages/GX-27380-Checkout.Page';

removeLogs();

describe('✅SwagLabs | Checkout | Visualizar el Resumen de Compra del Shopping Cart', () => {
	beforeEach('visitar la página de SwagLabs', () => {
		cy.visit('/');
		cy.url().should('include', data.swagLabs);
	});

	it('27381| TC1: Validar que se pueda iniciar sesión con las credenciales correctas al hacer click en el botón “Login“.', () => {
		login.enterUsername(data.userName);
		login.get.userNameInput().should('have.value', data.userName);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.buttonLogin();
		
	});
});