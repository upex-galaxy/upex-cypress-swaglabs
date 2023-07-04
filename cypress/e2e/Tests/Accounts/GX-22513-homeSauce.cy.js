import { homeSaucePag } from '@pages/GX-22513-homeSaucePage';
import { inventoryPag } from '@pages/GX-22513-inventoryPage';
import tests from '@data/sauceUsers.json';
import endpoints from '@data/sauceEndpoins.json';
const { baseUrl } = Cypress.env();

describe('', () => {
	beforeEach(() => {
		cy.visit(baseUrl);
	});

	tests.forEach(test => {
		it(test.name, () => {
			if (test.name === '22514 | TC5:should show username required') {
				homeSaucePag.typePassword(test.password);
			} else if (test.name === '22514 | TC6:should show password required') {
				homeSaucePag.typeUsername(test.username);
			} else {
				homeSaucePag.typeUsername(test.username);
				homeSaucePag.typePassword(test.password);
			}

			homeSaucePag.clickLogin();

			if (test.name === '22514 | TC1:login into to inventory page') {
				inventoryPag.get.titleSpan().should('have.text', test.expected);
			} else {
				homeSaucePag.get.errorMessage().should('have.text', test.expected);
			}
		});
	});

	endpoints.forEach(endpoint => {
		it(endpoint.name, () => {
			cy.visit(baseUrl + endpoint.endpoint, { failOnStatusCode: false });
			homeSaucePag.get.errorMessage().should('contain', endpoint.expected);
		});
	});
});
