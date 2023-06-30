class ProductListPage {
	get = {
		addButton: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
		item: () => cy.get('.inventory_item'),
		itemName: () => cy.get('.inventory_item_name'),
		itemPrice: () => cy.get('.inventory_item_price'),
		itemButton: () => cy.get('[data-test^=add-to-cart]'),
		itemTShirt: () => cy.get('#item_1_title_link'),
		scBadge: () => cy.get('.shopping_cart_badge'),
		cartIcon: () => cy.get('.shopping_cart_link'),
	};
	itemCharacteristics() {
		let itemTShirt;
		let itemPrice;
		PLP.get
			.item()
			.eq(2)
			.within(() => {
				PLP.get.itemTShirt().then(name => (itemTShirt = name.text()));
				PLP.get.itemPrice().then(price => (itemPrice = price.text()));
				PLP.get.itemButton().click();
			})
			.then(() => {
				PLP.goToShoppingCart();
				PLP.get.itemTShirt().should('have.text', itemTShirt);
				SCP.get.itemPriceShoppingCart().should('have.text', itemPrice);
			});
	}
	itemTShirt() {
		this.get.itemTShirt().click();
	}

	goToShoppingCart() {
		this.get.cartIcon().click();
	}
}
export const PLP = new ProductListPage();
import { SCP } from './ShoppingCartPage';
