class PLP {
	get = {
		productList: () => cy.get('.inventory_item'),
		productName: () => cy.get('.inventory_item_name'),
		productDesc: () => cy.get('.inventory_item_desc'),
		productPrice: () => cy.get('.inventory_item_price'),
		itemButton: () => cy.get('[class*=btn_inventory]'),
	};

	productNameClick(index) {
		this.get.productName().eq(index).click();
	}
}

export const plp = new PLP();
