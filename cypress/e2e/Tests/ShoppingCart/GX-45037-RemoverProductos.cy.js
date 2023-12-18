import { REMOVER } from '@pages/RemoverProductos.page';
describe('GX-45037 | TS: 📖SwagLabs | SCP | Remover productos del carrito de compras', () => {
	beforeEach('El usuario se encuentra logeado y tiene uno mas producto agregados', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('contain', 'saucedemo');
		REMOVER.Login();
		REMOVER.AddtoCart();
		REMOVER.get.removerPack().should('have.css', 'border-color', 'rgb(226, 35, 26)');
		REMOVER.get.removerPack().should('have.css', 'color', 'rgb(226, 35, 26)');
	});
	it('45038| TC1: Validar  remover productos del “SCP”', () => {
		REMOVER.RemoverPack2();
		REMOVER.get.removerCartlight().should('have.text', 'Add to cart');
		REMOVER.get.addtocartPack().should('have.css', 'border-color', 'rgb(19, 35, 34)'); // Verificar color de borde negro
		REMOVER.get.addtocartPack().should('have.css', 'color', 'rgb(19, 35, 34)');
	});
	it('45038| TC2: Validar remover producto del "PDP"', () => {
		REMOVER.ClickbackPack();
		REMOVER.RemoverPack2();
		REMOVER.get.removerCartlight().should('have.text', 'Add to cart');
		REMOVER.get.cartLink().should('have.text', '2');
	});
	it('45038| TC3:Validar remover producto del "PDP"', () => {
		REMOVER.ClickcartLink();
		REMOVER.get.itemLight().should('have.length', 3);
		REMOVER.RemoverPack2();
		REMOVER.get.itemLight().should('have.length', 2);
		REMOVER.get.cartLink().should('have.text', '2');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
