import { loginpage } from '@pages/loginJulian.Page';
import { productlistpage } from '@pages/PLPJulian.Page';
import { productdetailpage } from '@pages/PDPJulian.Page';
import the from '../../../fixtures/data/loginJulian.json';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('El usuario debe haber iniciado sesión', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('eq', 'https://www.saucedemo.com/');
		loginpage.enterUsername(the.data.valid.correctUser);
		loginpage.usernameInputAssertion();
		loginpage.enterPassword(the.data.valid.password);
		loginpage.passwordInputAssertion();
		loginpage.clickLoginBtn();
		cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
		cy.get('#header_container').should('contain.text', 'Swag Labs');
		cy.get('#inventory_container').should('be.visible');
		productlistpage.emptyCartAssertion();
	});
	it('GX-22335 | TC1: Validar agregar un producto desde el PLP al SCP exitosamente', () => {
		productlistpage.addItemToCart();
		productlistpage.removeBtnAssertion();
		productlistpage.qtyAssertion();
		productlistpage.clickSoppingCart();
		productdetailpage.pdpEndpoint();
	});
	//it('GX-22335 | TC2: Validar agregar un producto desde el PDP al SCP exitosamente', () => {});
});
