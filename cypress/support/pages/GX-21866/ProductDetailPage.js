class ProductDetailPage {
	get = {
		loginAssert: () => cy.get('#login_button_container'),
		titlemainpage: () => cy.get('.title'),
		addbutton: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		removebutton: () => cy.get('#remove-sauce-labs-bolt-t-shirt'),
		cartIcon: () => cy.get('.shopping_cart_link'),
		itemPriceShoppingCart: () => cy.get('.inventory_item_price'),
		scbadge: () => cy.get('.shopping_cart_badge'),
		itemPlp: () => cy.get('.inventory_item_name'),
		itempdp: () => cy.get('#inventory_item_container'),
		descriptionitem: () => cy.get('.inventory_item_desc').eq(2),
		photoitem: () => cy.get('.inventory_item_img').eq(2),
		priceitem: () => cy.get('.inventory_item_price'),
		descriptionitemSCP: () => cy.get('#inventory_details_desc'),
		continuebutton: () => cy.get('[class^="btn btn_secondary back btn_medium"]'),
		backtoproducts: () => cy.get('#back-to-products'),
	};

	goToShoppingCart() {
		this.get.cartIcon().click();
	}

	addbutton() {
		this.get.addbutton().click();
	}

	removeItem() {
		this.get.removebutton().click();
	}

	addItempdp() {
		this.get.addbutton().click();
	}
}

export const PDP = new ProductDetailPage();
