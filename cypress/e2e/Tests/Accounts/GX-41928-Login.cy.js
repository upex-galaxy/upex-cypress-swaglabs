//import LoginPage from '@pages/GX-41928-Login.Page.js';
import data from '@data/GX-41928-Login.json';

import { loginPage } from '@pages/GX-41928-Login.Page';

describe('', () => {
	beforeEach('PRC:visit login SwagLab', () => {
		cy.visit('https://www.saucedemo.com');
		cy.url().should('contain', 'demo');
	});
	it('41929 | TC1: Validar poder INICIAR SESIÓN cuando los datos son válidos (standard_user).', () => {
		cy.fillFormAndSubmit(data.userName.validUser1, data.password.validPass, data.endpointInventory);
	});
	/*
	it('41929 | TC2: Validar poder INICIAR SESIÓN cuando los datos son válidos (problem_user).', () => {
		cy.fillFormAndSubmit(data.validUser2, data.validPass, data.headerContainer);
	});
	it('41929 | TC3: Validar poder INICIAR SESIÓN cuando los datos son válidos (performance_glitch_user).', () => {
		cy.fillFormAndSubmit(data.validUser3, data.validPass, data.headerContainer);
	});
	it('41929 | TC4: Validar poder INICIAR SESIÓN cuando los datos son válidos (error_user).', () => {
		cy.fillFormAndSubmit(data.validUser4, data.validPass, data.headerContainer);
	});
	it('41929 | TC5: Validar poder INICIAR SESIÓN cuando los datos son válidos (visual_user).', () => {
		cy.fillFormAndSubmit(data.validUser5, data.validPass, data.headerContainer);
	});
	it('41929 | TC6: Validar NO poder INICIAR SESIÓN cuando el USERNAME esta BLOQUEADO.', () => {
		cy.fillFormAndSubmit(data.lockedUser, data.validPass, data.message.locked);
	});
	it('41929 | TC7: Validar NO poder INICIAR SESIÓN cuando los datos son Inválidos.', () => {
		cy.fillFormAndSubmit(data.notMachUser, data.invalidPass, data.message.notMatch);
	});
	it('41929 | TC8: Validar NO poder INICIAR SESIÓN cuando el USERNAME esta VACIO.', () => {
		cy.fillFormAndSubmit('', data.validPassword, data.message.userRequired);
	});
	it('41929 | TC9: Validar NO poder INICIAR SESIÓN cuando el PASSWORD esta VACIO.', () => {
		cy.fillFormAndSubmit(data.validUser1, '', data.message.passwordRequired);
	});
	it('41929 | TC10: Validar NO poder INICIAR SESIÓN cuando USERNAME y PASSWORD estan VACIOS.', () => {
		cy.fillFormAndSubmit(undefined, undefined, data.message.userRequired);
	});
	it('41929 | TC11: Validar NO ingresar a la website (www.saucedemo.com/inventory.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered1, data.message.needLogIn);
	});
	it('41929 | TC12: Validar NO ingresar a la website (www.saucedemo.com/inventory.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered2, data.message.needLogIn);
	});
	it('41929 | TC13: Validar NO ingresar a la website (www.saucedemo.com/inventory.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered3, data.message.needLogIn);
	});
	it('41929 | TC14: Validar NO ingresar a la website (www.saucedemo.com/inventory.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered4, data.message.needLogIn);
	});
	it('41929 | TC15: Validar NO ingresar a la website (www.saucedemo.com/inventory.html) sin haber iniciado sesión.', () => {
		cy.visitEndpoint(data.endpoints.endpointUnRegistered5, data.message.needLogIn);
	});
	*/
});
