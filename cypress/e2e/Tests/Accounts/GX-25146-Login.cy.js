import { Login } from '@pages/GX-25146-Login.Page';

import Credenciales from '@data/GX-25146-Login.json';

const UrlHome = Credenciales.UrlHome;

describe('GX-25146-✅-swag-labs-account-iniciar-sesion-y-br-de-accesos', () => {
	beforeEach('Usuario se encuentra en la Pagina de login', () => {
		cy.visit('/');
	});
	it('25147 | TC1: Validar el inicio exitoso cuando se usa Data válida y correcta', () => {
		Login.UserOK();
		Login.PassOK();
		Login.ButtonLogin();
		cy.url().should('contain', UrlHome);
	});
});
