import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { checkout } from '@pages/GX-36992-Checkout.page';

describe('GX-36992-✅-swag-labs-checkout-finalizar-o-cancelar-la-compra-de-un-producto-en-la-website', () => {
	let data;
	beforeEach('Precondicion: Estar logueado', () => {
		cy.visit('/');
		cy.url().should('contain', 'demo');
		cy.fixture('data/GX-36992-Checkout-finalizar-cancelar').then(fixtureData => {
			data = fixtureData;
		});
	});
	it('Precondicion: Ingresar 1 o mas productos al carrito', () => {
		checkout.username(data.username);
		checkout.lastName(data.lastName);
		checkout.btnLogin();
		checkout.btnCartShopping();
		checkout.clickBtnCheckout();
		checkout.firstName(data.firstName);
		checkout.lastName(data.lastName);
		checkout.codePostal(data.codePostal);
		checkout.btnContinue();
	});
});
