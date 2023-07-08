import credentials from '../../../fixtures/data/GX-17441-AccountData.json';
import { Account } from '@pages/GX-17441-account.page';
import { removeLogs } from '@helper/RemoveLogs';
describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('precondition', () => {
		cy.visit('https://www.saucedemo.com');
	});
	it('17442 | TC1: Validar el inicio de sesión de manera correcta (Happy path).', () => {
		Account.getLogin(credentials.userName1, credentials.password1);
		Account.get.getUsernameInput().should('have.value', credentials.userName1);
		Account.get.getPasswordInput().should('have.value', credentials.password1);
		Account.clickSubmit();
		cy.url().should('to.equal', credentials.url);
	});
	it('17442 | TC2: Validar el inicio de sesión con la cuenta bloqueada.', () => {
		Account.getLogin(credentials.userName2, credentials.password2);
		Account.get.getUsernameInput().should('have.value', credentials.userName2);
		Account.get.getPasswordInput().should('have.value', credentials.password2);
		Account.clickSubmit();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace2);
	});
	it('17442 | TC3: Validar el inicio de sesión con ingresando datos incorrectos.', () => {
		Account.getLogin(credentials.userName3, credentials.password3);
		Account.get.getUsernameInput().should('have.value', credentials.userName3);
		Account.get.getPasswordInput().should('have.value', credentials.password3);
		Account.clickSubmit();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace3);
	});
	it('17442 | TC4: Validar el inicio de sesión con ingresando datos inexistentes.', () => {
		Account.getLogin(credentials.userName4, credentials.password4);
		Account.get.getUsernameInput().should('have.value', credentials.userName4);
		Account.get.getPasswordInput().should('have.value', credentials.password4);
		Account.clickSubmit();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace3);
	});
	it('17442 | TC5: Validar el inicio de sesión con password  vacío.', () => {
		Account.getLogin(credentials.userName5, credentials.password5);
		Account.get.getUsernameInput().should('have.value', credentials.userName5);
		Account.get.getPasswordInput().should('have.attr', 'value').and('be.empty');
		Account.clickSubmit();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace1);
	});
	it('17442 | TC6: Validar el inicio de sesión con Username vacío.', () => {
		Account.get.getUsernameInput().should('have.attr', 'value').and('be.empty');
		Account.getLogin('', credentials.password6);
		Account.get.getPasswordInput().should('have.value', credentials.password6);
		Account.clickSubmit();
		Account.get.dataTex().should('contain.text', credentials.EpicSadFace);
	});
	it('17442 | TC7: Validar el inicio de sesión con username  y  password vacío.', () => {
		Account.get.getUsernameInput().should('have.attr', 'value').and('be.empty');
		Account.get.getPasswordInput().should('have.attr', 'value').and('be.empty');
		Account.clickSubmit();
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
