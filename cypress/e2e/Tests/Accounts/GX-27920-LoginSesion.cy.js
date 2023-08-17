describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('visitar la página', () => {
		cy.visit('/');
		cy.url().should('contain', 'saucedemo');
	});
	it('27921 | TC1: Validar iniciar sesión exitosamente con datos correctos.', () => {
		login.typeUsername(data.Valida.userName1);
		login.get.username().should('have.value', data.Valida.userName1);
		login.typePassword(data.password);
		login.get.password().should('have.value', data.password);
		login.SubmitLogin();
	});
	it('27921 | TC2: Validar no iniciar sesión exitosamente al ingresar a una cuenta bloqueada.', () => {
		login.typeUsername(data.Bloqueada.Username);
		login.get.username().should('have.value', data.Bloqueada.Username);
		login.typePassword(data.password);
		login.get.password().should('have.value', data.password);
		login.SubmitLogin();
		login.get.Error().should('contain', data.mensajesDeError.lockedUserError);
	});
	it('27921 | TC3: Validar no iniciar sesión exitosamente con datos inválidos.', () => {
		login.typeUsername(data.Invalida.userNameInvalido);
		login.get.username().should('have.value', data.Invalida.userNameInvalido);
		login.typePassword(data.password);
		login.get.password().should('have.value', data.password);
		login.SubmitLogin();
		login.get.Error().should('contain.text', data.mensajesDeError.invalidAccountError);
	});
	it('27921 | TC4: Validar no iniciar sesión exitosamente cuando se dejan campos vacíos.', () => {
		login.typeUsernameVacio(null);
		login.get.username().should('have.value', '');
		login.typePassword(data.password);
		login.get.password().should('have.value', data.password);
		login.SubmitLogin();
		login.get.Error().should('contain.text', data.mensajesDeError.UserNameError);
	});

	it('27921 | TC5: Validar el no ingreso a un endpoint sin haber iniciado sesión.', () => {
		cy.visit(data.endPoint.Inventory, { failOnStatusCode: false });

		login.get.Error().should('contain', data.mensajesDeError.endPointError);
	});
});

import { login } from '../../../support/pages/GX-27920-LoginSesion.page';
import data from 'cypress/fixtures/data/GX-27920-LoginSesion.json';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
