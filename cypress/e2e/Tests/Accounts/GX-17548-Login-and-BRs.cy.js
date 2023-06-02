import { Login } from 'cypress/support/pages/LoginBR.Page';

import the from '@data/LoginAndBRs.json';

describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	// let infoData;

	beforeEach('User must be in the Login page', () => {
		cy.visit('/');
		cy.url().should('contain', 'saucedemo');
	});

	it('17549 | TC1: Validate User can log in successfully', () => {
		Login.EnterData(the.dataValid.UsernameOK, the.dataValid.PasswordOK);
		Login.get.usernameInput().should('have.value', the.dataValid.UsernameOK);
		Login.get.passwordInput().should('have.value', the.dataValid.PasswordOK);
		Login.Submit();
		cy.url().should('contain', '/inventory.html');
	});

	it('17549 | TC2: Validate user cannot log in with empty data and BR5 is displayed', () => {
		Login.EnterData();
		Login.Submit();
		cy.get('.error-message-container.error').should('contain', 'Username is required');
	});
	it('17549 | TC3: Validate user cannot log in with Only number in Username field and BR2 is displayed', () => {
		Login.EnterData(the.DataInvalid.username.User_Num, the.dataValid.PasswordOK);
		Login.get.usernameInput().should('have.value', the.DataInvalid.username.User_Num);
		Login.get.passwordInput().should('have.value', the.dataValid.PasswordOK);
		Login.Submit();
		cy.get('.error-message-container.error').should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC4: Validate user cannot log in with Especial Characters in Username field and BR2 is displayed', () => {
		Login.EnterData(the.DataInvalid.username.User_Esp, the.dataValid.PasswordOK);
		Login.get.usernameInput().should('have.value', the.DataInvalid.username.User_Esp);
		Login.get.passwordInput().should('have.value', the.dataValid.PasswordOK);
		Login.Submit();
		cy.get('.error-message-container.error').should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC5: Validate user cannot log in with invalid Username only and BR2 is displayed', () => {
		Login.EnterData(the.DataInvalid.username.WrongUser, the.dataValid.PasswordOK);
		Login.get.usernameInput().should('have.value', the.DataInvalid.username.WrongUser);
		Login.get.passwordInput().should('have.value', the.dataValid.PasswordOK);
		Login.Submit();
		cy.get('.error-message-container.error').should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC6: Validate user cannot log in with invalid Password only and BR2 is displayed', () => {
		Login.EnterData(the.dataValid.UsernameOK, the.DataInvalid.password.WrongPassword);
		Login.get.usernameInput().should('have.value', the.dataValid.UsernameOK);
		Login.get.passwordInput().should('have.value', the.DataInvalid.password.WrongPassword);
		Login.Submit();
		cy.get('.error-message-container.error').should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC7: Validate user cannot log in with empty Username field only and BR3 is displayed ', () => {
		Login.EnterData('', the.dataValid.PasswordOK);
		Login.get.usernameInput().should('be.empty');
		Login.get.passwordInput().should('have.value', the.dataValid.PasswordOK);
		Login.Submit();
		cy.get('.error-message-container.error').should('contain', 'Username is required');
	});
	it('17549 | TC8: Validate user cannot log in with empty Password field only and BR4 is displayed', () => {
		Login.EnterData(the.dataValid.UsernameOK, '');
		Login.get.usernameInput().should('have.value', the.dataValid.UsernameOK);
		Login.get.passwordInput().should('be.empty');
		Login.Submit();
		cy.get('.error-message-container.error').should('contain', 'Password is required');
	});
	it('17549 | TC9: Validate user cannot log in with Locked User credentials and BR1 is displayed', () => {
		Login.EnterData(the.LockedUSer, the.dataValid.PasswordOK);
		Login.get.usernameInput().should('have.value', the.LockedUSer);
		Login.get.passwordInput().should('have.value', the.dataValid.PasswordOK);
		Login.Submit();
		cy.get('.error-message-container.error').should('contain', 'Sorry, this user has been locked out.');
	});

	it('17549 | TC10: Validate User cannot access an Endpoint without Login', () => {
		Login.Endpoint();
		cy.get('.error-message-container.error').should('contain', 'Epic sadface: You can only access');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
