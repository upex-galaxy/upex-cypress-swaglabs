import { PDP } from '@pages/GX-21866/ProductDetailPage';
import the from '../../../fixtures/data/GX-21866/DataAddToCard.json';
import { PLP } from '@pages/GX-21866/ProductListPage';

describe('GX-21866 | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('Precondition: Having access to SUT and being logged in', () => {
		cy.visit('/');
		PDP.get.loginAssert().should('exist');
		cy.get(the.username.input).type(the.username.data.valid);
		cy.get(the.password.input).type(the.password.data.valid);
		cy.get(the.loginbutton).click();
		PDP.get.titlemainpage().should('have.text', 'Products');
	});

	it('GX-21867| TC1: Validate user adds item from PLP to SC successfully.', () => {
		PDP.addbutton();
		PDP.get.scbadge().should('have.text', 1);
		PDP.carticon();
		PDP.get.continuebutton().should('have.text', 'Continue Shopping');
	});

	it('GX-21867| TC2: Validate user adds item from PDP to SC successfully.', () => {
		PDP.pickItemplp();
		PDP.get.backtoproducts().should('have.text', 'Back to products');
		PDP.addbutton();
		PDP.get.scbadge().should('have.text', 1);
		PDP.goToShoppingCart();
		PDP.get.continuebutton().should('have.text', 'Continue Shopping');
	});

	it('GX-21867| TC3: Validate string of “Add to Cart" button changes to "Remove" from PLP.', () => {
		PDP.addbutton();
		PDP.get.scbadge().should('have.text', 1);
		PDP.removeItem();
		PDP.get.addbutton().should('have.text', 'Add to cart');
	});

	it('GX-21867| TC4: Validate string of “Add to Cart" button changes to "Remove" from PDP.', () => {
		PDP.pickItemplp();
		PDP.get.backtoproducts().should('have.text', 'Back to products');
		PDP.addbutton();
		PDP.get.scbadge().should('have.text', 1);
		PDP.removeItem();
		PDP.get.addbutton().should('have.text', 'Add to cart');
	});

	it.only('GX-21867| TC5: Validate item added from PLP has same characteristics on SCP.', () => {
		let itemName;
		let itemPrice;
		PLP.get
			.item()
			.eq(2)
			.within(() => {
				PLP.get.itemName().then(name => (itemName = name.text()));
				PLP.get.itemPrice().then(price => (itemPrice = price.text()));
				PLP.get.itemButton().click();
			})
			.then(() => {
				PDP.goToShoppingCart();
				PDP.get.itemPlp().should('have.text', itemName);
				PDP.get.itemPriceShoppingCart().should('have.text', itemPrice);
			});
	});
	it('GX-21867| TC6: Validate item added from PDP has same characteristics on SCP.', () => {});
});
