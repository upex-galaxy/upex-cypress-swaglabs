import { credentials } from '../../../fixtures/data/AccountData.json';
import { Account } from '@pages/account.page';
import { removeLogs } from '@helper/RemoveLogs';
describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('precondition', () => {
		cy.visit('https://www.saucedemo.com');
	});
	it.only('17442 | TC1: Validar el inicio de sesión de manera correcta (Happy path).', () => {
		Account.getUserName().type(credentials.userName1);
		Account.getUserName().should('have.value', 'credentials.userName1');
		// //Account.getUserName().should('have.text', 'credentials.userName1');
		// Account.getPassword().type(credentials.password1);
		// Account.getPassword().should('have.attr', 'value').and('have.text', 'credentials.password1');
		// Account.clickSubmitButton();
		// cy.url().should('to.equal', 'credentials.url1');
	});
	it('17442 | TC2: Validar el inicio de sesión con la cuenta bloqueada.', () => {
		Account.getUserName().type(credentials.userName2);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'credentials.userName2');
		Account.getPassword().type(credentials.password2);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'credentials.userName2');
		Account.clickSubmitButton();
		Account.get.dataTex().should('have.text', 'credentials.EpicSadFace2');
	});
	it('17442 | TC3: Validar el inicio de sesión con ingresando datos incorrectos.', () => {
		Account.getUserName().type(credentials.userName3);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'credentials.userName3');
		Account.getPassword().type(credentials.password3);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'credentials.password3');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace3');
	});
	it('17442 | TC4: Validar el inicio de sesión con ingresando datos inexistentes.', () => {
		Account.getUserName().type(credentials.userName4);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'credentials.userName4');
		Account.getPassword().type(credentials.password4);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'credentials.password4');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace3');
	});
	it('17442 | TC5: Validar el inicio de sesión con password  vacío.', () => {
		Account.getUserName().type(credentials.userName5);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'credentials.userName5');
		Account.getPassword().should('have.attr', 'value').and('be.empty');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace1');
	});
	it('17442 | TC6: Validar el inicio de sesión con Username vacío.', () => {
		Account.getUserName().should('have.attr', 'value').and('be.empty');
		Account.getPassword().type(credentials.password6);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'credentials.password6');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace');
	});
	it('17442 | TC7: Validar el inicio de sesión con username  y  password vacío.', () => {
		Account.getUserName().should('have.attr', 'value').and('be.empty');
		Account.getPassword().should('have.attr', 'value').and('be.empty');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace');
	});
	it('17442 | TC8: Validar autenticación de acceso ingresando sin registrarse desde el input /inventory.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}credentials.url1`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace4');
		});
	});
	it('17442 | TC9: Validar autenticación de acceso ingresando sin registrarse desde el input /cart.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}credentials.url2`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace5');
		});
	});
	it('17442 | TC10: Validar autenticación de acceso ingresando sin registrarse desde el input /checkout-step-one.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}credentials.url4`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace6');
		});
	});
	it('17442 | TC11: Validar autenticación de acceso ingresando sin registrarse desde el input /checkout-step-two.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}credentials.url5`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace7');
		});
	});
	it('17442 | TC12: Validar autenticación de acceso ingresando sin registrarse desde el input /checkout-complete.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}credentials.url6`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', 'credentials.EpicSadFace8');
		});
	});
});
removeLogs();
