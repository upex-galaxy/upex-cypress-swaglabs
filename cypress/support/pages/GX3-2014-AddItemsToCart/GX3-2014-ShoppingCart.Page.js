class ShoppingCart {
	get = {
		itemName: () => cy.get('.inventory_item_name'),
		itemDesc: () => cy.get('.inventory_item_desc'),
		itemPrice: () => cy.get('.inventory_item_price'),
		checkoutButton: () => cy.get('[data-test="checkout"'),
	};
	clickCheckoutButton() {
		this.get.checkoutButton().should('have.text', 'Checkout').click();
	}
}

export const ShoppingCartPage = new ShoppingCart();
