class ProductDescriptionPage {
	get = {
		randomProduct: () => cy.get('.btn_inventory'),
		shoppingCart: () => cy.get('.shopping_cart_link'),
		shoppingCartIcon: () => cy.get('.shopping_cart_badge'),
		addToCartBtn: () => cy.get('[data-test^="add-to-cart-"]'),
		removeBtn: () => cy.get('[data-test^="remove"]'),

		productDescTitle: () => cy.get('.inventory_details_name'),
		productDescDesc: () => cy.get('.inventory_details_desc'),
		productDescPrice: () => cy.get('.inventory_details_price'),
		productTitle: () => cy.get('.inventory_item_name'),
		productDesc: () => cy.get('.inventory_item_desc'),
		productPrice: () => cy.get('.inventory_item_price'),
	};
	randomNumber = null;
	itemTitle = '';
	itemDesc = '';
	itemPrice = '';

	getPdpProduct() {
		this.getRandomPdpProduct();
	}

	getRandomPdpProduct() {
		this.get.randomProduct().then(productos => {
			const numElementos = productos.length;
			const randomIndex = Math.floor(Math.random() * numElementos);
			this.randomNumber = randomIndex;
			this.get.productTitle().eq(this.randomNumber).click();

			this.get
				.productDescTitle()
				.invoke('text')
				.then(text => {
					this.itemTitle = text;
				});

			this.get
				.productDescDesc()
				.invoke('text')
				.then(desc => {
					this.itemDesc = desc;
				});

			this.get
				.productDescPrice()
				.invoke('text')
				.then(price => {
					this.itemPrice = price;
				});
		});
	}
	clickBtn() {
		this.get.addToCartBtn().click();
	}
	clickShoppingCart() {
		this.get.shoppingCart().click();
	}
}
export const pdpPage = new ProductDescriptionPage();
