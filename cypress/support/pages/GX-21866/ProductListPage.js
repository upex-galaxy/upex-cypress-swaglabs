class ProductListPage {
	get = {
		item: () => cy.get('.inventory_item'),
		itemName: () => cy.get('.inventory_item_name'),
		itemPrice: () => cy.get('.inventory_item_price'),
		itemButton: () => cy.get('[data-test^=add-to-cart]'),
	};
}
export const PLP = new ProductListPage();
