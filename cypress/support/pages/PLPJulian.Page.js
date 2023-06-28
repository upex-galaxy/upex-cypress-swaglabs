class productListPage {
	get = {
		addToCartBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
		removeBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
		shoppingCartQty: () => cy.get('.shopping_cart_badge'),
		badgeShoppingCart: () => cy.get('span[class=shopping_cart_badge]'),
		shoppingCartIcon: () => cy.get('.shopping_cart_link'),
		backpackDescriptionPLP: () => cy.get('.inventory_list > :nth-child(1)'),
		inventoryUrl: () => cy.url('https://www.saucedemo.com/inventory.html'),
		inventoryContainer: () => cy.get('#inventory_container'),
	};

	InventoryUrl() {
		this.get.inventoryUrl();
	}

	InventoryContainer() {
		this.get.inventoryContainer();
	}

	addItemToCart() {
		this.get.addToCartBtn().click();
	}

	RemoveBtn() {
		this.get.removeBtn();
	}
	qtyAssertion() {
		this.get.shoppingCartQty();
	}
	emptyCart() {
		this.get.badgeShoppingCart();
	}

	clickShoppingCart() {
		this.get.shoppingCartIcon().click();
	}
}

export const productlistpage = new productListPage();
