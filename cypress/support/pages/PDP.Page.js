class PDP {
	get = {
		product: () => cy.get('.inventory_details_desc_container'),
		productName: () => cy.get('.inventory_details_name'),
		productDesc: () => cy.get('.inventory_details_desc '),
		productPrice: () => cy.get('.inventory_details_price'),
		itemButton: () => cy.get('[class*=btn_inventory]'),
	};
	itemButtonClick() {
		this.get.itemButton().click();
	}
}

export const pdp = new PDP();
