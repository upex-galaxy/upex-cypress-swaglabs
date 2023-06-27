class ShoppingCart {
	get = {
		addbutton: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		removebutton: () => cy.get('#remove-sauce-labs-bolt-t-shirt'),
		scbadge: () => cy.get('.shopping_cart_badge'),
		itemplp: () => cy.get('item_1_title_link'),
		itempdp: () => cy.get('#inventory_item_container'),
		descriptionitem: () => cy.get('inventory_item_desc'),
		descriptionitemSCP: () => cy.get('inventory_details_desc'),
	};

	AddItemPLP() {
		this.get.addbutton().click();
	}

	PickItemPLP() {
		this.get.itemplp().click();
	}

	AddItemPDP() {
		this.get.addbutton().click();
	}
}
