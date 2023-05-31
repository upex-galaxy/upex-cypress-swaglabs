import RemoverPage from './removerPage.js';

describe('GX-19099: SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP', () => {
	const removerPage = new RemoverPage();

	beforeEach(
		'Precondiciones: El usuario está logeado con un nombre de usuario válido y tiene uno o más productos añadidos al carrito de compras',
		() => {
			cy.visit('https://www.saucedemo.com/');
			removerPage.login('standard_user', 'secret_sauce');
			removerPage.addToCart();
		}
	);

	it('19100 | TC1: Validar eliminar un producto desde el PLP', () => {
		removerPage.removeFromPLP();
		removerPage.verifyCartItemCount('2');
	});

	it('19100 | TC2: Validar eliminar más de un producto desde el PLP', () => {
		removerPage.removeFromPLP();
		removerPage.removeFromPLP();
		removerPage.verifyCartItemCount('1');
	});

	it('19100 | TC3: Validar eliminar un producto desde el PDP', () => {
		removerPage.goToPDP();
		removerPage.removeFromPDP();
		removerPage.verifyCartItemCount('2');
	});

	it('19100 | TC4: Validar eliminar más de un producto desde el PDP', () => {
		removerPage.goToPDP();
		removerPage.removeFromPDP();
		removerPage.goBackToProducts();
		removerPage.goToPDP();
		removerPage.removeFromPDP();
		removerPage.verifyCartItemCount('1');
	});

	it('19100 | TC5: Validar eliminar TODOS los productos de una sola vez desde el PLP y quede vacío el carrito.', () => {
		removerPage.removeFromPLP();
		removerPage.verifyCartItemCount('2');
		removerPage.removeFromPLP();
		removerPage.removeFromPDP();
		removerPage.verifyCartItemCount('1');
		removerPage.removeFromPDP();
		removerPage.verifyCartIsEmpty();
	});
});
