import { checkoutPage } from '/cypress/support/pages/GX3-5315-detalles-item.Page';

describe('[Automation] SwagLabs | PDP | Visualizar Detalles del Item (Producto)',()=>{
	beforeEach('PRC:El usuario debe estar logueado y situado en el PLP',()=>{
		cy.visit('https://www.saucedemo.com/');
		checkoutPage.enterUserName('standard_user');
		checkoutPage.enterPassword('secret_sauce');
		checkoutPage.submitLogin();
		cy.url().should('include', '/inventory');
	});
	it('5321 | TC1: Validar que se visualice el detalle del producto cuando no este agregado al carrito',()=>{

	});
});