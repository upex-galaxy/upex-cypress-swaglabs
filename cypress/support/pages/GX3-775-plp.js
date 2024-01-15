class ProductListPage {
	get = {
		randomProduct: () => cy.get('.btn_inventory'),
		addToCartBtn: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		shoppingCart: () => cy.get('.shopping_cart_link'),
		shoppingCartIcon: () => cy.get('.shopping_cart_badge'),
		removeBtn: () => cy.get('.btn_secondary'),
		productTitle: () => cy.get('.inventory_item_name'),
		productDesc: () => cy.get('.inventory_item_desc'),
		productPrice: () => cy.get('.inventory_item_price'),
	};
	randomNumber = null;
	itemTitle = '';
	itemDesc = '';
	itemPrice = '';

	getProduct() {
		this.getRandomProduct();
	}

	getRandomProduct() {
		this.get.randomProduct().then(productos => {
			const numElementos = productos.length;
			const randomIndex = Math.floor(Math.random() * numElementos);
			this.randomNumber = randomIndex;
			this.get.randomProduct().eq(this.randomNumber).click();

			this.get
				.productTitle()
				.eq(this.randomNumber)
				.invoke('text')
				.then(text => {
					this.itemTitle = text;
				});

			this.get
				.productDesc()
				.eq(this.randomNumber)
				.invoke('text')
				.then(desc => {
					this.itemDesc = desc;
				});

			this.get
				.productPrice()
				.eq(this.randomNumber)
				.invoke('text')
				.then(price => {
					this.itemPrice = price;
				});
		});
	}

	clickShoppingCart() {
		this.get.shoppingCartIcon().click();
	}
}

export const pListPage = new ProductListPage();
