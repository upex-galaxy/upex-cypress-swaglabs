class PLP {
	get = {
		itemContainer: () => cy.get('.inventory_item'),
		addToCartButtons: () => cy.get('.btn_inventory'),
		cartButton: () => cy.get('.shopping_cart_badge'),
		title: () => cy.get('.inventory_item_name'),
		desc: () => cy.get('.inventory_item_desc'),
		price: () => cy.get('.inventory_item_price'),
	};

	//Methods
	getDataFromRandomItem() {
		let title;
		let desc;
		let price;
		let randomIndex;

		return this.get
			.itemContainer()
			.then($items => {
				randomIndex = Math.floor(Math.random() * $items.length);

				this.get
					.title()
					.eq(randomIndex)
					.then($title => {
						console.log($title);
						title = $title.text();
					});
				this.get
					.desc()
					.eq(randomIndex)
					.then($desc => {
						desc = $desc.text();
					});
				this.get
					.price()
					.eq(randomIndex)
					.then($price => {
						price = $price.text();
					});
			})
			.then(() => {
				return [title, desc, price, randomIndex];
			});
	}
	clickCartButton(numberOfItems) {
		this.get.cartButton().should('have.text', numberOfItems).click();
	}
}
export const PLPPage = new PLP();
