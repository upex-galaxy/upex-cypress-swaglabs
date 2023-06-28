class ShoppingCart {
	get = {
		loginassert: () => cy.get('#login_button_container'),
		titlemainpage: () => cy.get('.title'),
		addbutton: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		removebutton: () => cy.get('#remove-sauce-labs-bolt-t-shirt'),
		carticon: () => cy.get('.shopping_cart_link'),
		scbadge: () => cy.get('.shopping_cart_badge'),
		itemplp: () => cy.get('#item_1_title_link'),
		itempdp: () => cy.get('#inventory_item_container'),
		descriptionitem: () => cy.get('.inventory_item_desc').eq(2),
		photoitem: () => cy.get('.inventory_item_img').eq(2),
		priceitem: () => cy.get('inventory_item_price').eq(2),
		descriptionitemSCP: () => cy.get('#inventory_details_desc'),
		continuebutton: () => cy.get('[class^="btn btn_secondary back btn_medium"]'),
		backtoproducts: () => cy.get('#back-to-products'),
	};

	carticon() {
		this.get.carticon().click();
	}

	addbutton() {
		this.get.addbutton().click();
	}

	removeItem() {
		this.get.removebutton().click();
	}

	pickItemplp() {
		this.get.itemplp().click();
	}

	addItempdp() {
		this.get.addbutton().click();
	}
}

export const shoppingCart = new ShoppingCart();
