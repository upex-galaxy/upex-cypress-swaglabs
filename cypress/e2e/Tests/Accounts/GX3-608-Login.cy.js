describe('GX3-608-⚡️-automation-swag-labs-account-iniciar-sesion-y-br-de-accesos', () => {
	beforeEach('Ubicarse en la pagina de login de SwabLabs', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('contains', 'saucedemo');
	});

	it('608 | TC1: Validar inicio de sesión exitoso con Standard User', () => {
		cy.fixture('DOM/space/SwabLogin').then(the => {
			cy.swabLabsLogin(the.valid.username, the.valid.password);
			cy.url().should('contains', 'inventory');
		});
	});

	it('608 | TC2: Validar no poder iniciar sesión con Usuario Bloqueado', () => {
		cy.fixture('DOM/space/SwabLogin').then(the => {
			cy.swabLabsLogin(the.invalid.LockedUser, the.valid.password);
			cy.get(the.error).should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
		});
	});

	it('608 | TC3: Validar no poder iniciar sesión con Credenciales Inválidas', () => {
		cy.fixture('DOM/space/SwabLogin').then(the => {
			cy.swabLabsLogin(the.invalid.random, the.valid.password);
			cy.get(the.error).should('have.text', 'Epic sadface: Username and password do not match any user in this service');
		});
	});

	it('608 | TC4: Validar no poder iniciar sesión con Username Nulo', () => {
		cy.fixture('DOM/space/SwabLogin').then(the => {
			cy.swabLabsLogin('', the.valid.password);
			cy.get(the.error).should('have.text', 'Epic sadface: Username is required');
		});
	});

	it('608 | TC5: Validar no poder iniciar sesión con Password Nulo', () => {
		cy.fixture('DOM/space/SwabLogin').then(the => {
			cy.swabLabsLogin(the.valid.username, '');
			cy.get(the.error).should('have.text', 'Epic sadface: Password is required');
		});
	});

	it('608 | TC6: Validar no poder iniciar sesión con Credenciales Nulas', () => {
		cy.fixture('DOM/space/SwabLogin').then(the => {
			cy.swabLabsLogin('', '');
			cy.get(the.error).should('have.text', 'Epic sadface: Username is required');
		});
	});

	it('608 | TC7: Validar no poder ingresar a ningun endpoint de la web sin haber iniciado sesión', () => {
		cy.fixture('DOM/space/SwabLogin').then(the => {
			cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false });
			cy.get(the.error).should('have.text', "Epic sadface: You can only access '/cart.html' when you are logged in.");
		});
	});
});
