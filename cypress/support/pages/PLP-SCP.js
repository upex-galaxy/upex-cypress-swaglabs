class PLP {
	get = {
		FItem: () => cy.get('[class="inventory_item_name"]').eq(0),
		FAdd: () => cy.get('[class="btn btn_primary btn_small btn_inventory"]').eq(0),
		FRemove: () => cy.get('[class="btn btn_secondary btn_small btn_inventory"]').eq(0),
		gotocart: () => cy.get('[class="shopping_cart_link"]'),
		gotocheckout: () => cy.get('#checkout'),
	};
	//Metodos
	Firstitem() {
		this.get.FItem().click();
	}
	Add() {
		this.get.FAdd().click();
	}
	Firstremove() {
		this.get.FRemove().Click();
	}
	Cart() {
		this.get.gotocart().click();
	}
	Checkout() {
		this.get.gotocheckout().click();
	}
}
export const plp = new PLP();
