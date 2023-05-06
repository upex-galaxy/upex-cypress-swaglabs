class ProductPage {
	constructor() {
		this.linkProduct = '#item_4_title_link';
		this.inventoryItem = '.inventory_item';
		this.btnInventory = '.btn_inventory';
		this.inventoryName = '.inventory_item_name';
		this.informationContainer = '.inventory_item_description';
		this.addToCartButton = '[data-test^=add]';
	}

	ClickAddToCartButton() {
		cy.get(this.addToCartButton).click();
	}

	addRandomItem() {
		return cy.get(this.informationContainer);
	}
}

export const productPage = new ProductPage();
