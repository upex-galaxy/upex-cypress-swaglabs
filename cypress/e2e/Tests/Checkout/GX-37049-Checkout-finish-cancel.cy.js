import { removeLogs } from '@helper/RemoveLogs';
import { SwagLogin } from '@pages/GX-25291-SwabLab-login.Page';
import { swagLabPLPpage } from '@pages/GX-37049-SwagLabPLP.page';
import { swagLabsPDPpage } from '@pages/GX-37049-SwagLabPDP.page';
import {swgCheckout1Page} from '@pages/GX-37049-SwagLabCheckout1.page';
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
			swagLabPLPpage.AddItem().then(Values => {
				let [itemName, itemPrice] = Values;

				swagLabPLPpage.get.listItemName().should('have.text', itemName);
				swagLabPLPpage.get.listItemPrice().should('have.text', itemPrice);
				swagLabsPDPpage.ClickButtonCheckout();
				cy.url().should('contain',data.checkout.step1);

			});
			
		}
	);
	it('37050 | TC1: Validar finalizar la compra de un producto', () => {});
});
