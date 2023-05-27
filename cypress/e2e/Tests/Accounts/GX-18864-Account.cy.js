import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX-18864: SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	let testData;

	beforeEach('Precondición: estar situados en LOGIN SwagLabs', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.fixture('Account.json').then(data => {
			testData = data;
		});
	});
	it('18865 | TC1: Validar que el usuario pueda iniciar sesión exitosamente con el username standard_user', () => {
		cy.get('input[data-test="username"]').type(testData[0].username);
		cy.get('input[data-test="password"]').type(testData[0].password);
		cy.get('input[data-test="login-button"]').click();
		// Agrega las aserciones necesarias para verificar que el usuario ha iniciado sesión correctamente
		cy.url().should('include', '/inventory.html');
	});
	it('18865 | TC2:  Validar que el usuario pueda iniciar sesión exitosamente con el username problem_user', () => {});
	it('18865 | TC3: Validar que el usuario pueda iniciar sesión exitosamente con el username performance_glitch_user', () => {});
	it('18865 | TC4: Validar que el usuario no pueda iniciar sesión con el username locked_out_user', () => {});
	it('18865 | TC5: Validar que el usuario no pueda iniciar sesión con campos vacíos', () => {});
	it('18865 | TC6: Validar que el usuario no pueda iniciar sesión con el campo de nombre vacío', () => {});
	it('18865 | TC7: Validar que el usuario no pueda iniciar sesión con el campo de nombre vacío', () => {});
	it('18865 | TC8:  Validar que el usuario no pueda iniciar sesión con credenciales no registradas.', () => {});
	it('18865 | TC9:Validar que el usuario no pueda acceder al endpoint /inventory.html sin haber iniciado sesión. ', () => {});
	it('18865 | TC10:  Validar que el usuario no pueda acceder al endpoint /cart.html sin haber iniciado sesión.', () => {});
	it('18865 | TC11:Validar que el usuario no pueda acceder al endpoint /checkout-step-one.html sin haber iniciado sesión. ', () => {});
	it('18865 | TC12: Validar que el usuario no pueda acceder al endpoint /checkout-step-two.html sin haber iniciado sesión.', () => {});
	it('18865 | TC13:Validar que el usuario no pueda acceder al endpoint /checkout-complete.html sin haber iniciado sesión. ', () => {});
	it('18865 | TC14:Validar que el usuario no pueda iniciar sesión con una combinación inválida de nombre de usuario y contraseña', () => {});
	it('18865 | TC15:Validar que el usuario no pueda iniciar sesión con una contraseña incorrecta pero con un nombre de usuario válido.', () => {});
	it('18865 | TC16:Validar que el usuario no pueda iniciar sesión con un nombre de usuario incorrecto pero con una contraseña válida.', () => {});
});
