import { Login } from '@pages/GX-25146-Login.Page';

import Credenciales from '@data/GX-25146-Login.json';

const UrlHome = Credenciales.Url.UrlHome;
const BaseUrl = Credenciales.Url.BaseUrl;
const UserOK = Credenciales.User.valid.Correct;
const PassOK = Credenciales.Password.valid;
const UserBlocked = Credenciales.User.invalid.blocked;
const UserNoExist = Credenciales.User.invalid.Incorrect;
const UserEmpty = Credenciales.User.invalid.Empty;
const PassIncorrect = Credenciales.Password.invalid.incorrect;
const BlockedMessage = Credenciales.Error.Blocked;
const NotMatch = Credenciales.Error.NotMatch;
const RequiredUser = Credenciales.Error.UserRequired;

describe('GX-25146-✅-swag-labs-account-iniciar-sesion-y-br-de-accesos', () => {
	beforeEach('Usuario se encuentra en la Pagina de login', () => {
		cy.visit(BaseUrl);
	});
	it('25147 | TC1: Validar el inicio exitoso cuando se usa Data válida y correcta', () => {
		Login.TypeUser(UserOK);
		Login.TypePass(PassOK);
		Login.ClickButtonLogin();
		cy.url().should('contain', BaseUrl + UrlHome);
	});
	it('25147 | TC2: Validar el No inicio de sesión con un usuario bloqueado', () => {
		Login.TypeUser(UserBlocked);
		Login.TypePass(PassOK);
		Login.ClickButtonLogin();
		Login.get.ErrorMessage().should('contain', BlockedMessage); // Se verifica el trigger de la BR1
		cy.url().should('contain', BaseUrl);
	});
	it('25147 | TC3: Validar el NO inicio de sesión con usuario invalido', () => {
		Login.TypeUser(UserNoExist);
		Login.TypePass(PassOK);
		Login.ClickButtonLogin();
		Login.get.ErrorMessage().should('contain', NotMatch); // Se verifica el trigger de la BR2, para el caso de usuario invalido
		cy.url().should('contain', BaseUrl);
	});

	it('25147 | TC4: Validar el NO inicio de sesión con password invalido', () => {
		Login.TypeUser(UserOK);
		Login.TypePass(PassIncorrect);
		Login.ClickButtonLogin();
		Login.get.ErrorMessage().should('contain', NotMatch); // Se verifica el trigger de la BR2, para el caso de usuario invalido
		cy.url().should('contain', BaseUrl);
	});

	it('25147 | TC5: Validar el NO inicio de sesión con usuario vacío', () => {
		// Se deja el campo Username vacío
		Login.TypePass(PassOK);
		Login.ClickButtonLogin();
		Login.get.ErrorMessage().should('contain', RequiredUser); // Se verifica el trigger de la BR3, para validar que Username es Requerido
		cy.url().should('contain', BaseUrl);
	});
});
