import testCase from '../../../fixtures/DOM/space/GX-23444-accountChallenge';
import endpoints from '../../../fixtures/DOM/space/GX-23444-endpoints';
import { login } from '@pages/accountPage';
const { baseUrl } = Cypress.env();

describe('GX-22504 | SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('User must be situated in the website', () => {
		cy.visit(baseUrl);
	});
	testCase.forEach(tests => {
		it(tests.test, () => {
			if (tests.test == 'LogIn successful') {
				login.fillUsername(tests.username);
				login.fillPassword(tests.password);
				login.clickLoginBtn();
				cy.url().should('contain', 'inventory.html');
			} else if (tests.test == 'LogIn blocked') {
				login.fillUsername(tests.username);
				login.fillPassword(tests.password);
				login.clickLoginBtn();
				login.get.errorMsg().should('have.text', tests.msg);
				cy.url().should('contain', baseUrl);
			} else if (tests.test == 'LogIn Invalid') {
				login.fillUsername(tests.username);
				login.fillPassword(tests.password);
				login.clickLoginBtn();
				login.get.errorMsg().should('have.text', tests.msg);
				cy.url().should('contain', baseUrl);
			} else {
				if (tests.username != '') {
					login.get.username().type(tests.username);
				}
				if (tests.password != '') {
					login.get.password().type(tests.password);
				}
				login.clickLoginBtn();
				login.get.errorMsg().should('have.text', tests.msg);
			}
		});
	});

	endpoints.forEach(tests => {
		it(tests.test, () => {
			if (tests.test == 'No Authentication Access') {
				cy.visit(baseUrl + tests.endpoint, { failOnStatusCode: false });
				login.get.errorMsg().should('have.text', tests.msg);
				cy.url().should('contain', baseUrl);
			}
		});
	});
});
