class ProductDetail {
	get = {
		anyItem: () => cy.get('[class$="item_description"]'),
		itemName: () => cy.get('[class^="inventory_details_name"]'),
		itemDescription: () => cy.get('.inventory_details_desc.large_size'),
		itemPrice: () => cy.get('[class^="inventory_details_price"]'),
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
export const productDetailPage = new ProductDetail();
