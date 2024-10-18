class checkout {
	get = {
		inputUserName: () =>  cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		buttonLogin: () => cy.get ('[name="login-button"]'),
		labelError:()=> cy.get ('[data-test="error"]'),

		itemsPlp:()=> cy.get('[class="inventory_item_description"]'),
		labelItem:(Elem:string)=>cy.get(`[data-test="inventory-item-${Elem}"]`),
		buttonShoppingCard:() =>cy.get('[data-test="shopping-cart-link"]'),
		buttonAddCart:()=>cy.get('[data-test*="add-to-cart"]'),
		buttonBackToCard:()=>cy.get('[data-test="back-to-products"]'),
		buttonRemove:()=>cy.get('[data-test*="remove"]')


	};
	enterUserName(UserName: string){
		this.get.inputUserName().type(UserName);
	}
	enterPassword(Password: string){
		this.get.inputPassword().type(Password);
	}
	submitLogin() {
		this.get.buttonLogin().click();
	}
	getIteRandoms(){
		return this.get.itemsPlp().its('length').then(Cant =>{
			const indexRandoms = Cypress._.random(0,Cant-1);
			return indexRandoms;
		}).then(indexRandoms=>{
			return indexRandoms;
		});
	}
	getValuesItemPlp (indexRandoms:number,itemNameEnv:string,descEnv:string,priceEnv:string){
		this.get.labelItem('name').eq(indexRandoms).then (itemName=>{
			Cypress.env(itemNameEnv,itemName.text());
			this.get.labelItem('desc').eq(indexRandoms).then (desc=>{
				Cypress.env(descEnv,desc.text());
				this.get.labelItem('price').eq(indexRandoms).then (price=>{
					Cypress.env(priceEnv,price.text());
				});
			});
		});
	}
	getValuesItemDp (itemNameEnv:string,descEnv:string,priceEnv:string){
		this.get.labelItem('name').then (itemName=>{
			Cypress.env(itemNameEnv,itemName.text());
			this.get.labelItem('desc').then (desc=>{
				Cypress.env(descEnv,desc.text());
				this.get.labelItem('price').then (price=>{
					Cypress.env(priceEnv,price.text());
				});
			});
		});
	}
	openItemDetails (indexRandoms:number){
		this.get.labelItem('name').eq(indexRandoms).click();
	}
	clickAddCard (indexRandoms:number){
		this.get.buttonAddCart().eq(indexRandoms).click();
	}
	clickShoppingCard (){
		this.get.buttonShoppingCard().click();
	}
}
export const checkoutPage = new checkout();

