import { homeSagPage } from '@pages/GX-25579-login.Page';
import values from '@data/GX-25579-Login.json';
const { baseUrl } = Cypress.env();

describe('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondición: Usuario debe estar situado en la página de Login', () => {
		cy.visit('/');
		cy.url().should('contain', 'saucedemo');
	});

	it('25580 | TC1: Validar iniciar sesión exitosamente cuando se ingresan datos validos', () => {
		values.datosValidos.forEach(test => {
			cy.log(`--- Usuario: ${test.username} ---`);
			cy.visit(baseUrl);
			homeSagPage.typeUsername(test.username);
			homeSagPage.typePassword(test.password);
			homeSagPage.clickLogin();
			cy.url().should('contain', values.endPoint[0]);
			homeSagPage.elements.itemsContainer().should('be.visible');
		});
	});

	it('25580  | TC2: Validar no poder iniciar sesión cuando se ingresa una cuenta bloqueada', () => {
		const lockedData = values.datosBloqueados;

		homeSagPage.typeUsername(lockedData.username);
		homeSagPage.typePassword(lockedData.password);
		homeSagPage.clickLogin();
		homeSagPage.elements.errorMessage().should('have.text', lockedData.expectedMessage);
		cy.url().should('eql', `${baseUrl}/`);
	});

	it('25580  | TC3: Validar no poder iniciar sesión cuando se ingresan  datos invalidos', () => {
		values.datosInvalidos.forEach(test => {
			cy.log(`--- Caso: ${test.nameCase} ---`);
			cy.visit(baseUrl);
			homeSagPage.typeUsername(test.username);
			homeSagPage.typePassword(test.password);
			homeSagPage.clickLogin();
			homeSagPage.elements.errorMessage().should('have.text', test.expectedMessage);
			cy.url().should('eql', `${baseUrl}/`);
		});
	});

	it('25580  | TC4: Validar no poder iniciar sesión dejando campos del formulario vacios', () => {
		values.camposVacios.forEach(test => {
			cy.log(`--- Caso: ${test.nameCase} ---`);
			cy.visit(baseUrl);
			homeSagPage.typeUsername(test.username);
			homeSagPage.typePassword(test.password);
			homeSagPage.clickLogin();
			homeSagPage.elements.errorMessage().should('have.text', test.expectedMessage);
			cy.url().should('eql', `${baseUrl}/`);
		});
	});

	it('25580  | TC5: Validar no poder ingresar a un endpoint de la website sin haber iniciado sesión', () => {
		values.endPoint.forEach(test => {
			cy.log(`--- End Point: '${baseUrl + test}'---`);

			cy.visit(baseUrl + test, { failOnStatusCode: false });
			cy.url().should('eql', `${baseUrl}/`);
			homeSagPage.elements.errorMessage().should('have.text', `Epic sadface: You can only access '${test}' when you are logged in.`);
		});
	});
});
