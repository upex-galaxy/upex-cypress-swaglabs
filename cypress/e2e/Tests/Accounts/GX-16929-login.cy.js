/// <reference types="cypress" />
import { LoginQuir } from '@pages/loginQuir.page';
const {
	swagLabs: { login },
} = Cypress.env();

describe('Iniciar Sesión', () => {
	const loginPage = new LoginQuir();
	let loginData;

	before('Fixture Login', () => {
		cy.fixture('./DOM/space/Login.Page').then(data => {
			loginData = data;
		});
	});
	it('usuario intenta iniciar sesión con cuenta bloqueada', () => {
		loginPage.login(loginData.data.Lockeduser, loginData.data.password);
		cy.get(loginData.error).should('contain', login.errorMsg.lockedUser);
	});
	it('usuario intenta iniciar sesión con un cuenta incorrecta o inexistente', () => {
		loginPage.login('anInvalidUser', loginData.data.password);
		cy.get(loginData.error).should('contain', login.errorMsg.PassOrUserInv);
	});
	it('usuario intenta iniciar sesión dejando campos vacíos en el formulario', () => {
		loginPage.loginWithEmptyFields('', loginData.data.password);
		loginPage.loginWithEmptyFields(loginData.data.user, '');
		loginPage.loginWithEmptyFields('', '');
	});

	it('usuario inicia sesión correctamente', () => {
		cy.Login(loginData.data.user, loginData.data.password);
	});

	it('usuario intenta ingresar a un endpoint de la website sin haber iniciado sesión', () => {
		loginPage.verifyUnauthorizedAccess('https://www.saucedemo.com/inventory.html', login.errorMsg.inventoryError);
	});
});
