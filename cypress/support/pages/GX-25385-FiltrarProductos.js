class Filters {
	get = {
		filtro: () => cy.get('[data-test="product_sort_container"]'),
		nameList: () => cy.get('[class$="item_name"]'),
		priceList: () => cy.get('[class$="item_price"]'),
	};

	selected(filterSelected) {
		this.get.filtro().select(filterSelected);
	}

	nameAtoZ() {
		//this.get.filtro().select('az');
	}

	nameZtoA() {
		//this.get.filtro().select('za');
	}

	priceLowHigh() {
		//this.get.filtro().select('lohi');
	}

	priceHighLow() {
		//this.filtro().select('hilo');
	}
}

export const filter = new Filters();
