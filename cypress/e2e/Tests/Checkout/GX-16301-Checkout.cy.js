import { loginPage } from '@pages/LoginPage';
import { productPage } from '@pages/ProductPage';
import { shoppingCartPage } from '@pages/ShoppingCartPage';
import { checkoutPage } from '@pages/checkoutPage';
const base = Cypress.env('baseUrl');
const env = Cypress.env('swagLabs');

describe('GX-16301-Checkout', () => {
	let data;

	before('before', () => {
		// Datos del fixture
		cy.fixture('DOM/space/dataSawgLabs').then(datos => {
			data = datos;
		});
	});
	beforeEach('Preconditions', () => {
		cy.visit(base);
		loginPage.fillUsernameField(env.login.users.correctUser);
		loginPage.fillPasswordField(env.login.users.correctPass);
		loginPage.ClickLoginButton();
		productPage
			.addRandomItem1()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				cy.get('.inventory_item_description').eq(random).find('[class^=btn]').click();
			});
		shoppingCartPage.ClickLinkShoppingCart();
		checkoutPage.clickCheckoutBtn();
		checkoutPage.fillFirstNameCheckoutForm(data.dataFormCheckout.firstName);
		checkoutPage.fillLastNameCheckoutForm(data.dataFormCheckout.lastName);
		checkoutPage.fillPostCodeCheckoutForm(data.dataFormCheckout.postCode);
		checkoutPage.clickContinueBtn();
	});

	it('16301 | TC1: Validate “Button Finish” complete the purchase ', () => {
		checkoutPage.clickFinishBtn();
		checkoutPage.getCheckoutTitle().should('contain', 'Complete');
		checkoutPage.getCheckoutContainer().within(() => {
			cy.contains('.complete-header', 'THANK YOU FOR YOUR ORDER', { matchCase: false });
			cy.contains('.complete-text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!', {
				matchCase: false,
			});
		});
	});
	it.only('16301 | TC1: Validate “Button Cancel” cancel the purchase ', () => {
		checkoutPage.ClickCancelBtn();
		cy.url().should('include', env.endpoint.inventory);
		shoppingCartPage.ClickLinkShoppingCart();
		cy.get('.cart_item').within(() => {
			expect('.cart_item').to.exist;
			cy.get('a')
				.invoke('text')
				.then(title => {
					expect(title).to.exist;
				});
			cy.get('.inventory_item_desc')
				.invoke('text')
				.then(desc => {
					expect(desc).to.exist;
				});
			cy.get('.inventory_item_price')
				.invoke('text')
				.then(precio => {
					expect(precio).to.exist;
				});
		});
	});
});
