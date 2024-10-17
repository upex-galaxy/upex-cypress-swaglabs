class checkout {
	get = {
		inputUserName: () =>  cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		buttonLogin: () => cy.get ('[name="login-button"]'),
		labelError:()=> cy.get ('[data-test="error"]'),

		itemsPlp:()=> cy.get('[class="inventory_item_description"]'),
		nameItem:()=>cy.get('[data-test="inventory-item-name"]')
	};
	enterUserName(UserName: string){
		UserName &&this.get.inputUserName().type(UserName);
	}
	enterPassword(Password: string){
		Password &&this.get.inputPassword().type(Password);
	}
	submitLogin() {
		this.get.buttonLogin().click({ force: true });
	}
	clickTituloProd (){
		this.get.nameItem().click();
	}
}
export const checkoutPage = new checkout();
