import { homeSaucePage } from '@pages/GX-22513-homeSaucePage';

const tests = require('/cypress/fixtures/data/sauceUsers.json');

describe('', () => {
	beforeEach(() => {
		cy.visit('https://saucedemo.com/');
	});

	tests.forEach(test => {
		it(test.name, () => {
			homeSaucePage.typeUsername(test.username);
			homeSaucePage.typePassword(test.password);
			homeSaucePage.clickLogin();

			if (test.name === 'login into to inventory page') {
				InventoryPage.get.titleSpan().should('have.text', test.expected);
			} else {
				homeSaucePage.get.errorMessage().should('have.text', test.expected);
			}
		});
	});
});
