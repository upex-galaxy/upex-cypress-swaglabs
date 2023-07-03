class SCPage {
	get = {
		SCPendpoint: () => cy.url('/cart.html'),
		itemDetailsSCP: () => cy.get('.cart_item'),
	};

	scpEndpoint() {
		this.get.SCPendpoint();
	}
	ItemDetailsSCP() {
		this.get.itemDetailsSCP();
	}
}

export const SCpage = new SCPage();
