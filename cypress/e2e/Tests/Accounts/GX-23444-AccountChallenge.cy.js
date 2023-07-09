import testCase from '../../../fixtures/DOM/space/GX-23444-accountChallenge';
import { login } from '@pages/account'; // se utilizo el mismo Page que otras US.
const { baseUrl } = Cypress.env();
const { swagLabs } = Cypress.env();

describe('GX-22504 | SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach(() => {
		cy.visit(baseUrl);
	});

	testCase.test.forEach(tests => {
		it(tests.name, () => {
			const { name, username, password, msg } = tests;
			if (name === '23455 | TC1: Validate LogIn when is successful.') {
				login.fillUsername(tests.username);
				login.fillPassword(tests.password);
				login.clickLoginBtn();
				cy.url().should('contain', swagLabs.endpoint.inventory);
			} else if (name === '23455 | TC2: Validate LogIn when is blocked.') {
				login.fillUsername(username);
				login.fillPassword(password);
				login.clickLoginBtn();
				login.get.errorMsg().should('have.text', msg);
				cy.url().should('contain', baseUrl);
			} else if (name === '23455 | TC3: Validate LogIn when is invalid.') {
				login.fillUsername(username);
				login.fillPassword(password);
				login.clickLoginBtn();
				login.get.errorMsg().should('have.text', msg);
				cy.url().should('contain', baseUrl);
			} else {
				login.emptyFields(username, password);
				login.clickLoginBtn();
				login.get.errorMsg().should('have.text', msg);
			}
		});
	});

	testCase.endpoint.forEach(test => {
		it(test.name, () => {
			const { name, endpoint, msg } = test;

			if (name === '23455 | TC7: Validate enter to an internal endpoint of the website without doing the LogIn before.') {
				cy.visit(baseUrl + endpoint, { failOnStatusCode: false });
				login.get.errorMsg().should('have.text', msg);
				cy.url().should('contain', baseUrl);
			}
		});
	});
});
