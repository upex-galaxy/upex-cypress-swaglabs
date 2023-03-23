class PLP {
	get = {
		FItem: () => cy.get('[class="inventory_item_name"]').eq(0),
		FAdd: () => cy.get('[class="btn btn_primary btn_small btn_inventory"]').eq(0),
		FRemove: () => cy.get('[class="btn btn_secondary btn_small btn_inventory"]').eq(0),
		gotocart: () => cy.get('[class="shopping_cart_link"]'),
		gotocheckout: () => cy.get('#checkout'),
		RAdd: () => cy.get('[class="btn btn_primary btn_small btn_inventory"]'),
		CRemove: () => cy.get('[class="btn btn_secondary btn_small btn_inventory"]'),
		Rtitle: () => cy.get('[class="inventory_item_name"]'),
		Rprice: () => cy.get('[class="inventory_item_price"]'),
		ScpItem: () => cy.get('[class="cart_contents_container"]'),
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
	AddTwoRandomItem() {
		const num = Math.round(Math.random() * 5);
		this.get.RAdd().eq(num).click();
		const num2 = Math.round(Math.random() * 4);
		this.get.RAdd().eq(num2).click();
	}
	CheckChangeBtn() {
		this.get.CRemove().should('have.length', '2');
		this.get.CRemove().eq(0).should('be.visible');
		this.get.CRemove().eq(1).should('be.visible');
	}
	CheckaddBttcart() {
		this.get.gotocart().should('contain', '2');
	}
	ValidateNameItem() {
		const num = Math.round(Math.random() * 5);
		this.get
			.Rtitle()
			.eq(num)
			.then(NameItem => {
				const nameItem = NameItem.text();
				cy.log(nameItem);
				this.get.RAdd().eq(num).click();
				this.get.gotocart().click();
				this.get.ScpItem().contains(nameItem);
			});
	}
}
export const plp = new PLP();
//h
