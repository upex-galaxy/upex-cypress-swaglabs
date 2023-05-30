import the from '../../../fixtures/data/agregarProductos.json';

describe('✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('Precondición: El usuario debe haber logeado a saucedemo', () => {
		cy.visit(the.url.Main);
		cy.url().should('contain', 'the.url.Assertion');

		cy.get(the.login.Username).type(the.login.Data.Username);
		cy.get(the.login.Password).type(the.login.Data.Password);
		cy.get(the.login.Submit).click();

		cy.url().should('contain', 'the.url.Assertion2');
	});
});
