class pdpPage {
	get = {
		PDPItem2endpoint: () => cy.url('/inventory-item.html?id=5'),
		itemDetailsPDP: () => cy.get('#inventory_item_container'),
		pdpAddToCartBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]'),
		PDPremoveBtn: () => cy.get('[data-test="remove-sauce-labs-fleece-jacket"]'),
		badgeShoppingCart: () => cy.get('span[class=shopping_cart_badge]'),
		shoppingCartIcon: () => cy.get('.shopping_cart_link'),
	};

	pdpItemEndpoint() {
		this.get.PDPendpoint();
	}
	ItemDetailsPDP() {
		this.get.itemDetailsPDP();
	}
	AddToCartPDP() {
		this.get.pdpAddToCartBtn().click();
	}
	clickSCIcon() {
		this.get.shoppingCartIcon().click();
	}
}

export const PDPpage = new pdpPage();
