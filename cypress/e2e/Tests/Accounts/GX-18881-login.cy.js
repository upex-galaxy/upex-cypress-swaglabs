import { Login } from '@pages/loginVicky.Page.js';

describe('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Estar situado en Login Page', () => {
		cy.visit('https://www.saucedemo.com');
		cy.url('contain', 'login');
	});

	it('18882 | TC 1: Validar iniciar sesión exitosamente con usuario standard_user', () => {
		Login.TypeUserName('standard_user');
		Login.TypePassword('secret_sauce');
		Login.ClickLogin();
		cy.location('pathname').should('include', 'inventory');
	});

	it('18882 | TC 2: Validar iniciar sesión exitosamente con usuario problem_user', () => {
		Login.TypeUserName('problem_user');
		Login.TypePassword('secret_sauce');
		Login.ClickLogin();
		cy.location('pathname').should('include', 'inventory');
	});

	it('18882 | TC 3: Validar iniciar sesión exitosamente con usuario performance_glitch_user', () => {
		Login.TypeUserName('performance_glitch_user');
		Login.TypePassword('secret_sauce');
		Login.ClickLogin();
		cy.location('pathname').should('include', 'inventory');
	});
	it('18882 | TC 4: Validar no iniciar sesión exitosamente si la password y el username no machean', () => {
		Login.TypeUserName('performance_glitch_use');
		Login.TypePassword('secret_sauce');
		Login.ClickLogin();
		cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
	});

	it('18882 | TC 5: Validar no iniciar sesión exitosamente si el username esta vacío', () => {
		Login.TypePassword('secret_sauce');
		Login.ClickLogin();
		cy.contains('Epic sadface: Username is required').should('be.visible');
	});

	it('18882 | TC 6: Validar no iniciar sesión exitosamente si el password esta vacío', () => {
		Login.TypeUserName('standard_user');
		Login.ClickLogin();
		cy.contains('Epic sadface: Password is required').should('be.visible');
	});
	it('18882 | TC 7: Validar no iniciar sesión exitosamente si el usuario está bloqueado locked_out_user', () => {
		Login.TypeUserName('locked_out_user');
		Login.TypePassword('secret_sauce');
		Login.ClickLogin();
		cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
	});

	it('18882 | TC 8: Validar no iniciar sesión exitosamente si el username y el password están vacíos', () => {
		Login.ClickLogin();
		cy.contains('Epic sadface: Username is required').should('be.visible');
	});

	it('18882 | TC 9: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /inventory.html', () => {
		cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
		Login.elements.ErrorMessage().should('be.visible').contains('Epic').should('have.text','Epic sadface: You can only access '/inventory.html' when you are logged in.');
	});

	it('18882 | TC 10: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /cart.html', () => {
		cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false });
		Login.elements.ErrorMessage().should('be.visible').contains('Epic').should('have.text','Epic sadface: You can only access '/cart.html' when you are logged in.');
	});

	it('18882 | TC 11: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /checkout-step-one.html', () => {
		cy.visit('https://www.saucedemo.com/checkout-step-one.html', { failOnStatusCode: false });
		Login.elements.ErrorMessage().should('be.visible').contains('Epic').should('have.text','Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.');
	});

	it('18882 | TC 12: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /checkout-step-two.html', () => {
		cy.visit('https://www.saucedemo.com/checkout-step-two.html', { failOnStatusCode: false });
		Login.elements.ErrorMessage().should('be.visible').contains('Epic');
	});

	it('18882 | TC 13: Validar no iniciar sesión exitosamente si el usuario quiere ingresar al endpoint /checkout-complete.html', () => {
		cy.visit('https://www.saucedemo.com/checkout-complete.html', { failOnStatusCode: false });
		Login.elements.ErrorMessage().should('be.visible').contains('Epic').should('have.text','Epic sadface: You can only access '/checkout-complete.html' when you are logged in.');
	});
});
