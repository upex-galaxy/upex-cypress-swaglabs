import { forEach } from 'cypress/types/lodash';
import { login } from '../../../support/pages/GX-30139-Account-Login';

describe('TS34140 | ✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondicion: The user has register and stay in login page', () => {
		cy.fixture('data/GX-30139-Account-Login').then(data => {
			cy.visit(data.url.loginPage);
		});
	});
	it('34140 | TC01: Validate Log-in with username “standard_user” and valid password', () => {
		cy.fixture('data/GX-30139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.valid[0]);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			cy.url().should('include', data.endpoints.inventory);
			login.get.imgItems().should('be.visible');
		});
	});
	it.only('34140 | TC02: Validate Log in with username “problem_user” and valid password', () => {
		cy.fixture('data/GX-30139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.valid[1]);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			cy.url().should('include', data.endpoints.inventory);
			login.get.imgItems().should('be.visible');
			login.get.imgItems().then(elm => {
				Cypress.env('longitud', elm.length);
				for (let i = 0; i < Cypress.env('longitud'); i = i + 1) {
					cy.log(login.get.imgItems().eq(i).invoke('attr', 'src'));
				}
				cy.log(login.get.imgItems().eq(0).invoke('attr', 'src'));
			});
		});
	});
	it('34140 | TC03: Validate Log in with username “performance_glitch_user” and valid password', () => {
		cy.fixture('data/GX-30139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.blocked);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			login.get.errorMessage().should('have.text', data.errorMessage.usernameBlocked);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
	it('34140 | TC04: Validate dont Log in with locked username', () => {
		cy.fixture('data/GX-30139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.blocked);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			login.get.errorMessage().should('have.text', data.errorMessage.usernameBlocked);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
