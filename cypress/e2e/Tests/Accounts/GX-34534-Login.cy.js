import { Login } from '@pages/GX-34535-login';
import data from '../../../fixtures/data/GX-34535-loginData.json';
import { removeLogs } from '@helper/RemoveLogs';

describe('GX-34534 | SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('34535 | TC1: Validar iniciar sesión con datos validos.', () => {
		Login.fillLogin({ username: data.userName.valid, password: data.password[0].valid });
		cy.url().should('include', '/inventory.html');
		Login.get.header().should('contain.text', 'Swag Labs');
		Login.get.cards().should('exist');
	});

	it('34535 | TC2: Validar NO iniciar sesión con usuario bloqueado.', () => {
		Login.fillLogin({
			username: data.userName.blocked,
			password: data.password[0].valid,
		});
		Login.get.userError().should('exist');
		Login.get.userError().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
	});

	it('34535 | TC3: Validar NO iniciar sesión con usuario no valido.', () => {
		Login.fillLogin({
			username: data.userName.invalid,
			password: data.password[1].invalid,
		});
		Login.get.userError().should('exist');
		Login.get.userError().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
	});

	it('34535 | TC4: Validar NO iniciar sesión con campos vacíos.', () => {
		Login.fillUsername(data.userName.valid);
		Login.get.userError().should('exist');
		Login.get.userError().should('have.text', 'Epic sadface: Password is required');

		Login.fillPassword(data.password[0].valid);
		Login.get.userError().should('exist');
		Login.get.userError().should('have.text', 'Epic sadface: Username is required');

		Login.clickButton();
		Login.get.userError().should('exist');
		Login.get.userError().should('have.text', 'Epic sadface: Username is required');
	});

	it('34535 | TC5: Validar NO iniciar sesion ingresando endpoint en la URL.', () => {
		cy.visit('/inventory.html', { failOnStatusCode: false });
		Login.get.userError().should('exist');
		Login.get.userError().should('have.text', `Epic sadface: You can only access '/inventory.html' when you are logged in.`);
	});
});

removeLogs();
