import { login } from '@pages/accountPage';
import { valid, blocked, invalid } from '../../../fixtures/DOM/space/account.json';

describe('GX-22504 | SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	it('22505 | TC1: Validate LogIn when is successful, blocked, invalid and empty.', () => {
		// login successful
		cy.visit('/');
		login.fillUsername(valid.username1);
		login.fillPassword(valid.password);
		login.clickLoginBtn();
		cy.url().should('include', '/inventory.html');
		login.get.plpTitle().should('have.text', 'Products');
		login.get.items().should('be.visible');
		login.logout();

		login.fillUsername(valid.username2);
		login.fillPassword(valid.password);
		login.clickLoginBtn();
		cy.url().should('include', '/inventory.html');
		login.get.plpTitle().should('have.text', 'Products');
		login.get.items().should('be.visible');
		login.logout();

		login.fillUsername(valid.username3);
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
		login.fillUsername(valid.username1);
		login.clickLoginBtn();
		login.get.errorMsg().should('have.text', 'Epic sadface: Password is required');
		login.get.username().clear();
		login.clickLoginBtn();
		login.get.errorMsg().should('have.text', 'Epic sadface: Username is required');
		cy.url().should('not.contain', '/inventory.html');
	});
	it('22505 | TC2: Validate enter to an internal endpoint of the website without doing the LogIn before.', () => {
		cy.visit('/inventory.html', { failOnStatusCode: false });
		login.get.errorMsg().should('have.text', "Epic sadface: You can only access '/inventory.html' when you are logged in.");
		cy.url().should('contain', 'https://www.saucedemo.com/');

		cy.visit('/checkout-step-one.html', { failOnStatusCode: false });
		login.get.errorMsg().should('have.text', "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.");
		cy.url().should('contain', 'https://www.saucedemo.com/');

		cy.visit('//checkout-complete.html', { failOnStatusCode: false });
		login.get.errorMsg().should('have.text', "Epic sadface: You can only access '/checkout-complete.html' when you are logged in.");
		cy.url().should('contain', 'https://www.saucedemo.com/');
	});
});
