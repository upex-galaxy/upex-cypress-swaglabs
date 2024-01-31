class PLP {
	get = {
		item: () => cy.get('.inventory_item'),
		addToCartButtons: () => cy.get('.btn_inventory'),
		cartButton: () => cy.get('.shopping_cart_badge'),
		itemName: () => cy.get('.inventory_item_name'),
	};

	itemName;

	//Methods
	getRandomItem = () => {
		this.get.addToCartButtons().then($buttons => {
			const randomIndex = Math.floor(Math.random() * $buttons.length);
			this.get.addToCartButtons().eq(randomIndex).click();

			this.get
				.itemName()
				.eq(randomIndex)
				.invoke('text')
				.then(text => {
					this.itemName = text;
					console.log(this.itemName);
				});
		});
	};
}

export const PLPPage = new PLP();
