import { loginPage } from '@pages/LoginPage';
import { productPage } from '@pages/ProductPage';
import { shoppingCartPage } from '@pages/ShoppingCartPage';

const inventoryHtml = Cypress.env('swagLabs');
const base = Cypress.env('baseUrl');

describe('US GX-15787 | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('User log in Swag Labs Website', () => {
		cy.visit(base);
		loginPage.fillUsernameField(inventoryHtml.login.users.correctUser);
		loginPage.fillPasswordField(inventoryHtml.login.users.correctPass);
		loginPage.ClickLoginButton();
		loginPage.CheckNoProductAdded();
	});

	it('15787 | TC1: Add one product from the PLP to the Shopping-Cart successfully', () => {
		cy.url().should('include', inventoryHtml.endpoint.inventory);
		productPage.addRandomItemPLP1();
		shoppingCartPage.get.removeButton().should('be.visible').should('have.lengthOf', 1).should('exist');
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
		
		shoppingCartPage.get.shoppingCartBadge().should('exist').should('contain', '1');
	});
	it('15787 | TC2: Add one product from the PDP to the Shopping-Cart successfully', () => {
		productPage.addRandomItemPDP1();
		productPage.ClickAddToCartButton();
		cy.url().should('contain', inventoryHtml.endpoint.product);
		shoppingCartPage.get.linkShoppingCart();
		shoppingCartPage.get.removeButton().should('be.visible').should('have.lengthOf', 1).should('exist');
		cy.get('.inventory_item_container')
			.eq(0)
			.within(() => {
				expect('.inventory_details_desc_container').to.exist;
				cy.get('.inventory_details_name')
					.invoke('text')
					.then(title => {
						expect(title).to.exist;
					});
				cy.get('.inventory_details_desc')
					.invoke('text')
					.then(desc => {
						expect(desc).to.exist;
					});
				cy.get('.inventory_details_price')
					.invoke('text')
					.then(precio => {
						expect(precio).to.exist;
					});
			});

		shoppingCartPage.get.shoppingCartBadge().should('exist').should('contain', '1');
	});
	it('15787 | TC3: Add two products from the PLP to the Shopping-Cart successfully', () => {
		cy.url().should('include', inventoryHtml.endpoint.inventory);
		productPage.addRandomItemPLP1();
		productPage.addRandomItemPLP2();
		shoppingCartPage.get.removeButton().should('be.visible').should('have.lengthOf', 2).should('exist');
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
		shoppingCartPage.get.shoppingCartBadge().should('exist').should('contain', '2');
	});


	it('15787 | TC4: Add two products from the PDP to the Shopping-Cart successfully', () => {
		productPage.addRandomItemPDP1();
		productPage.ClickAddToCartButton();
		productPage.ClickBackToProductBtn();
		productPage.addRandomItemPDP2();
		cy.url().should('contain', inventoryHtml.endpoint.product);
		productPage.ClickAddToCartButton();
		shoppingCartPage.ClickLinkShoppingCart();
		shoppingCartPage.get.removeButton().should('be.visible').should('have.lengthOf', 2).should('exist');
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
		shoppingCartPage.get.shoppingCartBadge().should('exist').should('contain', '2');
	});
});
