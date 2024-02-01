import { loginPage } from '@pages/GX3-2014-AddItemsToCart/GX3-2014-Login.Page';
import { PLPPage } from '@pages/GX3-2014-AddItemsToCart/GX3-2014-PLP.Page';
import { ShoppingCartPage } from '@pages/GX3-2014-AddItemsToCart/GX3-2014-ShoppingCart.Page';
import { checkoutPage } from '@pages/GX3-2014-AddItemsToCart/GX3-2014-Checkout.Page';
import data from '@data/GX3-2014-Login.json';
import dataInventory from '@data/GX3-2014-Inventory.json';
import dataCheckout from '@data/GX3-2014-Checkout.json';

describe('[Automation] SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {
	beforeEach('PRC: The user is logged in. One product is added to the shopping cart. The user fills in a form.', () => {
		cy.visit('/');
		//User logs in
		loginPage.login(data.username, data.password);
		PLPPage.get.itemContainer().should('have.length', dataInventory.numberOfItems);
		cy.url().should('contain', dataInventory.inventoryEndpoint);

		//User adds one product to the cart
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
			cy.url().should('contain', dataCheckout.endpoints.checkoutStepOneEndpoint);
		});

		//User fills in a form
		checkoutPage.fillInForm(dataCheckout.formData.name, dataCheckout.formData.lastName, dataCheckout.formData.zip);
		checkoutPage.submitForm();
		cy.url().should('contain', dataCheckout.endpoints.checkoutStepTwoEndpoint);
	});

	it('2014 | TC1: Check that the user can finish a purchase', () => {
		checkoutPage.get.finishBtn().click();
		checkoutPage.get.checkoutCompleteHeader().invoke('text').should('eq', dataCheckout.completeCheckoutMessages.checkoutHeader);
		checkoutPage.get.checkoutCompleteText().invoke('text').should('eq', dataCheckout.completeCheckoutMessages.checkoutText);
	});
	it('2014 | TC2: Check that the user can  Cancel a purchase', () => {
		checkoutPage.get.cancelBtn().click();
		cy.url().should('contain', dataInventory.inventoryEndpoint);
		PLPPage.get.cartButton().invoke('text').should('eq', dataInventory.numberOfProductsInCart);
	});
});
