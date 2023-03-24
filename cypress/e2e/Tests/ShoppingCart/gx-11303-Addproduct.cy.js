import { login as Login } from '@pages/Login.Page';
import { plp } from '@pages/PLP-SCP.Page';
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
	it('TC3: Validar que (Name) es el mismo del item agregado en la seccion Cart', () => {
		plp.ValidateNameItem();
	});
	it('TC4: Validar que (Price) es el mismo del item agregado en la seccion Cart', () => {
		plp.ValidatePriceItem();
	});
	it('TC5: Validar agregar item desde el PDP y que sume 1+ en el icono (Cart)', () => {
		plp.SelectRandomItem();
		plp.PdpAddCart();
		plp.CheckBttRemove();
		plp.CheckAddBtnCart();
	});
});
//h
