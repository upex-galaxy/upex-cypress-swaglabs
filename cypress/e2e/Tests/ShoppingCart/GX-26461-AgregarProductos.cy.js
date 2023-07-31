import { loginExample } from '@pages/Login.Page';
import { plp } from '@pages/GX-26461-AgregarProductos/GX-26461-plp';
//import { scp } from '@pages/GX-26461-AgregarProductos/GX-26461-scp';
const username = Cypress.env('swagLabs').login.users.correctUser;
const password = Cypress.env('swagLabs').login.users.correctPass;

describe('US GX-26461 | TS: SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('PRC: ', () => {
		cy.visit('https://www.saucedemo.com/');
		loginExample.enterUsername(username);
		loginExample.enterPassword(password);
		loginExample.submitLogin();
	});

	it.only('26462 | TC01: Validar añadir un producto del PLP al Shopping-Cart al presionar botón "Add to cart"', () => {
		//valida que botón "Add to cart" se reemplaza por botón "Remove"
		plp.addToCart().should('be.equal', 'Remove');
		//valida que se suma +1 al añadir producto al carrito
		plp.addedProducts().should('be.equal', '1');
		//valida que se visualize la información correcta del producto añadido
	});

	it('26462 | TC02: Validar añadir un producto del PDP al Shopping-Cart al presionar botón "Add to cart"', () => {
		cy.get();
	});
});
