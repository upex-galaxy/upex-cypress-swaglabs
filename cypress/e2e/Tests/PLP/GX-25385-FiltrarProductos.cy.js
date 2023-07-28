import { filter } from '@pages/GX-25385-FiltrarProductos';

describe('US GX-25835 | TS: SwagLabs | PLP Sorting | Filtrar productos por nombre o precio', () => {
	beforeEach('PRC: Usuario debe estar en la login page', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('contain', 'saucedemo');
		cy.get('[data-test="username"]').type('standard_user');
		cy.get('[data-test="password"]').type('secret_sauce');
		cy.get('[data-test="login-button"]').click();
		//cy.login('standard_user', 'secret_sauce');
	});

	it('25836 | TC01: Validar filtrar por nombre descendente al elegir opción “Name (Z TO A)“', () => {
		let myArray = [];
		//let webArray = [];

		filter.get
			.nameList()
			.each(item => {
				const arr = item.text();
				myArray.push(arr);
			})
			.then(() => {
				return myArray.reverse();
				//cy.log(myArray);
			})
			.then(principalArr => {
				filter.selected('za');
				filter.get.nameList().each((item, i) => {
					const arr2 = item.text();
					//webArray.push(arr2);
					expect(arr2).to.be.equal(principalArr[i]);
				});
			});
	});

	it('25836 | TC02: Validar filtrar por nombre ascendente al elegir opción “Name (A TO Z)“', () => {
		let myArray = [];
		//let webArray = [];

		filter.get
			.nameList()
			.each(item => {
				const arr = item.text();
				myArray.push(arr);
			})
			.then(() => {
				return myArray.sort();
				//cy.log(myArray);
			})
			.then(principalArr => {
				filter.selected('az');
				filter.get.nameList().each((item, i) => {
					const arr2 = item.text();
					//webArray.push(arr2);
					expect(arr2).to.be.equal(principalArr[i]);
				});
			});
	});

	it('25836 | TC03: Validar filtrar por precio ascendente al elegir opción “Price (low to high)“', () => {
		let myArray = [];
		//let webArray = [];

		filter.get
			.priceList()
			.each(item => {
				const arr = item.text().slice(1);
				myArray.push(parseFloat(arr));
			})
			.then(() => {
				return myArray.sort((a, b) => a - b);
				//cy.log(myArray);
			})
			.then(principalArr => {
				filter.selected('lohi');
				filter.get.priceList().each((item, i) => {
					const arr2 = item.text().slice(1);
					//webArray.push(parseFloat(arr2));
					expect(parseFloat(arr2)).to.be.equal(principalArr[i]);
				});
			});
	});

	it('25836 | TC04: Validar filtrar por precio descendente al elegir opción “Price (high to low)“', () => {
		let myArray = [];
		//let webArray = [];

		filter.get
			.priceList()
			.each(item => {
				const arr = item.text().slice(1);
				myArray.push(parseFloat(arr));
			})
			.then(() => {
				return myArray.sort((a, b) => b - a);
				//cy.log(myArray);
			})
			.then(principalArr => {
				filter.selected('hilo');
				filter.get.priceList().each((item, i) => {
					const arr2 = item.text().slice(1);
					//webArray.push(parseFloat(arr2));
					expect(parseFloat(arr2)).to.be.equal(principalArr[i]);
				});
			});
	});
});
