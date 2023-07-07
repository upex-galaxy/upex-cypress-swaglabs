import credentials from '../../../fixtures/data/GX-17441-AccountData.json';
import { Account } from '@pages/GX-17441-account.page';
import { removeLogs } from '@helper/RemoveLogs';
describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('precondition', () => {
		cy.visit('https://www.saucedemo.com');
	});
	it.only('17442 | TC1: Validar el inicio de sesión de manera correcta (Happy path).', () => {
		Account.getLogin(credentials.userName1, credentials.password1);
		Account.getLogin().should('have.text', credentials.userName1);
		Account.clickSubmit();
		cy.url().should('to.equal', credentials.url);
	});
	it('17442 | TC2: Validar el inicio de sesión con la cuenta bloqueada.', () => {
		Account.getUserName().type(credentials.userName2);
		Account.getUserName().should('have.value', credentials.userName2);
		Account.getPassword().type(credentials.password2);
		Account.getPassword().should('have.value', credentials.password2);
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace2);
	});
	it('17442 | TC3: Validar el inicio de sesión con ingresando datos incorrectos.', () => {
		Account.getUserName().type(credentials.userName3);
		Account.getUserName().should('have.value', credentials.userName3);
		Account.getPassword().type(credentials.password3);
		Account.getPassword().should('have.value', credentials.password3);
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace3);
	});
	it('17442 | TC4: Validar el inicio de sesión con ingresando datos inexistentes.', () => {
		Account.getUserName().type(credentials.userName4);
		Account.getUserName().should('have.value', credentials.userName4);
		Account.getPassword().type(credentials.password4);
		Account.getPassword().should('have.value', credentials.password4);
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace3);
	});
	it('17442 | TC5: Validar el inicio de sesión con password  vacío.', () => {
		Account.getUserName().type(credentials.userName5);
		Account.getUserName().should('have.value', credentials.userName5);
		Account.getPassword().should('have.attr', 'value').and('be.empty');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace1);
	});
	it('17442 | TC6: Validar el inicio de sesión con Username vacío.', () => {
		Account.getUserName().should('have.attr', 'value').and('be.empty');
		Account.getPassword().type(credentials.password6);
		Account.getPassword().should('have.value', credentials.password6);
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace);
	});
	it('17442 | TC7: Validar el inicio de sesión con username  y  password vacío.', () => {
		Account.getUserName().should('have.attr', 'value').and('be.empty');
		Account.getPassword().should('have.attr', 'value').and('be.empty');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace);
	});
	it('17442 | TC8: Validar autenticación de acceso ingresando sin registrarse desde el endpoint /inventory.html.', () => {
		cy.visit(credentials.url1, { failOnStatusCode: false });
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace4);
	});
	it('17442 | TC9: Validar autenticación de acceso ingresando sin registrarse desde el endpoint /cart.html.', () => {
		cy.visit(credentials.url2, { failOnStatusCode: false });
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace5);
	});
	it('17442 | TC10: Validar autenticación de acceso ingresando sin registrarse desde el endpoint /checkout-step-one.html.', () => {
		cy.visit(credentials.url4, { failOnStatusCode: false });
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace6);
	});
	it('17442 | TC11: Validar autenticación de acceso ingresando sin registrarse desde el endpoint /checkout-step-two.html.', () => {
		cy.visit(credentials.url5, { failOnStatusCode: false });
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace7);
	});
	it('17442 | TC12: Validar autenticación de acceso ingresando sin registrarse desde el endpoint /checkout-complete.html.', () => {
		cy.visit(credentials.url6, { failOnStatusCode: false });
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace8);
	});
});
removeLogs();
