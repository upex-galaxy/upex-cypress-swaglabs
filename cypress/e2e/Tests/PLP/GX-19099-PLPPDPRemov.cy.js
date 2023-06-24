import RemoverPage from 'cypress/support/pages/RemoverPage.js';

describe('GX-19099: SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP', () => {
	const removerPage = new RemoverPage();

	beforeEach(
		'Precondiciones: El usuario está logueado con un nombre de usuario válido y tiene uno o más productos añadidos al carrito de compras',
		() => {
			cy.visit('https://www.saucedemo.com/');
			cy.url().should('contain', 'saucedemo');
			removerPage.login('standard_user', 'secret_sauce');
			removerPage.addToCart();
			removerPage.get.cartContainer2().should('contain', 3);
		}
	);

	it('19100 | TC1: Validar eliminar un producto desde el PLP', () => {
		removerPage.get.cartContainer2().should('contain', 3);
		removerPage.removeFromPLP();
		removerPage.get.cartContainer2().should('contain', 2);
	});

	it('19100 | TC2: Validar eliminar más de un producto desde el PLP', () => {
		removerPage.get.cartContainer2().should('contain', 3);
		removerPage.removeFromPLP();
		removerPage.removeFromPLP2();
		removerPage.get.cartContainer2().should('contain', 1);
	});

	it('19100 | TC3: Validar eliminar un producto desde el PDP', () => {
		removerPage.get.cartContainer2().should('contain', 3);
		removerPage.goToPDP();
		removerPage.removeFromPDP();
		removerPage.get.cartContainer2().should('contain', 2);
	});

	it('19100 | TC4: Validar eliminar más de un producto desde el PDP', () => {
		removerPage.get.cartContainer2().should('contain', 3);
		removerPage.goToPDP();
		removerPage.removeFromPDP();
		removerPage.goBackToProducts();
		removerPage.goToPDP2();
		removerPage.removeFromPDP2();
		removerPage.get.cartContainer2().should('contain', 1);
	});

	it('19100 | TC5: Validar eliminar TODOS los productos de una sola vez desde el PLP y quede vacío el carrito.', () => {
		removerPage.get.cartContainer2().should('contain', 3);
		removerPage.removeFromPLP();
		removerPage.get.cartContainer2().should('contain', 2);
		removerPage.removeFromPLP2();
		removerPage.removeFromPDP3();
		removerPage.get.cartContainer2().should('be.empty');
	});
});
