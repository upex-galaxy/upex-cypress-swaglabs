/* eslint-disable indent */
describe('⚡️[Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondition: User must have a registered account previously and be positioned at Login page', () => {
		cy.visit('https://www.saucedemo.com/');
	});

	it('TC#1: Validate login in filling the fields Username and Password with correct credentials', () => {
		cy.get('[data-test = "username"]').type('standard_user');
		cy.get('[data-test = "password"]').type('secret_sauce');
		cy.get('[type = "submit"]').click();
		cy.get('.app_logo').contains('Swag');
	});

	it('TC#2: Validate NOT login in with a blocked account', () => {
		cy.get('[data-test = "username"]').type('locked_out_user');
		cy.get('[data-test = "password"]').type('secret_sauce');
		cy.get('[type = "submit"]').click();
		cy.get('[data-test = "error"]').contains('locked out');
	});

	it('TC#3: Validate NOT login in with an invalid or non-existent Username', () => {
		cy.get('[data-test = "username"]').type('invalid_username');
		cy.get('[data-test = "password"]').type('secret_sauce');
		cy.get('[type = "submit"]').click();
		cy.get('[data-test = "error"]').contains('not match any user');
	});

	it('TC#4: Validate NOT login in with an invalid or non-existent Password', () => {
		cy.get('[data-test = "username"]').type('standard_user');
		cy.get('[data-test = "password"]').type('salsa_secreta');
		cy.get('[type = "submit"]').click();
		cy.get('[data-test = "error"]').contains('not match any user');
	});

	it('TC#5: Validate NOT login in when the field Username is empty', () => {
		cy.get('[data-test = "password"]').type('secret_sauce');
		cy.get('[type = "submit"]').click();
		cy.get('[data-test = "error"]').contains('Username is required');
	});

	it('TC#6: Validate NOT login in when the field Password is empty', () => {
		cy.get('[data-test = "username"]').type('standard_user');
		cy.get('[type = "submit"]').click();
		cy.get('[data-test = "error"]').contains('Password is required');
	});

	// it('TC#7: Validate NOT accessing to a specific website endpoint without login in previously', () => {
	// 	cy.visit('/inventory.html'); //consultar
	// });
});
