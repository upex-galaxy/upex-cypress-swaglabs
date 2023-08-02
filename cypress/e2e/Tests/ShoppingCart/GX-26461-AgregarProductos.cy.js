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
		let itemNameTextOnPLP;
		let itemDescriptionTextOnPLP;
		let itemPriceTextOnPLP;

		productListPage.selectRandomProduct().then(randomProductSelected => {
			productListPage.addToCartButton(randomProductSelected).should('contain', 'Add to cart');
			productListPage.clickOnAddToCartButton(randomProductSelected);
			productListPage.addToCartButton(randomProductSelected).should('contain', 'Remove');
			productListPage.productsAddedToCart().should('be.eq', '1');
			productListPage.obtainDetails(randomProductSelected).then(details => {
				itemNameTextOnPLP = details[0];
				itemDescriptionTextOnPLP = details[1];
				itemPriceTextOnPLP = details[2];
			});
		});
		productListPage.goToCart();
		shoppingCartPage.obtainName().then(itemNameTextOnCart => {
			expect(itemNameTextOnCart).to.equal(itemNameTextOnPLP);
		});
		shoppingCartPage.obtainDescription().then(itemDescriptionTextOnCart => {
			expect(itemDescriptionTextOnCart).to.equal(itemDescriptionTextOnPLP);
		});
		shoppingCartPage.obtainPrice().then(itemPriceTextOnCart => {
			expect(itemPriceTextOnCart).to.equal(itemPriceTextOnPLP);
		});
	});

	it('26462 | TC02: Validar añadir un producto del PDP al Shopping-Cart al presionar botón "Add to cart"', () => {
		let itemNameTextOnPDP;
		let itemDescriptionTextOnPDP;
		let itemPriceTextOnPDP;

		productListPage.selectRandomProduct().then(randomProductSelected => {
			productListPage.clickOnDetailsLink(randomProductSelected);
		});

		productDetailPage.addToCartButton().should('contain', 'Add to cart');
		productDetailPage.clickOnAddToCartButton();
		productDetailPage.addToCartButton().should('contain', 'Remove');
		productDetailPage.productsAddedToCart().should('be.eq', '1');
		productDetailPage.obtainDetails(0).then(details => {
			itemNameTextOnPDP = details[0];
			itemDescriptionTextOnPDP = details[1];
			itemPriceTextOnPDP = details[2];
		});

		productDetailPage.goToCart();
		shoppingCartPage.obtainName().then(itemNameTextOnCart => {
			expect(itemNameTextOnCart).to.equal(itemNameTextOnPDP);
		});
		shoppingCartPage.obtainDescription().then(itemDescriptionTextOnCart => {
			expect(itemDescriptionTextOnCart).to.equal(itemDescriptionTextOnPDP);
		});
		shoppingCartPage.obtainPrice().then(itemPriceTextOnCart => {
			expect(itemPriceTextOnCart).to.equal(itemPriceTextOnPDP);
		});
	});
});
