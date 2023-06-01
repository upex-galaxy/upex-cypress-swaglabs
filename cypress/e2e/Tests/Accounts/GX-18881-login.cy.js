describe('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach(() => {
		cy.visit('https://www.saucedemo.com');
		cy.url('contain', 'login');
	});

	context('US GX-18881 | TS: SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
		// -- Start: Cypress Tests --
		it('18882 | TC 1: Validar iniciar sesión exitosamente con usuario standard_user', () => {
			// Write your test case one here
		});
		it('18882 | TC 2: Validar iniciar sesión exitosamente con usuario problem_user', () => {
			// Write your test case two here
		});
		it('18882 | TC 3: Validar iniciar sesión exitosamente con usuario performance_glitch_user', () => {
			// Write your test case two here
		});
		it('18882 | TC 4: Validar no iniciar sesión exitosamente si la password y el username no machean', () => {
			// Write your test case two here
		});
		it('18882 | TC 5: Validar no iniciar sesión exitosamente si el username esta vacío', () => {
			// Write your test case two here
		});
		it('18882 | TC 6: Validar no iniciar sesión exitosamente si el password esta vacío', () => {
			// Write your test case two here
		});
		it('18882 | TC 7: Validar no iniciar sesión exitosamente si el usuario está bloqueado locked_out_user', () => {
			// Write your test case two here
		});
		it('18882 | TC 8: Validar no iniciar sesión exitosamente si el username y el password están vacíos', () => {
			// Write your test case two here
		});
		it('18882 | TC 9: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /inventory.html', () => {
			// Write your test case two here
		});
		it('18882 | TC 10: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /cart.html', () => {
			// Write your test case two here
		});
		it('18882 | TC 11: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /checkout-step-one.html', () => {
			// Write your test case two here
		});
		it('18882 | TC 12: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /checkout-step-two.html', () => {
			// Write your test case two here
		});
		it('18882 | TC 13: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /checkout-complete.html', () => {
			// Write your test case two here
		});
	});
});
