import { InventoryPage } from '@pages/inventoryPage';

describe('', () => {
	const inventoryPage = new InventoryPage();

	let swagData;
	before('Fixture swagLabs', () => {
		cy.fixture('DOM/space/dataSawgLabs.json').then(data => {
			swagData = data;
		});
	});
	beforeEach('', () => {
		cy.loginSuccess();
		cy.url().should('include', 'inventory');
	});
	it('Usuario añade un producto del PLP al Shopping-Cart exitosamente.', () => {
		inventoryPage.addProducToCart(swagData.product.name);

		cy.get(inventoryPage.removeButtonCard).should('contain', 'Remove');
		cy.get(inventoryPage.shoppingCardBadge).should('exist').should('have.text', '1').click();
		cy.url().should('include', 'cart');

		cy.get(inventoryPage.inventoryItemName).should('contain', swagData.product.name);
		cy.get(inventoryPage.inventoryItemDesc).should('contain', swagData.product.inventoryItemDescription);
		cy.get(inventoryPage.inventoryItemPrice).should('contain', swagData.product.inventoryItemPrice);
	});
	it('Usuario añade un producto del PDP al Shopping-Cart exitosamente.', () => {
		inventoryPage.seeProduct(swagData.product.name);
		cy.url().should('include', 'item');

		cy.get(inventoryPage.addButtonCard).click();
		cy.get(inventoryPage.removeButtonCard).should('contain', 'Remove');
		cy.get(inventoryPage.shoppingCardBadge).should('exist').should('have.text', '1').click();

		cy.get(inventoryPage.inventoryItemName).should('contain', swagData.product.name);
		cy.get(inventoryPage.inventoryItemDesc).should('contain', swagData.product.inventoryItemDescription);
		cy.get(inventoryPage.inventoryItemPrice).should('contain', swagData.product.inventoryItemPrice);
	});
});
