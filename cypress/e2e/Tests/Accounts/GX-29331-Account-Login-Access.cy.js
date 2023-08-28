import { login } from '../../../support/pages/GX-29331-Account/GX-29331-Login.page';
import credentials from '../../../fixtures/data/GX-29331-My-data.json';

const validData = credentials.validDataFixture;
const blockedData = credentials.blockedDataFixture;
const invalidUsernameData = credentials.invalidUsernameFixture;
const invalidPasswordData = credentials.invalidPasswordFixture;

describe('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('29333 | TC1: Verifique que el usuario inicia sesión correctamente', () => {
		login.enterUsername(validData.username);
		login.enterPassword(validData.password);
		login.clickOnSubmitBtn();
		login.assertTitlePage();
	});

	it('29333 | TC2: Verifique que el usuario no pueda iniciar sesión con cuenta bloqueada', () => {
		login.enterUsername(blockedData.usernameBlocked);
		login.enterPassword(validData.password);
		login.clickOnSubmitBtn();
		login.assertMessageBlocked();
	});

	it('29333 | TC3: Verifique que el usuario no pueda iniciar sesión con una cuenta incorrecta o inexistente', () => {
		login.enterUsername(invalidUsernameData.usernameInvalid);
		login.enterPassword(validData.password);
		login.clickOnSubmitBtn();
		login.assertAccountFailedMessage();
	});

	it('29333 | TC4: Verifique que el usuario no pueda iniciar sesión con un password incorrecto o inexistente', () => {
		login.enterUsername(validData.username);
		login.enterPassword(invalidPasswordData.passwordInvalid);
		login.clickOnSubmitBtn();
		login.assertAccountFailedMessage();
	});

	it('29333 | TC5: Verifique que el usuario no pueda iniciar sesión dejando el username vacío en el formulario', () => {
		login.emptyUsername();
		login.enterPassword(validData.password);
		login.clickOnSubmitBtn();
		login.assertEmptyUsername();
	});

	it('29333 | TC6: Verifique que el usuario no pueda iniciar sesión dejando el password vacío en el formulario', () => {
		login.enterUsername(validData.username);
		login.emptyPassword();
		login.clickOnSubmitBtn();
		login.assertEmptyPassword();
	});
});
