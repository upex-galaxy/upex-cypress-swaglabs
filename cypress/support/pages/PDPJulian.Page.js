class productDetailPage {
	get = {
		PDPendpoint: () => cy.url('/inventory-item.html?id=4'),
	};

	pdpEndpoint() {
		this.get.PDPendpoint();
	}
}

export const productdetailpage = new productDetailPage();
