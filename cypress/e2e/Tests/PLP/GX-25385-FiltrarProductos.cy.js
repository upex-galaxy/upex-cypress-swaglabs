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
		const myArray = filter.nameZtoA();

		filter.get.filtro().select('za');
		filter.get.nameList().each((item, i) => {
			const webArray = item.text();
			expect(webArray).to.be.equal(myArray[i]);
		});
	});

	it('25836 | TC02: Validar filtrar por nombre ascendente al elegir opción “Name (A TO Z)“', () => {
		const myArray = filter.nameAtoZ();

		filter.get.filtro().select('az');
		filter.get.nameList().each((item, i) => {
			const webArray = item.text();
			expect(webArray).to.be.equal(myArray[i]);
		});
	});

	it('25836 | TC03: Validar filtrar por precio ascendente al elegir opción “Price (low to high)“', () => {
		const myArray = filter.priceLowHigh();

		filter.get.filtro().select('lohi');
		filter.get.priceList().each((item, i) => {
			const webArray = item.text().slice(1);
			expect(parseFloat(webArray)).to.be.equal(myArray[i]);
		});
	});

	it('25836 | TC04: Validar filtrar por precio descendente al elegir opción “Price (high to low)“', () => {
		const myArray = filter.priceHighLow();

		filter.get.filtro().select('hilo');
		filter.get.priceList().each((item, i) => {
			const webArray = item.text().slice(1);
			expect(parseFloat(webArray)).to.be.equal(myArray[i]);
		});
	});
});
