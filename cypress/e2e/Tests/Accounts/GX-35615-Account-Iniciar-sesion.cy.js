import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { loginAccount } from '@pages/GX-35615-Login.page';

describe('Precondición: Usuario debe estar situado en la página de Login', () => {
	let data;
	beforeEach(() => {
		cy.visit('/');
		cy.url().should('contain', 'saucedemo');
		cy.fixture('data/GX-35615-Login').then(fixtureData => {
			data = fixtureData;
		});
	});
	it('35616 | TC1: Validar poder ingresar al Login con user standar_user con password válida', () => {
		const { username, password } = data;
		loginAccount.setUser(username.data.valid);
		loginAccount.setPass(password.data.valid);
		loginAccount.submitLogin();

		cy.url().should('include', '/inventory.html');
		loginAccount.get.item().should('be.visible');
	});

	it('35616 | TC2: Validar no poder ingresar al Login con user locked_out_user con password válida', () => {
		const { username, password, messageError } = data;
		loginAccount.setUser(username.data.invalid_locked);
		loginAccount.setPass(password.data.valid);
		loginAccount.submitLogin();
		loginAccount.errMsg();
		loginAccount.get.text_error().should('include.text', messageError.data.text_error4);
		loginAccount.setButton();
	});
	it('35616 | TC3: Validar ingresar al Login con user problem_user con password válida', () => {
		const { username, password } = data;
		loginAccount.setUser(username.data.invalid_problem);
		loginAccount.setPass(password.data.valid);
		loginAccount.submitLogin();
		cy.url().should('contain', '/inventory.html');
	});
	it('35616 | TC4: Validar no poder ingresar al Login con user perfomance_glitch_user con password válida', () => {
		const { username, password, messageError } = data;
		loginAccount.setUser(username.data.invalid_perfomance);
		loginAccount.setPass(password.data.valid);
		loginAccount.submitLogin();
		loginAccount.errMsg();
		loginAccount.get.text_error().should('include.text', messageError.data.text_error1);
		cy.get('body').should('not.contain', '/inventory.html');
	});
	it('35616 | TC5: Validar  no poder ingresar al Login con campo vacío para username', () => {
		const { messageError } = data;
		loginAccount.submitLogin();
		loginAccount.errMsg();
		loginAccount.get.text_error().should('include.text', messageError.data.text_error3);
		loginAccount.setButton();

		cy.get('body').should('not.contain', '/inventory.html');
	});
	it('35616 | TC6: Validar  no poder ingresar al Login con campo vacío para password', () => {
		const { username, messageError } = data;
		loginAccount.setUser(username.data.valid);
		loginAccount.submitLogin();
		loginAccount.errMsg();
		loginAccount.get.text_error().should('include.text', messageError.data.text_error2);
		loginAccount.setButton();

		cy.get('body').should('not.contain', '/inventory.html');
	});
	it('35616 | TC7: Validar no poder ingresar al Login con user standar_user con password inválida', () => {
		const { username, password, messageError } = data;
		loginAccount.setUser(username.data.valid);
		loginAccount.setPass(password.data.invalid);
		loginAccount.submitLogin();
		loginAccount.errMsg();
		loginAccount.get.text_error().should('include.text', messageError.data.text_error1);
		loginAccount.setButton();
		cy.get('body').should('not.contain', '/inventory.html');
	});
	it('35616 | TC8: Validar no poder ingresar al Login con user problem_user con password inválida', () => {
		const { username, password, messageError } = data;
		loginAccount.setUser(username.data.invalid_problem);
		loginAccount.setPass(password.data.invalid);
		loginAccount.submitLogin();
		loginAccount.errMsg();
		loginAccount.get.text_error().should('include.text', messageError.data.text_error1);
		loginAccount.setButton();

		cy.get('body').should('not.contain', '/inventory.html');
	});
});
