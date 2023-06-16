import { Agregar } from '@pages/agregarProd.page';

describe('SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach(() => {
		cy.visit('https://www.saucedemo.com');
		Agregar.TypeUserName('standard_user');
		Agregar.TypePassword('secret_sauce');
		Agregar.Button();
		cy.location('pathname').should('include', 'inventory');
	});

	it('20040 | TC1: Validar añadir un producto del PLP al Shopping-Cart exitosamente.', () => {
		cy.get('[name="add-to-cart-sauce-labs-bike-light"]').click();
		cy.get('[name="remove-sauce-labs-bike-light"]').should('be.visible');
		//Agregar.productos.Carrito.should('be.visible').contains(1);
		cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false });
		Agregar.productos.listaCarrito().should('be.visible').contains('bike');
		Agregar.productos.NombreProducto().contains('Sauce Labs Bike Light');
		Agregar.productos
			.DescripciónProducto()
			.should('be.visible')
			.contains(
				"A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
			);
		Agregar.productos.Precio().should('be.visible').contains('9.99');
	});
	it('20040 | TC2: Validar añadir un producto del PDP al Shopping-Cart exitosamente', () => {
		cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
		cy.get('[name="add-to-cart-sauce-labs-fleece-jacket"]').click();
		cy.get('[name="remove-sauce-labs-fleece-jacket"]').should('be.visible');
		//Agregar.productos.Carrito.should('be.visible').contains(1);
		cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false });
		Agregar.productos.NombreProducto().should('be.visible').contains('Sauce Labs Fleece Jacket');
		Agregar.productos
			.DescripciónProducto()
			.should('be.visible')
			.contains(
				"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
			);
		Agregar.productos.Precio().should('be.visible').contains('49.99');
	});
});
