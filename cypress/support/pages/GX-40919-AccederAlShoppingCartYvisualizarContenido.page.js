import data from '@data/GX-40919-AccederAlShoppingCartYvisualizarContenido.json';
class ShoppingCartPage {
	get = {
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
		shoppingCartLink: () => cy.get('.shopping_cart_link'),
		inventoryItemName: () => cy.get('.inventory_item_name'),
		shoppingcartBadge: () => cy.get('.shopping_cart_badge'),
		cartQuantity: () => cy.get('.cart_quantity'),
		inventoryItemDesc: () => cy.get('.inventory_item_desc'),
		inventoryItemPrice: () => cy.get('.inventory_item_price'),
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
	buttonRemoveAssert() {
		this.get.buttonRemove().should('have.text', data.text.buttonRemove);
	}
	clickInButtonAddCard() {
		this.get.buttonAddCard().click();
	}
	clickInShoppingCartLink() {
		this.get.shoppingCartLink().click();
	}
}

export const shoppingCartPage = new ShoppingCartPage();
