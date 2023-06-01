class ShoppingCartPage {
	get = {
        title: () => cy.get('.title'),
        items: () => cy.get('.shopping_cart_badge'),
		removeBtn: () => cy.get('.removed_cart_item'),
		quantityProducts: () => cy.get('#shopping_cart_container'),
		productName: () => cy.get('.inventory_item_name'),
		productDescription: () => cy.get('[class*=item_desc]'),
		productPrice: () => cy.get('[class*=item_price]'),
		productImage: () => cy.get('[class*=item_img]'),
	};
	removeLastProduct() {
		// Remover un producto del SCP
		this.get.removeBtn().click();
	};
	
    checkTitle() {
        return this.get.title();
    }

	checkProductName() {
		return this.get.productName();
	}
	
}

export const cartPage = new ShoppingCartPage();
