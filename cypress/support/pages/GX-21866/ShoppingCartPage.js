class ShoppingCartPage {
	get = {
		cartIcon: () => cy.get('.shopping_cart_link'),
		itemPriceShoppingCart: () => cy.get('.inventory_item_price'),
		scBadge: () => cy.get('.shopping_cart_badge'),
	};

	goToShoppingCart() {
		this.get.cartIcon().click();
	}
}
export const SCP = new ShoppingCartPage();
