import { loginpage } from '@pages/loginJulian.Page';
import { PLPpage } from '@pages/PLPJulian.Page';
import { scpdetailpage } from '@pages/SCPJulian.Page';
import { PDPpage } from '@pages/PDPJulian.Page';
import the from '../../../fixtures/data/loginJulian.json';

const base = Cypress.env('baseUrl');

describe('✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('El usuario debe haber iniciado sesión', () => {
		cy.visit(base);
		cy.url().should('eq', 'https://www.saucedemo.com/');
		loginpage.enterUsername(the.data.valid.correctUser);
		loginpage.get.inputUsername().should('have.value', 'standard_user');
		loginpage.enterPassword(the.data.valid.password);
		loginpage.get.inputPassword().should('have.value', 'secret_sauce');
		loginpage.clickLoginBtn();
		PLPpage.get.inventoryUrl().should('eq', 'https://www.saucedemo.com/inventory.html');
		PLPpage.get.inventoryContainer().should('be.visible');
		PLPpage.get.badgeShoppingCart().should('not.exist');
	});
	it('GX-22335 | TC1: Validar agregar un producto desde el PLP al Shopping-cart exitosamente', () => {
		PLPpage.addItemToCart();
		PLPpage.get.PLPremoveBtn().should('be.visible').and('have.text', 'Remove');
		PLPpage.get.shoppingCartQty().should('have.text', '1');
		PLPpage.clickShoppingCart();
		scpdetailpage.get.SCPendpoint().should('eq', 'https://www.saucedemo.com/cart.html');
		scpdetailpage.get.itemDetailsSCP().should('contain', the.product.itemTitle1);
		scpdetailpage.get.itemDetailsSCP().should('contain', the.product.itemDescription1);
		scpdetailpage.get.itemDetailsSCP().should('contain', the.product.itemPrice1);
	});
	it('GX-22335 | TC2: Validar agregar un producto desde el PDP al Shopping-cart exitosamente', () => {
		PLPpage.clickOnItem5();
		PDPpage.get.PDPItem2endpoint().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=5');
		PDPpage.AddToCartPDP();
		PDPpage.get.PDPremoveBtn().should('be.visible').and('have.text', 'Remove');
		PDPpage.get.badgeShoppingCart().should('have.text', '1');
		PDPpage.clickSCIcon();
		scpdetailpage.get.SCPendpoint().should('eq', 'https://www.saucedemo.com/cart.html');
		scpdetailpage.get.itemDetailsSCP().should('contain', the.product.itemTitle2);
		scpdetailpage.get.itemDetailsSCP().should('contain', the.product.itemDescription2);
		scpdetailpage.get.itemDetailsSCP().should('contain', the.product.itemPrice2);
	});
});
