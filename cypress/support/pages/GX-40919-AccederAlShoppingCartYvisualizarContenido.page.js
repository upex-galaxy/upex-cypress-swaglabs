import data from '@data/GX-40919-AccederAlShoppingCartYvisualizarContenido.json';
class ShoppingCartPage {
	get = {
		endpoint: () => cy.visit('https://www.saucedemo.com/'),
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		elementInSwaglabs: () => cy.get('div.app_logo'),
		iconShoppingCart: () => cy.get('#shopping_cart_container'),
		shoppingCartIndicator: () => cy.get('span.shopping_cart_badge'),
		titleCartEmpty: () => cy.get('.title'),
		quantityColumn: () => cy.get('.cart_quantity_label'),
		descriptionColumn: () => cy.get('.cart_desc_label'),
		buttonContinueShopping: () => cy.get('#continue-shopping'),
		buttonCheckout: () => cy.get('#checkout'),
		buttonAddCard: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		buttonRemove: () => cy.get('#remove-sauce-labs-backpack'),
	};

	typeUsername() {
		this.get.username().type(data.username);
	}
	typePassword() {
		this.get.password().type(data.password);
	}
	clickLoginButton() {
		this.get.loginButton().click();
	}
	clickIconShoppingCart() {
		this.get.iconShoppingCart().click();
	}
}

export const shoppingCartPage = new ShoppingCartPage();
