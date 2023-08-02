class ProductList {
	get = {
		anyItem: () => cy.get('[class$="item_description"]'),
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

	addedProducts() {
		return this.get.added().invoke('text');
	}

	selectRandomProduct() {
		return this.get.addToCartButton().then(index => {
			const availableItems = Cypress._.random(0, index.length - 1);
			return availableItems;
		});
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

	// obtainName(randomItem) {
	// 	return this.get.itemName().eq(randomItem).invoke('val');
	// }

	// obtainDescription(randomItem) {
	// 	return this.get.itemDescription().eq(randomItem).invoke('text');
	// }

	// obtainPrice(randomItem) {
	// 	return this.get.itemPrice().eq(randomItem).invoke('text');
	// }

	goToCart() {
		this.get.cartIconLink().click();
	}
}

export const productListPage = new ProductList();
