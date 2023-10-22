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
	it.only('40630 | TC7: Validar NO iniciar sesión con cuenta bloqueada y password inválido', () => {
		fillFormAndSubmit(data.userBlock, data.invalidPassword, data.message.match);
	});
	it.only('40630 | TC8: Validar NO iniciar sesión ingresando password inválido', () => {
		fillFormAndSubmit(data.problem_user, data.invalidPassword, data.message.match);
	});
	it.only('40630 | TC9: Validar NO iniciar sesión con cuenta bloqueada', () => {
		fillFormAndSubmit(data.userBlock, data.validPassword, data.message.locked);
	});
	it('40630 | TC10: Validar NO iniciar sesión ingresando campos incorrectos o inexistentes', () => {
		loginPage.typeUsername(data.userInvalid);
		loginPage.typePassword(data.invalidPassword);
		loginPage.clickLoginButton();
		loginPage.getBr2();
	});
	it('40630 | TC11: Validar NO iniciar sesión ingresando una password inexistente', () => {
		loginPage.typeUsername();
		loginPage.typePassword(data.invalidPassword);
		loginPage.clickLoginButton();
		loginPage.getBr2();
	});
	it('40630 | TC12: Validar NO iniciar sesión ingresando un username inexistente', () => {
		loginPage.typeUsernameInvalid();
		loginPage.typePassword();
		loginPage.clickLoginButton();
		loginPage.getBr2();
	});
	it('40630 | TC13: Validar NO ingresar al endpoint (/inventory.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint1();
		loginPage.getMessageEndpoint1();
	});
	it('40630 | TC14: Validar NO ingresar al endpoint (/cart.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint2();
		loginPage.getMessageEndpoint2();
	});
	it('40630 | TC15: Validar NO ingresar al endpoint (/checkout-step-one.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint3();
		loginPage.getMessageEndpoint3();
	});
	it('40630 | TC16: Validar NO ingresar al endpoint (/checkout-step-two.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint4();
		loginPage.getMessageEndpoint4();
	});
	it('40630 | TC17:Validar NO ingresar al endpoint (/checkout-complete.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint5();
		loginPage.getMessageEndpoint5();
	});
});
