class ProductDetail {
	get = {
		itemName: () => cy.get('[class^="inventory_details_name"]'),
		itemDescription: () => cy.get('.inventory_details_desc.large_size'),
		itemPrice: () => cy.get('[class^="inventory_details_price"]'),
		itemButton: () => cy.get('[class$="btn_inventory"]'),
		cartIconLink: () => cy.get('[class="shopping_cart_link"]'),
		added: () => cy.get('[class="shopping_cart_badge"]'),
	};

	clickOnAddToCartButton() {
		this.get.itemButton().click();
	}

	addToCartButton() {
		return this.get.itemButton().then(button => {
			return button.text();
		});
	}

	productsAddedToCart() {
		return this.get.added().invoke('text');
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
