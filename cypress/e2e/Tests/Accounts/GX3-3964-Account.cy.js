//nos traemos al POM para aquí el suite de pruebas
import { login } from "../../../support/pages/GX3-3964-AccountAndBR/GX3-3964-AccountAndBRPage";

//debajo llamamos a las variables de entorno del cypress config
//const loginPage = Cypress.env('endpoint').authLogin;
//debajo traemos del objeto endpoint a la propiedad inventory
const {inventory, cart, checkoutOne, checkoutTwo, checkoutAll} = Cypress.env('swagLabs').endpoint
const { correctUser, correctPass, lockUser, passInv, userInv, problemUser, glitchUser } = Cypress.env('swagLabs').login.users

//colocamos título de suite de pruebas.
describe('[Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	//precondición para todos los casos de prueba
	beforeEach('', () => {
		//visita la baseUrl
		cy.visit('/');
		//valida que la url contenga la palabra sauce
		cy.url().should('contain', 'sauce');
	});
	//Este TC ha sido skipeado debido a que se encuentra un bug cuando se inicia sesión con este usuario, el cual consiste en que ya hay un producto agregado al carrito, sin haber hecho esa acción.
	it.skip('587 | TC1: Validar iniciar sesión con username standard_user', () => {
		//debajo llamamos 3 métodos del POM.
		login.typeUsername(correctUser);
		//le paso un valor al parámetro del método
		login.typePassword(correctPass);
		login.submitLogin();

		//valida que la url contenga lo que esta en la variable inventory
		cy.url().should('contain', inventory);
	});
	it('587 | TC2: Validar iniciar sesión con username “problem_user“', () => {
		login.typeUsername(problemUser);
		login.typePassword(correctPass);
		login.submitLogin();

		cy.url().should('contain', inventory);
	});
	it('587 | TC3: Validar iniciar sesión con username “performance_glitch_user', () => {
		login.typeUsername(glitchUser);
		login.typePassword(correctPass);
		login.submitLogin();

		cy.url().should('contain', inventory);
	});
	it('587 | TC4: Validar NO iniciar sesión al ingresar un username “locked_out_user“', () => {
			login.typeUsername(lockUser);
			login.typePassword(correctPass);
			login.submitLogin();

			login.get.errorCircleUsername().should('exist').and('be.visible');
			login.get.errorCirclePassword().should('exist').and('be.visible');
			login.get.errorMessage().should('exist').and('be.visible');
	});
	it('587 | TC5: Validar NO iniciar sesión al ingresar un username inexistente', () => {
			login.typeUsername(userInv);
			login.typePassword(correctPass);
			login.submitLogin();
			login.get.errorMessage().should('exist').and('be.visible');
	});
	it('587 | TC6: Validar NO iniciar sesión al ingresar un password inexistente', () => {
		login.typeUsername(correctUser);
		login.typePassword(passInv);
		login.submitLogin();
		login.get.errorMessage().should('exist').and('be.visible');
		//THIS TEST CASE PASS
	});
	it('587 | TC7: Validar NO iniciar sesión al dejar el username vacío', () => {
		login.typePassword(correctPass);
		login.submitLogin();
		login.get.errorMessage().should('exist').and('be.visible');
	});
	it('587 | TC8: Validar NO iniciar sesión al dejar el password vacío', () => {
		login.typeUsername(correctUser);
		login.submitLogin();
		login.get.errorMessage().should('exist').and('be.visible');
	});
	it('587 | TC9: Validar NO iniciar sesión al dejar el username y password vacíos', () =>{
		login.submitLogin();
		login.get.errorMessage().should('exist').and('be.visible');
	});
	it('587 | TC10: Validar ingresar al endpoint “/inventory.html” de la aplicación sin autenticarse', () => {
		//para poder visitar el endpoint es necesario poner esa propiedad.
		cy.visit({ url: inventory, failOnStatusCode: false });
		login.get.errorEndpoint().should('exist').and('contain.text', 'Epic sadface');
	});
	it('587 | TC11: Validar ingresar al endpoint “/cart.html” de la aplicación sin autenticarse', () => {
		const textMessage = "Epic sadface: You can only access '/cart.html' when you are logged in.";
		cy.visit({ url: cart, failOnStatusCode: false });
		login.get.errorEndpoint().should('be.visible').and('have.text', textMessage);
	});
	it('587 | TC12: Validar ingresar al endpoint “/checkout-step-one.html” de la aplicación sin autenticarse', () => {
			cy.visit({ url: checkoutOne, failOnStatusCode: false });
			login.get.errorEndpoint().should('exist').and('not.be.empty');
	});
	it('587 | TC13: Validar ingresar al endpoint “/checkout-step-two.html” de la aplicación sin autenticarse', () => {
		cy.visit({ url: checkoutTwo, failOnStatusCode: false });
		login.get.errorEndpoint().should('exist').and('have.attr', 'data-test');
	});
	it('587 | TC14: Validar ingresar al endpoint "/checkout-complete.html” de la aplicación sin autenticarse', () => {
		cy.visit({ url: checkoutAll, failOnStatusCode: false });
		login.get.errorEndpoint().should('be.visible').and('contain.text', 'Epic sadface');
	});
})
