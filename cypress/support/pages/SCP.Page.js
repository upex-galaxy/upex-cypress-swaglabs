class ShoppingCartPage {
	get = {
		title: () => cy.get('.title'),
		removeBtn: () => cy.get('.removed_cart_item'),
		productName: () => cy.get('.inventory_item_name'),
		productDescription: () => cy.get('[class*=item_desc]'),
		productPrice: () => cy.get('.inventory_item_price'),
		productImage: () => cy.get('[class*=item_img]'),
		continueShopping: () => cy.get('#continue-shopping'),
	};

	continueShoppingClick() {
		this.get.continueShopping().click();
	}
}

export const cartPage = new ShoppingCartPage();
