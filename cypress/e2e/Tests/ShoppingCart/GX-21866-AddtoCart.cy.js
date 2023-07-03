import { PDP } from '@pages/GX-21866-ProductDetail.Page';
import { PLP } from '@pages/GX-21866-ProductList.Page';
import { loginPage } from '@pages/GX-21866-login.Page';

describe('GX-21866 | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('Precondition: Having access to SUT and being logged in', () => {
		cy.visit('/');
		loginPage.login('standard_user', 'secret_sauce');
		loginPage.get.headTitle().should('have.text', 'Swag Labs');
	});

	it('GX-21867| TC1: Validate user adds item from PLP to SC successfully.', () => {
		PDP.addButton();
		PLP.get.scBadge().should('have.text', 1);
		PLP.goToShoppingCart();
		PDP.get.continueButton().should('have.text', 'Continue Shopping');
	});

	it('GX-21867| TC2: Validate user adds item from PDP to SC successfully.', () => {
		PLP.itemTShirt();
		PDP.get.backButton().should('have.text', 'Back to products');
		PDP.addButton();
		PDP.get.scBadge().should('have.text', 1);
		PDP.goToShoppingCart();
		PDP.get.continueButton().should('have.text', 'Continue Shopping');
	});

	it('GX-21867| TC3: Validate string of “Add to Cart" button changes to "Remove" from PLP.', () => {
		PDP.addButton();
		PLP.get.scBadge().should('have.text', 1);
		PDP.get.removeButton().should('have.text', 'Remove');
	});

	it('GX-21867| TC4: Validate string of “Add to Cart" button changes to "Remove" from PDP.', () => {
		PLP.itemTShirt();
		PDP.get.backButton().should('have.text', 'Back to products');
		PDP.addButton();
		PDP.get.scBadge().should('have.text', 1);
		PDP.get.removeButton().should('have.text', 'Remove');
	});

	it('GX-21867| TC5: Validate item added from PLP has same characteristics on SCP.', () => {
		PLP.itemCharacteristics();
	});
	it('GX-21867| TC6: Validate item added from PDP has same characteristics on SCP.', () => {
		PLP.itemTShirt();
		PDP.get.backButton().should('have.text', 'Back to products');
		PDP.itemsCharacteristics();
	});
});
