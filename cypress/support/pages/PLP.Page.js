class PLP {
	get = {
		productList: () => cy.get('.inventory_item'),
		productName: () => cy.get('.inventory_item_name'),
		productDesc: () => cy.get('.inventory_item_desc'),
		productPrice: () => cy.get('.inventory_item_price'),
		addToCart: () => cy.get('[id^=add-to-cart]'),
		buttonRemove: () => cy.get('[id^=remove]'),
		itemButton: () => cy.get('[class*=btn_inventory]'),
		
	};

	addItemRandom() {
		let itemRandom = [];
		const filePath = 'cypress/fixtures/SCP/products.json';
		let productData;
		//let item;
		this.get.productList().then(num => {
			let item = Math.floor(Math.random() * num.length);

			//extraer nombre
			this.get
				.productName()
				.eq(item)
				.then(text1 => {
					itemRandom.push(text1.text());
				});

			//extraer precio

			this.get
				.productPrice()
				.eq(item)
				.then(text2 => {
					itemRandom.push(text2.text());
				});

			this.get
				.productDesc()
				.eq(item)
				.then(text3 => {
					itemRandom.push(text3.text());

				
					productData = {
						index: item,
						nombre: itemRandom[0],
						price: itemRandom[1],
						desc: itemRandom[2],
					};
				
					cy.log( productData.nombre);
					//array.push(papa);
					cy.readFile(filePath).then(array => {
						array.push(productData);
						cy.writeFile(filePath, array);
					}
)
				});

			//agregar al carrito
			this.get.addToCart().eq(item).click();
			
		});
	}
	

	

	checkItemButton() {
		return this.get.itemButton();
	}
}

export const plp = new PLP();