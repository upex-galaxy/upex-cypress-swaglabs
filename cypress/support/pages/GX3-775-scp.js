class ShoppingCartPage {
	get = {
		scpTitle: () => cy.get('.inventory_item_name '),
		scpDesc: () => cy.get('.inventory_item_desc'),
		scpPrice: () => cy.get('.inventory_item_price'),
	};
}
export const sCartPage = new ShoppingCartPage();
