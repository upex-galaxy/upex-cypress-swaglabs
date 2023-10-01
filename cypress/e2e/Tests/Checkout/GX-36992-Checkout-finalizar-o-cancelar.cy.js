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
		const selectLabel = checkout.selectLabels();
		cy.contains(selectLabel).should('exist');
		checkout.clickBtnFinish();
		checkout.clickImg();
		checkout.get.img().should('have.class', 'pony_express');
		checkout.clickH2();
		checkout.get.h2().should('contain', data.value1);
		checkout.clickText();
		checkout.get.text().should('contain', data.value2);
		cy.url().should('contain', 'complete');
	});
	it('36993 | TC2: Validar cancelar la compra al hacer click en el botón Cancel.', () => {
		cy.url().should('contain', 'checkout');
		checkout.get.btnSpan().should('contain', '1');
		checkout.clickBtnCancel();
		cy.url().should('contain', 'inventory.html');
	});
});
