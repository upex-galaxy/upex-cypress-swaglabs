class productListPage {
	get = {
		addToCartBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
		PLPremoveBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
		shoppingCartQty: () => cy.get('.shopping_cart_badge'),
		badgeShoppingCart: () => cy.get('span[class=shopping_cart_badge]'),
		shoppingCartIcon: () => cy.get('.shopping_cart_link'),
		backpackDescriptionPLP: () => cy.get('.inventory_list > :nth-child(1)'),
		inventoryUrl: () => cy.url('https://www.saucedemo.com/inventory.html'),
		inventoryContainer: () => cy.get('#inventory_container'),
		item5: () => cy.get('#item_5_title_link'),
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
	clickOnItem5() {
		this.get.item5().click();
	}
}

export const PLPpage = new productListPage();
