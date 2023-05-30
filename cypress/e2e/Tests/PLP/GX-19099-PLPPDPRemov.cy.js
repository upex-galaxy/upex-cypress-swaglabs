describe('GX-19099: SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP', () => {
	beforeEach(
		'Precondiciones: El usuario está logeado con un nombre de usuario válido y tiene uno o más productos añadidos al carrito de compras',
		() => {
			cy.visit('https://www.saucedemo.com/');
			cy.get('input[data-test="username"]').type('standard_user');
			cy.get('input[data-test="password"]').type('secret_sauce');
			cy.get('input[data-test="login-button"]').click();
			cy.url().should('include', '/inventory.html');
			cy.get('.title').contains('Products');
			cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
			cy.get('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
			cy.get('button[data-test="add-to-cart-sauce-labs-bike-light"]').click();
		}
	);

	it('19100 | TC1: Validar eliminar un de producto desde el PLP', () => {
		cy.get('button[data-test="remove-sauce-labs-backpack"]').click();
		cy.get('#shopping_cart_container').should('contain', '2');
	});

	it('19100 | TC2: Validar eliminar mas de un de producto desde el PLP', () => {
		cy.get('button[data-test="remove-sauce-labs-backpack"]').click();
		cy.get('button[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
		cy.get('#shopping_cart_container').should('contain', '1');
	});
	it('19100 | TC3: Validar eliminar un de producto desde el PDP', () => {
		cy.get('#item_4_title_link').click();
		cy.get('button[data-test="remove-sauce-labs-backpack"]').click();
		cy.get('#shopping_cart_container').should('contain', '2');
	});

	it('19100 | TC4: Validar eliminar MAS de un de producto desde el PDP', () => {
		cy.get('#item_4_title_link').click();
		cy.get('button[data-test="remove-sauce-labs-backpack"]').click();
		cy.get('#shopping_cart_container').should('contain', '2');
		cy.get('button[data-test="back-to-products"]').click();
		cy.get('#item_3_title_link').click();
		cy.get('button[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
		cy.get('#shopping_cart_container').should('contain', '1');
	});

	it('19100 | TC5: Validar eliminar TODOS los  productos de una sola vez desde el PLP y quede vacío el carrito.', () => {
		cy.get('button[data-test="remove-sauce-labs-backpack"]').click();
		cy.get('#shopping_cart_container').should('contain', '2');
		cy.get('button[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
		cy.get('#shopping_cart_container').should('contain', '1');
		cy.get('button[data-test="remove-sauce-labs-bike-light"]').click();
		cy.get('#shopping_cart_container').should('contain', '');
	});
});
