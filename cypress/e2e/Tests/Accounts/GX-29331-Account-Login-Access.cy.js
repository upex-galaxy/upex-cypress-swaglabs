import { loginPOM } from '../../../support/pages/GX-29331-Account/GX-29331-LoginPOM.page';
import credentials from '../../../fixtures/data/GX-29331/GX-29331-My-data.json';

const validData = credentials.validDataFixture;
const blockedData = credentials.blockedDataFixture;
const invalidUsernameData = credentials.invalidUsernameFixture;
const invalidPasswordData = credentials.invalidPasswordFixture;
const { login } = Cypress.env('swagLabs');

describe('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('29333 | TC1: Verifique que el usuario inicia sesión correctamente', () => {
		loginPOM.enterUsername(validData.username);
		loginPOM.enterPassword(validData.password);
		loginPOM.clickOnSubmitBtn();
		loginPOM.assertTitlePage();
	});

	it('29333 | TC2: Verifique que el usuario no pueda iniciar sesión con cuenta bloqueada', () => {
		loginPOM.enterUsername(blockedData.usernameBlocked);
		loginPOM.enterPassword(validData.password);
		loginPOM.clickOnSubmitBtn();
		loginPOM.elements.dataError().should('contain', 'Epic sadface: Sorry, this user has been locked out.');
	});

	it('29333 | TC3: Verifique que el usuario no pueda iniciar sesión con una cuenta incorrecta o inexistente', () => {
		loginPOM.enterUsername(invalidUsernameData.usernameInvalid);
		loginPOM.enterPassword(validData.password);
		loginPOM.clickOnSubmitBtn();
		loginPOM.elements.dataError().should('contain', 'Epic sadface: Username and password do not match any user in this service');
	});

	it('29333 | TC4: Verifique que el usuario no pueda iniciar sesión con un password incorrecto o inexistente', () => {
		loginPOM.enterUsername(validData.username);
		loginPOM.enterPassword(invalidPasswordData.passwordInvalid);
		loginPOM.clickOnSubmitBtn();
		loginPOM.elements.dataError().should('contain', 'Epic sadface: Username and password do not match any user in this service');
	});

	it('29333 | TC5: Verifique que el usuario no pueda iniciar sesión dejando el username vacío en el formulario', () => {
		loginPOM.emptyUsername();
		loginPOM.enterPassword(validData.password);
		loginPOM.clickOnSubmitBtn();
		loginPOM.elements.dataError().should('contain', 'Epic sadface: Username is required');
	});

	it('29333 | TC6: Verifique que el usuario no pueda iniciar sesión dejando el password vacío en el formulario', () => {
		loginPOM.enterUsername(validData.username);
		loginPOM.emptyPassword();
		loginPOM.clickOnSubmitBtn();
		loginPOM.elements.dataError().should('contain', 'Epic sadface: Password is required');
	});

	it('29333 | TC7: Verifique que el usuario no pueda iniciar sesión dejando el username y el password vacío en el formulario', () => {
		loginPOM.emptyUsername();
		loginPOM.emptyPassword();
		loginPOM.clickOnSubmitBtn();
		loginPOM.elements.dataError().should('contain', 'Epic sadface: Username is required');
	});

	it('29333 | TC8: Verifique que el usuario no pueda ingresar a un endpoint checkout step one de la website sin haber iniciado sesión', () => {
		cy.visit('https://www.saucedemo.com/checkout-step-one.html', { failOnStatusCode: false });
		loginPOM.elements.dataError().should('contain', login.errorMsg.checkoutOneError);
	});

	it('29333 | TC9: Verifique que el usuario no pueda ingresar a un endpoint checkout step two de la website sin haber iniciado sesión', () => {
		cy.visit('https://www.saucedemo.com/checkout-step-two.html', { failOnStatusCode: false });
		loginPOM.elements.dataError().should('contain', login.errorMsg.checkoutTwoError);
	});

	it('29333 | TC10: Verifique que el usuario no pueda ingresar a un endpoint checkout complete de la website sin haber iniciado sesión', () => {
		cy.visit('https://www.saucedemo.com/checkout-complete.html', { failOnStatusCode: false });
		loginPOM.elements.dataError().should('contain', login.errorMsg.checkoutAllError);
	});
});
