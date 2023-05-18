describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondición: Usuario debe estar situado en la página de Login', () => {
		cy.visit('https://www.saucedemo.com');
		cy.url().should('contain', 'saucedemo');
	});
	it('17557 | TC01 - Validar usuario inicia sesión correctamente', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.StandardUser);
			cy.get(the.input.Password).type(the.data.Password);
			cy.get(the.input.LoginButton).click();

			cy.url().should('contain', 'inventory');
		});
	});

	it('17557 | TC02 - Validar usuario inicia sesión con username bloqueado', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.LockedUser);
			cy.get(the.input.Password).type(the.data.Password);
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.LockedMessage);
		});
	});

	it('17557 | TC03 - Validar usuario inicia sesión con datos inexistente en la Database', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.InvalidUser);
			cy.get(the.input.Password).type(the.data.InvalidPassword);
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.InvalidMessage);
		});
	});

	it('17557 | TC04 - Validar usuario inicia sesión sin escribir username', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Password).type(the.data.Password);
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.MissingUsername);
		});
	});

	it('17557 | TC05 - Validar usuario inicia sesión sin escribir password', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.StandardUser);
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.MissingPassword);
		});
	});

	it('17557 | TC06 - Validar usuario inicia sesión sin escribir username y password', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.MissingPassAndAcc);
		});
	});
});
