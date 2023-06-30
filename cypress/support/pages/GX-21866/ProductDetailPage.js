class ProductDetailPage {
	get = {
		addButton: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		removeButton: () => cy.get('#remove-sauce-labs-bolt-t-shirt'),
		itemName: () => cy.get('[class^=inventory_details_name]'),
		itemPrice: () => cy.get('.inventory_details_price'),
		continueButton: () => cy.get('[data-test=continue-shopping]'),
		backButton: () => cy.get('#back-to-products'),
		item: () => cy.get('#inventory_item_container'),
		scBadge: () => cy.get('.shopping_cart_badge'),
		cartIcon: () => cy.get('.shopping_cart_link'),
		itemTShirt: () => cy.get('#item_1_title_link'),
		itemButton: () => cy.get('[data-test^=add-to-cart]'),
	};

	itemsCharacteristics() {
		let itemName;
		let itemPrice;
		PDP.get
			.item()
			.within(() => {
				PDP.get.itemName().then(name => (itemName = name.text()));
				PDP.get.itemPrice().then(price => (itemPrice = price.text()));
				PDP.get.itemButton().click();
			})
			.then(() => {
				PDP.goToShoppingCart();
				PDP.get.itemTShirt().should('have.text', itemName);
				SCP.get.itemPriceShoppingCart().should('have.text', itemPrice);
			});
	}
	addButton() {
		this.get.addButton().click();
	}

	addToCart() {
		this.get.addButton().click();
	}

	goToShoppingCart() {
		this.get.cartIcon().click();
	}

	itemTShirt() {
		this.get.itemTShirt().click();
	}

	backButton() {
		this.get.backButton().should('have.text', 'Back to products');
	}
}

export const PDP = new ProductDetailPage();
import { SCP } from './ShoppingCartPage';
