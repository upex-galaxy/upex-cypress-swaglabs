describe('GX-42151 | TS: 🪶SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('el usuario debe estar situado en la página de Login.', () => {
		cy.visit('https://www.saucedemo.com/'); // Esto es un Comando de Acción directa
	});
	it.skip('42152| TC1: Validar  iniciar sesión correctamente con el username “standard_user”', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.valid.Correcto);
			cy.get('#password').type(the.Password.ValidP.valido);
			cy.get('#login-button').click();
			cy.url().should('contain', 'inventory');
		});
	});
	it.skip('42152| TC2: Validar  iniciar sesión correctamente con el username “problem_user”', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.valid.Problem);
			cy.get('#password').type(the.Password.ValidP.valido);
			cy.get('#login-button').click();
			cy.url().should('contain', 'inventory');
		});
	});
	it.skip('42152| TC1: Validar  iniciar sesión correctamente con el username “performance_glitch_user”', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.valid.Performance);
			cy.get('#password').type(the.Password.ValidP.valido);
			cy.get('#login-button').click();
			cy.url().should('contain', 'inventory');
		});
	});
	it.skip('42152| TC4: Validar no poder  iniciar sesión con un username bloqueado', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.invalid.blocked);
			cy.get('#password').type(the.Password.ValidP.valido);
			cy.get('#login-button').click();
			cy.get('.error-message-container').should('contain', the.Error.Bloqueado);
		});
	});
	it.skip('42152| TC5 Validar inicar sesión con un username y un password diferente al servicio web', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.invalid.Incorrecto);
			cy.get('#password').type(the.Password.invalido.Incorrecto1);
			cy.get('#login-button').click();
			cy.get('.error-message-container').should('contain', the.Error.NotMatch);
		});
	});
	it('42152| TC6 Validar no poder iniciar sesión sin el username', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#password').type(the.Password.ValidP.valido);
			cy.get('#login-button').click();
			cy.get('.error-message-container').should('contain', the.Error.UserRequired);
		});
	});
	it('42152 TC7 Validar no poder iniciar sesión sin el password', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.valid.Performance);
			cy.get('#login-button').click();
			cy.get('.error-message-container').should('contain', the.Error.PassRequired);
		});
	});
	it('42152| TC8 Validar no poder iniciar sesión sin username ni password', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#login-button').click();
			cy.get('.error-message-container').should('contain', the.Error.UserRequired);
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
