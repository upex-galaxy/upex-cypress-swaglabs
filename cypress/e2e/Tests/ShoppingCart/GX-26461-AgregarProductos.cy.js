import { loginExample } from '@pages/Login.Page';
import { productListPage } from '@pages/GX-26461-AgregarProductos/GX-26461-plp';
import { shoppingCartPage } from '@pages/GX-26461-AgregarProductos/GX-26461-scp';
import { productDetailPage } from '@pages/GX-26461-AgregarProductos/GX-26461-pdp';
const username = Cypress.env('swagLabs').login.users.correctUser;
const password = Cypress.env('swagLabs').login.users.correctPass;

describe('US GX-26461 | TS: SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('PRC: ', () => {
		cy.visit('https://www.saucedemo.com/');
		loginExample.enterUsername(username);
		loginExample.enterPassword(password);
		loginExample.submitLogin();
	});

	it('26462 | TC01: Validar añadir un producto del PLP al Shopping-Cart al presionar botón "Add to cart"', () => {
		let productSelectedDetails;
		productListPage.selectRandomProduct().then(randomProductSelected => {
			productListPage.get.addToCartButton().eq(randomProductSelected).should('contain', 'Add to cart');
			productListPage.addToCart(randomProductSelected);
			productListPage.get.addToCartButton().eq(randomProductSelected).should('contain', 'Remove');
			productListPage.productsAddedToCart().should('be.eq', '1');
			productListPage.obtainDetails(randomProductSelected).then(details => {
				productSelectedDetails = details;
			});
		});
		productListPage.goToCart();
		shoppingCartPage.obtainName().then(itemNameTextOnCart => {
			expect(itemNameTextOnCart).to.equal(productSelectedDetails[0]);
		});
		shoppingCartPage.obtainDescription().then(itemDescriptionTextOnCart => {
			expect(itemDescriptionTextOnCart).to.equal(productSelectedDetails[1]);
		});
		shoppingCartPage.obtainPrice().then(itemPriceTextOnCart => {
			expect(itemPriceTextOnCart).to.equal(productSelectedDetails[2]);
		});
	});

	it('26462 | TC02: Validar añadir un producto del PDP al Shopping-Cart al presionar botón "Add to cart"', () => {
		let productSelectedDetails;
		productListPage.selectRandomProduct().then(randomProductSelected => {
			productListPage.clickOnDetailsLink(randomProductSelected);
		});

		productDetailPage.selectRandomProduct().then(randomProductSelected => {
			productDetailPage.get.addToCartButton().eq(randomProductSelected).should('contain', 'Add to cart');
			productDetailPage.addToCart(randomProductSelected);
			productDetailPage.get.addToCartButton().eq(randomProductSelected).should('contain', 'Remove');
			productDetailPage.productsAddedToCart().should('be.eq', '1');
			productDetailPage.obtainDetails(randomProductSelected).then(details => {
				productSelectedDetails = details;
			});
		});

		productDetailPage.goToCart();
		shoppingCartPage.obtainName().then(itemNameTextOnCart => {
			expect(itemNameTextOnCart).to.equal(productSelectedDetails[0]);
		});
		shoppingCartPage.obtainDescription().then(itemDescriptionTextOnCart => {
			expect(itemDescriptionTextOnCart).to.equal(productSelectedDetails[1]);
		});
		shoppingCartPage.obtainPrice().then(itemPriceTextOnCart => {
			expect(itemPriceTextOnCart).to.equal(productSelectedDetails[2]);
		});
	});
});
