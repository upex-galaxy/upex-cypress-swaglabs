class Remover1 {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		submitInput: () => cy.get('#login-button'),
		addtocartPack: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		addtocartlight: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
		addtocartShirt: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		removerPack: () => cy.get('#remove-sauce-labs-backpack'),
		removerCartlight: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		backPack: () => cy.get('.inventory_item_name'),
		cartLink: () => cy.get('.shopping_cart_link'),
		itemLight: () => cy.get('.cart_item'),
	};
	Login() {
		this.get.usernameInput().type('standard_user');
		this.get.passwordInput().type('secret_sauce');
		this.get.submitInput().click();
	}
	AddtoCart() {
		this.get.addtocartPack().click();
		this.get.addtocartlight().click();
		this.get.addtocartShirt().click();
	}
	RemoverPack2() {
		this.get.removerPack().click();
	}
	ClickbackPack() {
		this.get.backPack().eq(0).click();
	}
	ClickcartLink() {
		this.get.cartLink().click();
	}
}
export const REMOVER = new Remover1();
