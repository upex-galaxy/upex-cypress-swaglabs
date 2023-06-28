class scpDetailPage {
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

export const scpdetailpage = new scpDetailPage();
