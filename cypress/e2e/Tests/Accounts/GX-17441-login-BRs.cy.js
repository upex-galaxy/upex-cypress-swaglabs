const credentials = require('../../../fixtures/data/AccountData.json');
import { Account } from '@pages/account.page';
import { removeLogs } from '@helper/RemoveLogs';
describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('precondition', () => {
		cy.visit('https://www.saucedemo.com');
	});
	it('17442 | TC1: Validar el inicio de sesión de manera correcta (Happy path).', () => {
		Account.getUserName().type(credentials.userName1);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'standard_user');
		Account.getPassword().type(credentials.password1);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'secret_sauce');
		Account.clickSubmitButton();
		cy.url().should('contain', '/inventory.html');
	});
	it('17442 | TC2: Validar el inicio de sesión con la cuenta bloqueada.', () => {
		Account.getUserName().type(credentials.userName2);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'locked_out_user');
		Account.getPassword().type(credentials.password2);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'secret_sauce');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'Sorry, this user has been locked out.');
	});
	it('17442 | TC3: Validar el inicio de sesión con ingresando datos incorrectos.', () => {
		Account.getUserName().type(credentials.userName3);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'standard_User');
		Account.getPassword().type(credentials.password3);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'secret_sauce');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'Username and password do not match any user in this service');
	});
	it('17442 | TC4: Validar el inicio de sesión con ingresando datos inexistentes.', () => {
		Account.getUserName().type(credentials.userName4);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'papito1989');
		Account.getPassword().type(credentials.password4);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'abc123');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'Username and password do not match any user in this service');
	});
	it('17442 | TC5: Validar el inicio de sesión con password  vacío.', () => {
		Account.getUserName().type(credentials.userName5);
		Account.getUserName().should('have.attr', 'value').and('to.equal', 'standard_user');
		Account.getPassword().should('have.attr', 'value').and('be.empty');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'Password is required');
	});
	it('17442 | TC6: Validar el inicio de sesión con Username vacío.', () => {
		Account.getUserName().should('have.attr', 'value').and('be.empty');
		Account.getPassword().type(credentials.password6);
		Account.getPassword().should('have.attr', 'value').and('to.equal', 'secret_sauce');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'Username is required');
	});
	it('17442 | TC7: Validar el inicio de sesión con username  y  password vacío.', () => {
		Account.getUserName().should('have.attr', 'value').and('be.empty');
		Account.getPassword().should('have.attr', 'value').and('be.empty');
		Account.clickSubmitButton();
		Account.get.dataTex().should('contain.text', 'Username is required');
	});
	it('17442 | TC8: Validar autenticación de acceso ingresando sin registrarse desde el input /inventory.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}inventory.html`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', "Epic sadface: You can only access '/inventory.html' when you are logged in.");
		});
	});
	it('17442 | TC9: Validar autenticación de acceso ingresando sin registrarse desde el input /cart.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}cart.html`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', "Epic sadface: You can only access '/cart.html' when you are logged in");
		});
	});
	it('17442 | TC10: Validar autenticación de acceso ingresando sin registrarse desde el input /checkout-step-one.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}checkout-step-one.html`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.");
		});
	});
	it('17442 | TC11: Validar autenticación de acceso ingresando sin registrarse desde el input /checkout-step-two.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}checkout-step-two.html`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', "Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.");
		});
	});
	it('17442 | TC12: Validar autenticación de acceso ingresando sin registrarse desde el input /checkout-complete.html.', () => {
		cy.url().then(url => {
			const newUrl = `${url}checkout-complete.html`;
			cy.visit(newUrl, { failOnStatusCode: false });
			Account.get.dataTex().should('contain.text', "Epic sadface: You can only access '/checkout-complete.html' when you are logged in.");
		});
	});
});
removeLogs();
