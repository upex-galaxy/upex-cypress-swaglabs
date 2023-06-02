class Header {
	get = {
		cartQuantity: () => cy.get('.shopping_cart_badge'),
		cartLink: () => cy.get('.shopping_cart_link'),
		iconSC: () => cy.get('#shopping_cart_container'),
	};

	goToSCP() {
		this.get.cartLink().click();
	}

	checkHead() {
		return cy.get('.primary_header');
	}
}

export const header = new Header();
