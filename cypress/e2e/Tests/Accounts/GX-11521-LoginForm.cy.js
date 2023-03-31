import { login as Login } from '@pages/Login.Page';
const base = Cypress.env('baseUrl');
const { login, endpoint } = Cypress.env('swagLabs');

describe('GX-11521', () => {
	beforeEach('Precondicion para ir al login', () => {
		cy.visit(base);
	});
	it('TC1: Validar usuario inicia sesión correctamente.', () => {
		Login.enterUsername(login.users.correctUser);
		Login.enterPassword(login.users.correctPass);
		Login.submitLogin();
		cy.url().should('contain', endpoint.inventory);
	});
	it('TC2: Validar No iniciar sesión con cuenta bloqueada.', () => {
		Login.enterUsername(login.users.lockUser);
		Login.enterPassword(login.users.correctPass);
		Login.submitLogin();
		Login.get.ErrorMsj().contains(login.errorMsg.lockedUser);
	});
	it('TC3: Validar No iniciar sesión con una cuenta inexistente.', () => {
		Login.enterUsername(login.users.userInv);
		Login.enterPassword(login.users.passInv);
		Login.submitLogin();
		Login.get.ErrorMsj().contains(login.errorMsg.PassOrUserInv);
	});
	it('TC4: Validar No iniciar sesión con campo Username vacío.', () => {
		Login.enterPassword(login.users.passInv);
		Login.submitLogin();
		Login.get.ErrorMsj().contains(login.errorMsg.UserNull);
	});
	it('TC5: Validar No iniciar sesión con campo Password vacío.', () => {
		Login.enterUsername(login.users.userInv);
		Login.submitLogin();
		Login.get.ErrorMsj().contains(login.errorMsg.PassNull);
	});
	it('TC6: Validar No iniciar sesión con campo Username y Password vacío.', () => {
		Login.submitLogin();
		Login.get.ErrorMsj().contains(login.errorMsg.UserNull);
	});
	it('TC7: Validar Mensaje no autorizado para endpoint /inventory.html', () => {
		cy.visit(base + endpoint.inventory, { failOnStatusCode: false });
		cy.url().should('contain', base);
		Login.get.ErrorMsj().contains(login.errorMsg.inventoryError);
	});
	it('TC8: Validar Mensaje no autorizado para endpoint /cart.html', () => {
		cy.visit(base + endpoint.cart, { failOnStatusCode: false });
		cy.url().should('contain', base);
		Login.get.ErrorMsj().contains(login.errorMsg.cartError);
	});
	it('TC9: Validar Mensaje no autorizado para endpoint /checkout-step-one.html', () => {
		cy.visit(base + endpoint.checkoutOne, { failOnStatusCode: false });
		cy.url().should('contain', base);
		Login.get.ErrorMsj().contains(login.errorMsg.checkoutOneError);
	});
	it('TC10: Validar Mensaje no autorizado para endpoint /checkout-step-two.html', () => {
		cy.visit(base + endpoint.checkoutTwo, { failOnStatusCode: false });
		cy.url().should('contain', base);
		Login.get.ErrorMsj().contains(login.errorMsg.checkoutTwoError);
	});
	it('TC11: Validar Mensaje no autorizado para endpoint /checkout-complete.html', () => {
		cy.visit(base + endpoint.checkoutAll, { failOnStatusCode: false });
		cy.url().should('contain', base);
		Login.get.ErrorMsj().contains(login.errorMsg.checkoutAllError);
	});
});
