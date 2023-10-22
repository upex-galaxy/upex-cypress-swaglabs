import { Login } from '@pages/loginFranco.Page';

const { login, endpoint } = Cypress.env('swagLabs');
const { baseUrl } = Cypress.env();

describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondición: Situado en la página de Login', () => {
		cy.visit(baseUrl);
		cy.url().should('contain', 'saucedemo');
	});
	it('6517 | TC1: Validar login con credenciales correctas [standard_user.]', () => {
		Login.enterUsername(login.users.correctUser); //User Correcto
		Login.enterPassword(login.users.correctPass); //Password Correcta
		Login.submitButton('#login-button');
		cy.url().should('contain', endpoint.inventory);
	});
	it('6517 | TC2: Validar login con credenciales correctas [problem_user.]', () => {
		Login.enterUsername(login.users.problemUser); //User Correcto
		Login.enterPassword(login.users.correctPass); //Password Correcta
		Login.submitButton('#login-button');
		cy.url().should('contain', endpoint.inventory);
	});
	it.skip('6517 | TC3: Validar login con credenciales correctas [performance_glitch_user.]', () => {
		Login.enterUsername(login.users.glitchUser); //User Correcto
		Login.enterPassword(login.users.correctPass); //Password Correcta
		Login.submitButton('#login-button');
		cy.url().should('contain', endpoint.inventory);
	});

	it('6517 | TC4: Validar no iniciar sesion con cuenta bloqueada [locked_out_user.]', () => {
		Login.enterUsername(login.users.lockUser); //user incorrecta
		Login.enterPassword(login.users.correctPass); //password incorrecta
		Login.submitButton('#login-button');
		cy.url().should('contain', baseUrl);
		Login.get.error().should('contain', login.errorMsg.lockedUser);
	});

	it('6517 | TC5: Validar no iniciar sesion con usuario correcto y password incorrecta.', () => {
		Login.enterUsername(login.users.correctUser); //user correcto
		Login.enterPassword(login.users.passInv); //password incorrecta
		Login.submitButton('#login-button');
		Login.get.error().should('contain', login.errorMsg.PassOrUserInv);
	});
	it('6517 | TC6: Validar no iniciar sesion con usuario incorrecto y password correcta.', () => {
		Login.enterUsername(login.users.userInv); //user incorrecto
		Login.enterPassword(login.users.correctPass); //password correcto
		Login.submitButton('#login-button');
		Login.get.error().should('contain', login.errorMsg.PassOrUserInv);
	});
	it('6517 | TC7: Validar no iniciar sesion con username valido y password null.', () => {
		Login.enterUsername(login.users.correctUser); //user correcto
		//password null
		Login.submitButton('#login-button');
		Login.get.error().should('contain', login.errorMsg.PassNull);
	});
	it('6517 | TC8: Validar no iniciar sesion con username null y password valido.', () => {
		//User Null
		Login.enterPassword(login.users.correctPass); //password correcto
		Login.submitButton('#login-button');
		Login.get.error().should('contain', login.errorMsg.UserNull);
	});
	it('6517 | TC9: Validar no iniciar sesion con usuario null y password null.', () => {
		//USER NULL
		//PASSWORD NULL
		Login.submitButton('#login-button');
		Login.get.error().should('contain', login.errorMsg.UserNull);
	});
	it.only('6517 | TC10: Validar usuario intenta al endpoint /inventory.html', () => {
		cy.visit(baseUrl + endpoint.inventory, { failOnStatusCode: false });
		cy.url().should('contain', baseUrl);
		Login.get.error().should('contain', login.errorMsg.inventoryError);
	});
	it('6517 | TC11: Validar usuario intenta al endpoint /cart.html', () => {
		cy.visit(baseUrl + endpoint.cart, { failOnStatusCode: false });
		cy.url().should('contain', baseUrl);
		Login.get.error().should('contain', login.errorMsg.cartError);
	});

	it('6517 | TC12: Validar usuario intenta al endpoint /checkout-step-one.html', () => {
		cy.visit(baseUrl + endpoint.checkoutOne, { failOnStatusCode: false });
		cy.url().should('contain', baseUrl);
		Login.get.error().should('contain', login.errorMsg.checkoutOneError);
	});
	it('6517 | TC13: Validar usuario intenta al endpoint /checkout-step-two.html', () => {
		cy.visit(baseUrl + endpoint.checkoutTwo, { failOnStatusCode: false });
		cy.url().should('contain', baseUrl);
		Login.get.error().should('contain', login.errorMsg.checkoutTwoError);
	});
	it('6517 | TC14: Validar usuario intenta al endpoint /checkout-complete.html', () => {
		cy.visit(baseUrl + endpoint.checkoutAll, { failOnStatusCode: false });
		cy.url().should('contain', baseUrl);
		Login.get.error().should('contain', login.errorMsg.checkoutAllError);
	});
});
