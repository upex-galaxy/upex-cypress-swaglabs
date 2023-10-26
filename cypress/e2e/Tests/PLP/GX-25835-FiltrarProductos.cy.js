import { filter } from '@pages/GX-25835-FiltrarProductos';
const username = Cypress.env('swagLabs').login.users.correctUser;
const password = Cypress.env('swagLabs').login.users.correctPass;

describe('US GX-25835 | TS: SwagLabs | PLP Sorting | Filtrar productos por nombre o precio', () => {
	beforeEach('PRC: Usuario debe estar en la login page', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('contain', 'saucedemo');

		filter.get.inputUsername().type(username);
		filter.get.inputPassword().type(password);
		filter.get.submitButton().click();
	});

	it.skip('25836 | TC01: Validar filtrar por nombre descendente al elegir opción “Name (Z TO A)“', () => {
		const myArray = filter.nameZtoA();

		filter.get.filtro().select('za');
		filter.get.nameList().each((item, i) => {
			const webArray = item.text();
			expect(webArray).to.be.equal(myArray[i]);
		});
	});

	it.skip('25836 | TC02: Validar filtrar por nombre ascendente al elegir opción “Name (A TO Z)“', () => {
		const myArray = filter.nameAtoZ();

		filter.get.filtro().select('az');
		filter.get.nameList().each((item, i) => {
			const webArray = item.text();
			expect(webArray).to.be.equal(myArray[i]);
		});
	});

	it.skip('25836 | TC03: Validar filtrar por precio ascendente al elegir opción “Price (low to high)“', () => {
		const myArray = filter.priceLowHigh();

		filter.get.filtro().select('lohi');
		filter.get.priceList().each((item, i) => {
			const webArray = item.text().slice(1);
			expect(parseFloat(webArray)).to.be.equal(myArray[i]);
		});
	});

	it.skip('25836 | TC04: Validar filtrar por precio descendente al elegir opción “Price (high to low)“', () => {
		const myArray = filter.priceHighLow();

		filter.get.filtro().select('hilo');
		filter.get.priceList().each((item, i) => {
			const webArray = item.text().slice(1);
			expect(parseFloat(webArray)).to.be.equal(myArray[i]);
		});
	});
});
