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
			checkout.username(data.username);
			checkout.password(data.password);
			checkout.btnLogin();
			checkout.selectProduct();
			checkout.btnCartShopping();
			checkout.clickBtnCheckout();
			checkout.firstName(data.firstName);
			checkout.lastName(data.lastName);
			checkout.codePostal(data.codigoPostal);
			checkout.btnContinue();
		});
	});

	it('36993 | TC1: Validar Finalizar hacer la compra al hacer click en el botón finish.', () => {
		cy.url().should('contain', 'checkout');
		checkout.get.btnSpan().should('contain', '1');

		// checkout.get.showTotal().click().should('exist').and('not.be.empty');
	});
});
