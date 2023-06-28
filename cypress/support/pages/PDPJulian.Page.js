class pdpDetailPage {
	get = {
		PDPendpoint: () => cy.url('/cart.html'),
		itemDetailsPDP: () => cy.get('.cart_item'),
	};

	pdpEndpoint() {
		this.get.PDPendpoint();
	}
	ItemDetailsPDP() {
		this.get.itemDetailsPDP();
	}
}

export const pdpdetailpage = new pdpDetailPage();
