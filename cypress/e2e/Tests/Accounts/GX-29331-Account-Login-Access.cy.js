import { login } from '../../../support/pages/GX-29331-Account/GX-29331-Login.page';
import credentials from '../../../fixtures/data/GX-29331-My-data.json';

describe('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('29333 | TC1: Verifique que el usuario inicia sesión correctamente', () => {
		login.enterUsername('standard_user');
		login.enterPassword('secret_sauce');
		login.clickOnSubmitBtn();
		login.assertTitlePage();
	});

	it('29333 | TC2: Verifique que el usuario no pueda iniciar sesión con cuenta bloqueada', () => {
		login.enterUsername('locked_out_user');
		login.enterPassword('secret_sauce');
		login.clickOnSubmitBtn();
		login.assertMessageBlocked();
	});

	it('29333 | TC3: Verifique que el usuario no pueda iniciar sesión con un cuenta incorrecta o inexistente', () => {
		login.enterUsername('standard_user_not_exist');
		login.enterPassword('secret_sauce');
		login.clickOnSubmitBtn();
		login.assertAccountFailedMessage();
	});

	it('29333 | TC4: Verifique que el usuario no pueda iniciar sesión con un cuenta incorrecta o inexistente', () => {
		login.enterUsername('standard_user');
		login.enterPassword('secret_sauce_not_exist');
		login.clickOnSubmitBtn();
		login.assertAccountFailedMessage();
	});

	it('29333 | TC5: Verifique que el usuario no pueda iniciar sesión dejando el username vacío en el formulario', () => {
		login.emptyUsername();
		login.enterPassword('secret_password');
		login.clickOnSubmitBtn();
		login.assertEmptyUsername();
	});

	it('29333 | TC6: Verifique que el usuario no pueda iniciar sesión dejando el password vacío en el formulario', () => {
		login.enterUsername('standard_user');
		login.emptyPassword();
		login.clickOnSubmitBtn();
		login.assertEmptyPassword();
	});
});
