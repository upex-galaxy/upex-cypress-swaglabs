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
	it('26970 | TC2: Validar el NO inicio de sesión con cuenta bloqueada al hacer click en el botón “Login“ y debería arrojar un mensaje “Sorry, this user has been locked out“.', () => {
		
		login.enterUsername(data.dataBloqueada.Username);
		login.get.usernameInput().should('have.value', data.dataBloqueada.Username);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.SubmitLogin();
		login.get.errorMessageLocked();
	});
	it('26970 | TC3: Validar el NO inicio de sesión con cuenta incorrecta o inexistente al hacer click en el botón “Login“ y debería arrojar un mensaje “Username and password do not match any user in this service".', () => {
		login.enterUsername(data.dataInvalida.userNameInvalido);
		login.get.usernameInput().should('have.value', data.dataInvalida.userNameInvalido);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.SubmitLogin();
		login.get.errorMessageInvalid();
	});
	it('26970 | TC4: Validar el NO inicio de sesión sin rellenar el campo “Username“ al hacer click en el botón “Login“ y debería arrojar un mensaje “Username is required“.', () => {
		login.enterUsernameEmpty(null);
		login.get.usernameInput().should('have.value', '');
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.SubmitLogin();
		login.get.errorMessageInvalid();
	});
	it('26970 | TC5: Validar el NO inicio de sesión sin rellenar el campo “Password“ al hacer click en el botón “Login“ y debería arrojar un mensaje “Password is required.“.', () => {
		login.enterUsername(data.dataValida.userName1);
		login.get.usernameInput().should('have.value', data.dataValida.userName1);
		login.enterPasswordEmpty(null);
		login.get.passwordInput().should('have.value', '');
		login.SubmitLogin();
		login.get.errorMessageInvalid();

	});
});