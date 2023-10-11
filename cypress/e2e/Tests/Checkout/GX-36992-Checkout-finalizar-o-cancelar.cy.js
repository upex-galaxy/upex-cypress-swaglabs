import { removeLogs } from '@helper/RemoveLogs';
import { checkoutPage } from '@pages/GX-36992-Checkout.page';
import data from '../../../fixtures/data/GX-36992-Checkout-finalizar-cancelar.json';
removeLogs();
describe('GX-36992-✅-swag-labs-checkout-finalizar-o-cancelar-la-compra-de-un-producto-en-la-website', () => {
	beforeEach('Precondicion: Estar logueado', () => {
		cy.visit('/');
		cy.url().should('contain', 'demo');
		checkoutPage.typeUserName(data.username);
		checkoutPage.get.inputUserName().should('have.value', data.username);
		checkoutPage.typePassword(data.password);
		checkoutPage.get.inputPassword().should('have.value', data.password);
		checkoutPage.clickBttnLogin();
		cy.url().should('contain', 'inventory.html');
		checkoutPage.selectProduct();
		checkoutPage.btnCartShopping();
		checkoutPage.clickBtnCheckout();
		checkoutPage.firstName(data.firstName);
		checkoutPage.lastName(data.lastName);
		checkoutPage.codePostal(data.codigoPostal);
		checkoutPage.btnContinue();
	});

	it('36993 | TC1: Validar Finalizar hacer la compra al hacer click en el botón finish.', () => {
		cy.url().should('contain', 'checkout');
		checkoutPage.get.btnSpan().should('contain', '1');
		const selectLabel = checkoutPage.selectLabels();
		cy.contains(selectLabel).should('exist');
		checkoutPage.clickBtnFinish();
		checkoutPage.clickImg();
		checkoutPage.get.img().should('have.class', 'pony_express');
		checkoutPage.clickH2();
		checkoutPage.get.h2().should('contain', data.value1);
		checkoutPage.clickText();
		checkoutPage.get.text().should('contain', data.value2);
		cy.url().should('contain', 'complete');
	});
	it('36993 | TC2: Validar cancelar la compra al hacer click en el botón Cancel.', () => {
		cy.url().should('contain', 'checkout');
		checkoutPage.get.btnSpan().should('contain', '1');
		checkoutPage.clickBtnCancel();
		cy.url().should('contain', 'inventory.html');
	});
});
