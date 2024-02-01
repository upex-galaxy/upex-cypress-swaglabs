class ShoppingCart {
	get = {
		itemName: () => cy.get('.inventory_item_name'),
		itemDesc: () => cy.get('.inventory_item_desc'),
		itemPrice: () => cy.get('.inventory_item_price'),
	};
}

export const ShoppingCartPage = new ShoppingCart();
