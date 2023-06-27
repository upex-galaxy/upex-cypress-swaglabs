import { the } from '../../../support/pages/GX-21866/AddToCart.Page';
import fixture from '../../../fixtures/data/GX-21866/DataAddToCard.json';
import { loginpage } from '/Github MAGG/L1-cypex-swaglabs/cypress.config';

describe('GX-21866 | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('Precondition: Having access to SUT and being logged in', () => {
		cy.visit('/');
		cy.url().should('contain', loginpage);
		cy.get(fixture.username.input).type(fixture.username.data.valid);
		cy.get(fixture.password.input).type(fixture.username.data.valid);
		cy.get(fixture.loginbutton.input).click();
	});

	it('GX-21867| TC1: Validate user adds item from PLP to SC successfully.', () => {
		the.additem();
	});
});
