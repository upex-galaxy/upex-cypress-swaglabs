describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondición: Usuario debe estar situado en la página de Login', () => {
		cy.fixture('data/login.data').then(the => {
			cy.visit(the.url.MainUrl);
			cy.url().should('contain', 'saucedemo');
		});
	});
	it('17557 | TC01 - Validar usuario inicia sesión con standard_user', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.StandardUser);
			cy.get(the.input.Password).type(the.data.Password);
			cy.get(the.input.LoginButton).click();

			cy.url().should('contain', 'inventory');
		});
	});

	it('17557 | TC02 - Validar usuario inicia sesión con locked_out_user', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.LockedUser);
			cy.get(the.input.Password).type(the.data.Password);
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.LockedMessage);
		});
	});

	it('17557 | TC03 - Validar usuario inicia sesión con problem_user', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.ProblemUser);
			cy.get(the.input.Password).type(the.data.Password);
			cy.get(the.input.LoginButton).click();

			cy.url().should('contain', 'inventory');
		});
	});

	it('17557 | TC04 - Validar usuario inicia sesión con performance_glitch_user', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.PerformanceUser);
			cy.get(the.input.Password).type(the.data.Password);
			cy.get(the.input.LoginButton).click();

			cy.url().should('contain', 'inventory');
		});
	});

	it('17557 | TC05 - Validar usuario inicia sesión con datos inexistente en la Database', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.InvalidUser);
			cy.get(the.input.Password).type(the.data.InvalidPassword);
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.InvalidMessage);
		});
	});

	it('17557 | TC06 - Validar usuario inicia sesión sin escribir username', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Password).type(the.data.Password);
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.MissingUsername);
		});
	});

	it('17557 | TC07 - Validar usuario inicia sesión sin escribir password', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.Username).type(the.data.StandardUser);
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.MissingPassword);
		});
	});

	it('17557 | TC08 - Validar usuario inicia sesión sin escribir username y password', () => {
		cy.fixture('data/login.data').then(the => {
			cy.get(the.input.LoginButton).click();

			cy.get(the.input.Message).should('contain.text', the.assertions.MissingPassAndAcc);
		});
	});

	it('17557 | TC09 - Validar usuario intenta ingresar al endpoint "inventory" sin iniciar sesión', () => {
		cy.fixture('data/login.data').then(the => {
			cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });

			cy.get(the.input.Message).should('contain.text', the.assertions.InventoryEndpoint);
		});
	});

	it('17557 | TC10 - Validar usuario intenta ingresar al endpoint "cart" sin iniciar sesión', () => {
		cy.fixture('data/login.data').then(the => {
			cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false });

			cy.get(the.input.Message).should('contain.text', the.assertions.CartEndpoint);
		});
	});

	it('17557 | TC11 - Validar usuario intenta ingresar al endpoint "checkout-step-one" sin iniciar sesión', () => {
		cy.fixture('data/login.data').then(the => {
			cy.visit('https://www.saucedemo.com/checkout-step-one.html', { failOnStatusCode: false });

			cy.get(the.input.Message).should('contain.text', the.assertions.CheckoutOneEndpoint);
		});
	});

	it('17557 | TC12 - Validar usuario intenta ingresar al endpoint "checkout-step-two" sin iniciar sesión', () => {
		cy.fixture('data/login.data').then(the => {
			cy.visit('https://www.saucedemo.com/checkout-step-two.html', { failOnStatusCode: false });

			cy.get(the.input.Message).should('contain.text', the.assertions.CheckoutTwoEndpoint);
		});
	});

	it('17557 | TC13 - Validar usuario intenta ingresar al endpoint "checkout-complete" sin iniciar sesión', () => {
		cy.fixture('data/login.data').then(the => {
			cy.visit('https://www.saucedemo.com/checkout-complete.html', { failOnStatusCode: false });

			cy.get(the.input.Message).should('contain.text', the.assertions.CheckoutCompleteEndpoint);
		});
	});
});
