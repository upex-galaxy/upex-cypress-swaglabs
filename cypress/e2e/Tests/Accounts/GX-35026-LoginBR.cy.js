import { pom } from '../../../support/pages/GX-35026-LoginBR.Page.js';
import credentialsData from '../../../fixtures/data/GX-35026-CredentialsData.json';
const thisCredentialsDB = credentialsData.credentialsDB;
const thisUrl = credentialsData.url;
describe('Feature: iniciar Sesión', () => {
	beforeEach('usuario debe estar situado en la página de Login', () => {
		//login page
		cy.visit('https://www.saucedemo.com/v1/index.html');
		cy.url().should('match', /index.html/);
	});
	it('TC1: usuario inicia sesión correctamente', () => {
		//el usuario ingresa el Username y password correctos y hace click en el botón "LOGIN"
		//standard_user 
		pom.login(thisCredentialsDB.usernameOK, thisCredentialsDB.passwordOK);
		// el usuario debe ser redirigido al PLP y debe poder ver todos los items disponibles de la tienda.
		cy.url().should('contain', '/inventory.html'); //
		pom.get.divInventoryItems().should('have.length.at.least', 1);
		//return login page
		pom.returnLoginPage();
	
		//problem_user
		pom.login(thisCredentialsDB.usernameOK2, thisCredentialsDB.passwordOK);
		// el usuario debe ser redirigido al PLP y debe poder ver todos los items disponibles de la tienda.
		cy.url().should('contain', '/inventory.html'); //
		pom.get.divInventoryItems().should('have.length.at.least', 1);
		//return login page
		pom.returnLoginPage();

		//performance_glitch_user
		pom.login(thisCredentialsDB.usernameOK3, thisCredentialsDB.passwordOK);
		// el usuario debe ser redirigido al PLP y debe poder ver todos los items disponibles de la tienda.
		cy.url().should('contain', '/inventory.html'); //
		pom.get.divInventoryItems().should('have.length.at.least', 1);
	});
	it('TC2: usuario intenta iniciar sesión con cuenta bloqueada', () => {
		// el usuario rellena el formulario ingresando el username "locked_out_user" y Password correcto
		pom.login(thisCredentialsDB.usernameLocked, thisCredentialsDB.passwordOK);
		// Then mensaje amigable indicando que el usuario está bloqueado como:
		//   "Epic sadface: Sorry, this user has been locked out."
		pom.get.ErrorMsg().contains('Sorry, this user has been locked out.');
		// And el sistema debe denegar el acceso al PLP
		cy.url().should('contain', '/index.html');
	});
	it('TC3: usuario intenta iniciar sesión con un cuenta incorrecta o inexistente', () => {
		// el usuario ingresa un Username inexistente en la Database
		pom.login(thisCredentialsDB.usernameNOK, thisCredentialsDB.passwordOK);
		// 	Then debe aparecer un mensaje amigable indicando que no hay match con la Database como:
		//   "Epic sadface: Username and password do not match any user in this service"
		pom.get.ErrorMsg().contains('Username and password do not match any user in this service');
		// And el sistema debe denegar el acceso al PLP
		cy.url().should('contain', '/index.html');

		//parte dos
		// el usuario ingresa un Password inexistente en la Database
		pom.login(thisCredentialsDB.usernameOK, thisCredentialsDB.passwordNOK);
		// 	Then debe aparecer un mensaje amigable indicando que no hay match con la Database como:
		//   "Epic sadface: Username and password do not match any user in this service"
		pom.get.ErrorMsg().contains('Username and password do not match any user in this service');
		// And el sistema debe denegar el acceso al PLP
		cy.url().should('contain', '/index.html');

		//parte tres
		// el usuario rellena el formulario con Username y Password inexistentes en la DB
		pom.login(thisCredentialsDB.usernameNOK, thisCredentialsDB.passwordNOK);
		// 	Then debe aparecer un mensaje amigable indicando que no hay match con la Database como:
		//   "Epic sadface: Username and password do not match any user in this service"
		pom.get.ErrorMsg().contains('Username and password do not match any user in this service');
		// And el sistema debe denegar el acceso al PLP
		cy.url().should('contain', '/index.html');            
	});
	it('TC4: usuario intenta iniciar sesión dejando campos vacíos en el formulario', () => {
		//     * Si el campo vacío es Username => "Epic sadface: Username is required"
		//     * Si el campo vacío es Password => "Epic sadface: Password is required"
		//     * Si el campo vacío es Username y Password => "Epic sadface: Username is required"

		//username vacío ||secret_sauce
		pom.setInputPassword(thisCredentialsDB.passwordOK);
		pom.submitBtnLogin();
		pom.get.ErrorMsg().contains('Username is required');
		// And el sistema debe denegar el acceso al PLP
		cy.url().should('contain', '/index.html');

		//password vacío || standard_user
		pom.clearInputs();
		pom.setInputUsername(thisCredentialsDB.usernameOK);
		pom.submitBtnLogin();
		pom.get.ErrorMsg().contains('Password is required');
		cy.url().should('contain', '/index.html');

		//username y password vacíos ||secret_sauce
		pom.clearInputs();
		pom.submitBtnLogin();
		pom.get.ErrorMsg().contains('Username is required');
		cy.url().should('contain', '/index.html');
	});
	it.skip('TC5: usuario intenta ingresar a un endpoint de la website sin haber iniciado sesión.', () => {
		//     When ingresa a un endpoint interno de la website que requiera autorización (ver ejemplo)
		//     Then el usuario debe ser redirigido a la página de Login
		//     And debe desplegarse un mensaje amigable indicando que no puede acceder sin antes iniciar sesión:
		
		cy.visit(thisUrl.home + thisUrl.inventory); //'https://www.saucedemo.com/v1/inventory.html'
		pom.get.ErrorMsg().contains("You can only access '/inventory.html' when you are logged in.");
		//
		cy.visit(thisUrl.home + thisUrl.cart); //'https://www.saucedemo.com/v1/cart.html'
		pom.get.ErrorMsg().contains("You can only access '/cart.html' when you are logged in.");
		// //
		cy.visit(thisUrl.home + thisUrl.checkout); //'https://www.saucedemo.com/v1/checkout-step-one.html'
		pom.get.ErrorMsg().contains("You can only access '/checkout-step-one.html' when you are logged in.");
		// //
		cy.visit(thisUrl.home + thisUrl.checkout2); //'https://www.saucedemo.com/v1/checkout-step-two.html'
		pom.get.ErrorMsg().contains("You can only access '/checkout-step-two.html' when you are logged in.");
		// 
		cy.visit(thisUrl.home + thisUrl.checkout3); //'https://www.saucedemo.com/v1/checkout-complete.html'
		pom.get.ErrorMsg().contains("You can only access '/checkout-complete.html' when you are logged in.");
	});
});