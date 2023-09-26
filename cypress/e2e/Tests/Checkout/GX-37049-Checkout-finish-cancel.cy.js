import { removeLogs } from '@helper/RemoveLogs';
import { SwagLogin } from '@pages/GX-25291-SwabLab-login.Page';
import { swagLabPLPpage } from '@pages/GX-37049-SwagLabPLP.page';
import data from '@data/GX-37049-Checkout-finish-cancel.json';
removeLogs();
describe('SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {
	beforeEach(
		'PCR: Situarse en la Web , Loguearse correctamente , add 1 producto o más, realizar proceso checkout , estar situado en la confirm del product',
		() => {
			cy.visit('/');
			SwagLogin.Login(data.Username, data.Password);
			SwagLogin.ClickButtonSubmit();
			SwagLogin.get.ElementLabelProduct().should('exist');
		}
	);
	it('37050 | TC1: Validar finalizar la compra de un producto', () => {});
});
