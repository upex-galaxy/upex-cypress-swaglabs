import { Login } from 'cypress/support/pages/LoginBR.Page';

import the from '@data/LoginAndBRs.json';

const UserOK = the.dataValid.UsernameOK;
const PasswordOK = the.dataValid.PasswordOK;
const EmptyUser = the.dataValid.EmptyUSer;
const EmptyPassword = the.dataValid.EmptyPassword;
const Locked = the.LockedUSer;
const failPassword = the.DataInvalid.password.WrongPassword;
const failUser = the.DataInvalid.username.WrongUser;
const UserNumber = the.DataInvalid.username.User_Num;
const UserCharacter = the.DataInvalid.username.User_Esp;

describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('User must be in the Login page', () => {
		cy.visit('/');
		cy.url().should('contain', 'saucedemo');
	});

	it('17549 | TC1: Validate User can log in successfully', () => {
		Login.EnterData(UserOK, PasswordOK);
		Login.get.usernameInput().should('have.value', UserOK);
		Login.get.passwordInput().should('have.value', PasswordOK);
		Login.Submit();
		cy.url().should('contain', '/inventory.html');
	});

	it('17549 | TC2: Validate user cannot log in with empty data and BR5 is displayed', () => {
		Login.EnterData(EmptyUser, EmptyPassword);
		Login.get.usernameInput().should('be.empty');
		Login.get.passwordInput().should('be.empty');
		Login.Submit();
		cy.get(the.errorMessage).should('contain', 'Username is required');
	});
	it('17549 | TC3: Validate user cannot log in with Only number in Username field and BR2 is displayed', () => {
		Login.EnterData(UserNumber, PasswordOK);
		Login.get.usernameInput().should('have.value', UserNumber);
		Login.get.passwordInput().should('have.value', PasswordOK);
		Login.Submit();
		cy.get(the.errorMessage).should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC4: Validate user cannot log in with Especial Characters in Username field and BR2 is displayed', () => {
		Login.EnterData(UserCharacter, PasswordOK);
		Login.get.usernameInput().should('have.value', UserCharacter);
		Login.get.passwordInput().should('have.value', PasswordOK);
		Login.Submit();
		cy.get(the.errorMessage).should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC5: Validate user cannot log in with invalid Username only and BR2 is displayed', () => {
		Login.EnterData(failUser, PasswordOK);
		Login.get.usernameInput().should('have.value', failUser);
		Login.get.passwordInput().should('have.value', PasswordOK);
		Login.Submit();
		cy.get(the.errorMessage).should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC6: Validate user cannot log in with invalid Password only and BR2 is displayed', () => {
		Login.EnterData(UserOK, failPassword);
		Login.get.usernameInput().should('have.value', UserOK);
		Login.get.passwordInput().should('have.value', failPassword);
		Login.Submit();
		cy.get(the.errorMessage).should('contain', 'Username and password do not match any user in this service');
	});
	it('17549 | TC7: Validate user cannot log in with empty Username field only and BR3 is displayed ', () => {
		Login.EnterData(EmptyUser, PasswordOK);
		Login.get.usernameInput().should('be.empty');
		Login.get.passwordInput().should('have.value', PasswordOK);
		Login.Submit();
		cy.get(the.errorMessage).should('contain', 'Username is required');
	});
	it('17549 | TC8: Validate user cannot log in with empty Password field only and BR4 is displayed', () => {
		Login.EnterData(UserOK, EmptyPassword);
		Login.get.usernameInput().should('have.value', UserOK);
		Login.get.passwordInput().should('be.empty');
		Login.Submit();
		cy.get(the.errorMessage).should('contain', 'Password is required');
	});
	it('17549 | TC9: Validate user cannot log in with Locked User credentials and BR1 is displayed', () => {
		Login.EnterData(Locked, PasswordOK);
		Login.get.usernameInput().should('have.value', Locked);
		Login.get.passwordInput().should('have.value', PasswordOK);
		Login.Submit();
		cy.get(the.errorMessage).should('contain', 'Sorry, this user has been locked out.');
	});

	it('17549 | TC10: Validate User cannot access an Endpoint without Login', () => {
		cy.visit('https://www.saucedemo.com/inventory.html', {
			failOnStatusCode: false,
		});
		cy.get(the.errorMessage).should('contain', 'Epic sadface: You can only access');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
