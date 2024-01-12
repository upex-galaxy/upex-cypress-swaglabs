import data from '../../../fixtures/data/GX3-1264/GX3-1264-Data.json';
import { accessPOM } from '../../../support/pages/GX3-1264-Account-Login-Acccess/GX3-1264-AccessPOM.page';

const { login } = Cypress.env('swagLabs');

describe(' SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('GX3-1268|TC001 Correct user access', () => {
		accessPOM.enterUserName(data.DataValidate.username);
		accessPOM.enterPassword(data.DataValidate.password);
		accessPOM.clickOnSubmitBtn();
		accessPOM.get.swagsWord().should('exist');
	});

	it('GX3-1268|TC002 Login with blocked account', () => {
		accessPOM.enterUserName(data.usernameBlocked);
		accessPOM.enterPassword(data.DataValidate.password);
		accessPOM.clickOnSubmitBtn();
		accessPOM.get.dataError().should('contain', data.MsgsError.blocked);
	});

	it('GX3-1268|TC003 Login with incorrect account', () => {
		accessPOM.enterUserName(data.UserNotExist);
		accessPOM.enterPassword(data.DataValidate.password);
		accessPOM.clickOnSubmitBtn();
		accessPOM.get.dataError().should('contain', data.MsgsError.invalid);
	});

	it('GX3-1268|TC004 Login without user', () => {
		accessPOM.enterPassword(data.DataValidate.password);
		accessPOM.clickOnSubmitBtn();
		accessPOM.get.dataError().should('contain', data.MsgsError.usernameError);
	});

	it('GX3-1268|TC005 Login without password', () => {
		accessPOM.enterUserName(data.DataValidate.username);
		accessPOM.clickOnSubmitBtn();
		accessPOM.get.dataError().should('contain', data.MsgsError.passwordError);
	});

	it('GX3-1268|TC006 Login without user and password', () => {
		accessPOM.clickOnSubmitBtn();
		accessPOM.get.dataError().should('contain', data.MsgsError.usernameError);
	});

	it('GX3-1268|TC007 Validate endpoint /cart.html', () => {
		cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false });
		accessPOM.get.dataError().should('contain', login.errorMsg.cartError);
	});

	it('GX3-1268|TC008 Validate endpoint checkout-step-one.html', () => {
		cy.visit('https://www.saucedemo.com/checkout-step-one.html', { failOnStatusCode: false });
		accessPOM.get.dataError().should('contain', login.errorMsg.checkoutOneError);
	});

	it('GX3-1268|TC009 Validate endpoint checkout-step-two.html', () => {
		cy.visit('https://www.saucedemo.com/checkout-step-two.html', { failOnStatusCode: false });
		accessPOM.get.dataError().should('contain', login.errorMsg.checkoutTwoError);
	});

	it('GX3-1268|TC010 Validate endpoint checkout-step-two.html', () => {
		cy.visit('https://www.saucedemo.com/checkout-complete.html', { failOnStatusCode: false });
		accessPOM.get.dataError().should('contain', login.errorMsg.checkoutAllError);
	});
});
