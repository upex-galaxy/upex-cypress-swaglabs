import { login } from '../../../support/pages/GX-27920-LoginSesion.page';
import data from 'cypress/fixtures/data/GX-27920-LoginSesion.json';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

const loginAndSumit = (username, password) => {
	login.typeUsername(username);
	login.get.username().should('have.value', username);
	login.typePassword(password);
	login.get.password().should('have.value', password);
	login.SubmitLogin();
};
describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('visitar la página', () => {
		cy.visit('/');
		cy.url().should('contain', data.saucedemo);
	});
	it('27921 | TC1: Validar iniciar sesión exitosamente con datos correctos.', () => {
		loginAndSumit(data.valida.userName1, data.password);
		cy.url().should('contain', data.inventory);
	});
	it('27921 | TC2: Validar no iniciar sesión exitosamente al ingresar a una cuenta bloqueada.', () => {
		loginAndSumit(data.bloqueada.Username, data.password);
		login.get.Error().should('contain', data.mensajesDeError.lockedUserError);
	});
	it('27921 | TC3: Validar no iniciar sesión exitosamente con datos inválidos.', () => {
		loginAndSumit(data.invalida.userNameInvalido, data.password);
		login.get.Error().should('contain.text', data.mensajesDeError.invalidAccountError);
	});
	it('27921 | TC4: Validar no iniciar sesión exitosamente cuando se dejan campos vacíos.', () => {
		login.get.username().should('be.empty');
		login.get.password().should('be.empty');
		login.SubmitLogin();
		login.get.Error().should('contain.text', data.mensajesDeError.UserNameError);
	});

	it('27921 | TC5: Validar el no ingreso a un endpoint sin haber iniciado sesión.', () => {
		cy.visit(data.endPoint.Inventory, { failOnStatusCode: false });

		login.get.Error().should('contain', data.mensajesDeError.endPointError);
	});
});
