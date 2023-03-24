import { Checkout } from '@pages/Checkoutform.page';
import { login } from '@pages/Login.Page';
import { plp } from '@pages/PLP-SCP.Page';

const base = Cypress.env('baseUrl');

describe('GX-11192', () => {
	beforeEach('Precondicion para llegar hasta el checkout', () => {
		cy.visit(base);
		login.enterUsername('standard_user');
		login.enterPassword('secret_sauce');
		login.submitLogin();
		plp.Add();
		plp.Cart();
		plp.Checkout();
	});

	it('11193 | TC1: Validar que el Usuario 1 puede realizar checkout con datos validos', () => {
		Checkout.firstname('Leonardo');
		Checkout.lastname('Millan');
		Checkout.postalCode('6050');
		Checkout.continue();
		Checkout.Finish();
	});
	it('11193 | TC2: Validar que el Usuario 1 NO puede realizar checkout con campo name vacio', () => {
		Checkout.lastname('Millan');
		Checkout.postalCode('6050');
		Checkout.continue();
		Checkout.FBR2();
	});
	it('11193 | TC3: Validar que el Usuario 1 NO puede realizar checkout con campo last name vacio', () => {
		Checkout.firstname('Leonardo');
		Checkout.postalCode('6050');
		Checkout.continue();
		Checkout.FBR3();
	});
	it('11193 | TC4: Validar que el Usuario 1 NO puede realizar checkout con campo postal code vacio', () => {
		Checkout.firstname('Leonardo');
		Checkout.lastname('Millan');
		Checkout.continue();
		Checkout.FBR4();
	});
});
//h
