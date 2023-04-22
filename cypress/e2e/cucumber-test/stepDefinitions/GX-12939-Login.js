import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginpage } from '@pages/loginGabe.Page';
const { endpoint } = Cypress.env('swagLabs');
const { baseUrl } = Cypress.env();

context('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	Given('Estar situado en el website de Swaglabs', () => {
		cy.visit(baseUrl);
	});

	describe('12940 | TC1: Validar iniciar sesion correctamente', () => {
		When('se rellenen los campos de username con {string} y password con {string}', (username, password) => {
			username && loginpage.get.usernameInput(username);
			password && loginpage.get.passwordInput(password);
			loginpage.clickSubmitButton();
		});

		Then('el usuario sera redirecionado al Inventory', () => {
			cy.url().should('contain', endpoint.inventory);
		});
	});
	describe('12940 | TC2: Validar NO iniciar sesion y sus BRs correspondientes', () => {
		When('se rellenen las casillas correspodientes de username con {string}, y password con {string}', (username, password) => {
			username && loginpage.get.usernameInput(username);
			password && loginpage.get.passwordInput(password);
			loginpage.clickSubmitButton();
		});
		Then('se comprobara que se disparen los <LogError> correspodientes', logError => {
			loginpage.get.logmesage().should('contain', logError);
		});
	});

	describe('12940 | TC3: Validar NO acceder a endpoints sin logearse', () => {
		When('ingrese al endpoint {string} sin logearse', url => {
			cy.visit(url).should('contain', baseUrl);
		});
		Then('sera redirecionado a la pagina de login mostrando el {string}', logError => {
			loginpage.get.logmesage().should('contain', logError);
		});
	});
});
