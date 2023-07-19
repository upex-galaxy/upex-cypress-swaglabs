import { Login } from '@pages/GX-25146-Login.Page';

import Credenciales from '@data/GX-25146-Login.json';

const UrlHome = Credenciales.Url.UrlHome;
const BaseUrl = Credenciales.Url.BaseUrl;
const BlockedMessage = Credenciales.Error.Blocked;

describe('GX-25146-✅-swag-labs-account-iniciar-sesion-y-br-de-accesos', () => {
	beforeEach('Usuario se encuentra en la Pagina de login', () => {
		cy.visit(BaseUrl);
	});
	it('25147 | TC1: Validar el inicio exitoso cuando se usa Data válida y correcta', () => {
		Login.TypeValidUser();
		Login.TypeValidPass();
		Login.ClickButtonLogin();
		cy.url().should('contain', BaseUrl + UrlHome);
	});
	it('25147 | TC2: Validar el No inicio de sesión con un usuario bloqueado', () => {
		Login.TypeBlockedUser();
		Login.TypeValidPass();
		Login.ClickButtonLogin();
		Login.get.ErrorMessage().should('contain', BlockedMessage);
		cy.url().should('contain', BaseUrl);
	});
});
