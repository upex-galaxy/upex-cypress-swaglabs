export class InventoryPage {
	constructor() {
		this.inventoryContainer = '#inventory_container';
		this.titleProduct = '[id$="_title_link"]';
		this.addButtonCard = '[id^="add-to-cart-sauce-labs"]';
		this.removeButtonCard = '[id^="remove-sauce-labs-"]';
		this.shoppingCardBadge = '.shopping_cart_badge';
		this.inventoryItemName = '.inventory_item_name';
		this.inventoryItemDesc = '.inventory_item_desc';
		this.inventoryItemPrice = '.inventory_item_price';
		this.itemImgLink = '[id^="item_"]';
	}

	addProducToCart(productName) {
		cy.contains(this.titleProduct, productName).parent().next().find(this.addButtonCard).click();
	}

	seeProduct(productName) {
		cy.contains(this.titleProduct, productName).parent().parent().parent().find(this.itemImgLink).find('img').click();
	}
}
