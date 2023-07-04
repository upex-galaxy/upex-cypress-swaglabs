import { homeSaucePag } from '@pages/GX-22513-homeSaucePage';
import { inventoryPag } from '@pages/GX-22513-inventoryPage';
import tests from '@data/sauceUsers.json';

describe('', () => {
	beforeEach(() => {
		cy.visit('https://saucedemo.com/');
	});

	tests.forEach(test => {
		it(test.name, () => {
			// homeSaucePag.typeUsername(test.username);
			// homeSaucePag.typePassword(test.password);
			// homeSaucePag.clickLogin();

			if (test.name === 'should show username required') {
				homeSaucePag.typePassword(test.password);
			} else if (test.name === 'should show password required') {
				homeSaucePag.typeUsername(test.username);
			} else {
				homeSaucePag.typeUsername(test.username);
				homeSaucePag.typePassword(test.password);
			}

			homeSaucePag.clickLogin();

			if (test.name === 'login into to inventory page') {
				inventoryPag.get.titleSpan().should('have.text', test.expected);
			} else {
				homeSaucePag.get.errorMessage().should('have.text', test.expected);
			}
		});
	});
});
