import { PDP } from '@pages/GX-21866/ProductDetailPage';
import the from '../../../fixtures/data/GX-21866/DataAddToCard.json';
import { PLP } from '@pages/GX-21866/ProductListPage';
import { SCP } from '@pages/GX-21866/ShoppingCartPage';

describe('GX-21866 | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('Precondition: Having access to SUT and being logged in', () => {
		cy.visit('/');
		cy.get(the.loginAssert);
		cy.get(the.username.input).type(the.username.data.valid);
		cy.get(the.password.input).type(the.password.data.valid);
		cy.get(the.loginButton).click();
		PDP.get.pageTitle().should('have.text', 'Swag Labs');
	});

	it('GX-21867| TC1: Validate user adds item from PLP to SC successfully.', () => {
		PDP.addButton();
		SCP.get.scBadge().should('have.text', 1);
		SCP.goToShoppingCart();
		PDP.get.continueButton().should('have.text', 'Continue Shopping');
	});

	it('GX-21867| TC2: Validate user adds item from PDP to SC successfully.', () => {
		PLP.itemTShirt();
		PDP.get.backButton().should('have.text', 'Back to products');
		PDP.addButton();
		SCP.get.scBadge().should('have.text', 1);
		SCP.goToShoppingCart();
		PDP.get.continueButton().should('have.text', 'Continue Shopping');
	});

	it('GX-21867| TC3: Validate string of “Add to Cart" button changes to "Remove" from PLP.', () => {
		PDP.addButton();
		SCP.get.scBadge().should('have.text', 1);
		PDP.get.removeButton().should('have.text', 'Remove');
	});

	it('GX-21867| TC4: Validate string of “Add to Cart" button changes to "Remove" from PDP.', () => {
		PLP.itemTShirt();
		PDP.get.backButton().should('have.text', 'Back to products');
		PDP.addButton();
		SCP.get.scBadge().should('have.text', 1);
		PDP.get.removeButton().should('have.text', 'Remove');
	});

	it('GX-21867| TC5: Validate item added from PLP has same characteristics on SCP.', () => {
		let itemTShirt;
		let itemPrice;
		PLP.get
			.item()
			.eq(2)
			.within(() => {
				PLP.get.itemTShirt().then(name => (itemTShirt = name.text()));
				PLP.get.itemPrice().then(price => (itemPrice = price.text()));
				PLP.get.itemButton().click();
			})
			.then(() => {
				SCP.goToShoppingCart();
				PLP.get.itemTShirt().should('have.text', itemTShirt);
				SCP.get.itemPriceShoppingCart().should('have.text', itemPrice);
			});
	});
	it('GX-21867| TC6: Validate item added from PDP has same characteristics on SCP.', () => {
		PLP.itemTShirt();
		PDP.get.backButton().should('have.text', 'Back to products');
		let itemName;
		let itemPrice;
		PDP.get
			.item()
			.within(() => {
				PDP.get.itemName().then(name => (itemName = name.text()));
				PDP.get.itemPrice().then(price => (itemPrice = price.text()));
				PLP.get.itemButton().click();
			})
			.then(() => {
				SCP.goToShoppingCart();
				PLP.get.itemTShirt().should('have.text', itemName);
				SCP.get.itemPriceShoppingCart().should('have.text', itemPrice);
			});
	});
});
