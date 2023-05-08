class ProductPage {
	constructor() {
		this.linkProduct = '#item_4_title_link';
		this.inventoryItem = '.inventory_item';
		this.btnInventory = '.btn_inventory';
		this.inventoryName = '.inventory_item_name';
		this.informationContainer = '.inventory_item_description';
		this.addToCartButton = '[data-test^=add]';
		this.backToProductsBtn = '[data-test=back-to-products';
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
}

export const productPage = new ProductPage();
