class ProductPage {
	constructor() {
	
		this.inventoryItem = '.inventory_item';
		this.btnInventory = '.btn_inventory';
		this.inventoryName = '.inventory_item_name';
		this.informationContainer = '.inventory_item_description';
		this.addToCartButton = '[data-test^=add]';
		this.backToProductsBtn = '[data-test=back-to-products';
		this.shoppingCartLink ='.shopping_cart_link'
	}

	ClickAddToCartButton() {
		cy.get(this.addToCartButton).click();
	}

	addRandomItem1() {
		return cy.get(this.informationContainer);
	}
	addRandomItem2() {
		return cy.get(this.informationContainer);
	}
	ClickBackToProductBtn() {
		cy.get(this.backToProductsBtn).click();
	}
	// checkoutProcess() {
	// 	cy.get(this.informationContainer)
	// 		.its('length')
	// 		.then(randomItem => {
	// 			let random = Cypress._.random(0, randomItem - 1);
	// 			cy.get('.inventory_item_description').eq(random).find('[class^=btn]').click();
	// 		});
	// 	cy.get(this.shoppingCartLink).click();
	// }
}

export const productPage = new ProductPage();
