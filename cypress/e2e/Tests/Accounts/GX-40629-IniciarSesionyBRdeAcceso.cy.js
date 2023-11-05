import { loginPage } from '@pages/GX-40629-IniciarSesionyBRdeAcceso.page';
import data from '@data/GX-40629-IniciarSesionyBRdeAcceso.json';

const fillFormAndSubmit = (userName, password, valueAssert) => {
	loginPage.typeUsername(userName);
	loginPage.get.username().should('have.value', userName);
	loginPage.typePassword(password);
	loginPage.get.password().should('have.value', password);
	loginPage.clickLoginButton();
	if (valueAssert === 'Swag Labs') {
		loginPage.get.elementInSwaglabs().should('have.text', valueAssert);
	} else {
		loginPage.get.rules().should('have.text', valueAssert);
	}
};
const visitEndpoint = (endpoint, valueAssert) => {
	cy.visit(`/${endpoint}`, { failOnStatusCode: false });
	loginPage.get.rules().should('have.text', valueAssert);
};

describe('', () => {
	beforeEach('PRC:visit login SwagLab', () => {
		loginPage.get.endpoint();
	});
	it('40630 | TC1: Validar iniciar sesión con campos válidos (standard_user.)', () => {
		fillFormAndSubmit(data.standard_user, data.validPassword, data.title);
	});
	it('40630 | TC2: Validar iniciar sesión con campos válidos (problem_user)', () => {
		fillFormAndSubmit(data.problem_user, data.validPassword, data.title);
	});
	it('40630 | TC3: Validar iniciar sesión con campos válidos (performance_glitch_user)', () => {
		fillFormAndSubmit(data.performance_glitch_user, data.validPassword, data.title);
	});
	it('40630 | TC4: Validar NO iniciar sesión dejando campos vacíos en el formulario', () => {
		loginPage.get.username().should('be.empty');
		loginPage.get.password().should('be.empty');
		loginPage.clickLoginButton();
		loginPage.get.rules().should('have.text', data.message.userRequired);
	});
	it('40630 | TC5: Validar NO iniciar sesión dejando el campo vacío en username', () => {
		fillFormAndSubmit('', data.validPassword, data.message.userRequired);
	});
	it('40630 | TC6: Validar NO iniciar sesión dejando el campo vacío en password', () => {
		fillFormAndSubmit(data.performance_glitch_user, '', data.message.paswordRequired);
	});
	it('40630 | TC7: Validar NO iniciar sesión con cuenta bloqueada y password inválido', () => {
		fillFormAndSubmit(data.userBlock, data.invalidPassword, data.message.match);
	});
	it('40630 | TC8: Validar NO iniciar sesión ingresando password inválido', () => {
		fillFormAndSubmit(data.problem_user, data.invalidPassword, data.message.match);
	});
	it('40630 | TC9: Validar NO iniciar sesión con cuenta bloqueada', () => {
		fillFormAndSubmit(data.userBlock, data.validPassword, data.message.locked);
	});
	it('40630 | TC10: Validar NO iniciar sesión ingresando campos incorrectos o inexistentes', () => {
		fillFormAndSubmit(data.userInvalid, data.invalidPassword, data.message.match);
	});
	it('40630 | TC11: Validar NO iniciar sesión ingresando una password inexistente', () => {
		fillFormAndSubmit(data.standard_user, data.invalidPassword, data.message.match);
	});
	it('40630 | TC12: Validar NO iniciar sesión ingresando un username inexistente', () => {
		fillFormAndSubmit(data.userInvalid, data.validPassword, data.message.match);
	});
	it('40630 | TC13: Validar NO ingresar al endpoint (/inventory.html) de la website sin haber iniciado sesión.', () => {
		visitEndpoint(data.endpoints.endpoint1, data.message.inventory);
	});
	it('40630 | TC14: Validar NO ingresar al endpoint (/cart.html) de la website sin haber iniciado sesión.', () => {
		visitEndpoint(data.endpoints.endpoint2, data.message.cart);
	});
	it('40630 | TC15: Validar NO ingresar al endpoint (/checkout-step-one.html) de la website sin haber iniciado sesión.', () => {
		visitEndpoint(data.endpoints.endpoint3, data.message.checkoutOne);
	});
	it('40630 | TC16: Validar NO ingresar al endpoint (/checkout-step-two.html) de la website sin haber iniciado sesión.', () => {
		visitEndpoint(data.endpoints.endpoint4, data.message.checkoutTwo);
	});
	it('40630 | TC17:Validar NO ingresar al endpoint (/checkout-complete.html) de la website sin haber iniciado sesión.', () => {
		visitEndpoint(data.endpoints.endpoint5, data.message.complete);
	});
});
