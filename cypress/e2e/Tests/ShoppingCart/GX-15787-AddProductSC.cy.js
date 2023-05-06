import { loginPage } from '@pages/LoginPage';
import { productPage } from '@pages/ProductPage';
import { shoppingCartPage } from '@pages/ShoppingCartPage';

const inventoryHtml = Cypress.env('swagLabs');
const base = Cypress.env('baseUrl');

describe('US GX-15787 | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	let data;

	before('before', () => {
		// Datos del fixture
		cy.fixture('DOM/space/dataSawgLabs').then(datos => {
			data = datos;
		});
	});

	beforeEach('User log in Swag Labs Website', () => {
		cy.visit(base);
		loginPage.fillUsernameField(data.data.user);
		loginPage.fillPasswordField(data.data.password);
		loginPage.ClickLoginButton();
		loginPage.CheckNoProductAdded();
	});

	it('15787 | TC1: Add a product from the PLP to the Shopping-Cart successfully', () => {
		cy.url().should('include', inventoryHtml.endpoint.inventory);
		productPage
			.addRandomItem()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				cy.get('.inventory_item_description').eq(random).find('[class^=btn]').click();
			});

		shoppingCartPage.GetRemoveButton().should('have.text', 'Remove');
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
		shoppingCartPage.GetAddItemSC().should('exist').should('contain', '1');
	});

	it('15787 | TC1: Add a product from the PDP to the Shopping-Cart successfully', () => {
		productPage
			.addRandomItem()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				cy.get('.inventory_item_description').eq(random).find('a').click();
			});
		cy.url().should('contain', inventoryHtml.endpoint.product);
		productPage.ClickAddToCartButton();
		shoppingCartPage.GetRemoveButton().should('have.text', 'Remove');
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
		shoppingCartPage.GetAddItemSC().should('exist').should('contain', '1');
	});
});
