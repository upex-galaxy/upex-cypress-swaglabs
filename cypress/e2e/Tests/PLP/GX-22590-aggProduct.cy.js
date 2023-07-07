import { Add } from '@pages/GX-22590-addProduct.page';
import data from '../../../fixtures/data/GX-22590-data.json';
import { removeLogs } from '@helper/RemoveLogs';
describe('✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('Precondiciones', () => {
		cy.visit('/');
		Add.getLogin(data.userName, data.password);
		cy.url().should('to.equal', data.url);
	});
	it('22591 | TC1: Validar Agregar un producto, verificando que el botón add to card  sea reemplazado por el  remove.', () => {});
});
removeLogs();
