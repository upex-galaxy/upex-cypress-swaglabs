import { loginPage } from '@pages/GX3-2014-Login.Page';
import { PLPPage } from '@pages/GX3-2014-PLP.page';
import data from '@data/GX3-2014-Login.json';

describe('[Automation] SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {
	beforeEach('PRC: The user is logged in, and one product is added to the shopping cart', () => {
		cy.visit('/');
		loginPage.login(data.username, data.password);
		PLPPage.get.item().should('have.length', 6);
		cy.url().should('contain', data.inventoryEndpoint);
	});
	it('2014 | TC1: Check that the user can finish a purchase', () => {
		PLPPage.getRandomItem();
		PLPPage.get.cartButton().should('have.text', '1').click();
	});
});
