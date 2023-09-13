/// <reference types="cypress" />
import { LoginQuir } from '@pages/loginQuir.page';
const {
	swagLabs: { login, endpoint },
	baseUrl,
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
		loginPage.login(login.users.userInv, loginData.data.password);
		cy.get(loginData.error).should('contain', login.errorMsg.PassOrUserInv);
	});

	it('usuario intenta iniciar sesión dejando campos vacíos en el formulario', () => {
		loginPage.loginWithEmptyFields('', loginData.data.password);
		cy.get(loginData.error).should('exist').and('contain', login.errorMsg.UserNull);

		loginPage.loginWithEmptyFields(loginData.data.user, '');
		cy.get(loginData.error).should('exist').and('contain', login.errorMsg.PassNull);

		loginPage.loginWithEmptyFields('', '');
		cy.get(loginData.error).should('exist').and('contain', login.errorMsg.UserNull);
	});

	it('usuario inicia sesión correctamente', () => {
		loginPage.login(loginData.data.user, loginData.data.password);
		loginPage.login(loginData.data.glitchuser, loginData.data.password);
		loginPage.login(loginData.data.buguser, loginData.data.password);
	});

	it('usuario intenta ingresar a un endpoint de la website sin haber iniciado sesión', () => {
		loginPage.verifyUnauthorizedAccess(baseUrl + endpoint.inventory);
		cy.get(loginData.error).should('contain', login.errorMsg.inventoryError);

		loginPage.verifyUnauthorizedAccess(baseUrl + endpoint.cart);
		cy.get(loginData.error).should('contain', login.errorMsg.cartError);

		loginPage.verifyUnauthorizedAccess(baseUrl + endpoint.checkoutOne);
		cy.get(loginData.error).should('contain', login.errorMsg.checkoutOneError);

		loginPage.verifyUnauthorizedAccess(baseUrl + endpoint.checkoutTwo);
		cy.get(loginData.error).should('contain', login.errorMsg.checkoutTwoError);

		loginPage.verifyUnauthorizedAccess(baseUrl + endpoint.checkoutAll);
		cy.get(loginData.error).should('contain', login.errorMsg.checkoutAllError);
	});
});
