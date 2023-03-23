import { login as Login } from '@pages/Login.Page';
import { plp } from '@pages/PLP-SCP';
const { login } = Cypress.env('swagLabs');
const base = Cypress.env('baseUrl');

describe('GX-11303', () => {
	beforeEach('Precondicion para estar en el PLP', () => {
		cy.visit(base);
		Login.enterUsername(login.users.correctUser);
		Login.enterPassword(login.users.correctPass);
		Login.submitLogin();
	});
	it('TC1: Agregar al carrito dos items random y verificar que el boton (Add to cart) Cambien a (Remove)', () => {
		plp.AddTwoRandomItem();
		plp.CheckChangeBtn();
	});
	it('TC2: Agregar al carrito dos items random y verificar que el icono (Cart) sume dos items (2)', () => {
		plp.AddTwoRandomItem();
		plp.CheckaddBttcart();
	});
	it('TC3: Validar que (Name) y (Price) es el mismo del item agregado en la seccion Cart', () => {
		plp.ValidateNameItem();
	});
});
//ses
