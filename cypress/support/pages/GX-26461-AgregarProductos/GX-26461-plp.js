class ProductList {
	get = {
		anyItem: () => cy.get('[class$="item_description"]'),
		goToDetails: () => cy.get('[id*="title_link"]'),
		itemName: () => cy.get('[class$="item_name"]'),
		itemDescription: () => cy.get('[class$="item_desc"]'),
		itemPrice: () => cy.get('[class$="item_price"]'),
		addToCartButton: () => cy.get('[class$="btn_inventory"]'),
		cartIconLink: () => cy.get('[class="shopping_cart_link"]'),
		added: () => cy.get('[class="shopping_cart_badge"]'),
	};

	addToCart(randomProductSelected) {
		this.get.addToCartButton().eq(randomProductSelected).click();
		return this.get.addToCartButton().eq(randomProductSelected).invoke('text');
	}

	productsAddedToCart() {
		return this.get.added().invoke('text');
	}

	clickOnDetailsLink(randomItem) {
		this.get.goToDetails().eq(randomItem).click();
	}

	selectRandomProduct() {
		return this.get.addToCartButton().then(index => {
			const availableItems = Cypress._.random(0, index.length - 1);
			return availableItems;
		});
	}

	goToCart() {
		this.get.cartIconLink().click();
	}

	obtainDetails(randomItem) {
		let arr = [];
		return cy
			.get('*')
			.then(() => {
				this.get
					.itemName()
					.eq(randomItem)
					.then(nameItemSelected => {
						arr.push(nameItemSelected.text());
					});
				this.get
					.itemDescription()
					.eq(randomItem)
					.then(descriptionItemSelected => {
						arr.push(descriptionItemSelected.text());
					});
				this.get
					.itemPrice()
					.eq(randomItem)
					.then(priceItemSelected => {
						arr.push(priceItemSelected.text());
					});
			})
			.then(() => {
				return arr;
			});
	}
}

export const productListPage = new ProductList();
