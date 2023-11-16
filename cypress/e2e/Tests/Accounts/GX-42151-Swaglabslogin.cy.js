describe('GX-42151 | TS: 🪶SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('el usuario debe estar situado en la página de Login.', () => {
		cy.visit('https://www.saucedemo.com/'); // Esto es un Comando de Acción directa
	});
	it('42152| TC1: Validar  iniciar sesión correctamente con el username “standard_user”', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.valid.Correcto);
			cy.get('#password').type(the.Password.ValidP.valido);
			cy.get('#login-button').click();
			cy.url().should('contain', 'inventory');
		});
	});
	it('42152| TC2: Validar  iniciar sesión correctamente con el username “problem_user”', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.valid.Problem);
			cy.get('#password').type(the.Password.ValidP.valido);
			cy.get('#login-button').click();
			cy.url().should('contain', 'inventory');
		});
	});
	it('42152| TC3: Validar  iniciar sesión correctamente con el username “performance_glitch_user”', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.valid.Performance);
			cy.get('#password').type(the.Password.ValidP.valido);
			cy.get('#login-button').click();
			cy.url().should('contain', 'inventory');
		});
	});
	it('42152| TC4: Validar no poder  iniciar sesión con un username bloqueado', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.get('#user-name').type(the.UserName.invalid.blocked);
			cy.get('#password').type(the.Password.ValidP.valido);
			cy.get('#login-button').click();
			cy.get('.error-message-container').should('contain', the.Error.Bloqueado);
		});
	});
	it('42152| TC5 Validar inicar sesión con un username y un password diferente al servicio web', () => {
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
	it('41426| TC9 Validar intentar ingresar a un endpoint de la website sin haber iniciado sesión', () => {
		cy.fixture('data/GX-29331/GX-42151-SwaglabsLogin.json').then(the => {
			cy.visit(the.Url.UrlHome, { failOnStatusCode: false });
			cy.get('.error-message-container').should('contain', the.Error.EpicInventory);

			cy.visit(the.Url.CartUrl, { failOnStatusCode: false });
			cy.get('.error-message-container').should('contain', the.Error.EpicCart);

			cy.visit(the.Url.Checkout1Url, { failOnStatusCode: false });
			cy.get('.error-message-container').should('contain', the.Error.EpicCheckout1);

			cy.visit(the.Url.Checkout1Url, { failOnStatusCode: false });
			cy.get('.error-message-container').should('contain', the.Error.EpicCheckout1);

			cy.visit(the.Url.Checkout2Url, { failOnStatusCode: false });
			cy.get('.error-message-container').should('contain', the.Error.EpicCheckout2);

			cy.visit(the.Url.CheckoutComUrl, { failOnStatusCode: false });
			cy.get('.error-message-container').should('contain', the.Error.EpicCheckoutcomplete);
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();