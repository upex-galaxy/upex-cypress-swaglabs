class ShoppingCartPage {
	get = {
		itemPriceShoppingCart: () => cy.get('.inventory_item_price'),
	};
}
export const SCP = new ShoppingCartPage();
