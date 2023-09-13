class Filters {
	get = {
		inputUsername: () => cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		submitButton: () => cy.get('[data-test="login-button"]'),
		filtro: () => cy.get('[data-test="product_sort_container"]'),
		nameList: () => cy.get('[class$="item_name"]'),
		priceList: () => cy.get('[class$="item_price"]'),
	};

	//estos métodos obtienen elementos de la web, los parsea, los guarda en la var myArray
	//que será retornada y luego copiada a una var externa para ser usada

	nameAtoZ() {
		let myArray = [];

		filter.get
			.nameList()
			.each(item => {
				const arr = item.text();
				myArray.push(arr);
			})
			.then(() => {
				return myArray.sort();
			});
		return myArray;
	}

	nameZtoA() {
		let myArray = [];

		filter.get
			.nameList()
			.each(item => {
				const arr = item.text();
				myArray.push(arr);
			})
			.then(() => {
				return myArray.reverse();
			});
		return myArray;
	}

	priceLowHigh() {
		let myArray = [];

		filter.get
			.priceList()
			.each(item => {
				const arr = item.text().slice(1);
				myArray.push(parseFloat(arr));
			})
			.then(() => {
				return myArray.sort((a, b) => a - b);
			});
		return myArray;
	}

	priceHighLow() {
		let myArray = [];

		filter.get
			.priceList()
			.each(item => {
				const arr = item.text().slice(1);
				myArray.push(parseFloat(arr));
			})
			.then(() => {
				return myArray.sort((a, b) => b - a);
			});
		return myArray;
	}
}

export const filter = new Filters();
