import { loginPage } from '@pages/GX3-2014-Login.Page';
import { PLPPage } from '@pages/GX3-2014-PLP.page';
import { ShoppingCartPage } from '@pages/GX3-2014-ShoppingCart.Page';
import data from '@data/GX3-2014-Login.json';
import dataInventory from '@data/GX3-2014-Inventory.json';

describe('[Automation] SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {
	beforeEach('PRC: The user is logged in, and one product is added to the shopping cart', () => {
		cy.visit('/');
		loginPage.login(data.username, data.password);
		PLPPage.get.itemContainer().should('have.length', dataInventory.numberOfItems);
		cy.url().should('contain', dataInventory.inventoryEndpoint);
	});
	it('2014 | TC1: Check that the user can finish a purchase', () => {
		PLPPage.getDataFromRandomItem().then(details => {
			const [title, desc, price, randomIndex] = details;
			const buttonMessage = message => {
				return PLPPage.get.addToCartButtons().eq(randomIndex).should('have.text', message);
			};

			buttonMessage(dataInventory.addToCartOption).click();
			buttonMessage(dataInventory.removeOption);
			PLPPage.clickCartButton(dataInventory.numberOfProductsInCart);

			ShoppingCartPage.get.itemName().invoke('text').should('eq', title);
			ShoppingCartPage.get.itemDesc().invoke('text').should('eq', desc);
			ShoppingCartPage.get.itemPrice().invoke('text').should('eq', price);
			ShoppingCartPage.clickCheckoutButton();
		});
	});
});
