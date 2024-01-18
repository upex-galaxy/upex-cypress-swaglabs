import tests from '../../../fixtures/data/GX3-1264-Data.json';
import { accessPOM } from '../../../support/pages/GX3-1264-Account-Login-Acccess/GX3-1264-AccessPOM.page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe(' SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach(() => {
		cy.visit('https://www.saucedemo.com/');
	});
	tests.forEach(test => {
		it(test.nameTest, () => {
			accessPOM.enterUserName(test.username);
			accessPOM.enterPassword(test.password);
			accessPOM.clickOnSubmitBtn();

			if (test.nameTest === '1268|TC1 Correct user access') {
				accessPOM.get.titleProducts().should('have.text', test.Expected);
			} else {
				accessPOM.get.dataError().should('have.text', test.Expected);
			}
		});
	});
});
