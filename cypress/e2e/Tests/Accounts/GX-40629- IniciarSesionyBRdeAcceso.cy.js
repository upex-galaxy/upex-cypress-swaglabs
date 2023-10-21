import { login } from '@pages/GX-40629- IniciarSesionyBRdeAcceso.page';
import data from '@data/GX-40629- IniciarSesionyBRdeAcceso.json';

describe('', () => {
	beforeEach('PRC:visit login SwagLab', () => {
		login.get.endpoint();
	});
	it('TC1: Validar iniciar sesión con campos válidos (standard_user.)', () => {
		login.typeUsernameValid1();
		login.typePasswordValid();
		login.clickLoginButton();
		login.getElementLoginValid();
	});
	it('TC2: Validar iniciar sesión con campos válidos (problem_user)', () => {
		login.typeUsernameValid2();
		login.typePasswordValid();
		login.clickLoginButton();
		login.getElementLoginValid();
	});
	it('TC3: Validar iniciar sesión con campos válidos (performance_glitch_user)', () => {
		login.typeUsernameValid3();
		login.typePasswordValid();
		login.clickLoginButton();
		login.getElementLoginValid();
	});
	it('TC4: Validar NO iniciar sesión dejando campos vacíos en el formulario', () => {
		login.clickLoginButton();
		login.getBr3_5();
	});
	it('TC5: Validar NO iniciar sesión dejando el campo vacío en username', () => {
		login.typePasswordValid();
		login.clickLoginButton();
		login.getBr3_5();
	});
	it('TC6: Validar NO iniciar sesión dejando el campo vacío en password', () => {
		login.typeUsernameValid2();
		login.clickLoginButton();
		login.getBr4();
	});
	it('TC7: Validar NO iniciar sesión con cuenta bloqueada y password inválido', () => {
		login.typeUsernameBlock();
		login.typePasswordInvalid();
		login.clickLoginButton();
		login.getBr2();
	});
	it('TC8: Validar NO iniciar sesión ingresando password inválido', () => {
		login.typeUsernameValid2();
		login.typePasswordInvalid();
		login.clickLoginButton();
		login.getBr2();
	});
	it('TC9: Validar NO iniciar sesión con cuenta bloqueada', () => {
		login.typeUsernameBlock();
		login.typePasswordValid();
		login.clickLoginButton();
		login.getBr1();
	});
	it('TC10: Validar NO iniciar sesión ingresando campos incorrectos o inexistentes', () => {
		login.typeUsernameInvalid();
		login.typePasswordInvalid();
		login.clickLoginButton();
		login.getBr2();
	});
	it('TC11: Validar NO iniciar sesión ingresando una password inexistente', () => {
		login.typeUsernameValid1();
		login.typePasswordInvalid();
		login.clickLoginButton();
		login.getBr2();
	});
	it.only('TC12: Validar NO iniciar sesión ingresando un username inexistente', () => {
		login.typeUsernameInvalid();
		login.typePasswordValid();
		login.clickLoginButton();
		login.getBr2();
	});
});
