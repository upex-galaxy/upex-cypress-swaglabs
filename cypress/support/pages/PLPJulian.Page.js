class productListPage {
	get = {
		addToCartBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
		removeFromCartBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
		shoppingCartQty: () => cy.get('.shopping_cart_badge'),
		badgeShoppingCart: () => cy.get('span[class=shopping_cart_badge]'),
		shoppingCartIcon: () => cy.get('.shopping_cart_link'),
		backpackDescriptionPLP: () => cy.get('.inventory_list > :nth-child(1)'),
	};

	addItemToCart() {
		this.get.addToCartBtn().click();
	}

	removeBtnAssertion() {
		this.get.removeFromCartBtn().should('have.text', 'Remove');
	}
	qtyAssertion() {
		this.get.shoppingCartQty().should('have.text', '1');
	}
	emptyCartAssertion() {
		this.get.badgeShoppingCart().should('not.exist');
	}

	clickSoppingCart() {
		this.get.shoppingCartIcon().click();
	}
}

export const productlistpage = new productListPage();
