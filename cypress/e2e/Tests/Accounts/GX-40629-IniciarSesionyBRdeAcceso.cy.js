import { loginPage } from '@pages/GX-40629-IniciarSesionyBRdeAcceso.page';
import data from '@data/GX-40629-IniciarSesionyBRdeAcceso.json';

describe('', () => {
	beforeEach('PRC:visit login SwagLab', () => {
		loginPage.get.endpoint();
	});
	it.only('TC1: Validar iniciar sesión con campos válidos (standard_user.)', () => {
		loginPage.typeUsername(data.standard_user);
		loginPage.get.username().should('have.value', data.standard_user);
		loginPage.typePassword(data.validPassword);
		loginPage.get.password().should('have.value', data.validPassword);
		loginPage.clickLoginButton();
		loginPage.getElementLoginValid();
	});
	it('TC2: Validar iniciar sesión con campos válidos (problem_user)', () => {
		loginPage.typeUsername(data.problem_user);
		loginPage.typePassword(data.validPassword);
		loginPage.clickLoginButton();
		loginPage.getElementLoginValid();
	});
	it('TC3: Validar iniciar sesión con campos válidos (performance_glitch_user)', () => {
		loginPage.typeUsername(data.performance_glitch_user);
		loginPage.typePassword(data.validPassword);
		loginPage.clickLoginButton();
		loginPage.getElementLoginValid();
	});
	it('TC4: Validar NO iniciar sesión dejando campos vacíos en el formulario', () => {
		loginPage.clickLoginButton();
		loginPage.getBr3_5();
	});
	it('TC5: Validar NO iniciar sesión dejando el campo vacío en username', () => {
		loginPage.typePassword(data.validPassword);
		loginPage.clickLoginButton();
		loginPage.getBr3_5();
	});
	it('TC6: Validar NO iniciar sesión dejando el campo vacío en password', () => {
		loginPage.typeUsername(data.problem_user);
		loginPage.clickLoginButton();
		loginPage.getBr4();
	});
	it('TC7: Validar NO iniciar sesión con cuenta bloqueada y password inválido', () => {
		loginPage.typeUsername(data.userBlock);
		loginPage.typePassword(data.invalidPassword);
		loginPage.clickLoginButton();
		loginPage.getBr2();
	});
	it('TC8: Validar NO iniciar sesión ingresando password inválido', () => {
		loginPage.typeUsername(data.problem_user);
		loginPage.typePassword(data.invalidPassword);
		loginPage.clickLoginButton();
		loginPage.getBr2();
	});
	it('TC9: Validar NO iniciar sesión con cuenta bloqueada', () => {
		loginPage.typeUsername(data.userBlock);
		loginPage.typePassword(data.validPassword);
		loginPage.clickLoginButton();
		loginPage.getBr1();
	});
	it('TC10: Validar NO iniciar sesión ingresando campos incorrectos o inexistentes', () => {
		loginPage.typeUsername(data.userInvalid);
		loginPage.typePassword(data.invalidPassword);
		loginPage.clickLoginButton();
		loginPage.getBr2();
	});
	it('TC11: Validar NO iniciar sesión ingresando una password inexistente', () => {
		loginPage.typeUsername();
		loginPage.typePassword(data.invalidPassword);
		loginPage.clickLoginButton();
		loginPage.getBr2();
	});
	it('TC12: Validar NO iniciar sesión ingresando un username inexistente', () => {
		loginPage.typeUsernameInvalid();
		loginPage.typePassword();
		loginPage.clickLoginButton();
		loginPage.getBr2();
	});
	it('TC13: Validar NO ingresar al endpoint (/inventory.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint1();
		loginPage.getMessageEndpoint1();
	});
	it('TC14: Validar NO ingresar al endpoint (/cart.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint2();
		loginPage.getMessageEndpoint2();
	});
	it('TC15: Validar NO ingresar al endpoint (/checkout-step-one.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint3();
		loginPage.getMessageEndpoint3();
	});
	it('TC16: Validar NO ingresar al endpoint (/checkout-step-two.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint4();
		loginPage.getMessageEndpoint4();
	});
	it('TC17:Validar NO ingresar al endpoint (/checkout-complete.html) de la website sin haber iniciado sesión.', () => {
		loginPage.visitEndpoint5();
		loginPage.getMessageEndpoint5();
	});
});
