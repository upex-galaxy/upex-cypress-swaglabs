describe('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach(() => {
		cy.visit('https://www.saucedemo.com');
		cy.url('contain', 'login');
	});

	context('US GX-18881 | TS: SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
		// -- Start: Cypress Tests --
		it('18882 | TC 1: Validar iniciar sesión exitosamente con usuario standard_user', () => {
			cy.get("[type='text']").type('standard_user');
			cy.get("[type='password']").type('secret_sauce');
			cy.get("[name='login-button']").click();
			cy.location('pathname').should('include', 'inventory');
		});
		it('18882 | TC 2: Validar iniciar sesión exitosamente con usuario problem_user', () => {
			cy.get("[type='text']").type('problem_user');
			cy.get("[type='password']").type('secret_sauce');
			cy.get("[name='login-button']").click();
			cy.location('pathname').should('include', 'inventory');
		});
		it('18882 | TC 3: Validar iniciar sesión exitosamente con usuario performance_glitch_user', () => {
			cy.get("[type='text']").type('performance_glitch_user');
			cy.get("[type='password']").type('secret_sauce');
			cy.get("[name='login-button']").click();
			cy.location('pathname').should('include', 'inventory');
		});
		it('18882 | TC 4: Validar no iniciar sesión exitosamente si la password y el username no machean', () => {
			cy.get("[type='text']").type('performance_glitch_user');
			cy.get("[type='password']").type('secret_sauc');
			cy.get("[name='login-button']").click();
			cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
		});
		it('18882 | TC 5: Validar no iniciar sesión exitosamente si el username esta vacío', () => {
			cy.get("[name='login-button']").click();
			cy.contains('Epic sadface: Username is required').should('be.visible');
		});
		it('18882 | TC 6: Validar no iniciar sesión exitosamente si el password esta vacío', () => {
			cy.get("[type='text']").type('standard_user');
			cy.get("[name='login-button']").click();
			cy.contains('Epic sadface: Password is required').should('be.visible');
		});
		it('18882 | TC 7: Validar no iniciar sesión exitosamente si el usuario está bloqueado locked_out_user', () => {
			cy.get("[type='text']").type('locked_out_user');
			cy.get("[type='password']").type('secret_sauce');
			cy.get("[name='login-button']").click();
			cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
		});
		it('18882 | TC 8: Validar no iniciar sesión exitosamente si el username y el password están vacíos', () => {
			cy.get("[name='login-button']").click();
			cy.contains('Epic sadface: Username is required').should('be.visible');
		});
		it('18882 | TC 9: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /inventory.html', () => {
			cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
			cy.get('[data-test="error"]').should('be.visible').contains('Epic');
		});
		it('18882 | TC 10: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /cart.html', () => {
			cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false });
			cy.get('[data-test="error"]').should('be.visible').contains('Epic');
		});
		it('18882 | TC 11: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /checkout-step-one.html', () => {
			cy.visit('https://www.saucedemo.com/checkout-step-one.html', { failOnStatusCode: false });
			cy.get('[data-test="error"]').should('be.visible').contains('Epic');
		});
		it('18882 | TC 12: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /checkout-step-two.html', () => {
			cy.visit('https://www.saucedemo.com/checkout-step-two.html', { failOnStatusCode: false });
			cy.get('[data-test="error"]').should('be.visible').contains('Epic');
		});
		it('18882 | TC 13: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /checkout-complete.html', () => {
			cy.visit('https://www.saucedemo.com/checkout-complete.html', { failOnStatusCode: false });
			cy.get('[data-test="error"]').should('be.visible').contains('Epic');
		});
	});
});
