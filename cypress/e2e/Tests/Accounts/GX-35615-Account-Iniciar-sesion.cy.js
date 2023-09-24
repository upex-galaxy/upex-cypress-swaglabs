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
			cy.log(data);
		});
	});
	it('35616 | TC1: Validar poder ingresar al Login con user standar_user con password válida', () => {
		const { username, password } = data;
		loginAccount.setUser(username.data.valid);
		loginAccount.setPass(password.data.valid);
		loginAccount.submitLogin();

		cy.url().should('include', '/inventory.html');
	});

	it('35616 | TC2: Validar no poder ingresar al Login con user locked_out_user con password válida', () => {
		const { username, password, messageError } = data;
		loginAccount.setUser(username.data.invalid_locked);
		loginAccount.setPass(password.data.valid);
		loginAccount.submitLogin();

		loginAccount.errMsg();
		loginAccount.get.text_error().should('include.text', messageError.data.text_error3);
	});
});
