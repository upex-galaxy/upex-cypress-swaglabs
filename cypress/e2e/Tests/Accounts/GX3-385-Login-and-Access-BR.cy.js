import { loginSwagLabs } from '@pages/GX3-385-LoginAndAccessBRPage/GX3-385-LoginAndAccessBRPage';

describe('GX3-385 | SwagLabs | Account | Login and sccessBR', () => {
	const { baseUrl } = Cypress.env(); //para acceder a la propiedad de "baseUrl" (ver archivo cypress.config.js)
	const { login: loginProperties } = Cypress.env('swagLabs'); // significa loginProperties = Cypress.env('swagLabs').login
	beforeEach('Preconditions: ', () => {
		cy.visit(baseUrl);
		cy.url().should('contain', 'saucedemo.com');
	});

	it('416 | TC01: Check that the user can log in when providing valid credentials', () => {
		loginSwagLabs.Login(loginProperties.users.correctUser, loginProperties.users.correctPass);
		cy.url().should('contain', 'saucedemo.com');
	});

	it('416 | TC02: Check that the user can not log in when the username is locked', () => {
		loginSwagLabs.Login(loginProperties.users.lockUser, loginProperties.users.correctPass);
		cy.url().should('contain', baseUrl);
		loginSwagLabs.get.notMatchMessage().should('contain', loginProperties.errorMsg.lockedUser);
	});

	it('416 | TC03: Check that the user can not log in with an incorrect or nonexistent username', () => {
		loginSwagLabs.Login(loginProperties.users.userInv, loginProperties.users.correctPass);
		cy.url().should('contain', baseUrl);
		loginSwagLabs.get.notMatchMessage().should('contain', loginProperties.errorMsg.PassOrUserInv);
	});

	it('416 | TC04: Check that the user cannot log in with an incorrect or nonexistent password', () => {
		loginSwagLabs.Login(loginProperties.users.correctUser, loginProperties.users.passInv);
		cy.url().should('contain', baseUrl);
		loginSwagLabs.get.notMatchMessage().should('contain', loginProperties.errorMsg.PassOrUserInv);
	});

	it('416 | TC05: Check that the user can not log in with an incorrect or nonexistent username and password', () => {
		loginSwagLabs.Login(loginProperties.users.userInv, loginProperties.users.passInv);
		cy.url().should('contain', baseUrl);
		loginSwagLabs.get.notMatchMessage().should('contain', loginProperties.errorMsg.PassOrUserInv);
	});

	it('416 | TC06: Check that the user can not log in when leaving the username empty in the form', () => {
		loginSwagLabs.Login('', loginProperties.users.correctPass);
		cy.url().should('contain', baseUrl);
		loginSwagLabs.get.notMatchMessage().should('contain', loginProperties.errorMsg.UserNull);
	});

	it('416 | TC07: Check that the user can not log in when leaving the password empty in the form', () => {
		loginSwagLabs.Login(loginProperties.users.correctUser, '');
		cy.url().should('contain', baseUrl);
		loginSwagLabs.get.notMatchMessage().should('contain', loginProperties.errorMsg.PassNull);
	});

	it('416 | TC08: Check that the user can not log in when leaving the username and password empty in the form', () => {
		loginSwagLabs.Login('', '');
		cy.url().should('contain', baseUrl);
		loginSwagLabs.get.notMatchMessage().should('contain', loginProperties.errorMsg.UserNull);
	});
	/*
	it('416 | TC09: Check that the user can not access an endpoint without logging in', () => {
		loginSwagLabs.Login(loginProperties.users.correctUser, loginProperties.users.correctPass);
		cy.url().should('contain', baseUrl);
	});*/
});

// NOTA:
// Se utiliza const { login: loginProperties } = Cypress.env('swagLabs'); para renombrar
// la propiedad "login" del objeto "Cypress.env('swagLabs') a "loginProperties"
// para hacer el código más limpio y legible.
// Otra variante sería utilizar:
// const loginProperties = Cypress.env('swagLabs');
// y luego acceder a las propiedades directamente:
// "loginProperties.login.users.correctUser"  y "loginProperties.login.users.correctPass"
