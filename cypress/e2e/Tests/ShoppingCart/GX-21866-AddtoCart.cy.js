import { shoppingCart } from '@pages/GX-21866/AddToCart.Page';
import the from '../../../fixtures/data/GX-21866/DataAddToCard.json';

describe('GX-21866 | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('Precondition: Having access to SUT and being logged in', () => {
		cy.visit('/');
		shoppingCart.get.loginassert().should('exist');
		cy.get(the.username.input).type(the.username.data.valid);
		cy.get(the.password.input).type(the.password.data.valid);
		cy.get(the.loginbutton).click();
		shoppingCart.get.titlemainpage().should('have.text', 'Products');
	});

	it('GX-21867| TC1: Validate user adds item from PLP to SC successfully.', () => {
		shoppingCart.addbutton();
		shoppingCart.get.scbadge().should('have.text', 1);
		shoppingCart.carticon();
		shoppingCart.get.continuebutton().should('have.text', 'Continue Shopping');
	});

	it('GX-21867| TC2: Validate user adds item from PDP to SC successfully.', () => {
		shoppingCart.pickItemplp();
		shoppingCart.get.backtoproducts().should('have.text', 'Back to products');
		shoppingCart.addbutton();
		shoppingCart.get.scbadge().should('have.text', 1);
		shoppingCart.carticon();
		shoppingCart.get.continuebutton().should('have.text', 'Continue Shopping');
	});

	it('GX-21867| TC3: Validate string of “Add to Cart" button changes to "Remove" from PLP.', () => {
		shoppingCart.addbutton();
		shoppingCart.get.scbadge().should('have.text', 1);
		shoppingCart.removeItem();
		shoppingCart.get.addbutton().should('have.text', 'Add to cart');
	});

	it('GX-21867| TC4: Validate string of “Add to Cart" button changes to "Remove" from PDP.', () => {
		shoppingCart.pickItemplp();
		shoppingCart.get.backtoproducts().should('have.text', 'Back to products');
		shoppingCart.addbutton();
		shoppingCart.get.scbadge().should('have.text', 1);
		shoppingCart.removeItem();
		shoppingCart.get.addbutton().should('have.text', 'Add to cart');
	});

	it('GX-21867| TC5: Validate item added from PLP has same characteristics on SCP.', () => {
		shoppingCart.addbutton();
		shoppingCart.get.scbadge().should('have.text', 1);
	});
});
