import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import data from '../../../fixtures/data/GX-27380-Checkout.json';
import { login, addproduct, finalpurchase } from '../../../support/pages/GX-27380-Checkout.Page';

removeLogs();

describe('✅SwagLabs | Checkout | Visualizar el Resumen de Compra del Shopping Cart', () => {
	beforeEach('visitar la página de SwagLabs', () => {
		cy.visit('/');
		cy.url().should('include', data.swagLabs);
	});

	it('27381| TC1: Validar que se pueda iniciar sesión con las credenciales correctas al hacer click en el botón “Login“.', () => {
		login.enterUsername(data.userName);
		login.get.userNameInput().should('have.value', data.userName);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.buttonLogin();
		
	});
	it('27381| TC2: Validar poder agregar al menos un producto al "shopping-cart", visualizarlo en el mismo y avanzar hacia el "Checkout: Your Information", haciendo click en el boton "Checkout".', () => {
		login.enterUsername(data.userName);
		login.get.userNameInput().should('have.value', data.userName);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.buttonLogin();
		addproduct.buttonAdd();
		addproduct.bttnShoppingCart();
		addproduct.bttnCheckout();
	});
	it('27381| TC2: Validar poder agregar al menos un producto al "shopping-cart", visualizarlo en el mismo y avanzar hacia el "Checkout: Your Information", haciendo click en el boton "Checkout".', () => {
		login.enterUsername(data.userName);
		login.get.userNameInput().should('have.value', data.userName);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.buttonLogin();
		addproduct.buttonAdd();
		addproduct.bttnShoppingCart();
		addproduct.bttnCheckout();
	});
});