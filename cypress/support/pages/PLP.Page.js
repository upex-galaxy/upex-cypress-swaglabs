class PLP {
	get = {
		productList: () => cy.get('.inventory_item'),
		productName: () => cy.get('.inventory_item_name'),
		productDesc: () => cy.get('.inventory_item_desc'),
		productPrice: () => cy.get('.inventory_item_price'),
		buttonRemove: () => cy.get('[id^=remove]'),
		itemButton: () => cy.get('[class*=btn_inventory]'),
	};
}

export const plp = new PLP();
