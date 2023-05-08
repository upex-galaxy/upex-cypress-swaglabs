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
		loginPage.fillUsernameField(inventoryHtml.login.users.correctUser);
		loginPage.fillPasswordField(inventoryHtml.login.users.correctPass);
		loginPage.ClickLoginButton();
		loginPage.CheckNoProductAdded();
	});

	it('15787 | TC1: Add two products from the PLP to the Shopping-Cart successfully', () => {
		cy.url().should('include', inventoryHtml.endpoint.inventory);
		productPage
			.addRandomItem1()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				cy.get('.inventory_item_description').eq(random).find('[class^=btn]').click();
			});

		productPage
			.addRandomItem2()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				cy.get('.inventory_item_description').eq(random).find('[class^=btn]').click();
			});

		shoppingCartPage.GetRemoveButton().should('be.visible').should('have.lengthOf', 2).should('exist');
		shoppingCartPage.ClickLinkShoppingCart();
		cy.get('.cart_item')
			.eq(0)
			.within(() => {
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
		cy.get('.cart_item')
			.eq(1)
			.within(() => {
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
		shoppingCartPage.GetAddItemSC().should('exist').should('contain', '2');
	});

	it.only('15787 | TC2: Add two products from the PDP to the Shopping-Cart successfully', () => {
		productPage
			.addRandomItem1()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				cy.get('.inventory_item_description').eq(random).find('a').click();
			});
		productPage.ClickAddToCartButton();
		productPage.ClickBackToProductBtn();
		productPage
			.addRandomItem2()
			.its('length')
			.then(randomItem => {
				let random = Cypress._.random(0, randomItem - 1);
				cy.get('.inventory_item_description').eq(random).find('a').click();
			});
		cy.url().should('contain', inventoryHtml.endpoint.product);
		productPage.ClickAddToCartButton();
		shoppingCartPage.ClickLinkShoppingCart();
		shoppingCartPage.GetRemoveButton().should('be.visible').should('have.lengthOf', 2).should('exist');
		cy.get('.cart_item')
			.eq(0)
			.within(() => {
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
		cy.get('.cart_item')
			.eq(1)
			.within(() => {
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
		shoppingCartPage.GetAddItemSC().should('exist').should('contain', '2');
	});
});
