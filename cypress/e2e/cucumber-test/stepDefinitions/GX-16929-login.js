/// <reference types="cypress" />

import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import { LoginQuir } from '@pages/loginQuir.page';
const {
	swagLabs: { endpoint },
	baseUrl,
} = Cypress.env();

const loginPage = new LoginQuir();
let loginData;

before('Fixture Login', () => {
	cy.fixture('./DOM/space/Login.Page').then(data => {
		loginData = data;
	});
});

describe('#1 Inicio de sesión correctamente', () => {
	When('usuario rellena el formulario ingresando {string} y {string} correcto', (username, password) => {
		loginPage.login(username, password);
	});
	Then('usuario debe ser redirigido al PLP como usuario loggeado', () => {
		cy.url().should('contain', endpoint.inventory);
	});

	And('debe poder ver todos los items disponibles de la tienda', () => {
		cy.get(loginPage.inventoryList).should('exist');
	});
});

describe('#2 usuario intenta iniciar sesión con cuenta bloqueada', () => {
	When('usuario ingresa con username {string} bloqueado, y password con {string} valida', (username, password) => {
		loginPage.login(username, password);
	});
	Then('se comprueba que se dispare el {string} de usuario bloqueado', errorMsg => {
		cy.get(loginData.error).should('contain', errorMsg);
	});
});

describe('#3 usuarie intenta iniciar sesión con una cuenta incorrecta o inexistente', () => {
	When('usuario ingresa con username {string} o password con {string} inexistente en la Database', (username, password) => {
		loginPage.login(username, password);
	});
	Then('se comprueba que se disparen los {string} correspodientes a cuenta incorrecta', errorMsg => {
		cy.get(loginData.error).should('contain', errorMsg);
	});
});

describe(' #4 usuarie intenta iniciar sesión dejando campos vacíos en el formulario', () => {
	When('usuario ingresa con username {string} o password con {string} dejando campos vacíos en el formulario', (username, password) => {
		loginPage.loginWithEmptyFields(username, password);
	});
	Then('se comprueba que se disparen los {string} correspodientes a usuario y contraseña requeridos', errorMsg => {
		cy.get(loginPage.error).should('contain', errorMsg);
	});
});

describe('usuarie intenta ingresar a un endpoint de la website sin haber iniciado sesión.', () => {
	When('ingresa a un {string} interno de la website que requiera autorización', endpoint => {
		loginPage.verifyUnauthorizedAccess(baseUrl + endpoint);
		//cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
	});
	Then('se comprueba que se dispare el {string} correspodiente a acceso denegado por no estar logueado', errorMsg => {
		cy.get(loginData.error).should('contain', errorMsg);
	});
});
