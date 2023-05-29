import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX-18864: SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	let testData;

	beforeEach('Precondición: estar situados en LOGIN SwagLabs', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.fixture('data/Account.json').then(data => {
			testData = data;
		});
	});
	it('18865 | TC1: Validar que el usuario pueda iniciar sesión exitosamente con el username standard_user', () => {
		cy.get('input[data-test="username"]').type(testData[0].username);
		cy.get('input[data-test="password"]').type(testData[0].password);
		cy.get('input[data-test="login-button"]').click();
		cy.url().should('include', '/inventory.html');
		cy.get('.title').contains('Products');
	});
	it('18865 | TC2: Validar que el usuario pueda iniciar sesión exitosamente con el username problem_user', () => {
		cy.get('input[data-test="username"]').type(testData[1].username);
		cy.get('input[data-test="password"]').type(testData[1].password);
		cy.get('input[data-test="login-button"]').click();
		cy.url().should('include', '/inventory.html');
		cy.get('.title').contains('Products');
	});
	it('18865 | TC3: Validar que el usuario pueda iniciar sesión exitosamente con el username performance_glitch_user', () => {
		cy.get('input[data-test="username"]').type(testData[2].username);
		cy.get('input[data-test="password"]').type(testData[2].password);
		cy.get('input[data-test="login-button"]').click();
		cy.url().should('include', '/inventory.html');
		cy.get('.title').contains('Products');
	});
	it('18865 | TC4: Validar que el usuario no pueda iniciar sesión con el username locked_out_user', () => {
		cy.get('input[data-test="username"]').type(testData[3].username);
		cy.get('input[data-test="password"]').type(testData[3].password);
		cy.get('input[data-test="login-button"]').click();
		cy.get('.error-message-container').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
	});
	it('18865 | TC5: Validar que el usuario no pueda iniciar sesión con campos vacíos', () => {
		cy.get('input[data-test="username"]').should('have.value', '');
		cy.get('input[data-test="password"]').should('have.value', '');
		cy.get('input[data-test="login-button"]').click();
		cy.contains('Epic sadface: Username is required');
	});
	it('18865 | TC6: Validar que el usuario no pueda iniciar sesión con el campo de nombre vacío', () => {
		cy.get('input[data-test="username"]').should('have.value', '');
		cy.get('input[data-test="password"]').type(testData[0].password);
		cy.get('input[data-test="login-button"]').click();
		cy.get('.error-message-container').should('contain', 'Epic sadface: Username is required');
	});
	it('18865 | TC7: Validar que el usuario no pueda iniciar sesión con el campo de contraseña vacío.', () => {
		cy.get('input[data-test="username"]').type(testData[0].username);
		cy.get('input[data-test="password"]').should('have.value', '');
		cy.get('input[data-test="login-button"]').click();
		cy.get('.error-message-container').should('contain', 'Epic sadface: Password is required');
	});
	it('18865 | TC8: Validar que el usuario no pueda iniciar sesión con credenciales no registradas.', () => {
		cy.get('input[data-test="username"]').type(testData[7].username);
		cy.get('input[data-test="password"]').type(testData[7].password);
		cy.get('input[data-test="login-button"]').click();
		cy.contains('Epic sadface: Username and password do not match any user in this service');
	});
	it('18865 | TC9: Validar que el usuario no pueda acceder al endpoint /inventory.html sin haber iniciado sesión.', () => {
		cy.clearCookies();
		cy.visit('/');
		cy.visit('https://www.saucedemo.com/inventory.html', {
			failOnStatusCode: false,
		});
		cy.get('h3[data-test="error"]').should('be.visible');
	});

	it('18865 | TC10: Validar que el usuario no pueda acceder al endpoint /cart.html sin haber iniciado sesión.', () => {
		cy.clearCookies();
		cy.visit('/');
		cy.visit('https://www.saucedemo.com/cart.html', {
			failOnStatusCode: false,
		});
		cy.contains("Epic sadface: You can only access '/cart.html' when you are logged in.");
	});
	it('18865 | TC11: Validar que el usuario no pueda acceder al endpoint /checkout-step-one.html sin haber iniciado sesión. ', () => {
		cy.clearCookies();
		cy.visit('/');
		cy.visit('https://www.saucedemo.com/checkout-step-one.html', {
			failOnStatusCode: false,
		});
		cy.contains("Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.");
	});
	it('18865 | TC12: Validar que el usuario no pueda acceder al endpoint /checkout-step-two.html sin haber iniciado sesión.', () => {
		cy.clearCookies();
		cy.visit('/');
		cy.visit('https://www.saucedemo.com/checkout-step-two.html', {
			failOnStatusCode: false,
		});
		cy.contains("Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.");
	});
	it('18865 | TC13: Validar que el usuario no pueda acceder al endpoint /checkout-complete.html sin haber iniciado sesión. ', () => {
		cy.clearCookies();
		cy.visit('/');
		cy.visit('https://www.saucedemo.com/checkout-complete.html', {
			failOnStatusCode: false,
		});
		cy.contains("Epic sadface: You can only access '/checkout-complete.html' when you are logged in.");
	});
	it('18865 | TC14: Validar que el usuario no pueda iniciar sesión con una combinación inválida de nombre de usuario y contraseña', () => {
		cy.get('input[data-test="username"]').type(testData[7].username);
		cy.get('input[data-test="password"]').type(testData[7].password);
		cy.get('input[data-test="login-button"]').click();
		cy.contains('Epic sadface: Username and password do not match any user in this service');
	});
	it('18865 | TC15: Validar que el usuario no pueda iniciar sesión con una contraseña incorrecta pero con un nombre de usuario válido.', () => {
		cy.get('input[data-test="username"]').type(testData[0].username);
		cy.get('input[data-test="password"]').type(testData[7].password);
		cy.get('input[data-test="login-button"]').click();
		cy.contains('Epic sadface: Username and password do not match any user in this service');
	});
	it('18865 | TC16: Validar que el usuario no pueda iniciar sesión con un nombre de usuario incorrecto pero con una contraseña válida.', () => {
		cy.get('input[data-test="username"]').type(testData[7].username);
		cy.get('input[data-test="password"]').type(testData[0].password);
		cy.get('input[data-test="login-button"]').click();
		cy.contains('Epic sadface: Username and password do not match any user in this service');
	});
});
