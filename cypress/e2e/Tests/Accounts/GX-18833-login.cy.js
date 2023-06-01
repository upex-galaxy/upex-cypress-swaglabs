describe('✅-swag-labs-account-iniciar-sesión-', () => {
	let username;
	let l_username;
	let pr_username;
	let pe_username;
	let password;
	let url;
	let mensaje;
	let mensaje1;
	let mensaje2;
	let mensaje3;
	let false1;
	let false2;

	beforeEach('fixture login', () => {
		cy.fixture('data/data.json').then(data => {
			username = data.username;
			l_username = data.l_username;
			pr_username = data.pr_username;
			pe_username = data.pe_username;
			password = data.password;
			mensaje = data.mensaje;
			mensaje1 = data.mensaje1;
			mensaje2 = data.mensaje2;
			mensaje3 = data.mensaje3;
			false1 = data.name_false;
			false2 = data.psw_false;
			url = data.url;

			cy.visit(url);
		});
	});

	it('GX-18834 | TC1: Validar que usuario pueda iniciar sesión con el username standard_user exitosamente.', () => {
		cy.get('#user-name').type(username);
		cy.get('#password').type(password);
		cy.get('#login-button').click();
	});

	it('GX-18834 | TC2: Validar que usuario pueda inciar sesion con el username problem_user exitosamente.', () => {
		cy.get('#user-name').type(pr_username);
		cy.get('#password').type(password);
		cy.get('#login-button').click();
	});

	it('GX-18834 | TC3: Validar que usuario pueda inciar sesion con el username 0performance_glitch_user exitosamente.', () => {
		cy.get('#user-name').type(pe_username);
		cy.get('#password').type(password);
		cy.get('#login-button').click();
	});

	it('GX-18834 | TC4: Validar que el usuario NO pueda iniciar sesion con el username locked_out_user.', () => {
		cy.get('#user-name').type(l_username);
		cy.get('#password').type(password);
		cy.get('#login-button').click();
		cy.get('.error').should('contain', mensaje);
	});

	it('GX-18834 | TC5: Validar que el usuario NO pueda iniciar sesion con los campos vacios.', () => {
		cy.get('#login-button').click();
		cy.get('.error').should('contain', mensaje1);
	});

	it('GX-18834 | TC6: Validar que el usuario NO pueda iniciar sesion con Name vacio.', () => {
		cy.get('#password').type(password);
		cy.get('#login-button').click();
		cy.get('.error').should('contain', mensaje1);
	});

	it('GX-18834 | TC7: Validar que el usuario NO pueda iniciar sesion con Password vacio.', () => {
		cy.get('#user-name').type(username);
		cy.get('#login-button').click();
		cy.get('.error').should('contain', mensaje2);
	});

	it('GX-18834 | TC8: Validar que el usuario NO pueda iniciar sesion con credenciales no registradas.', () => {
		cy.get('#user-name').type(false1);
		cy.get('#password').type(false2);
		cy.get('#login-button').click();
		cy.get('.error').should('contain', mensaje3);
	});
});

describe('✅-swag-labs-br-de-accesos', () => {
	let url;
	let ep1;
	let ep2;
	let ep3;
	let ep4;
	let ep5;
	let mensaje4;
	let mensaje5;
	let mensaje6;
	let mensaje7;
	let mensaje8;
	beforeEach('fixture login', () => {
		cy.fixture('data/data.json').then(data => {
			ep1 = data.ep1;
			ep2 = data.ep2;
			ep3 = data.ep3;
			ep4 = data.ep4;
			ep5 = data.ep5;
			url = data.url;
			mensaje4 = data.mensaje4;
			mensaje5 = data.mensaje5;
			mensaje6 = data.mensaje6;
			mensaje7 = data.mensaje7;
			mensaje8 = data.mensaje8;
		});
	});
	it('GX-18834 | TC9: Validar que el usuario NO pueda iniciar sesion desde el EP /inventory.html.', () => {
		cy.visit(url + ep1, { failOnStatusCode: false });
		cy.get('.error').should('contain', mensaje4);
	});

	it('GX-18834 | TC10: Validar que el usuario NO pueda iniciar sesion desde el EP /cart.html', () => {
		cy.visit(url + ep2, { failOnStatusCode: false });
		cy.get('.error').should('contain', mensaje5);
	});

	it('GX-18834 | TC11: Validar que el usuario NO pueda iniciar sesion desde el EP /checkout-step-one.html', () => {
		cy.visit(url + ep3, { failOnStatusCode: false });
		cy.get('.error').should('contain', mensaje6);
	});

	it('GX-18834 | TC12: Validar que el usuario NO pueda iniciar sesion desde el EP /checkout-step-two.html.', () => {
		cy.visit(url + ep4, { failOnStatusCode: false });
		cy.get('.error').should('contain', mensaje7);
	});

	it('GX-18834 | TC13: Validar que el usuario NO pueda iniciar sesion desde el EP /checkout-complete.html.', () => {
		cy.visit(url + ep5, { failOnStatusCode: false });
		cy.get('.error').should('contain', mensaje8);
	});
});
