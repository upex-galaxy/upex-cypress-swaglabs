class Header {
	get = {
		cartQuantity: () => cy.get('.shopping_cart_badge'),
		cartLink: () => cy.get('.shopping_cart_link'),
		iconSC: () => cy.get('#shopping_cart_container'),
	};
}

export const header = new Header();
