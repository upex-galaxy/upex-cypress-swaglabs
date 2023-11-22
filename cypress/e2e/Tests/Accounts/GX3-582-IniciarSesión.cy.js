import { IniciarSesiónPage } from '@pages/GX3-582-IniciarSesión.Page';
import data from '@data/GX3-582-IniciarSesión.json';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('IniciarSesión', () => {
	beforeEach(() => {
		// PR: Usuario se sitúa en la web Swag Labs
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('contain', 'demo');
	});

	it('582 - TC1: Validar poder INICIAR SESIÓN cuando los datos son válidos (standard_user).', () => {
		cy.fillFormAndSubmit(data.userName.validUser1, data.password.validPass);
		IniciarSesiónPage.successfulLoginMessage().should('have.text', 'Products');
	});

	it('582 - TC2: Validar poder INICIAR SESIÓN cuando los datos son válidos (problem_user).', () => {
		cy.fillFormAndSubmit(data.userName.validUser2, data.password.validPass);
		IniciarSesiónPage.successfulLoginMessage().should('have.text', 'Products');
	});

	it('582 - TC3: Validar poder INICIAR SESIÓN cuando los datos son válidos (performance_glitch_user).', () => {
		cy.fillFormAndSubmit(data.userName.validUser3, data.password.validPass);
		IniciarSesiónPage.successfulLoginMessage().should('have.text', 'Products');
	});

	it('582 - TC4: Validar poder INICIAR SESIÓN cuando los datos son válidos (error_user).', () => {
		cy.fillFormAndSubmit(data.userName.validUser4, data.password.validPass);
		IniciarSesiónPage.successfulLoginMessage().should('have.text', 'Products');
	});

	it('582 - TC5: Validar poder INICIAR SESIÓN cuando los datos son válidos (visual_user).', () => {
		cy.fillFormAndSubmit(data.userName.validUser5, data.password.validPass);
		IniciarSesiónPage.successfulLoginMessage().should('have.text', 'Products');
	});

	it('582 - TC6: Validar NO poder INICIAR SESIÓN cuando el USERNAME esta BLOQUEADO.', () => {
		cy.fillFormAndSubmit(data.userName.blockUser, data.password.validPass, data.message.locked);
		IniciarSesiónPage.loginErrorMessage().should('have.text', data.message.locked);
	});

	it('582 - TC7: Validar NO poder INICIAR SESIÓN cuando los datos son Inválidos.', () => {
		cy.fillFormAndSubmit(data.userName.invalidUser, data.password.invalidPass, data.message.notMatch);
		IniciarSesiónPage.loginErrorMessage().should('have.text', data.message.notMatch);
	});
	it('582 - TC8: Validar NO poder INICIAR SESIÓN cuando el USERNAME esta VACIO.', () => {
		cy.fillFormAndSubmit('', data.password.validPass, data.message.userRequired);
		IniciarSesiónPage.loginErrorMessage().should('have.text', data.message.userRequired);
	});
	it('582 - TC9: Validar NO poder INICIAR SESIÓN cuando el PASSWORD esta VACIO', () => {
		cy.fillFormAndSubmit(data.userName.validUser1, '', data.message.passRequired);
		IniciarSesiónPage.loginErrorMessage().should('have.text', data.message.passRequired);
	});
	it('582 - TC10: Validar NO poder INICIAR SESIÓN cuando USERNAME y PASSWORD están VACIOS.', () => {
		cy.fillFormAndSubmit('', '', data.message.userRequired);
		IniciarSesiónPage.loginErrorMessage().should('have.text', data.message.userRequired);
	});
	it('582 - TC11: Validar NO ingresar a la website (www.saucedemo.com/inventory.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered1, data.message.needLogIn1);
	});
	it('582 - TC12: Validar NO ingresar a la website (www.saucedemo.com/cart.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered2, data.message.needLogIn2);
	});
	it('582 - TC13: Validar NO ingresar a la website (www.saucedemo.com/checkout-step-one.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered3, data.message.needLogIn3);
	});
	it('582 - TC14: Validar NO ingresar a la website (www.saucedemo.com/checkout-step-two.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered4, data.message.needLogIn4);
	});
	it('582 - TC15: Validar NO ingresar a la website (www.saucedemo.com/checkout-complete.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered5, data.message.needLogIn5);
	});
});
