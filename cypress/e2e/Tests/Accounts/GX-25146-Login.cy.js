import { Login } from '@pages/GX-25146-Login.Page';

import Credenciales from '@data/GX-25146-Login.json';

const UrlHome = Credenciales.Url.UrlHome;
const BaseUrl = Credenciales.Url.BaseUrl;
const CartUrl = Credenciales.Url.CartUrl;
const UserOK = Credenciales.User.valid.Correct;
const PassOK = Credenciales.Password.valid;
const UserBlocked = Credenciales.User.invalid.blocked;
const UserNoExist = Credenciales.User.invalid.Incorrect;
const PassIncorrect = Credenciales.Password.invalid.incorrect;
const BlockedMessage = Credenciales.Error.Blocked;
const NotMatch = Credenciales.Error.NotMatch;
const RequiredUser = Credenciales.Error.UserRequired;
const RequiredPass = Credenciales.Error.PassRequired;
const ErrorInitialMessage = Credenciales.Error.InitialMessage;
const ErrorEndMessage = Credenciales.Error.EndMessage;

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

	it('25147 | TC6: Validar el NO inicio de sesión con password vacío ', () => {
		Login.TypeUser(UserOK);
		//Se deja el Password vacío
		Login.ClickButtonLogin();
		Login.get.ErrorMessage().should('contain', RequiredPass); // Se verifica el trigger de la BR4, para validar que Password es Requerido
		cy.url().should('contain', BaseUrl);
	});

	it('25147 | TC7: Validar el NO inicio de sesión con todos los campos vacíos', () => {
		// Se deja el campo Username vacío
		// Se deja el campo Password vacío
		Login.ClickButtonLogin();
		Login.get.ErrorMessage().should('contain', RequiredUser); // Se verifica el trigger de la BR3 antes que la BR4, cuando ambos campos requeridos son vacíos
		cy.url().should('contain', BaseUrl);
	});

	it('25147 | TC8: Validar NO acceder a ningún endpoind interno de la website cuando no se inicio sesión', () => {
		cy.visit(CartUrl, { failOnStatusCode: false }); // Se saltea todos los fallos de status 4XX
		// Se es reenviado a la Pagina principal de Login
		cy.url().should('contain', BaseUrl);
		//Se visualiza un cartel amistoso marcando que debe loguearse para acceder
		Login.get.ErrorMessage().should('contain', ErrorInitialMessage + ' ' + "'" + CartUrl + "'" + ' ' + ErrorEndMessage);
	});
});
