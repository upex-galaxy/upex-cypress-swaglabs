import { Checkout } from '@pages/Checkoutform.page';
import { loginExample } from '@pages/loginExample.Page';
import { ProductListpage } from '@pages/ProductList.Page';
import { cart } from '@pages/ShopingCart.Page';
const { login, endpoint, checkout } = Cypress.env('swagLabs');
const base = Cypress.env('baseUrl');

describe('GX-11192', () => {
	beforeEach('Precondicion para llegar hasta el checkout', () => {
		cy.visit(base);
		loginExample.enterUsername(login.users.correctUser);
		loginExample.enterPassword(login.users.correctPass);
		loginExample.submitLogin();
		ProductListpage.AddtoCartItemRandom();
		ProductListpage.GotoShopingCart();
		cart.SubmitCheckout();
	});

	it('11193 | TC1: Validar que el Usuario 1 puede realizar checkout con datos validos', () => {
		Checkout.TypeFirstName('Leonardo');
		Checkout.TypeLastName('Millan');
		Checkout.TypePostalCode('6050');
		Checkout.SubmitCheckout();
		cy.url().should('include', endpoint.checkoutTwo);
	});
	it('11193 | TC2: Validar que el Usuario 1 NO puede realizar checkout con campo name vacio', () => {
		Checkout.TypeLastName('Millan');
		Checkout.TypePostalCode('6050');
		Checkout.SubmitCheckout();
		Checkout.get.errorContainer().should('contain', checkout.errorMsg.BusinessRule2);
	});
	it('11193 | TC3: Validar que el Usuario 1 NO puede realizar checkout con campo last name vacio', () => {
		Checkout.TypeFirstName('Leonardo');
		Checkout.TypePostalCode('6050');
		Checkout.SubmitCheckout();
		Checkout.get.errorContainer().should('contain', checkout.errorMsg.BusinessRule3);
	});
	it('11193 | TC4: Validar que el Usuario 1 NO puede realizar checkout con campo postal code vacio', () => {
		Checkout.TypeFirstName('Leonardo');
		Checkout.TypeLastName('Millan');
		Checkout.SubmitCheckout();
		Checkout.get.errorContainer().should('contain', checkout.errorMsg.BusinessRule4);
	});
});
