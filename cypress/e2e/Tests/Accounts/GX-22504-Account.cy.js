import { login } from '@pages/account';
import { valid, blocked, invalid } from '../../../fixtures/DOM/space/account.json';

describe('GX-22504 | SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	it('22505 | TC1: Validate LogIn when is successful, blocked, invalid and empty.', () => {
		// login successfully
		cy.visit('/');
		login.fillUsername(valid.username);
		login.fillPassword(valid.password);
		login.clickLoginBtn();
		cy.url().should('include', '/inventory.html');
		login.get.plpTitle().should('have.text', 'Products');
		login.get.items().should('be.visible');
		login.logout();

		// login blocked
		login.fillUsername(blocked.username);
		login.fillPassword(blocked.password);
		login.clickLoginBtn();
		login.get.errorMsg().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
		cy.url().should('not.contain', '/inventory.html');
		login.closeErrorBtn();
		login.get.username().clear();
		login.get.password().clear();

		// login invalid
		login.fillUsername(invalid.username);
		login.fillPassword(invalid.password);
		login.clickLoginBtn();
		login.get.errorMsg().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
		cy.url().should('not.contain', '/inventory.html');
		login.closeErrorBtn();
		login.get.username().clear();
		login.get.password().clear();

		//login empty
		login.fillPassword(valid.password);
		login.clickLoginBtn();
		login.get.errorMsg().should('have.text', 'Epic sadface: Username is required');
		login.get.password().clear();
		login.fillUsername(valid.username);
		login.clickLoginBtn();
		login.get.errorMsg().should('have.text', 'Epic sadface: Password is required');
		login.get.username().clear();
		login.clickLoginBtn();
		login.get.errorMsg().should('have.text', 'Epic sadface: Username is required');
		cy.url().should('not.contain', '/inventory.html');
	});
	it('22505 | TC2: Validate No Authentication Access', () => {
		cy.visit('/inventory.html', { failOnStatusCode: false });
		login.get.errorMsg().should('have.text', 'Epic sadface: You can only access \'/inventory.html\' when you are logged in.');
		cy.url().should('contain', 'https://www.saucedemo.com/');
	});
});
