import { Given, And, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { removeLogs } from '@helper/RemoveLogs';
import { SwagLogin } from '@pages/GX-25291-SwabLab-login.Page';
const data = require('../../../fixtures/data/Login.json');
context('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	describe('Precondiciones para iniciar sesión', () => {
		Given('el usuario debe estar situado en la página de Login.', () => {
			cy.visit('/', { failOnStatusCode: false });
		});
	});

	describe('4844 | TC1: Validar iniciar sesión con datos válidos', () => {
		When('el usuario rellena el formulario ingresando Username as {string} y Password as {string} correcto', (username, password) => {
			SwagLogin.Login(username, password);
			SwagLogin.get.InputUsername().invoke('val').should('eq', username);
			SwagLogin.get.InputPassword().should('have.value', password);
			SwagLogin.ClickButtonSubmit();
		});

		Then('el usuario debe ser redirigido al PLP como usuario loggeado', () => {
			cy.url().should('contain', data.enpointPLP);
		});

		And('debe poder ver todos los items disponibles de la tienda.', () => {
			SwagLogin.get.ElementLabelProduct().should('exist');
		});
	});

	describe('25292 | TC2: Validar No iniciar sesión con cuenta o datos inválidos', () => {
		When('el usuario rellena el formulario ingresando Username as {string} y Password as {string}', (username, password) => {
			SwagLogin.Login(username, password);
			SwagLogin.get
				.InputUsername()
				.invoke('val')
				.then(user => {
					expect(user).to.eq(username);
				});
			SwagLogin.get
				.InputPassword()
				.invoke('val')
				.then($pass => {
					expect($pass).to.contain(password);
				});
		});

		And('hace click en el botón "LOGIN"', () => {
			SwagLogin.ClickButtonSubmit();
		});

		Then('debe aparecer un mensaje amigable indicando: {string}', mensaje => {
			SwagLogin.get.ElementErrorMsj().should('contain', mensaje);
		});

		And('el sistema debe denegar el acceso al PLP', () => {
			cy.url().should('not.include', data.enpointPLP);
		});
	});

	describe('25292 | TC3: Validar No iniciar sesión usando solo el endpoint.', () => {
		When('ingresa a un endpoint as {string} interno de la website que requiera autorización', endpoint => {
			cy.visit(endpoint, { failOnStatusCode: false });
		});

		Then('el usuario debe ser redirigido a la página de Login', () => {
			SwagLogin.get.ElementLabelProduct().should('not.exist');
		});
		And('debe desplegarse un mensaje amigable indicando que no puede acceder sin antes iniciar sesión: {string}', mensaje => {
			SwagLogin.GetMsjEndpoint().should('eq', mensaje);
		});
	});
});
removeLogs();
