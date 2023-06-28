import { loginpage } from '@pages/loginJulian.Page';
import { productlistpage } from '@pages/PLPJulian.Page';
import { scpdetailpage } from '@pages/SCPJulian.Page';
import { pdpdetailpage } from '@pages/PDPJulian.Page';
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
		productlistpage.get.inventoryUrl().should('eq', 'https://www.saucedemo.com/inventory.html');
		productlistpage.get.inventoryContainer().should('be.visible');
		productlistpage.get.badgeShoppingCart().should('not.exist');
	});
	it('GX-22335 | TC1: Validar agregar un producto desde el PLP al Shopping-cart exitosamente', () => {
		productlistpage.addItemToCart();
		productlistpage.get.removeBtn().should('be.visible');
		productlistpage.get.shoppingCartQty().should('have.text', '1');
		productlistpage.clickShoppingCart();
		scpdetailpage.get.SCPendpoint().should('eq', 'https://www.saucedemo.com/cart.html');
		scpdetailpage.get.itemDetailsSCP().should('contain', the.product.itemTitle);
		scpdetailpage.get.itemDetailsSCP().should('contain', the.product.itemDescription);
		scpdetailpage.get.itemDetailsSCP().should('contain', the.product.itemPrice);
	});
	it('GX-22335 | TC2: Validar agregar un producto desde el PDP al Shopping-cart exitosamente', () => {});
});
