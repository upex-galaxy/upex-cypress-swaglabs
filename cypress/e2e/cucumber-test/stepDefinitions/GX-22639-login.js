import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import { login } from '@pages/accountPage';

context('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	Given('User is situated in Swaglabs website', () => {
		cy.visit('/');
	});
	describe('22640 | TC1: User do the Login successfully', () => {
		When('User fill out the form entering username as {string} and password as {string} correctly', (Username, Password) => {
			login.fillUsername(Username);
			login.fillPassword(Password);
		});
		And('click in "LOGIN" button', () => {
			login.clickLoginBtn();
		});
		Then('User must be redirected to the PLP as a registered user', () => {
			cy.url().should('include', '/inventory.html');
		});
		And('should be able to see all the items available of the store', () => {
			login.get.plpTitle().should('have.text', 'Products');
			login.get.items().should('be.visible');
		});
	});
	describe('22640 | TC2: User try to login with a blocked session', () => {
		When('User fill out the form entering a blocked username as {string} and a correct password as {string}.', (username, password) => {
			login.fillUsername(username);
			login.fillPassword(password);
			login.clickLoginBtn();
		});

		Then('a message as {string} should be display.', errorMsg => {
			login.get.errorMsg().should('contain', errorMsg);
		});
	});
	describe('22640 | TC3: User try to Login with an invalid or nonexistent account', () => {
		When('User fill out the form entering an invalid or nonexistent username as {string} and password as {string}.', (username, password) => {
			login.fillUsername(username);
			login.fillPassword(password);
			login.clickLoginBtn();
		});
		Then('a message as {string} should be display indicating there is no match with the database.', errorMsg => {
			login.get.errorMsg().should('contain', errorMsg);
		});
	});
	describe('22640 | TC4: User try to Login leaving empty fields in the Form', () => {
		When('User leave empty field in username as {string} and empty field in password as {string}.', (username, password) => {
			login.emptyFields(username, password);
			login.clickLoginBtn();
		});
		Then('a message as {string} should be display for required field.', errorMsg => {
			login.get.errorMsg().should('contain', errorMsg);
		});
	});
	describe('22640 | TC5: User try to access to a website endpoint without doing the Login.', () => {
		When('enter to an internal {string} of the website that requires authorization.', endpoint => {
			cy.visit(endpoint, { failOnStatusCode: false });
		});
		Then('a message as {string} should be display indicating that cannot access without logging in first.', errorMsg => {
			login.get.errorMsg().should('contain', errorMsg);
			cy.url().should('contain', 'https://www.saucedemo.com/');
		});
	});
});
