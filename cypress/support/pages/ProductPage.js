class ProductPage {
	get = {
		linkProduct: () => cy.get('#item_4_title_link'),
		inventoryItem: () => cy.get('.inventory_item'),
		btnInventory: () => cy.get('.btn_inventory'),
		inventoryName: () => cy.get('.inventory_item_name'),
		informationContainer: () => cy.get('.inventory_item_description'),
		addToCartButton: () => cy.get('[data-test^=add]'),
		backToProductsBtn: () => cy.get('[data-test=back-to-products'),
	};

	ClickAddToCartButton() {
		this.get.addToCartButton().click();
	}

	addRandomItemPLP1() {
		this.get
			.informationContainer()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				this.get.informationContainer().eq(random).find('[class^=btn]').click();
			});
	}
	addRandomItemPLP2() {
		this.get
			.informationContainer()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				cy.get('.inventory_item_description').eq(random).find('[class^=btn]').click();
			});
	}
	addRandomItemPDP1() {
		this.get
			.informationContainer()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				this.get.informationContainer().eq(random).find('a[id^="item"]').click();
			});
	}
	addRandomItemPDP2() {
		this.get
			.informationContainer()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				this.get.informationContainer().eq(random).find('a[id^="item"]').click();
			});
	}
	ClickBackToProductBtn() {
		this.get.backToProductsBtn().click();
	}
}

export const productPage = new ProductPage();
