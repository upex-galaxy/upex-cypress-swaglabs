import { loginPage } from '@pages/GX-22334-login.Page';
import { PLPpage } from '@pages/GX-22334-productList.Page';
import { SCpage } from '@pages/GX-22334-shoppingCart.Page';
import { PDPpage } from '@pages/GX-22334-productDetail.Page';
import the from '../../../fixtures/data/GX-22334-loginData.json';

const base = Cypress.env('baseUrl');

describe('✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('El usuario debe haber iniciado sesión', () => {
		cy.visit(base);
		loginPage.get.loginBtn().should('exist');
		loginPage.enterUsername(the.data.valid.correctUser);
		loginPage.get.inputUsername().should('have.value', the.data.valid.correctUser);
		loginPage.enterPassword(the.data.valid.password);
		loginPage.get.inputPassword().should('have.value', the.data.valid.password);
		loginPage.clickLoginBtn();
		cy.url().should('eq', the.endpoint.inventory);
		PLPpage.get.inventoryContainer().should('be.visible');
		PLPpage.get.badgeShoppingCart().should('not.exist');
	});
	it('GX-22335 | TC1: Validar agregar un producto desde el PLP al Shopping-cart exitosamente', () => {
		PLPpage.addItemToCart();
		PLPpage.get.PLPremoveBtn().should('be.visible').and('have.text', the.addedProductAssertion.removeBtn);
		PLPpage.get.shoppingCartQty().should('have.text', the.addedProductAssertion.oneItem);
		PLPpage.clickShoppingCart();
		cy.url().should('eq', the.endpoint.cart);
		SCpage.get.itemDetailsSCP().should('contain', the.product.itemTitle1);
		SCpage.get.itemDetailsSCP().should('contain', the.product.itemDescription1);
		SCpage.get.itemDetailsSCP().should('contain', the.product.itemPrice1);
	});
	it('GX-22335 | TC2: Validar agregar un producto desde el PDP al Shopping-cart exitosamente', () => {
		PLPpage.clickOnItem5();
		PDPpage.get.PDPItem2endpoint().should('eq', the.endpoint.product2);
		PDPpage.AddToCartPDP();
		PDPpage.get.PDPremoveBtn().should('be.visible').and('have.text', the.addedProductAssertion.removeBtn);
		PDPpage.get.badgeShoppingCart().should('have.text', the.addedProductAssertion.oneItem);
		PDPpage.clickSCIcon();
		cy.url().should('eq', the.endpoint.cart);
		SCpage.get.itemDetailsSCP().should('contain', the.product.itemTitle2);
		SCpage.get.itemDetailsSCP().should('contain', the.product.itemDescription2);
		SCpage.get.itemDetailsSCP().should('contain', the.product.itemPrice2);
	});
});
